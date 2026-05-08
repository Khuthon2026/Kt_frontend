import { jsx as _jsx } from "react/jsx-runtime";
export default function KeywordCloud({ keywords }) {
    return (_jsx("div", { className: "relative h-[460px] overflow-hidden rounded-[18px] border border-white/[0.05] bg-black/20", children: keywords.map((k, i) => (_jsx("span", { className: "absolute -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-bold tracking-[-0.01em]", style: {
                left: `${k.x}%`,
                top: `${k.y}%`,
                fontSize: k.size,
                color: k.sentiment === 'negative' ? '#ef5a5a' : '#6cb6ff',
                opacity: k.dim ? 0.78 : 1,
            }, children: k.text }, `${k.text}-${i}`))) }));
}
