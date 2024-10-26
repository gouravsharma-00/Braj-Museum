# Braj 360 View Museum

Braj 360 View Museum is a project that provides a virtual tour of various temples in the Braj region. The application allows users to explore detailed maps and view 360-degree panoramas of temples.

## Project Structure

Below are the key files and their roles within the project:

### 1. `openseaLib.jsx`
   - **Description:** This file is responsible for rendering the main map interface using the OpenSeadragon JavaScript package.
   - **Functionality:** 
     - Integrates OpenSeadragon to provide deep zoom and pan capabilities for large, high-resolution images of the map.
     - Handles user interactions, such as zooming in/out and panning across the map.
     - Marks specific locations on the map where temples are situated.

### 2. `templeView.jsx`
   - **Description:** Contains the logic for rendering a 360-degree view of the temples using the Pannellum JavaScript package.
   - **Functionality:** 
     - Opens a dialog box when a user clicks on a temple marker on the map.
     - Utilizes Pannellum to display a 360-degree panoramic view of the selected temple.
     - Provides navigation controls for users to look around the 360-degree view and experience the temple's surroundings.

### 3. `data.json`
   - **Description:** Holds the data related to the temples, including their names, coordinates, descriptions, and other metadata.
   - **Structure:** 
     - Each entry in the JSON file represents a temple, with properties such as:
       - `id`: Unique identifier for the temple.
       - `label`: Name of the temple.
       - `coordinates`: Latitude and longitude coordinates of the temple's location on the map.
       - `maxzoom`: zoom level at which the temple marker will be visible.
       - `url`: URL to the 360-degree panorama image used by `templeView.jsx`.

## Technologies Used

- **React**: For building the user interface.
- **OpenSeadragon**: For rendering the zoomable map.
- **Pannellum**: For displaying 360-degree panoramic views.
- **JavaScript/JSX**: For writing component logic.
- **HTML/CSS**: For structuring and styling the interface.

## Future Enhancements

- Add more detailed information about each temple, including historical significance and images.
- Implement additional navigation features, such as guided tours through specific routes.
- Improve performance for loading high-resolution images and 360-degree views.

## License

This project is open-source and licensed under the [License](LICENSE).

## Acknowledgments

- Thanks to the developers of OpenSeadragon and Pannellum for providing excellent libraries for map and 360-degree view rendering.


