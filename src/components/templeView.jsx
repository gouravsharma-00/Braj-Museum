import { useRef, useEffect } from 'react';
// 360 view by photo-sphere-viewer
import PhotoSphereViewerComponent from './PhotoViewrLib';
const Temple = ({ isOpen, setIsOpen }) => {
    const dialogRef = useRef(null);
    useEffect(() => {
        if(isOpen){
            dialogRef.current.showModal();
        }
    }, [isOpen]);

    const handleClose = () => {
        dialogRef.current.close();
        setIsOpen(false);
    }
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
    return(
        <dialog ref={dialogRef} style={dialogStyle}>
            <button style={{position: 'absolute', zIndex: 1000}} onClick={handleClose}>Exit</button>
            <PhotoSphereViewerComponent isOpen={isOpen} imagePath="/ThreeSixty_img/threeim.jpg" />
        </dialog>
    )
}

export default Temple;