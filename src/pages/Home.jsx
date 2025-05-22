import NavBar from '../components/NavBar.jsx';
import SearchForm from '../components/SearchForm.jsx';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Local Adventure Planner</h1>
        <p className="text-lg mb-6">Discover and save tourist attractions near you!</p>
        <SearchForm onSearch={(city) => window.location.href = `/attractions?city=${city}`} />
        {/* Bonus: Carousel placeholder */}
        <div className="mt-8">
          {/* Add react-slick carousel here for featured attractions */}
          <p className="text-gray-500">Featured attractions carousel (coming soon!)</p>
        </div>
      </div>
    </div>
  );
}

export default Home;