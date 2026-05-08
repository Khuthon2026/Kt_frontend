interface ScoreGaugeProps {
    score: number;
    outOf?: number;
    label: string;
    /** Bumping this re-plays the animation */
    playKey: number | string;
}
export default function ScoreGauge({ score, outOf, label, playKey }: ScoreGaugeProps): import("react/jsx-runtime").JSX.Element;
export {};
