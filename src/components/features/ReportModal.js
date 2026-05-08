import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import ModalShell from '../ui/ModalShell';
import { searchApps } from '@/lib/api/verify';
import { colorFor, highlight } from '../../lib/utils/text';
export default function ReportModal({ open, onClose, onSubmit, initialName = '' }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [acOpen, setAcOpen] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState(null);
    const nameRef = useRef(null);
    const textRef = useRef(null);
    const acWrapRef = useRef(null);
    useEffect(() => {
        const onClick = (e) => {
            if (!acWrapRef.current?.contains(e.target))
                setAcOpen(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    useEffect(() => {
        if (!open)
            return;
        const timer = setTimeout(() => {
            setName(initialName);
            setText('');
            setError(null);
            setAcOpen(false);
            setResults([]);
            setTimeout(() => (initialName ? textRef.current : nameRef.current)?.focus(), 50);
        }, 0);
        return () => clearTimeout(timer);
    }, [open, initialName]);
    const q = name.trim();
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (!q) {
                setResults([]);
                setAcOpen(false);
                return;
            }
            setSearching(true);
            try {
                const data = await searchApps(q);
                setResults(data.slice(0, 5));
                setAcOpen(true);
            }
            catch {
                setResults([]);
            }
            finally {
                setSearching(false);
            }
        }, q ? 300 : 0);
        return () => clearTimeout(timer);
    }, [q]);
    const pickResult = (a) => {
        setName(a.name);
        setAcOpen(false);
        setResults([]);
        setTimeout(() => textRef.current?.focus(), 50);
    };
    const handleKeyDown = (e) => {
        if (!acOpen || results.length === 0)
            return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIdx((i) => (i + 1) % results.length);
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIdx((i) => (i - 1 + results.length) % results.length);
        }
        else if (e.key === 'Enter' && activeIdx >= 0) {
            e.preventDefault();
            pickResult(results[activeIdx]);
        }
        else if (e.key === 'Escape') {
            setAcOpen(false);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) {
            setError('앱 이름과 신고 내용을 모두 입력해 주세요.');
            return;
        }
        onSubmit({ name: name.trim(), text: text.trim() });
        onClose();
    };
    return (_jsxs(ModalShell, { open: open, onClose: onClose, labelledBy: "reportModalTitle", children: [_jsx("div", { className: "mb-[18px] grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-[#FEE4E2] text-[#B42318]", children: _jsxs("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M12 9v4" }), _jsx("path", { d: "M12 17h.01" }), _jsx("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" })] }) }), _jsx("h2", { id: "reportModalTitle", className: "mb-2 text-[22px] font-bold tracking-tight", children: "\uC571 \uC2E0\uACE0\uD558\uAE30" }), _jsx("p", { className: "mb-[22px] text-sm leading-relaxed text-[#5f6368]", children: "\uD53C\uD574 \uC0AC\uB840\uB97C \uACF5\uC720\uD574 \uC8FC\uC138\uC694. \uAC80\uD1A0 \uD6C4 \uB2E4\uB978 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uB530\uB77C\uC11C \uC18D\uC9C0 \uC54A\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4." }), _jsxs("form", { onSubmit: handleSubmit, noValidate: true, children: [_jsxs("div", { className: "mb-4 flex flex-col gap-1.5", children: [_jsx("label", { htmlFor: "reportName", className: "text-[13px] font-semibold text-ink", children: "\uC571 \uC774\uB984" }), _jsxs("div", { ref: acWrapRef, className: "relative", children: [_jsxs("div", { className: "flex items-center rounded-xl border-[1.5px] border-[#E4E6E8] px-3.5 transition focus-within:border-lime-brand focus-within:shadow-[0_0_0_3px_rgba(132,204,22,0.2)]", children: [searching && (_jsx("svg", { className: "mr-2 h-4 w-4 shrink-0 animate-spin text-[#80868b]", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", children: _jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) })), _jsx("input", { id: "reportName", ref: nameRef, type: "text", value: name, onChange: (e) => { setName(e.target.value); setActiveIdx(-1); }, onFocus: () => results.length > 0 && setAcOpen(true), onKeyDown: handleKeyDown, placeholder: "\uC608: \uBB34\uB8CC VPN Pro", autoComplete: "off", required: true, className: "w-full bg-transparent py-3 text-sm text-ink outline-none placeholder:text-[#80868b]" })] }), acOpen && results.length > 0 && (_jsx("div", { className: "absolute left-0 right-0 top-[calc(100%+6px)] z-20 max-h-[240px] animate-drop-in overflow-y-auto rounded-[14px] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)]", children: results.map((a, i) => (_jsxs("div", { role: "option", "aria-selected": i === activeIdx, onMouseDown: () => pickResult(a), className: `flex cursor-pointer items-center gap-3 rounded-xl p-2 transition ${i === activeIdx ? 'bg-[#F1F3F4]' : 'hover:bg-[#F1F3F4]'}`, children: [a.icon_url ? (_jsx("img", { src: a.icon_url, alt: a.name, className: "h-8 w-8 shrink-0 rounded-lg object-cover" })) : (_jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold text-white", style: { background: colorFor(a.name) }, children: a.name.charAt(0) })), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("div", { className: "truncate text-sm font-semibold text-ink", dangerouslySetInnerHTML: { __html: highlight(a.name, q) } }), a.developer && _jsx("div", { className: "truncate text-xs text-[#80868b]", children: a.developer })] })] }, a.google_play_id))) }))] })] }), _jsxs("div", { className: "mb-4 flex flex-col gap-1.5", children: [_jsx("label", { htmlFor: "reportText", className: "text-[13px] font-semibold text-ink", children: "\uC2E0\uACE0 \uB0B4\uC6A9" }), _jsx("textarea", { id: "reportText", ref: textRef, rows: 5, value: text, onChange: (e) => { setText(e.target.value); setError(null); }, placeholder: "\uC5B4\uB5A4 \uBD80\uBD84\uC774 \uBB38\uC81C\uC600\uB294\uC9C0 \uC790\uC138\uD788 \uC801\uC5B4\uC8FC\uC138\uC694.", required: true, className: "min-h-[100px] w-full resize-y rounded-xl border-[1.5px] border-[#E4E6E8] px-3.5 py-3 text-sm text-ink outline-none transition focus:border-lime-brand focus:shadow-[0_0_0_3px_rgba(132,204,22,0.2)]" }), _jsx("span", { className: `text-xs ${error ? 'text-[#B42318]' : 'text-[#80868b]'}`, children: error ?? '주제, 증상, 결제 이력 등을 구체적으로 적어주세요.' })] }), _jsxs("div", { className: "mt-2 flex gap-2.5", children: [_jsx("button", { type: "button", onClick: onClose, className: "flex-1 rounded-full bg-[#F1F3F4] px-[18px] py-3 text-sm font-bold text-ink transition hover:bg-[#E4E6E8]", children: "\uCDE8\uC18C" }), _jsx("button", { type: "submit", className: "flex-1 rounded-full bg-[#B42318] px-[18px] py-3 text-sm font-bold text-white shadow-[0_4px_12px_rgba(180,35,24,0.3)] transition hover:-translate-y-px", children: "\uC81C\uCD9C\uD558\uAE30" })] })] })] }));
}
