import React from "react";

interface CircleIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  fillColor?: string;
  strokeColor?: string;
  strokeOpacity?: number;
  outerStrokeColor?: string;
  outerStrokeWidth?: number;
  showOuterStroke?: boolean;
}

const CircleIcon: React.FC<CircleIconProps> = ({
  className,

  fillColor = "#84CE4E",
  strokeColor = "black",
  strokeOpacity = 0.21,
  outerStrokeColor = "#EAEAEA",
  outerStrokeWidth = 0.5875,
  showOuterStroke = true,
}) => {
  const cx = 4.5;
  const cy = 4.5;

  return (
    <svg
      className={className}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {showOuterStroke && (
        <circle
          cx={cx}
          cy={cy}
          r={4.5 - outerStrokeWidth / 2}
          fill="white"
          className={`stroke-current ${outerStrokeColor}`}
          strokeWidth={outerStrokeWidth}
        />
      )}
      <circle cx={cx} cy={cy} r={2.64375} fill={fillColor} />
      <circle
        cx={cx}
        cy={cy}
        r={2.35}
        stroke={strokeColor}
        strokeOpacity={strokeOpacity}
        strokeWidth="0.5875"
      />
    </svg>
  );
};

export default CircleIcon;
