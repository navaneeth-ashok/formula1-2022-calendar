const ScheduleComponent = ({ raceDetails }) => {
  console.log(raceDetails);
  return (
    <div>
      <h2>{raceDetails.country} Grand Prix</h2>
      <h3 className="text-3xl font-bold underline">{raceDetails.name}</h3>
    </div>
  );
};

export default ScheduleComponent;
