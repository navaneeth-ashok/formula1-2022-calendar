import "./ScheduleComponent.css";
const ScheduleComponent = ({ raceDetails }) => {
  console.log(raceDetails);
  return (
    <div className="card__main m-2 rounded-md">
      <div className="title grid grid-cols-3">
        <div className="col-span-1">
          <span>Flag comes here</span>
        </div>
        <div className="col-span-2">
          <h2>{raceDetails.gpName}</h2>
        </div>
      </div>
      <div className="card__schedule m-2 rounded-md">
        <div className="section__race mt-2">
          <div className="grid grid-cols-4 p-2">
            <div className="col-span-2 race text-left ml-10">Race</div>
            <div className="col-span-1">
              <div className="grid-rows-2">
                <div className="row date">
                  {dateConvertor(raceDetails.grandprix.start)}
                </div>
                <div className="row time">
                  {timeConvertor(raceDetails.grandprix.start)}
                </div>
              </div>
            </div>
            <div className="col-span-1 day">
              {getDay(raceDetails.grandprix.start)}
            </div>
          </div>
        </div>
        <div className="card__divider"></div>
        <div className="section__quali mt-2">
          <div className="grid grid-cols-4 p-2">
            <div className="col-span-2 quali text-left ml-10">Qualifying</div>
            <div className="col-span-1">
              <div className="grid-rows-2">
                <div className="row date">
                  {dateConvertor(raceDetails.qualifying.start)}
                </div>
                <div className="row time">
                  {timeConvertor(raceDetails.qualifying.start)}
                </div>
              </div>
            </div>
            <div className="col-span-1 day">
              {getDay(raceDetails.qualifying.start)}
            </div>
          </div>
        </div>
        <div className="card__divider"></div>
        {raceDetails.sprint ? (
          <div className="section__sprint mt-2">
            <div className="grid grid-cols-4 p-2">
              <div className="col-span-2 sprint text-left ml-10">Sprint</div>
              <div className="col-span-1">
                <div className="grid-rows-2">
                  <div className="row date">
                    {dateConvertor(raceDetails.sprint.start)}
                  </div>
                  <div className="row time">
                    {timeConvertor(raceDetails.sprint.start)}
                  </div>
                </div>
              </div>
              <div className="col-span-1 day">
                {getDay(raceDetails.sprint.start)}
              </div>
            </div>
            <div className="card__divider"></div>
          </div>
        ) : null}
        <div className="section__freepractice mt-2">
          <div className="grid grid-cols-4 p-2">
            <div className="col-span-2 fp text-left ml-10">FP3</div>
            <div className="col-span-1">
              <div className="grid-rows-2">
                <div className="row date">
                  {dateConvertor(raceDetails.practice3.start)}
                </div>
                <div className="row time">
                  {timeConvertor(raceDetails.practice3.start)}
                </div>
              </div>
            </div>
            <div className="col-span-1 day">
              {getDay(raceDetails.practice3.start)}
            </div>
          </div>
        </div>
        <div className="card__divider"></div>
        <div className="section__freepractice mt-2">
          <div className="grid grid-cols-4 p-2">
            <div className="col-span-2 fp text-left ml-10">FP2</div>
            <div className="col-span-1">
              <div className="grid-rows-2">
                <div className="row date">
                  {dateConvertor(raceDetails.practice2.start)}
                </div>
                <div className="row time">
                  {timeConvertor(raceDetails.practice2.start)}
                </div>
              </div>
            </div>
            <div className="col-span-1 day">
              {getDay(raceDetails.practice2.start)}
            </div>
          </div>
        </div>
        <div className="card__divider"></div>
        <div className="section__freepractice mt-2">
          <div className="grid grid-cols-4 p-2">
            <div className="col-span-2 fp text-left ml-10">FP1</div>
            <div className="col-span-1">
              <div className="grid-rows-2">
                <div className="row date">
                  {dateConvertor(raceDetails.practice1.start)}
                </div>
                <div className="row time">
                  {timeConvertor(raceDetails.practice1.start)}
                </div>
              </div>
            </div>
            <div className="col-span-1 day">
              {getDay(raceDetails.practice1.start)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default ScheduleComponent;
