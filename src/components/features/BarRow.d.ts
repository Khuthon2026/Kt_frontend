import type { BarMetric } from '@/types';
interface BarRowProps {
    bar: BarMetric;
    index: number;
    playKey: number | string;
}
export default function BarRow({ bar, index, playKey }: BarRowProps): import("react/jsx-runtime").JSX.Element;
export {};
