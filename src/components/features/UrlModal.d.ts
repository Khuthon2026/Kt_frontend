interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (url: string) => void;
}
export default function UrlModal({ open, onClose, onSubmit }: Props): import("react/jsx-runtime").JSX.Element;
export {};
