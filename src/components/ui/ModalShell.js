import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
export default function ModalShell({ open, onClose, labelledBy, children }) {
    useEffect(() => {
        if (!open)
            return;
        const onKey = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, onClose]);
    if (!open)
        return null;
    return (_jsxs("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": labelledBy, onClick: (e) => {
            if (e.target === e.currentTarget)
                onClose();
        }, className: "fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,17,36,0.65)] p-6 backdrop-blur", style: { animation: 'fadeIn .2s ease-out' }, children: [_jsxs("div", { className: "relative w-full max-w-[480px] animate-pop-in rounded-3xl bg-white p-8 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.45)]", children: [_jsx("button", { type: "button", onClick: onClose, "aria-label": "\uB2EB\uAE30", className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#F1F3F4] text-[#5f6368] transition hover:bg-[#E4E6E8]", children: _jsx("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", children: _jsx("path", { d: "M6 6l12 12M18 6L6 18" }) }) }), children] }), _jsx("style", { children: `@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }` })] }));
}
