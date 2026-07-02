import TimeframeButton from "./TimeframeButton";
import { timeframeOptions } from "../data/constants";

import imageJeremy from "../assets/image-jeremy.png";

export default function ProfileCard({
  selectedTimeframe,
  setSelectedTimeframe,
}) {
  const handleClick = (selectedButton) => {
    setSelectedTimeframe(selectedButton);
  };

  return (
    <section className="min-block-50 lg:block-130 inline-full md:max-inline-[28rem] grid md:col-span-2 lg:col-span-1 lg:row-span-2 bg-neutral-navy-900 mx-auto rounded-2xl areas">
      <div className="block-[66.6%] lg:block-[68%] grid grid-cols-[auto_1fr] lg:grid-cols-1 items-center gap-4 bg-primary-purple-600 p-8 rounded-2xl area-card">
        <img
          src={imageJeremy}
          alt=""
          width={234}
          height={234}
          className="max-block-[clamp(4.25rem,_3.8166rem_+_1.8489vi,_5rem)] inline-auto lg:self-start border-3 rounded-full"
        />
        <div className="lg:self-start">
          <p className="font-light text-gray-300">Report for</p>
          <h2 className="font-light text-[clamp(1.5rem,_0.9221rem_+_2.4653vw,_2.5rem)] leading-12">
            Jeremy Robson
          </h2>
        </div>
      </div>
      <menu className="block-[33.3%] lg:block-[32%] flex lg:flex-col justify-between self-end px-5 py-3 lg:py-5 text-lg area-card">
        <TimeframeButton
          onClick={() => handleClick("daily")}
          isSelected={selectedTimeframe === "daily"}>
          Daily
        </TimeframeButton>
        <TimeframeButton
          onClick={() => handleClick("weekly")}
          isSelected={selectedTimeframe === "weekly"}>
          Weekly
        </TimeframeButton>
        <TimeframeButton
          onClick={() => handleClick("monthly")}
          isSelected={selectedTimeframe === "monthly"}>
          Monthly
        </TimeframeButton>
      </menu>
    </section>
  );
}
