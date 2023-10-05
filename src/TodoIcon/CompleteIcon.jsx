import React from "react";
import { TodoIcon } from "./index.jsx";

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type = "check"
            // utilizamos el operador ternario para con base asi es verdadero o falso se defina el color
            color = {completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };