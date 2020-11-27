import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [flag, setFlag] = useState(false);

  const changeFlag = () => {
    if (flag === false) {
      return setFlag(true);
    }
    return setFlag(false);
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
    if (flag === true) {
      const myInterval = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        }

        if (second === 0) {
          if (minutes === 0) {
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

  return (
    <div className="App">
      <Container textAlign="center" className="container">
        <Segment>
          <Header size="huge">Countdown Timer</Header>
          <h3>
            <Icon name="angle up" onClick={plusMinutes}></Icon>
            <Icon name="angle up" onClick={plusSecond}></Icon>
          </h3>
          <h3>
            {minutes} : {second < 10 ? `0${second}` : second}
          </h3>
          <h3>
            <Icon name="angle down" onClick={minusMinutes}></Icon>
            <Icon name="angle down" onClick={minusSeconds}></Icon>
          </h3>
          <Divider></Divider>
          <Button color="green" onClick={changeFlag}>
            Start
          </Button>
          <Button color="black">Reset</Button>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
