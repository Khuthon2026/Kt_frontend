interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (payload: {
        name: string;
        text: string;
    }) => void;
    initialName?: string;
}
export default function ReportModal({ open, onClose, onSubmit, initialName }: Props): import("react/jsx-runtime").JSX.Element;
export {};
