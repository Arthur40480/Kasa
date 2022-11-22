import { useState } from "react";
import PropTypes from "prop-types"
import Lodgings from "../../logements.json";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import "./Home.css";

function Home() {
  const [ lodgings ] = useState(Lodgings); // Hook permettant d'avoir des variables d'état dans les composants fonctionnels.

  return (
  <main className="home_main">
    <Banner />
      <section className="gallery">
        { lodgings.map((lodging, id) =>
            <Link to={`/logement/${lodging.id}` } key={id} className="card_link">
              <Card cover={lodging.cover} title={lodging.title} />
            </Link>
          
        )}    
      </section>       
  </main>
  )
}

// Proptype permet de définir le type de chaques props
Card.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
  }

export default Home;