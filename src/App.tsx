import ListGroup from "./Components/listGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ToggleButton from "./Components/ToggleButton";
import { useState } from "react";

function App() {
    const items = ["new york", "tokiyo", "london", "paris", "san fransico"];
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div>
            <ListGroup items={items} heading="Cities"></ListGroup>
            {alertVisible && (
                <Alert
                    onDismissed={() => {
                        setAlertVisibility(false);
                    }}
                ></Alert>
            )}
            <Button
                onClick={() => {
                    setAlertVisibility(alertVisible ? false : true);
                    console.log(alertVisible);
                }}
            >
                Show Alert
            </Button>
            <ToggleButton>Toggle Button</ToggleButton>
        </div>
    );
}

export default App;
