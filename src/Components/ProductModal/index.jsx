import React from "react";
import ReactDOM from "react-dom";
import './modal.css'

function ProductModal({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    ); 
}

export { ProductModal };