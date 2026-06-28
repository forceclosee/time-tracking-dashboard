import TimeframeButton from "./TimeframeButton";
import { timeframeOptions } from "../data/constants";

import imageJeremy from "../assets/image-jeremy.png";

export default function ProfileCard() {
  const timeframeList = timeframeOptions.map((data) => (
    <TimeframeButton
      key={data.id}
      id={data.id}
      defaultChecked={data.isDefaultChecked}
      htmlFor={data.id}
      label={data.label}
    />
  ));

  return (
    <section className="max-block-max max-inline-82 bg-neutral-navy-900 rounded-2xl">
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
      <div className="flex justify-between px-8 py-5">{timeframeList}</div>
    </section>
  );
}
