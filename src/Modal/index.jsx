import React from "react";
import './Modal.css'
// en esta ocasion estamos utilizando ReactDOM para poder crear portales
import ReactDOM from "react-dom";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };