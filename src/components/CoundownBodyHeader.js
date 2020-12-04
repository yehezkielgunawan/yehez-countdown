import { Header, Icon } from "semantic-ui-react";

const CountdownBodyHeader = ({
  flagStart,
  flagFinish,

  plusMinutes,
  plusSecond,
}) => {
  return (
    <h3>
      {flagStart ? (
        <Header size="medium">Time Remaining</Header>
      ) : flagFinish ? (
        <Header size="medium">BOOMMM!!!!</Header>
      ) : (
        <>
          <Icon name="angle up" onClick={plusMinutes} />{" "}
          <Icon name="angle up" onClick={plusSecond} />
        </>
      )}
    </h3>
  );
};

export default CountdownBodyHeader;
