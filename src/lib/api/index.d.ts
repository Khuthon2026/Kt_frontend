/**
 * Stub for future API client. The current build uses static sample data
 * from `@/constants/sampleData`. When a backend lands, replace these with
 * real fetch calls.
 */
import type { AppMeta, IndexAnalysisData, KeywordEntry, ReviewEntry } from '@/types';
export declare function fetchAppMeta(): Promise<AppMeta>;
export declare function fetchIndexAnalysis(): Promise<IndexAnalysisData>;
export declare function fetchKeywords(): Promise<KeywordEntry[]>;
export declare function fetchReviews(): Promise<ReviewEntry[]>;
