import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";
function NavBar() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/attractions" className="hover:underline">Attractions</Link></li>
        <li><Link to="/favorites" className="hover:underline">Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;