/**
 * Returns the gauge color at position `t` in [0, 1].
 *  - t=0   → green
 *  - t=0.5 → yellow
 *  - t=1   → red
 * Smoothly interpolates between the three stops.
 */
export declare function gaugeColorAt(t: number): string;
