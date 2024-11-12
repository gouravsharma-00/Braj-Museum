import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Panaroma = () => {

    const panoramaElement = useRef(null);
    const { temple } = useParams();

    useEffect(() => {

        pannellum.viewer(panoramaElement.current, {
            "default": {
                "firstScene": "circle",
                "autoLoad": true,
                "sceneFadeDuration": 1000,
                // "showControls": false,
                "autoRotate": -5
            },
            "scenes": {
                "circle": {
                    "title": temple,
                    "hfov": 50,
                    "pitch": 10,
                    "yaw": 0,
                    "type": "equirectangular",
                    "panorama": `/views/${temple}.jpeg`
                }
            }
        });
    });
    return(
        <div style={{
            height: '100vh',
            width : '100vw'
        }} >
            <div ref={panoramaElement} style={{ width: '100%', height: '100%', border: 'none' }} />
        </div>
    )
}

export default Panaroma