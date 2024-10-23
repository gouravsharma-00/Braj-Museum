import { useRef, useEffect } from 'react';

const Temple = ({ isOpen, setIsOpen }) => {
    const dialogRef = useRef(null);
    const panoramaElement = useRef(null);
    const viewerRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
            if (!viewerRef.current) {
                // Initialize the Pannellum viewer only once
                viewerRef.current = pannellum.viewer(panoramaElement.current, {
                    "default": {
                        "firstScene": "circle",
                        "autoLoad": true,
                        "sceneFadeDuration": 1000,
                        "showControls": false
                    },
                    "scenes": {
                        "circle": {
                            "title": "Krishna Balaram temple",
                            "hfov": 1,
                            "pitch": 10,
                            "yaw": 0,
                            "type": "equirectangular",
                            "panorama": "/ThreeSixty_img/60e3f60aec5d1f0008e1c908.jpeg",
                            "hotSpots": [
                                {
                                    "pitch": -2.1,
                                    "yaw": 132.9,
                                    "type": "scene",
                                    "text": "Spring House or Dairy",
                                    "sceneId": "house"
                                },
                                {
                                    "pitch": -0.6,
                                    "yaw": 37.1,
                                    "type": "scene",
                                    "text": "Mandir Tree",
                                    "sceneId": "circle",
                                    "targetYaw": -23,
                                    "targetPitch": 2
                                }
                            ]
                        },
                        "house": {
                            "title": "Spring House or Dairy",
                            "hfov": 110,
                            "yaw": 50,
                            "type": "equirectangular",
                            "panorama": "/images/bma-0.jpg",
                            "hotSpots": [
                                {
                                    "pitch": -0.6,
                                    "yaw": 37.1,
                                    "type": "scene",
                                    "text": "Mason Circle",
                                    "sceneId": "circle",
                                    "targetYaw": -23,
                                    "targetPitch": 2
                                }
                            ]
                        }
                    }
                });
            }
        } else {
            // Close the dialog if not open
            dialogRef.current?.close();
        }

        // Clean up when the component is unmounted or dialog is closed
        return () => {
            if (viewerRef.current && !isOpen) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, [isOpen]);

    const handleClose = () => {
        dialogRef.current.close();
        setIsOpen(false);
    };

    const dialogStyle = {
        position: 'absolute',
        top: '0',
        disaply: 'block',
        width: '100vw',
        height: '100vh',
        border: 'none',
        overflow: 'hidden',
        margin: 'auto'
    }

    return (
        <dialog className="dialog" ref={dialogRef} style={dialogStyle}>
            <button style={{ position: 'absolute', zIndex: 1000 }} onClick={handleClose}>Exit</button>
            {isOpen && <div ref={panoramaElement} style={{ width: '100%', height: '100%' }} />}
        </dialog>
    );
};

export default Temple;
