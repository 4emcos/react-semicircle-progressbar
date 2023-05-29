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
    hasBackground?: Boolean;
    bgStrokeColor?: string;
};
declare const SemiCircleProgress: ({ strokeWidth, percentage, strokeColor, size, strokeLinecap, percentageSeperator, fontStyle, hasBackground, bgStrokeColor, }: ISemiCircleProgress) => JSX.Element;
export { SemiCircleProgress };
