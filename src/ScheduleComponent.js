const ScheduleComponent = ({ raceDetails }) => {
  console.log(raceDetails);
  return (
    <div>
      <h2>{raceDetails.gpName}</h2>
      {raceDetails.practice1 ? (
        <div>
          <div>FP1 : {timeConvertor(raceDetails.practice1.start)}</div>
        </div>
      ) : null}
      {raceDetails.practice2 ? (
        <div>
          <div>FP2 : {timeConvertor(raceDetails.practice2.start)}</div>
        </div>
      ) : null}
      {raceDetails.practice3 ? (
        <div>
          <div>FP3 : {timeConvertor(raceDetails.practice3.start)}</div>
        </div>
      ) : null}
      {raceDetails.sprint ? (
        <div>
          <div>Sprint : {timeConvertor(raceDetails.sprint.start)}</div>
        </div>
      ) : null}
      {raceDetails.qualifying ? (
        <div>
          <div>Qualifying : {timeConvertor(raceDetails.qualifying.start)}</div>
        </div>
      ) : null}
      {raceDetails.grandprix ? (
        <div>
          <div>Race : {timeConvertor(raceDetails.grandprix.start)}</div>
        </div>
      ) : null}
    </div>
  );
};

const timeConvertor = (inputString) => {
  const year = inputString.substring(0, 4);
  const month = inputString.substring(4, 6);
  const date = inputString.substring(6, 8);
  const HH = inputString.substring(9, 11);
  const mm = inputString.substring(11, 13);
  return date + "-" + month + "-" + year + " " + HH + ":" + mm;
};

export default ScheduleComponent;
