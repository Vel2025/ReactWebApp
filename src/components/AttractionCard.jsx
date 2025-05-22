function AttractionCard({ attraction, onAddFavorite, onRemoveFavorite, isFavorite }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 flex flex-col items-center">
      <h3 className="text-lg font-semibold">{attraction.name || 'Unnamed Attraction'}</h3>
      <p className="text-gray-600 text-sm">
        {attraction.kinds ? attraction.kinds.split(',')[0] : 'No category'}
      </p>
      {isFavorite ? (
        <button
          onClick={() => onRemoveFavorite(attraction)}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove from Favorites
        </button>
      ) : (
        <button
          onClick={() => onAddFavorite(attraction)}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
}

export default AttractionCard;