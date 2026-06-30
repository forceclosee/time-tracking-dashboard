import DATA from "../data/data.json";

import StatCard from "./StatCard";
import iconWork from "../assets/icon-work.svg";
import iconPlay from "../assets/icon-play.svg";
import iconStudy from "../assets/icon-study.svg";
import iconExercise from "../assets/icon-exercise.svg";
import iconSocial from "../assets/icon-social.svg";
import iconSelfCare from "../assets/icon-self-care.svg";

export default function StatCards() {
  return (
    <>
      <StatCard image={iconWork} title={DATA[0].title} />
      <StatCard image={iconPlay} title={DATA[1].title} />
      <StatCard image={iconStudy} title={DATA[2].title} />
      <StatCard image={iconExercise} title={DATA[3].title} />
      <StatCard image={iconSocial} title={DATA[4].title} />
      <StatCard image={iconSelfCare} title={DATA[5].title} />
    </>
  );
}
