// Model Dialog
import React, { useEffect, useRef }  from 'react';

const Modal = () => {
    const modalRef = useRef();
    useEffect(() => {
        modalRef.current.showModal();
    }, []);

    const ModalStyle = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        padding: '1rem',
        position: 'relative',
        width: '300px',
    }
    return(
        <dialog style={ModalStyle} ref={modalRef}>
            <div>
                <h1>Braj <img src='/favicon.png'/></h1>
                <span style={{fontSize: '15px'}} >A Photo Galary For Temples Of Braj</span>
            </div>
            <button 
            style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '2px',
                marginTop: '2rem',
                cursor: 'pointer'
            }} onClick={() => modalRef.current.close()} >Accept</button>
        </dialog>
    )
}

export { Modal }