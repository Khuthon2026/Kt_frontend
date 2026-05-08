import type { SearchResult, VerifyResult } from '@/types';
export declare const checkHealth: () => Promise<boolean>;
export declare const searchApps: (q: string) => Promise<SearchResult[]>;
export declare const startVerify: (google_play_id: string) => Promise<{
    job_id: string;
}>;
export declare const getVerifyStatus: (job_id: string) => Promise<{
    status: string;
    progress: number;
}>;
export declare const getVerifyResult: (job_id: string) => Promise<VerifyResult>;
