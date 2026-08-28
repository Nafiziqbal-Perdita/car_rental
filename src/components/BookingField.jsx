export default function BookingField({
  label,
  value,
  setValue,
  options,
}) {
  return (
    <label className="min-w-0">
      <strong className="mb-1 block text-xs font-bold text-[#1A202C] sm:text-sm">
        {label}
      </strong>
      <select
        className="w-full min-w-0 bg-transparent text-[10px] text-[#1A202C] outline-none sm:text-xs"
        value={value}
        onChange={(event) => setValue?.(event.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
