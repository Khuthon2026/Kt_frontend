export interface GaugeSegment {
    d: string;
    color: string;
}
export interface UseGaugeRevealOptions {
    /** Number of micro-arcs that make up the ring */
    count?: number;
    /** Degree overlap on each side of every arc to mask seams */
    overlapDeg?: number;
    /** Total reveal duration in ms (for the visible portion) */
    durationMs?: number;
}
export interface UseGaugeRevealResult {
    segments: GaugeSegment[];
    segRefs: React.MutableRefObject<(SVGPathElement | null)[]>;
    startCapRef: React.MutableRefObject<SVGCircleElement | null>;
    endCapRef: React.MutableRefObject<SVGCircleElement | null>;
    endCap: {
        x: number;
        y: number;
        color: string;
    };
}
/**
 * Builds the circular gauge as N micro-arcs colored along a green→yellow→red
 * gradient, then animates them in CCW order from 12 o'clock up to the given
 * `ratio` (0..1) of the full circle. Round caps are placed at the start and
 * the dynamic end of the revealed portion.
 */
export declare function useGaugeReveal(ratio: number, playKey: number | string, { count, overlapDeg, durationMs, }?: UseGaugeRevealOptions): UseGaugeRevealResult;
