import { Button, Header, Icon, Segment } from "semantic-ui-react";
import TimeWrapper from "./TimeWrapper";

const CountdownBody = ({
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
}) => {
  const timeWrapperProps = {
    minutes,
    second,
  };

  if (flagStart) {
    return (
      <>
        <Segment>
          <h3>
            <Header size="medium">Time Remaining</Header>
          </h3>
          <TimeWrapper {...timeWrapperProps} />
          <h3>
            <Icon name="clock outline" />
          </h3>
        </Segment>

        <Segment inverted>
          <Button color="teal" onClick={changeFlagPause}>
            {flagPause ? "Pause" : "Resume"}
          </Button>
          <Button color="grey" onClick={resetCountdown}>
            Reset
          </Button>
        </Segment>
      </>
    );
  } else {
    return (
      <>
        <Segment>
          {flagFinish ? (
            <>
              <h3>
                <Header size="medium">BOOMMM!!!!</Header>
              </h3>
              <TimeWrapper {...timeWrapperProps} />
              <h3>
                <Icon name="clock outline" />
              </h3>
            </>
          ) : (
            <>
              <h3>
                <Icon name="angle up" onClick={plusMinutes} />{" "}
                <Icon name="angle up" onClick={plusSecond} />
              </h3>
              <TimeWrapper {...timeWrapperProps} />
              <h3>
                <Icon name="angle down" onClick={minusMinutes} />{" "}
                <Icon name="angle down" onClick={minusSeconds} />
              </h3>
            </>
          )}
        </Segment>

        <Segment inverted>
          <Button
            color="green"
            onClick={flagFinish ? resetCountdown : startCountdown}
          >
            {flagFinish ? "START AGAIN" : "Start"}
          </Button>
        </Segment>
      </>
    );
  }
};

export default CountdownBody;
