export type Risk = 'high' | 'mid' | 'safe';

export interface AppItem {
  name: string;
  cat: string;
  risk: Risk;
  users: string;
}

export interface UrlEntry {
  id: string;
  url: string;
  name: string;
}
export type Sentiment = 'positive' | 'negative';

export interface AppMeta {
  initial: string;
  name: string;
  categories: string[];
}

export interface BarMetric {
  id: string;
  label: string;
  pct: number;
  color: string;
  trackGradient: string;
}

export interface KeywordEntry {
  text: string;
  sentiment: Sentiment;
  size: number;
  /** 0–100 — percentage from the left of the cloud area */
  x: number;
  /** 0–100 — percentage from the top of the cloud area */
  y: number;
  dim?: boolean;
}

export interface ReviewEntry {
  keyword: string;
  sentiment: Sentiment;
  text: string;
}

export interface IndexAnalysisData {
  score: number;
  outOf: number;
  warning: string;
  bars: BarMetric[];
}
