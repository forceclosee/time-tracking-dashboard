import { useState } from "react";

import ProfileCard from "./ProfileCard";
import StatCards from "./StatCards";

export default function TrackerDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  const handleClick = (selectedButton) => {
    setSelectedTimeframe(selectedButton);
  };

  return (
    <>
      <ProfileCard
        onClickDaily={() => handleClick("daily")}
        isDailySelected={selectedTimeframe === "daily"}
        onClickWeekly={() => handleClick("weekly")}
        isWeeklySelected={selectedTimeframe === "weekly"}
        onClickMonthly={() => handleClick("monthly")}
        isMonthlySelected={selectedTimeframe === "monthly"}
      />
      <StatCards selectedTimeframe={selectedTimeframe} />
    </>
  );
}
