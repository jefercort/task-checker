import React from "react";
// en esta ocasion estamos utilizando ReactDOM para poder crear portales
import ReactDOM from "react-dom";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };