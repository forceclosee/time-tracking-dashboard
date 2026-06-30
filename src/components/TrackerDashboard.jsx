import { useState } from "react";

import ProfileCard from "./ProfileCard";
import StatCards from "./StatCards";

export default function TrackerDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  const handleClick = (selectedButton) => {
    setSelectedTimeframe(selectedButton);
    console.log(selectedTimeframe);
  };

  return (
    <>
      <ProfileCard
        onClickDaily={() => handleClick("daily")}
        onClickWeekly={() => handleClick("weekly")}
        onClickMonthly={() => handleClick("monthly")}
      />
      <StatCards selectedTimeframe={selectedTimeframe} />
    </>
  );
}
