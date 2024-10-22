import React, { useEffect, useRef } from 'react';
import { Viewer} from 'photo-sphere-viewer';

import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

const PhotoSphereViewerComponent = ({ isOpen, imagePath }) => {
  const viewerRef = useRef(null);
  const photoSphereRef = useRef(null);

  useEffect(() => {
    // Initialize Photo Sphere Viewer
    photoSphereRef.current = new Viewer({
      container: viewerRef.current,
      panorama: imagePath,
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
      ],
    });

    // Clean up on component unmount
    return () => {
      if (photoSphereRef.current) {
        photoSphereRef.current.destroy();
      }
    };
  }, [isOpen]);

  return (
    <div
      ref={viewerRef}
      style={{ width: '100%', height: '100vh' }}
    />
  );
};

export default PhotoSphereViewerComponent;
