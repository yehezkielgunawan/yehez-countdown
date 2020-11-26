import { useEffect, useState } from "react";
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(5);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }

      if (second === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes-1);
          setSecond(59);
        }
      }
    }, 1000);

    return () => clearInterval(myInterval);
  });

  return (
    <div className="App">
      <Container textAlign="center" className="container">
        <Segment>
          <Header size="huge">Countdown Timer</Header>
          <h3>
            {minutes} : {second < 10 ? `0${second}` : second}
          </h3>
          <Divider></Divider>
          <Button color="green">Start</Button>
          <Button color="black">Reset</Button>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
