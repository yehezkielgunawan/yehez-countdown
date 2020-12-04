import { Icon } from "semantic-ui-react";

const CountdownBodyFooter = ({
  flagStart,
  flagFinish,

  minusMinutes,
  minusSeconds,
}) => {
  return (
    <h3>
      {flagStart || flagFinish ? (
        <Icon name="clock outline" />
      ) : (
        <>
          <Icon name="angle down" onClick={minusMinutes} />{" "}
          <Icon name="angle down" onClick={minusSeconds} />
        </>
      )}
    </h3>
  );
};

export default CountdownBodyFooter;
