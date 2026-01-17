import type { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    onDismissed?: () => void;
}

const Alert = ({
    children = "default text",
    onDismissed = () => {},
}: Props) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={onDismissed}
            ></button>
        </div>
    );
};

export default Alert;
