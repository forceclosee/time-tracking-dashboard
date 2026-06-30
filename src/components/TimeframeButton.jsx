export default function TimeframeButton({ children, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="block-12 px-3 text-gray-400 cursor-pointer trim-both-text">
        {children}
      </button>
    </li>
  );
}
