import { useState, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const ToggleButton = ({ children = "default text" }: Props) => {
    const [selectedMode, setMode] = useState(1);
    return (
        <button
            className={selectedMode === 1 ? "btn btn-light" : "btn btn-dark"}
            onClick={() => setMode(selectedMode === 1 ? 0 : 1)}
        >
            {children}
        </button>
    );
};

export default ToggleButton;
