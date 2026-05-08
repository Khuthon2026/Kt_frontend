import { type ReactNode } from 'react';
interface Props {
    open: boolean;
    onClose: () => void;
    labelledBy?: string;
    children: ReactNode;
}
export default function ModalShell({ open, onClose, labelledBy, children }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
