import { Link } from "react-router-dom"; // Import des link pour pouvoir naviguer à l'intérieur de mon application.
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <ul className="nav_list">
                <li><Link to="/" className="nav_link">Accueil</Link></li>
                <li><Link to="/about" className="nav_link"> A Propos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;