import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar.jsx';
import SearchForm from '../components/SearchForm.jsx';
import AttractionCard from '../components/AttractionCard.jsx';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    case 'REMOVE_FAVORITE':
      const updatedFavorites = state.favorites.filter(
        item => item.xid !== action.payload.xid
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    default:
      return state;
  }
}

function Attractions() {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Parse query parameters
  const query = new URLSearchParams(window.location.search);
  const city = query.get('city');;

  // Fetch coordinates and attractions
  useEffect(() => {
    async function fetchCoordinates() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.opentripmap.com/0.1/en/places/geoname?name=${encodeURIComponent(city)}&apikey=5ae2e3f221c38a28845f05b603ac134741f4bf7383ad5a9df3c653b4`
        );
        const { lat, lon } = response.data;
        fetchAttractions(lat, lon);
      } catch (err) {
        setError('Failed to fetch coordinates. Please try another city.');
        setLoading(false);
      }
    }

    async function fetchAttractions(lat, lon) {
      try {
        const response = await axios.get(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&kinds=interesting_places&format=json&apikey=5ae2e3f221c38a28845f05b603ac134741f4bf7383ad5a9df3c653b4`
        );
        setAttractions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch attractions.');
        setLoading(false);
      }
    }

    fetchCoordinates();
  }, [city]);

  const addToFavorites = (attraction) => {
    dispatch({ type: 'ADD_FAVORITE', payload: attraction });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Attractions in {city}</h2>
        {/* <SearchForm onSearch={(newCity) => window.location.href = `/attractions?city=${newCity}`} /> */}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {attractions.map((attraction) => (
            <AttractionCard
              key={attraction.xid}
              attraction={attraction}
              onAddFavorite={addToFavorites}
              onRemoveFavorite={() => {}}
              isFavorite={state.favorites.some(fav => fav.xid === attraction.xid)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Attractions;