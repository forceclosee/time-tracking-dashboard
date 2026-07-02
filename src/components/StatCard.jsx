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
    <section className="min-block-[clamp(10rem,_8.9888rem_+_4.3143vi,_11.75rem)] grid rounded-2xl areas">
      <div
        className={[
          cardColor,
          "block-[75%] z-1 grid justify-items-end rounded-2xl overflow-y-clip area-card",
        ]
          .filter(Boolean)
          .join(" ")}>
        <img className="-my-3 me-4" src={image} alt="" />
      </div>

      <div className="block-[76%] lg:block-[81.6%] z-2 grid self-end bg-neutral-navy-900 hover:bg-card-hover px-[clamp(1.5rem,_1.2110rem_+_1.2326vi,_2rem)] py-8 rounded-2xl transition-all duration-300 cursor-pointer areas area-card">
        <div className="grid grid-cols-[repeat(2,_auto)] items-center gap-x-4 area-card stats-area">
          <h2 className="font-medium text-lg area-title trim-both-text">
            {title}
          </h2>
          <p className="font-light text-[clamp(2rem,_1.1332rem_+_3.6979vi,_3.5rem)] area-stat">
            {currentStat}
          </p>
          <p className="justify-self-end lg:justify-self-start font-normal text-[0.96rem] text-gray-400 trim-both-text area-previous">
            {previousStat}
          </p>
        </div>

        <button
          type="button"
          className="justify-self-end self-start text-gray-400 hover:text-gray-200 transition-all duration-300 cursor-pointer area-card">
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
      </div>
    </section>
  );
}
