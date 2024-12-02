import OpenSeadragon from "openseadragon";
import React, { useEffect, useRef, useState } from "react";
import Panorama from "../Pages/Panaroma";
import markers from "./coordData.json";

const OpenSeadragonViewer = () => {
    const viewerRef = useRef(null);
    const [selectedTemple, setSelectedTemple] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setIsSidebarVisible(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const viewer = OpenSeadragon({
            id: "openseadragon",
            prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.0/images/",
            tileSources: {
                Image: {
                    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                    Url: "/map_files/",
                    Format: "jpeg",
                    Overlap: "1",
                    TileSize: "254",
                    Size: {
                        Width: 11927,
                        Height: 12215,
                    },
                },
            },
            minZoomLevel: 1,
            maxZoomLevel: 8,
            defaultZoomLevel: 1.2,
            constrainDuringPan: true,
            visibilityRatio: 1.0,
        });

        viewerRef.current = viewer;

        viewer.addHandler("zoom", () => {
            const currentZoom = viewer.viewport.getZoom();
            markers.forEach((markerData) => {
                const markerElement = document.getElementById(markerData.id);
                if (currentZoom >= markerData.maxZoom) {
                    markerElement.style.display = "block";
                } else {
                    markerElement.style.display = "none";
                }
            });
        });

        const addMarker = (markerData) => {
            const marker = document.createElement("div");
            marker.id = markerData.id;
            marker.className = "marker";
            marker.style.pointerEvents = "auto";
            marker.style.backgroundColor = markerData.color;

            const tag = document.createElement("span");
            tag.className = "tag";
            tag.textContent = markerData.label;

            marker.addEventListener("click", (event) => {
                event.stopPropagation();
                setSelectedTemple(markerData.label);
                setIsDialogOpen(true);
            });

            marker.addEventListener("mouseover", () => {
                tag.style.display = "block";
            });

            marker.addEventListener("mouseout", () => {
                tag.style.display = "none";
            });

            marker.appendChild(tag);

            const normalizedX = markerData.x / 11927;
            const normalizedY = markerData.y / 12215;

            viewer.addOverlay({
                element: marker,
                location: new OpenSeadragon.Point(normalizedX, normalizedY),
            });

            marker.style.display = "none";
            tag.style.display = "none";
        };

        markers.forEach(addMarker);

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
            }
        };
    }, []);

    const handleMarker = (id) => {
        const prevGlowingMarker = document.querySelector(".glow");
        if (prevGlowingMarker) {
            prevGlowingMarker.classList.remove("glow");
        }

        const markerData = markers.find((marker) => marker.id === id);
        if (markerData) {
            const markerElement = document.getElementById(markerData.id);

            if (markerElement) {
                markerElement.classList.add("glow");
                setTimeout(() => {
                    markerElement.classList.remove("glow");
                }, 5000);
            }

            viewerRef.current.viewport.panTo(
                new OpenSeadragon.Point(markerData.x / 11927, markerData.y / 12215)
            );
            viewerRef.current.viewport.zoomTo(markerData.maxZoom + 8, null, true);
        }
    };

    return (
        <>
            <div style={{ display: "flex", height: "100vh", position: "relative" }}>
                {/* Sidebar */}
                {isSidebarVisible && (
                    <div
                        style={{
                            width: "250px",
                            backgroundColor: "#f4f4f4",
                            padding: "15px",
                            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
                            overflowY: "auto",
                            zIndex: 1,
                            position: "relative",
                        }}
                    >
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>Locations</h3>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {markers.map((marker) => (
                                <li
                                    key={marker.id}
                                    style={{
                                        padding: "10px",
                                        margin: "5px 0",
                                        cursor: "pointer",
                                        backgroundColor: "#eaeaea",
                                        borderRadius: "5px",
                                        textAlign: "center",
                                        transition: "background 0.3s",
                                    }}
                                    onClick={() => handleMarker(marker.id)}
                                    onMouseOver={(e) =>
                                        (e.target.style.backgroundColor = "#d3d3d3")
                                    }
                                    onMouseOut={(e) =>
                                        (e.target.style.backgroundColor = "#eaeaea")
                                    }
                                >
                                    {marker.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* OpenSeadragon Viewer */}
                <div id="openseadragon" style={{ flex: 1, height: "100%" }} />

                {/* Toggle Button */}
                <button
                    style={{
                        position: "absolute",
                        top: "55px",
                        left: isSidebarVisible ? "265px" : "15px",
                        zIndex: 2,
                        // backgroundColor: "#007bff",
                        // color: "#fff",
                        // border: "none",
                        // padding: "0px 0px",
                        // borderRadius: "50%",
                        // cursor: "pointer",
                        // transition: "left 0.3s",
                        // fontSize: '1.5rem',
                        width: "40px",
                        height: "30px",

                    }}
                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                >
                    {isSidebarVisible ? "Hide" : "Show"}
                </button>
            </div>

            {isDialogOpen && (
                <Panorama
                    open={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    temple={selectedTemple}
                />
            )}
        </>
    );
};

export default OpenSeadragonViewer;
