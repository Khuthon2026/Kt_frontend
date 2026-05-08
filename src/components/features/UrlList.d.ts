import type { UrlEntry } from '../../types';
interface Props {
    items: UrlEntry[];
    onRemove: (id: string) => void;
}
export default function UrlList({ items, onRemove }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
