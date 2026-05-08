import type { SearchResult } from '@/types';
interface Props {
    query: string;
    setQuery: (s: string) => void;
    onUrlClick: () => void;
    onPick: (item: SearchResult) => void;
}
export default function SearchBar({ query, setQuery, onUrlClick, onPick }: Props): import("react/jsx-runtime").JSX.Element;
export {};
