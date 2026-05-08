import { useCallback, useState } from 'react';
export function useToast(duration = 2400) {
    const [message, setMessage] = useState(null);
    const show = useCallback((msg) => {
        setMessage(msg);
        window.setTimeout(() => setMessage(null), duration);
    }, [duration]);
    return { message, show };
}
