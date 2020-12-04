import { useEffect, useState } from "react";
import { Container, Segment } from "semantic-ui-react";

import CountdownHeader from "./components/CountdownHeader";
import CountdownBody from "./components/CountdownBody";

import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [flagPause, setFlagPause] = useState(false);
  const [flagStart, setFlagStart] = useState(false);
  const [flagFinish, setFlagFinish] = useState(false);

  const resetCountdown = () => {
    setMinutes(0);
    setSecond(0);
    setFlagPause(false);
    setFlagStart(false);
    setFlagFinish(false);
  };

  const changeFlagPause = () => {
    if (flagPause === false) {
      return setFlagPause(true);
    }
    return setFlagPause(false);
  };

  const startCountdown = () => {
    setFlagPause(true);
    return setFlagStart(true);
  };

  const plusMinutes = () => {
    if (minutes < 99) {
      return setMinutes(minutes + 1);
    }
  };

  const plusSecond = () => {
    if (second < 59) {
      return setSecond(second + 1);
    } else {
      setSecond(0);
      return setMinutes(minutes + 1);
    }
  };

  const minusMinutes = () => {
    if (minutes > 0) {
      return setMinutes(minutes - 1);
    }
  };

  const minusSeconds = () => {
    if (second > 0) {
      return setSecond(second - 1);
    } else {
      if (minutes > 0) {
        setSecond(59);
        return setMinutes(minutes - 1);
      }
    }
  };

  useEffect(() => {
    if (flagPause === true) {
      const myInterval = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        }

        if (second === 0) {
          if (minutes === 0) {
            setFlagStart(false);
            setFlagFinish(true);
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSecond(59);
          }
        }
      }, 1000);

      return () => clearInterval(myInterval);
    }
  });

  const countdownBodyProps = {
    flagStart,
    flagPause,
    flagFinish,
    minutes,
    second,

    changeFlagPause,
    resetCountdown,
    plusMinutes,
    plusSecond,
    minusMinutes,
    minusSeconds,
    startCountdown,
  };

  return (
    <div className="App">
      <Container textAlign="center">
        <Segment.Group>
          <CountdownHeader />

          <CountdownBody {...countdownBodyProps} />
        </Segment.Group>
      </Container>
    </div>
  );
}

export default App;
