import { useEffect, useState } from 'react';
import { easeOutCubic } from '@/lib/utils/geometry';
export function useCountUp(target, duration = 1700, playKey = 0) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            setValue(target * easeOutCubic(t));
            if (t < 1)
                raf = requestAnimationFrame(tick);
        };
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValue(0);
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration, playKey]);
    return value;
}
