import React from "react";

const WaveIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 17C5 19 8 18 12 15C16 12 17 8 23 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WaveIcon;
