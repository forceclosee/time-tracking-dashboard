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
      <StatCard image={iconWork} title="Work" />
      <StatCard image={iconPlay} title="Play" />
      <StatCard image={iconStudy} title="Study" />
      <StatCard image={iconExercise} title="Exercise" />
      <StatCard image={iconSocial} title="Social" />
      <StatCard image={iconSelfCare} title="Self Care" />
    </>
  );
}
