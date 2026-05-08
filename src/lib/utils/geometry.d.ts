/**
 * Convert an angle (degrees, counter-clockwise from 12 o'clock) into
 * cartesian coordinates on a circle of radius `r` centered at (cx, cy).
 */
export declare function polar(deg: number, cx?: number, cy?: number, r?: number): {
    x: number;
    y: number;
};
export declare function easeOutCubic(t: number): number;
