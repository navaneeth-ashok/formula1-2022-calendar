const RaceTimeComponent = ({ raceTime, option }) => {
  if (option === "date") {
    return (
      <div className="col-span-1">
        <div className="grid-rows-2">
          <div className="row date">{dateConvertor(raceTime.start)}</div>
          <div className="row time">{timeConvertor(raceTime.start)}</div>
        </div>
      </div>
    );
  } else if (option === "day") {
    return (
      <div className="col-span-1 day">
        <div className="vertical-center">{getDay(raceTime.start)}</div>
      </div>
    );
  }
};

export default RaceTimeComponent;

const getUTCTime = (inputString) => {
  const year = inputString.substring(0, 4);
  const month = inputString.substring(4, 6);
  const date = inputString.substring(6, 8);
  const HH = inputString.substring(9, 11);
  const mm = inputString.substring(11, 13);
  const dateString = new Date(Date.UTC(year, month - 1, date, HH, mm));
  return dateString;
};

const dateConvertor = (inputString) => {
  const dateString = getUTCTime(inputString);
  return (
    dateString.toLocaleString("default", { month: "short" }) +
    " " +
    dateString.getDate()
  );
};

const timeConvertor = (inputString) => {
  const dateString = getUTCTime(inputString);
  return (
    dateString.getHours() +
    ":" +
    String(dateString.getMinutes()).padStart(2, "0")
  );
};

const getDay = (inputString) => {
  const dateString = getUTCTime(inputString);
  return dateString.toLocaleDateString("default", { weekday: "short" });
};
