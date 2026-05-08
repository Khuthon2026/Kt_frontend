import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function ReviewList({ reviews }) {
    return (_jsx("div", { className: "flex flex-col gap-3.5 pt-1", children: reviews.map((r, i) => {
            const isLast = i === reviews.length - 1;
            return (_jsxs("div", { children: [_jsxs("span", { className: "mb-2 inline-flex items-center rounded-[8px] px-[11px] py-[5px] text-[13px] font-semibold text-white", style: {
                            background: r.sentiment === 'negative' ? '#ef5a5a' : '#4d99e6',
                        }, children: ["# ", r.keyword] }), _jsx("p", { className: 'm-0 text-[14px] leading-[1.55] text-[#c4d1da] ' +
                            (isLast ? 'pb-0' : 'border-b border-white/[0.06] pb-3.5'), children: r.text })] }, r.keyword));
        }) }));
}
