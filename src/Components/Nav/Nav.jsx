import { Link } from "react-router-dom"; // Import des link pour pouvoir naviguer à l'intérieur de mon application.
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <ul className="navList">
                <li><Link to="/" className="linkNav">Accueil</Link></li>
                <li><Link to="/about" className="linkNav"> A Propos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;