import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function getPillStyle(score) {
    if (score >= 4)
        return {
            background: 'linear-gradient(180deg, #ef5b5b 0%, #d33d3d 100%)',
            iconColor: 'currentColor',
        };
    if (score >= 3)
        return {
            background: 'linear-gradient(180deg, #f97316 0%, #ea6a00 100%)',
            iconColor: 'currentColor',
        };
    if (score >= 1.5)
        return {
            background: 'linear-gradient(180deg, #eab308 0%, #ca9a00 100%)',
            iconColor: 'currentColor',
        };
    return {
        background: 'linear-gradient(180deg, #84cc16 0%, #65a30d 100%)',
        iconColor: 'currentColor',
    };
}
export default function WarnPill({ children, score }) {
    const { background } = getPillStyle(score);
    return (_jsxs("span", { className: "inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] px-3.5 py-1.5 text-[13px] font-semibold text-white", style: {
            background,
            boxShadow: '0 2px 0 rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.18)',
        }, children: [_jsxs("svg", { viewBox: "0 0 24 24", width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }), _jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), _jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }), children] }));
}
