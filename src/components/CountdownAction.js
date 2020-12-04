import { Button } from "semantic-ui-react";

const CountdownAction = ({
  flagStart,
  flagPause,
  flagFinish,

  changeFlagPause,
  resetCountdown,
  startCountdown,
}) => {
  if (flagStart) {
    return (
      <>
        <Button color="teal" onClick={changeFlagPause}>
          {flagPause ? "Pause" : "Resume"}
        </Button>
        <Button color="grey" onClick={resetCountdown}>
          Reset
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        color="green"
        onClick={flagFinish ? resetCountdown : startCountdown}
      >
        {flagFinish ? "START AGAIN" : "Start"}
      </Button>
    </>
  );
};

export default CountdownAction;
