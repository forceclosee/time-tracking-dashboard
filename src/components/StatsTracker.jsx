import ProfileCard from "./ProfileCard";
import StatCards from "./StatCards";

export default function StatsTracker() {
  const handleClick = (selectedTimeframe) => console.log(selectedTimeframe);

  return (
    <>
      <ProfileCard
        onClickDaily={() => handleClick("daily")}
        onClickWeekly={() => handleClick("weekly")}
        onClickMonthly={() => handleClick("monthly")}
      />
      <StatCards />
    </>
  );
}

// simpan useState di component ini
