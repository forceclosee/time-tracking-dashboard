export default function TimeframeButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={[
          isSelected ? "text-gray-200" : "text-gray-400",
          "block-12 px-3  hover:text-gray-200 cursor-pointer trim-both-text",
        ]
          .filter(Boolean)
          .join(" ")}>
        {children}
      </button>
    </li>
  );
}
