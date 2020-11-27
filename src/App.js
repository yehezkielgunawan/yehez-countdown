import { useEffect, useState } from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
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

  const changeFlagFinish = () => {
    if (flagFinish === false) {
      return setFlagFinish(true);
    }
    return setFlagFinish(false);
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

  if (flagStart === true) {
    if (flagPause === false) {
      return (
        <div className="App">
          <Container textAlign="center" className="container">
            <Segment.Group>
              <Segment inverted>
                <Header size="huge">Countdown Timer</Header>
              </Segment>
              <Segment>
                <h3>
                  <Header size="medium">Time Remaining</Header>
                </h3>
                <h3>
                  {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                  {second < 10 ? `0${second}` : second}
                </h3>
                <h3>
                  <Icon name="clock outline"></Icon>
                </h3>
              </Segment>
              <Segment inverted>
                <Button color="teal" onClick={changeFlagPause}>
                  Resume
                </Button>
                <Button color="grey" onClick={resetCountdown}>
                  Reset
                </Button>
              </Segment>
            </Segment.Group>
          </Container>
        </div>
      );
    }
    return (
      <div className="App">
        <Container textAlign="center" className="container">
          <Segment.Group>
            <Segment inverted>
              <Header size="huge">Countdown Timer</Header>
            </Segment>
            <Segment>
              <h3>
                <Header size="medium">Time Remaining</Header>
              </h3>
              <h3>
                {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                {second < 10 ? `0${second}` : second}
              </h3>
              <h3>
                <Icon name="clock outline"></Icon>
              </h3>
            </Segment>
            <Segment inverted>
              <Button color="yellow" onClick={changeFlagPause}>
                Pause
              </Button>
              <Button color="grey" onClick={resetCountdown}>
                Reset
              </Button>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  } else {
    if (flagFinish === true) {
      return (
        <div className="App">
          <Container textAlign="center" className="container">
            <Segment.Group>
              <Segment inverted>
                <Header size="huge">Countdown Timer</Header>
              </Segment>
              <Segment>
                <h3>
                  <Header size="medium">BOOMMM!!!!</Header>
                </h3>
                <h3>
                  {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                  {second < 10 ? `0${second}` : second}
                </h3>
                <h3>
                  <Icon name="clock outline"></Icon>
                </h3>
              </Segment>
              <Segment inverted>
                <Button color="green" onClick={startCountdown}>
                  Start Again
                </Button>
              </Segment>
            </Segment.Group>
          </Container>
        </div>
      );
    }
    return (
      <div className="App">
        <Container textAlign="center" className="container">
          <Segment.Group>
            <Segment inverted>
              <Header size="huge">Countdown Timer</Header>
            </Segment>
            <Segment>
              <h3>
                <Icon name="angle up" onClick={plusMinutes}></Icon>{" "}
                <Icon name="angle up" onClick={plusSecond}></Icon>
              </h3>
              <h3>
                {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                {second < 10 ? `0${second}` : second}
              </h3>
              <h3>
                <Icon name="angle down" onClick={minusMinutes}></Icon>{" "}
                <Icon name="angle down" onClick={minusSeconds}></Icon>
              </h3>
            </Segment>
            <Segment inverted>
              <Button color="green" onClick={startCountdown}>
                Start
              </Button>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
