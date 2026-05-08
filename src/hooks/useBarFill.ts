import { useEffect, useState } from 'react';

export function useBarFill(targetPct: number, delayMs: number, playKey: number | string) {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    setWidth('0%');
    const t = window.setTimeout(() => setWidth(`${targetPct}%`), delayMs);
    return () => clearTimeout(t);
  }, [targetPct, delayMs, playKey]);

  return width;
}
