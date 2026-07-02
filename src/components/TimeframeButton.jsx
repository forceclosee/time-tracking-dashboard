export default function TimeframeButton({ children, onClick, isSelected }) {
  return (
    <li className="block-full">
      <button
        type="button"
        onClick={onClick}
        className={[
          isSelected ? "text-gray-200" : "text-gray-400",
          "block-full px-3  hover:text-gray-200 cursor-pointer trim-both-text transition-all duration-300",
        ]
          .filter(Boolean)
          .join(" ")}>
        {children}
      </button>
    </li>
  );
}
