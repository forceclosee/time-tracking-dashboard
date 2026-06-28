export default function TimeframeButton({ id, defaultChecked, label }) {
  return (
    <div className="relative">
      <input
        type="radio"
        name="timeframe"
        id={id}
        className="peer input"
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className="text-gray-400 peer-checked:text-gray-200 text-lg">
        {label}
      </label>
    </div>
  );
}
