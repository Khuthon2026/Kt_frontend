import { useState } from 'react';
import Background from '@/components/ui/Background';
import Footer from '@/components/ui/Footer';
import AppCard from '@/components/features/AppCard';
import IndexAnalysis from '@/components/features/IndexAnalysis';
import Keywords from '@/components/features/Keywords';
import ReportModal from '@/components/features/ReportModal';
import Toast from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';
import { SAMPLE_APP, INDEX_ANALYSIS, KEYWORDS, REVIEWS } from '@/constants/sampleData';

interface Props {
  appName: string;
  onBack: () => void;
}

export default function ResultPage({ appName, onBack }: Props) {
  const [playKey] = useState(0);
  const [reportOpen, setReportOpen] = useState(false);
  const { message, show } = useToast();

  const app = { ...SAMPLE_APP, name: appName, initial: appName.charAt(0) };

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />

      <header className="relative z-[2] flex items-center justify-between px-8 py-5">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition hover:bg-white/10"
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          홈으로
        </button>
        <button
          type="button"
          onClick={() => setReportOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[#B42318]/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-[#B42318]"
        >
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
          신고하기
        </button>
      </header>

      <main className="relative z-[2] mx-auto w-full max-w-[900px] flex-1 px-6 pb-20 pt-4">
        <AppCard app={app} />
        <IndexAnalysis data={INDEX_ANALYSIS} playKey={playKey} />
        <Keywords keywords={KEYWORDS} reviews={REVIEWS} />
      </main>

      <Footer />

      <ReportModal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        onSubmit={() => show('신고가 접수되었어요')}
        initialName={appName}
      />
      <Toast message={message} />
    </div>
  );
}
