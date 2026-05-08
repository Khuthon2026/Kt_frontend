/**
 * Stub for future API client. The current build uses static sample data
 * from `@/constants/sampleData`. When a backend lands, replace these with
 * real fetch calls.
 */
import { INDEX_ANALYSIS, KEYWORDS, REVIEWS, SAMPLE_APP } from '@/constants/sampleData';
export async function fetchAppMeta() {
    return SAMPLE_APP;
}
export async function fetchIndexAnalysis() {
    return INDEX_ANALYSIS;
}
export async function fetchKeywords() {
    return KEYWORDS;
}
export async function fetchReviews() {
    return REVIEWS;
}
