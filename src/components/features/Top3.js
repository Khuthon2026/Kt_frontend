import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TOP3 } from '../../constants/apps';
export default function Top3({ onPick }) {
    return (_jsx("div", { className: "mt-5 flex max-w-[720px] flex-wrap justify-center gap-2.5", children: TOP3.map((it) => (_jsxs("button", { onClick: () => onPick(it.title), className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-2 pl-2 pr-3.5 text-[13px] font-medium text-white transition hover:-translate-y-px hover:border-lime-brand/50 hover:bg-white/[0.12]", children: [_jsx("img", { src: it.icon, alt: it.title, className: "h-6 w-6 rounded-full border border-white/10 object-cover", loading: "lazy" }), it.title] }, it.rank))) }));
}
