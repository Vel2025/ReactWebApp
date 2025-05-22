import { useReducer, useEffect } from 'react';
import NavBar from '../components/NavBar';
import AttractionCard from '../components/AttractionCard';

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
    case 'SYNC_FAVORITES':
      return { favorites: action.payload };
    default:
      return state;
  }
}

function Favorites() {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Sync favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'SYNC_FAVORITES', payload: storedFavorites });
  }, []); // Empty dependency array ensures this runs only on mount

  const removeFromFavorites = (attraction) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: attraction });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your Favorite Attractions</h2>
        {state.favorites.length === 0 ? (
          <p className="text-center">No favorites yet. Add some from the Attractions page!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.favorites.map((attraction) => (
              <AttractionCard
                key={attraction.xid}
                attraction={attraction}
                onAddFavorite={() => {}}
                onRemoveFavorite={removeFromFavorites}
                isFavorite={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;