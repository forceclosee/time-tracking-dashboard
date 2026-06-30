import TimeframeButton from "./TimeframeButton";
import { timeframeOptions } from "../data/constants";

import imageJeremy from "../assets/image-jeremy.png";

export default function ProfileCard({
  onClickDaily,
  onClickWeekly,
  onClickMonthly,
}) {
  return (
    <section className="max-block-max bg-neutral-navy-900 rounded-2xl">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-primary-purple-600 p-8 rounded-2xl">
        <img
          src={imageJeremy}
          alt=""
          width={234}
          height={234}
          className="block-17 inline-auto border-3 rounded-full"
        />
        <div>
          <p className="font-light text-gray-300">Report for</p>
          <h2 className="font-light text-2xl">Jeremy Robson</h2>
        </div>
      </div>
      <menu className="flex justify-between px-5 py-3">
        <TimeframeButton onClick={onClickDaily}>Daily</TimeframeButton>
        <TimeframeButton onClick={onClickWeekly}>Weekly</TimeframeButton>
        <TimeframeButton onClick={onClickMonthly}>Monthly</TimeframeButton>
      </menu>
    </section>
  );
}
