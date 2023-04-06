interface ISemiCircleProgress {
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
}

export declare const SemiCircleProgress: ({
  strokeWidth,
  strokeLinecap,
  percentage,
  percentageSeperator,
  size,
  strokeColor,
  fontStyle,
}: ISemiCircleProgress) => JSX.Element;
