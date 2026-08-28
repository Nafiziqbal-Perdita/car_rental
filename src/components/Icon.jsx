const iconPaths = {
  pin: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  calendar:
    "M5 4h14a1 1 0 0 1 1 1v14H4V5a1 1 0 0 1 1-1Zm-1 5h16M8 2v4m8-4v4",
  car: "m3 16 1.5-6h15L21 16m-18 0h18v3H3v-3Zm4-6 2-4h6l2 4M7 16v3m10-3v3",
  phone:
    "M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2 .5 2.5A3 3 0 0 1 18.5 21 16.5 16.5 0 0 1 3 5.5 3 3 0 0 1 6.5 3.5Z",
  tag: "m20 13-7 7-10-10V4h6l10 9Zm-7-5h.01",
  map: "M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0-15v15m6-12v15",
};

export default function Icon({ name, className = "h-7 w-7" }) {
  return (
    <svg
      className={`fill-none stroke-current stroke-[1.5] ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
