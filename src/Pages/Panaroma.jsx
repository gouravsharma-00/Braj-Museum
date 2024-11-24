import React, { useEffect, useRef } from "react";


const Panorama = ({ open, onClose, temple }) => {
    const dialogElement = useRef(null);
    const panoramaElement = useRef(null);
    const viewerInstance = useRef(null);

    useEffect(() => {
        if (open && panoramaElement.current) {
            dialogElement.current.showModal();
            if (viewerInstance.current) {
                viewerInstance.current.destroy();
            }
            viewerInstance.current = pannellum.viewer(panoramaElement.current, {
                default: {
                    firstScene: "circle",
                    autoLoad: true,
                    sceneFadeDuration: 1000,
                    autoRotate: -5,
                },
                scenes: {
                    circle: {
                        title: temple,
                        hfov: 50,
                        pitch: 10,
                        yaw: 0,
                        type: "equirectangular",
                        panorama: `/views/${temple}.jpeg`,
                    },
                },
            });
        }

        return () => {
            if (viewerInstance.current) {
                viewerInstance.current.destroy();
                viewerInstance.current = null;
            }
        };
    }, [open, temple]);

    const handleClose = () => {
        dialogElement.current.close();
        onClose();
    }

    return (
        <dialog ref={dialogElement} style={
            { width: "90%", height: "95vh", overflow: "hidden", border: "none", margin: "auto"}}>
            <div style={{ position: "relative", padding: "1rem" }}>
                <h2>Panorama View - {temple}</h2>
                <button
                    onClick={handleClose}
                    style={{
                        position: "absolute",
                        right: "1rem",
                        top: "1rem",
                        background: "red",
                        border: "none",
                        color: "white",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                    }}
                >
                    Exit
                </button>
            </div>
            <div ref={panoramaElement} style={{ width: "100%", height: "calc(100% - 2rem)" }} />
        </dialog>
    );
};


export default Panorama;
