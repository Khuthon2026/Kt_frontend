import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBarFill } from '@/hooks/useBarFill';
export default function BarRow({ bar, index, playKey }) {
    const width = useBarFill(bar.pct, 120 + index * 90, playKey);
    return (_jsxs("div", { children: [_jsxs("div", { className: "mb-2 flex items-center justify-between", children: [_jsxs("span", { className: "inline-flex items-center gap-[9px] whitespace-nowrap text-[13.5px] font-semibold text-[#d6e0e7]", children: [_jsx("span", { className: "h-[9px] w-[9px] flex-none rounded-full", style: { background: bar.color } }), bar.label] }), _jsxs("span", { className: "text-[13px] font-semibold text-[#c8d3db]", style: { fontFamily: 'Inter, sans-serif' }, children: [Number.isInteger(bar.pct) ? bar.pct : bar.pct.toFixed(1), "%"] })] }), _jsx("div", { className: "relative h-[10px] overflow-hidden rounded-full bg-white/10", children: _jsx("div", { className: "absolute inset-y-0 left-0 origin-left rounded-full", style: {
                        width,
                        background: bar.trackGradient,
                        transition: 'width 1.1s cubic-bezier(.22,.9,.3,1)',
                    } }) })] }));
}
