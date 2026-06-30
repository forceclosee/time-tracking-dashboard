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
      previousText = "Last Day - ";
    } else if (selectedTimeframe === "weekly") {
      previousText = "Last Week - ";
    } else if (selectedTimeframe === "monthly") {
      previousText = "Last Month - ";
    }

    const image = iconMapping[data.title];
    const currentStat = data.timeframes[selectedTimeframe].current;
    const previousState = data.timeframes[selectedTimeframe].previous;

    return (
      <StatCard
        key={data.title}
        title={data.title}
        image={image}
        currentStat={`${currentStat}hrs`}
        previousText={previousText}
        previousState={`${previousText} ${previousState}hrs`}
      />
    );
  });

  let currentStat = "";
  if (selectedTimeframe === "daily") {
    currentStat = DATA.timeframes.daily.current;
  }

  return <>{statCards}</>;
}
