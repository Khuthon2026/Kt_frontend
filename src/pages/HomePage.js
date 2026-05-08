import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Background from '../components/ui/Background';
import Header from '../components/ui/Header';
import Logo from '../components/ui/Logo';
import Footer from '../components/ui/Footer';
import Toast from '../components/ui/Toast';
import SearchBar from '../components/features/SearchBar';
import UrlList from '../components/features/UrlList';
import Top3 from '../components/features/Top3';
import UrlModal from '../components/features/UrlModal';
import ReportModal from '../components/features/ReportModal';
import { useToast } from '../hooks/useToast';
export default function HomePage({ onPick }) {
    const [query, setQuery] = useState('');
    const [urls, setUrls] = useState([]);
    const [urlOpen, setUrlOpen] = useState(false);
    const [reportOpen, setReportOpen] = useState(false);
    const { message, show } = useToast();
    const handlePick = (item) => {
        onPick(item.google_play_id);
    };
    const handleAddUrl = (url) => {
        let name = url;
        try {
            name = new URL(url).hostname.replace(/^www\./, '');
        }
        catch {
            /* ignore — fall back to raw url */
        }
        setUrls((u) => [...u, { id: crypto.randomUUID(), url, name }]);
        show('URL이 추가되었어요');
    };
    const handleReport = () => {
        show('신고가 접수되었어요');
    };
    return (_jsxs("div", { className: "relative flex min-h-screen flex-col", children: [_jsx(Background, {}), _jsx(Header, { onReportClick: () => setReportOpen(true) }), _jsxs("main", { className: "relative z-[2] flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-10", children: [_jsxs("div", { className: "mb-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] text-white/85 backdrop-blur-md", children: [_jsx("span", { className: "h-[7px] w-[7px] animate-pulse-ring rounded-full bg-lime-brand" }), _jsx("span", { children: "\uC624\uB298 \uAC80\uC99D\uB41C \uC571 7\uAC1C" })] }), _jsx(Logo, {}), _jsx(SearchBar, { query: query, setQuery: setQuery, onUrlClick: () => setUrlOpen(true), onPick: handlePick }), _jsx(UrlList, { items: urls, onRemove: (id) => setUrls((u) => u.filter((x) => x.id !== id)) }), _jsx("p", { className: "mt-9 text-center text-sm font-medium tracking-wide text-white/70", children: "\uC790\uC8FC \uC18D\uB294 \uC571 Top 3" }), _jsx(Top3, { onPick: (name) => setQuery(name) })] }), _jsx(Footer, {}), _jsx(UrlModal, { open: urlOpen, onClose: () => setUrlOpen(false), onSubmit: handleAddUrl }), _jsx(ReportModal, { open: reportOpen, onClose: () => setReportOpen(false), onSubmit: handleReport, initialName: query.trim() }), _jsx(Toast, { message: message })] }));
}
