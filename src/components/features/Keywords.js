import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import KeywordCloud from './KeywordCloud';
import ReviewList from './ReviewList';
export default function Keywords({ keywords, reviews }) {
    return (_jsxs("section", { className: "mb-[22px] rounded-[22px] border border-white/[0.07] bg-white/[0.04] px-[30px] py-[26px] backdrop-blur-[4px]", children: [_jsx("div", { className: "text-[18px] font-bold tracking-[-0.01em] text-[#e8eef2]", children: "\uC8FC\uC694 \uD0A4\uC6CC\uB4DC" }), _jsxs("div", { className: "mt-5 grid grid-cols-[1.1fr_1fr] gap-[26px]", children: [_jsx(KeywordCloud, { keywords: keywords }), _jsx(ReviewList, { reviews: reviews })] })] }));
}
