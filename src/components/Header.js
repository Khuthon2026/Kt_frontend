import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Header({ onLogoClick }) {
    return (_jsx("header", { className: "mb-6 flex items-center", children: _jsxs("button", { type: "button", onClick: onLogoClick, "aria-label": "DeClone \uBA54\uC778\uC73C\uB85C", className: "cursor-pointer border-0 bg-transparent px-1.5 py-1 text-[40px] font-extrabold tracking-[-0.015em] transition-opacity hover:opacity-85", style: { fontFamily: 'Inter, Pretendard, sans-serif' }, children: [_jsx("span", { className: "text-accent", children: "De" }), _jsx("span", { className: "text-[#c4ccd2]", children: "Clone" })] }) }));
}
