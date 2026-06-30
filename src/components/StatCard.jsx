export default function StatCard({ image, title, currentStat, previousStat }) {
  let cardColor = "";
  if (title === "Work") {
    cardColor = "bg-primary-orange-300-work";
  } else if (title === "Play") {
    cardColor = "bg-primary-blue-300-play";
  } else if (title === "Study") {
    cardColor = "bg-primary-pink-400-study";
  } else if (title === "Exercise") {
    cardColor = "bg-primary-green-400-exercise";
  } else if (title === "Social") {
    cardColor = "bg-primary-purple-700-social";
  } else if (title === "Self Care") {
    cardColor = "bg-primary-yellow-300-self-care";
  }

  return (
    <section className="block-40 grid rounded-2xl areas">
      <div
        className={[
          cardColor,
          "block-[75%] z-1 grid justify-items-end rounded-2xl overflow-x-hidden area-card",
        ]
          .filter(Boolean)
          .join(" ")}>
        <img className="-my-3 me-4" src={image} alt="" />
      </div>
      <div className="block-[76%] z-2 grid grid-cols-[1fr_auto] items-center self-end gap-2 bg-neutral-navy-900 hover:bg-card-hover p-6 rounded-2xl cursor-pointer area-card">
        <div>
          <h2 className="font-medium text-lg">{title}</h2>
          <p className="mbs-1.5 font-light text-3xl">{currentStat}</p>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-200 cursor-pointer">
            <svg
              width="21"
              height="5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <p className="mbs-4 font-normal text-[0.96rem] text-gray-400">
            {previousStat}
          </p>
        </div>
      </div>
    </section>
  );
}
