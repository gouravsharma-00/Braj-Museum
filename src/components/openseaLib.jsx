import OpenSeadragon from "openseadragon";
import React, { useEffect, useRef } from "react";

const OpenSeadragonViewer = () => {
    const viewerRef = useRef(null);

    useEffect(() => {
        // Initialize the OpenSeadragon viewer
        const viewer = OpenSeadragon({
            id: 'openseadragon',
            prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.0/images/',
            tileSources: {
                Image: {
                    xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
                    Url: '/img.dzi', // The folder containing the tiles
                    Format: 'jpg', // The format of the image tiles
                    Overlap: '2', // Tile overlap (this should match the settings used to create the .dzi file)
                    TileSize: '256', // Tile size (match this with the value used to create the .dzi)
                    Size: {
                        Width: 11000, // The width of the original image
                        Height: 12000 // The height of the original image
                    }
                }
            },
            showNavigator: true,
            // minZoomLevel: 0.1,
            // maxZoomLevel: 8
        });

        // Store the viewer instance in the ref
        viewerRef.current = viewer;

        // Function to add a marker
        const addMarker = (x, y, url) => {
            const marker = document.createElement('div');
            marker.className = 'marker';
            marker.style.background = 'red';
            marker.style.width = '20px';
            marker.style.height = '20px';
            marker.style.borderRadius = '50%';
            marker.style.position = 'absolute';
            marker.style.cursor = 'pointer';
            marker.onclick = () => {
                window.location.href = url;
            };

            viewer.addOverlay({
                element: marker,
                location: new OpenSeadragon.Point(x / 11000, y / 12000)
            });
        };

        // Add some markers as examples
        addMarker(5500, 6000, 'https://example.com/page1');
        addMarker(3000, 4000, 'https://example.com/page2');
        addMarker(8000, 7000, 'https://example.com/page3');

        // Clean up when the component is unmounted
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
            }
        };

    }, []);

    return <div id="openseadragon" style={{ width: '100%', height: '90vh' }} />;
};

export default OpenSeadragonViewer;