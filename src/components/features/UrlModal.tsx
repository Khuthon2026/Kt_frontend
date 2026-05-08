import { useEffect, useRef, useState } from 'react';
import ModalShell from '../ui/ModalShell';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (adUrl: string) => void;
}

export default function UrlModal({ open, onClose, onSubmit }: Props) {
  const [adUrl, setAdUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setAdUrl('');
      setError(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = adUrl.trim().match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/);
    if (!match) {
      setError('유효한 유튜브 URL이 아니에요. Shorts 또는 일반 영상 링크를 넣어주세요.');
      inputRef.current?.focus();
      return;
    }
    onSubmit(adUrl.trim());
    onClose();
  };

  return (
    <ModalShell open={open} onClose={onClose} labelledBy="urlModalTitle">
      <div className="mb-[18px] grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-lime-brand text-ink">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
        </svg>
      </div>
      <h2 id="urlModalTitle" className="mb-2 text-[22px] font-bold tracking-tight">
        광고 URL 추가하기
      </h2>
      <p className="mb-[22px] text-sm leading-relaxed text-[#5f6368]">
        의심되는 앱의 광고 영상 URL을 입력하세요. 앱 분석 결과와 함께 광고 영상을 비교할 수 있어요.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4 flex flex-col gap-1.5">
          <label htmlFor="adUrl" className="text-[13px] font-semibold text-ink">
            유튜브 광고 URL
          </label>
          <input
            id="adUrl"
            ref={inputRef}
            type="url"
            value={adUrl}
            onChange={(e) => { setAdUrl(e.target.value); setError(null); }}
            placeholder="https://www.youtube.com/shorts/..."
            autoComplete="off"
            required
            className="w-full rounded-xl border-[1.5px] border-[#E4E6E8] px-3.5 py-3 text-sm text-ink outline-none transition focus:border-lime-brand focus:shadow-[0_0_0_3px_rgba(132,204,22,0.2)]"
          />
          <span className={`text-xs ${error ? 'text-[#B42318]' : 'text-[#80868b]'}`}>
            {error ?? 'YouTube Shorts 또는 일반 유튜브 링크를 붙여넣어 주세요.'}
          </span>
        </div>
        <div className="mt-2 flex gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full bg-[#F1F3F4] px-[18px] py-3 text-sm font-bold text-ink transition hover:bg-[#E4E6E8]"
          >
            취소
          </button>
          <button
            type="submit"
            className="flex-1 rounded-full bg-lime-brand px-[18px] py-3 text-sm font-bold text-ink shadow-[0_4px_12px_rgba(132,204,22,0.35)] transition hover:-translate-y-px hover:shadow-[0_8px_18px_rgba(132,204,22,0.45)]"
          >
            추가하기
          </button>
        </div>
      </form>
    </ModalShell>
  );
}
