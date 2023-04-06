type ISemiCircleProgress = {
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";

  percentage: number;
  percentageSeperator?: string;
  size: {
    width: number;
    height: number;
  };
  strokeColor?: string;
  fontStyle?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight: string;
    fill: string;
  };
};

const SemiCircleProgress = ({
  strokeWidth,
  percentage,
  strokeColor,
  size,
  strokeLinecap,
  percentageSeperator,
  fontStyle,
}: ISemiCircleProgress) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  if (
    isNaN(size.width) ||
    size.width <= 0 ||
    isNaN(size.height) ||
    size.height <= 0
  ) {
    throw new Error("Size must be a positive number");
  }

  const radius = 50 - strokeWidth / 2;
  const circumference = 1.1 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const pathDescription = "M5,64 a1,1 0 0,1 90,0";

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="_half-circular-progress"
    >
      <path
        cx="45"
        cy="45"
        r="32"
        d={pathDescription}
        style={{
          transition: "stroke-dashoffset 0.35s",
          stroke: strokeColor || "#04001b",
          strokeLinecap: strokeLinecap || "round",
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${strokeDashoffset}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />
      <animate
        attributeName="stroke-dashoffset"
        from="283"
        to="0"
        dur="1s"
        fill="freeze"
      />

      <text
        x="52%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Arial"
        fill="#04001b"
        style={{
          ...fontStyle,
        }}
      >
        {percentage}
        {percentageSeperator || "%"}
      </text>
    </svg>
  );
};
export { SemiCircleProgress };
