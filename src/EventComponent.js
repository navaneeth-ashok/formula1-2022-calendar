import RaceTimeComponent from "./RaceTimeComponent";
const EventComponent = ({ eventDetails, eventType, eventName }) => {
  return (
    <div className={`section__${eventType} `}>
      <div className="grid grid-cols-4 p-1">
        <div className={`col-span-2 ${eventType} text-left ml-5`}>
          {eventName}
        </div>
        <RaceTimeComponent raceTime={eventDetails} option="date" />
        <RaceTimeComponent raceTime={eventDetails} option="day" />
      </div>
    </div>
  );
};

export default EventComponent;
