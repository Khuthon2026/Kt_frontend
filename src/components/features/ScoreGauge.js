import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGaugeReveal } from '@/hooks/useGaugeReveal';
import { useCountUp } from '@/hooks/useCountUp';
export default function ScoreGauge({ score, outOf = 5, label, playKey }) {
    const ratio = score / outOf;
    const { segments, segRefs, startCapRef, endCapRef, endCap } = useGaugeReveal(ratio, playKey);
    const display = useCountUp(score, 1700, playKey);
    return (_jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [_jsxs("div", { className: "relative h-[280px] w-[280px]", children: [_jsxs("svg", { viewBox: "0 0 300 300", className: "h-full w-full overflow-visible", children: [_jsx("circle", { cx: 150, cy: 150, r: 118, fill: "none", stroke: "rgba(255,255,255,0.10)", strokeWidth: 22 }), _jsx("g", { children: segments.map((seg, i) => (_jsx("path", { ref: (el) => {
                                        segRefs.current[i] = el;
                                    }, d: seg.d, fill: "none", stroke: seg.color, strokeWidth: 22, strokeLinecap: "butt", style: { opacity: 0 } }, i))) }), _jsx("circle", { ref: startCapRef, cx: 150, cy: 32, r: 11, fill: segments[0]?.color ?? '#84CC16', style: { opacity: 0 } }), _jsx("circle", { ref: endCapRef, cx: endCap.x, cy: endCap.y, r: 11, fill: endCap.color, style: { opacity: 0 } })] }), _jsxs("div", { className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center", children: [_jsx("div", { className: "font-bold leading-none tracking-[-0.02em] text-white", style: { fontFamily: 'Inter, sans-serif', fontSize: 60 }, children: display.toFixed(1) }), _jsxs("div", { className: "mt-1.5 text-[14px] text-text-mute", children: ["/ ", outOf, "\uC810"] })] })] }), _jsx("div", { className: "whitespace-nowrap text-[16px] font-bold tracking-[-0.01em] text-[#e6eef3]", children: label })] }));
}
