import React from "react";
import  ReactDOM  from "react-dom";
import "../styles/Modal.css";

function Modal({children, setOpenModal}){

    const closeModal = () => {
        setOpenModal(false);
    }


    return ReactDOM.createPortal(
        
        <div className="ModalBackground">
            <div className="containerOutModal">
                    <span 
                    className="outModal"
                    onClick={closeModal}
                    >
                        X
                    </span>
            </div>
            {children}
        </div>
        ,
        document.getElementById('modal')
    );
}

export {Modal};