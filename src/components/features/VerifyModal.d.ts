import type { VerifyResult } from '@/types';
type Props = {
    open: boolean;
    state: 'loading' | 'done' | 'failed';
    progress: number;
    result: VerifyResult | null;
    error: string | null;
};
export default function VerifyModal({ open, state, progress, result, error }: Props): import("react/jsx-runtime").JSX.Element;
export {};
