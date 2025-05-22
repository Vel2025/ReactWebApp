import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Attractions from './pages/Attractions.jsx';
import Favorites from './pages/Favorites.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
export default App;