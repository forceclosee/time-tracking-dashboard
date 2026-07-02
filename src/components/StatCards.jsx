import DATA from "../data/data.json";

import StatCard from "./StatCard";

import iconWork from "../assets/icon-work.svg";
import iconPlay from "../assets/icon-play.svg";
import iconStudy from "../assets/icon-study.svg";
import iconExercise from "../assets/icon-exercise.svg";
import iconSocial from "../assets/icon-social.svg";
import iconSelfCare from "../assets/icon-self-care.svg";

const iconMapping = {
  Work: iconWork,
  Play: iconPlay,
  Study: iconStudy,
  Exercise: iconExercise,
  Social: iconSocial,
  "Self Care": iconSelfCare,
};

export default function StatCards({ selectedTimeframe }) {
  const statCards = DATA.map((data) => {
    let previousText = "";
    if (selectedTimeframe === "daily") {
      previousText = "Yesterday - ";
    } else if (selectedTimeframe === "weekly") {
      previousText = "Last Week - ";
    } else if (selectedTimeframe === "monthly") {
      previousText = "Last Month - ";
    }

    const image = iconMapping[data.title];
    const currentStat = data.timeframes[selectedTimeframe].current;
    const previousStat = data.timeframes[selectedTimeframe].previous;

    return (
      <StatCard
        key={data.title}
        title={data.title}
        image={image}
        currentStat={`${currentStat}${currentStat <= 1 ? "hr" : "hrs"}`}
        previousStat={`${previousText}${previousStat}${previousStat <= 1 ? "hr" : "hrs"}`}
      />
    );
  });

  return <>{statCards}</>;
}
