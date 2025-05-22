Local Adventure Planner
Overview
Local Adventure Planner is a React-based web application that helps users discover tourist attractions in a specified city using the OpenTripMap API. Users can search for attractions, view details, and save their favorites to localStorage for future reference. The app features a responsive design, navigation across three pages, and state management with React hooks.

Technologies Used
React: For building the user interface and managing components.
React Router: For client-side routing across Home, Attractions, and Favorites pages.
JavaScript (ES6): For logic and API integration.
Tailwind CSS: For styling the application.
Axios: For making API requests to OpenTripMap.
localStorage: For persisting favorite attractions in the browser.
Node.js: For local development and dependency management.
Approach Taken
State Management:
useState: Manages search input and API response data.
useReducer: Manages the favorites list with actions to add and remove attractions.
useEffect: Fetches attraction data from the OpenTripMap API when the city changes.
Routing: Implements three pages (Home, Attractions, Favorites) using react-router-dom.
API Integration: Fetches city coordinates and attractions using OpenTripMap’s free API. Data is displayed in a grid of reusable AttractionCard components.
Persistence: Saves favorite attractions to localStorage to persist across sessions.
Styling: Uses Tailwind CSS for a responsive, modern design with a sticky navigation bar.
Modularity: Organized into components (NavBar, AttractionCard, SearchForm) and pages (Home, Attractions, Favorites).


Usage Instructions
Home Page: Enter a city name (e.g., "New York") in the search bar and click "Search Attractions" to find attractions.
Attractions Page: View a list of attractions for the searched city. Click "Add to Favorites" to save an attraction.
Favorites Page: View your saved attractions. Click "Remove from Favorites" to delete an attraction.
Navigate between pages using the sticky navigation bar at the top.
Setup and Development