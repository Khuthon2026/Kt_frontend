import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ScoreGauge from './ScoreGauge';
import BarRow from './BarRow';
import WarnPill from '../ui/WarnPill';
export default function IndexAnalysis({ data, playKey }) {
    return (_jsxs("section", { className: "mb-[22px] rounded-[22px] border border-white/[0.07] bg-white/[0.04] px-[30px] py-[26px] backdrop-blur-[4px]", children: [_jsxs("div", { className: "mb-7 flex items-center gap-3.5", children: [_jsx("div", { className: "text-[18px] font-bold tracking-[-0.01em] text-[#e8eef2]", children: "\uC9C0\uC218\uBD84\uC11D" }), _jsx(WarnPill, { score: data.score, children: data.warning })] }), _jsxs("div", { className: "grid grid-cols-[340px_1fr] items-center gap-7 px-1 pb-1 pt-2", children: [_jsx(ScoreGauge, { score: data.score, outOf: data.outOf, label: "\uC591\uC0B0\uD615 \uC885\uD569 \uC9C0\uC218", playKey: playKey }), _jsx("div", { className: "flex min-w-0 flex-col gap-[18px] pr-2", children: data.bars.map((bar, i) => (_jsx(BarRow, { bar: bar, index: i, playKey: playKey }, bar.id))) })] })] }));
}
