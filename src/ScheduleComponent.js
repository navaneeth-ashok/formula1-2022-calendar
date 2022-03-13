import "./ScheduleComponent.css";
import EventComponent from "./EventComponent.js";
import Flags from "country-flag-icons/react/3x2";

const ScheduleComponent = ({ raceDetails, currentRaceID }) => {
  const Flag = raceDetails.countryCode ? Flags[raceDetails.countryCode] : null;
  const raceID = raceDetails.gpName.replaceAll(" ", "");
  const currentRace = raceID === currentRaceID;
  return (
    <div
      className={`card__main m-2 rounded-md shrink-0 snap-center `}
      id={raceID}
    >
      <div className="title grid grid-cols-5">
        <div className="col-span-1 text-center">
          {Flag !== null ? <Flag className="country-flag" /> : null}
        </div>
        <div className="col-span-4 text-center">
          <h2 className="gp__name vertical-center">{raceDetails.gpName}</h2>
        </div>
      </div>
      <div className="card__schedule m-2 rounded-md pt-2 pb-2">
        {currentRace ? (
          <div className="race__weekend" title="Race Weekend">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        ) : null}
        {raceDetails.confirmed ? (
          ""
        ) : (
          <div className="tbc-warning">
            The event is yet to be confirmed, the date and time could change
          </div>
        )}
        <EventComponent
          eventDetails={raceDetails.grandprix}
          eventType="race"
          eventName="Race"
        />
        <div className="card__divider"></div>
        <EventComponent
          eventDetails={raceDetails.qualifying}
          eventType="quali"
          eventName="Qualifying"
        />
        <div className="card__divider"></div>
        {raceDetails.sprint ? (
          <EventComponent
            eventDetails={raceDetails.sprint}
            eventType="sprint"
            eventName="Sprint"
          />
        ) : null}
        {raceDetails.sprint ? <div className="card__divider"></div> : null}
        <EventComponent
          eventDetails={raceDetails.practice3}
          eventType="freepractice"
          eventName="FP3"
        />
        <div className="card__divider"></div>
        <EventComponent
          eventDetails={raceDetails.practice2}
          eventType="freepractice"
          eventName="FP2"
        />
        <div className="card__divider"></div>
        <EventComponent
          eventDetails={raceDetails.practice1}
          eventType="freepractice"
          eventName="FP1"
        />
        <div className="text-sm text-gray-500">formula1-2022.web.app</div>
      </div>
      <div className="card__track m-2 rounded-md p-2">
        <h3 className="pl-3 pr-3">{raceDetails.name}</h3>
        <img
          src={raceDetails.circuitDetails.circuitImage}
          className="circuit__image"
          alt={raceDetails.circuitDetails.name}
        />
        <div className="name">{raceDetails.circuitDetails.name}</div>
        {/* <div className="location">{raceDetails.circuitDetails.location}</div>
        <div className="country">{raceDetails.country}</div> */}
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <div className="lap-text">Number of Laps</div>
            <div className="lap-count">{raceDetails.circuitDetails.laps}</div>
          </div>
          <div className="col-span-3">
            <div className="row lap-text ">Lap Record</div>
            <div className="row lap-count">
              {raceDetails.circuitDetails.lapRecord.time}{" "}
              <div className="lap-driver">
                {raceDetails.circuitDetails.lapRecord.driver} (
                {raceDetails.circuitDetails.lapRecord.year})
              </div>
            </div>
            {/* <div className="row">
              {raceDetails.circuitDetails.lapRecord.year}
            </div>
            <div className="row">
              {raceDetails.circuitDetails.lapRecord.driver}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
