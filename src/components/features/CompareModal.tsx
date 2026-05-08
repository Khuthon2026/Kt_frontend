import { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  adUrl: string | null;
  screenshots: string[];
}

function extractYoutubeId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function CompareModal({ open, onClose, adUrl, screenshots }: Props) {
  const [ssIdx, setSsIdx] = useState(0);
  const [localAdUrl, setLocalAdUrl] = useState('');
  const [appliedAdUrl, setAppliedAdUrl] = useState<string | null>(null);
  const [urlError, setUrlError] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSsIdx(0);
    setLocalAdUrl('');
    setAppliedAdUrl(null);
    setUrlError(false);
    setImgError(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const effectiveAdUrl = adUrl ?? appliedAdUrl;
  const youtubeId = effectiveAdUrl ? extractYoutubeId(effectiveAdUrl) : null;
  const hasScreenshots = screenshots.length > 0;

  const applyUrl = () => {
    const id = extractYoutubeId(localAdUrl.trim());
    if (id) {
      setAppliedAdUrl(localAdUrl.trim());
      setUrlError(false);
    } else {
      setUrlError(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="광고 vs 실제 앱 화면 비교"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,17,36,0.72)] p-6 backdrop-blur"
      style={{ animation: 'fadeIn .2s ease-out' }}
    >
      <div className="relative w-full max-w-[900px] animate-pop-in rounded-3xl bg-[#0f1e30] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        {/* 헤더 */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[18px] font-bold tracking-tight text-white">광고 vs 실제 앱 화면</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* 왼쪽 — 광고 영상 */}
          <div className="flex flex-col gap-3">
            <span className="rounded-full bg-[#ec4f8d]/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#ec4f8d] w-fit">광고 영상</span>
            <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-black">
              {youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="광고 영상"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                  <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="text-white/20">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                  </svg>
                  <p className="text-sm text-white/30">유튜브 광고 URL을<br />아래에 붙여넣어 주세요</p>
                </div>
              )}
            </div>
            {/* URL 직접 입력 (adUrl 없을 때 폴백) */}
            {!adUrl && (
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={localAdUrl}
                    onChange={(e) => { setLocalAdUrl(e.target.value); setUrlError(false); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') applyUrl(); }}
                    placeholder="https://youtube.com/shorts/..."
                    className={`flex-1 rounded-xl border px-3 py-2 text-[13px] bg-white/[0.05] text-white placeholder:text-white/25 outline-none transition ${urlError ? 'border-[#ec4f8d]/60' : 'border-white/10 focus:border-white/30'}`}
                  />
                  <button
                    type="button"
                    onClick={applyUrl}
                    className="rounded-xl bg-[#ec4f8d]/20 px-3.5 py-2 text-[13px] font-semibold text-[#ec4f8d] transition hover:bg-[#ec4f8d]/30"
                  >
                    적용
                  </button>
                </div>
                {urlError && <p className="text-[11px] text-[#ec4f8d]">유효한 유튜브 URL을 입력해주세요</p>}
              </div>
            )}
            {adUrl && <div className="h-[40px]" />}
          </div>

          {/* 오른쪽 — 실제 앱 스크린샷 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#84CC16]/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#84CC16]">실제 앱 화면</span>
              {hasScreenshots && screenshots.length > 1 && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => { setSsIdx((i) => (i - 1 + screenshots.length) % screenshots.length); setImgError(false); }}
                    className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20"
                  >
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <span className="text-[11px] text-white/40">{ssIdx + 1} / {screenshots.length}</span>
                  <button
                    type="button"
                    onClick={() => { setSsIdx((i) => (i + 1) % screenshots.length); setImgError(false); }}
                    className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20"
                  >
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04]">
              {hasScreenshots && !imgError ? (
                <img
                  key={screenshots[ssIdx]}
                  src={screenshots[ssIdx]}
                  alt={`실제 앱 스크린샷 ${ssIdx + 1}`}
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                  <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="text-white/20">
                    <rect x={3} y={3} width={18} height={18} rx={2} />
                    <circle cx={8.5} cy={8.5} r={1.5} />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-sm text-white/30">{imgError ? '이미지를 불러올 수 없어요' : '앱을 다시 분석하면\n스크린샷이 표시돼요'}</p>
                </div>
              )}
            </div>
            <div className="h-[40px]" />
          </div>
        </div>

        <p className="mt-2 text-center text-[12px] text-white/25">
          광고 영상과 실제 앱 화면을 비교해 허위 광고 여부를 확인하세요
        </p>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}
