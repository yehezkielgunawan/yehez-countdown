const TimeWrapper = ({ minutes, second }) => {
  return (
    <h3>
      {minutes < 10 ? `0${minutes}` : minutes} :{" "}
      {second < 10 ? `0${second}` : second}
    </h3>
  );
};

export default TimeWrapper;
