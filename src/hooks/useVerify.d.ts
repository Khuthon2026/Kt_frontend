import type { VerifyResult } from '@/types';
type State = 'idle' | 'loading' | 'done' | 'failed';
export declare function useVerify(): {
    state: State;
    progress: number;
    result: VerifyResult | null;
    error: string | null;
    run: (google_play_id: string) => Promise<VerifyResult | null>;
};
export {};
