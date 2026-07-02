import { useState } from "react";

import ProfileCard from "./ProfileCard";
import StatCards from "./StatCards";

export default function TrackerDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  const handleClick = (selectedButton) => {
    setSelectedTimeframe(selectedButton);
  };

  return (
    <div className="max-inline-[26rem] md:max-inline-[48rem] lg:max-inline-[69.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,_1.3555rem_+_0.6163vi,_1.75rem)] mx-auto">
      <ProfileCard
        onClickDaily={() => handleClick("daily")}
        isDailySelected={selectedTimeframe === "daily"}
        onClickWeekly={() => handleClick("weekly")}
        isWeeklySelected={selectedTimeframe === "weekly"}
        onClickMonthly={() => handleClick("monthly")}
        isMonthlySelected={selectedTimeframe === "monthly"}
      />
      <StatCards selectedTimeframe={selectedTimeframe} />
    </div>
  );
}
