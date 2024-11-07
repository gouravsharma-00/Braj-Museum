import OpenSeadragon from "openseadragon";
// dialog box for 360* view
import Temple from "./templeView";
import React, { useEffect, useRef, useState } from "react";

import markers from "./data.json";


const OpenSeadragonViewer = () => {
    const viewerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [temple, setTemple] = useState("");
    
    useEffect(() => {
        // Initialize the OpenSeadragon viewer
        const viewer = OpenSeadragon({
            id: 'openseadragon',
            prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.0/images/',
            tileSources: {
                Image: {
                    xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
                    Url: '/img_files/', // The folder containing the tiles
                    Format: 'jpeg', // The format of the image tiles
                    Overlap: '1', // Tile overlap (this should match the settings used to create the .dzi file)
                    TileSize: '254', // Tile size (match this with the value used to create the .dzi)
                    Size: {
                        Width: 11927, // The width of the original image
                        Height: 12215 // The height of the original image
                    }
                }
            },
            // tileSources: '/img.dzi',
            showNavigator: true,
            minZoomLevel: 0.4,
            maxZoomLevel: 8
        });

        // Store the viewer instance in the ref
        viewerRef.current = viewer;

        viewer.addHandler('zoom', (event) => {
            const currentZoom = viewer.viewport.getZoom();
            // console.log(currentZoom);
        
            markers.forEach(markerData => {
                const markerElement = document.getElementById(markerData.id);
                if (currentZoom >= markerData.maxZoom) {
                    markerElement.style.display = 'block';
                } else {
                    markerElement.style.display = 'none';
                }
            });
        });
        // Function to add a marker
        const addMarker = (markerData) => {
            const marker = document.createElement('div');
            marker.id = markerData.id;
            marker.className = 'marker';
            marker.style.pointerEvents = 'auto';
            marker.style.backgroundColor = markerData.color ;
        
            marker.addEventListener('click', (event) => {
                event.stopPropagation();
                // window.open(markerData.url, '_blank');
                setTemple(markerData.label)
                setIsOpen(true);
            });
        
            // Normalize coordinates to OpenSeadragon's coordinate system
            const normalizedX = markerData.x / 11927;
            const normalizedY = markerData.y / 12215;
        
            viewer.addOverlay({
                element: marker,
                location: new OpenSeadragon.Point(normalizedX, normalizedY)
            });
        
            // Initially hide the marker
            marker.style.display = 'none';
        };
        
        // Add all markers
        markers.forEach(addMarker);

        // Clean up when the component is unmounted
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
            }
        };

    }, []);

    const handleMarker = (event) => {
        const markerId = event.target.value;
        const markerData = markers.find(marker => marker.id === markerId);
        if (markerData) {
            viewerRef.current.viewport.panTo(new OpenSeadragon.Point(markerData.x / 11927, markerData.y / 12215));
            viewerRef.current.viewport.zoomTo(markerData.maxZoom + 5, null, true);
        }
    }
    return (
        <div>
            <Temple isOpen={isOpen} setIsOpen={setIsOpen} temple={temple} />
            <div className="take">
                <select onChange={handleMarker} style={{height: "30px"}}>
                    <option value="">Select Your Location</option>
                    {
                        markers.map((marker)=>{
                            return <option key={marker.id} value={marker.id}>{marker.label}</option>
                        })
                    }
                </select>
            </div>
            <div id="openseadragon" style={{ width: '100%', height: '99vh' }} />
        </div>
);
};

export default OpenSeadragonViewer;