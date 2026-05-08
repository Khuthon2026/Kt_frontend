import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Toast({ message }) {
    return (_jsxs("div", { className: `pointer-events-none fixed bottom-7 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-200 ${message ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`, children: [_jsx("span", { className: "grid h-[18px] w-[18px] place-items-center rounded-full bg-lime-brand text-[11px] font-extrabold text-ink", children: "\u2713" }), _jsx("span", { children: message ?? '' })] }));
}
