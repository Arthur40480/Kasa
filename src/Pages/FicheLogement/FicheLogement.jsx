import Carrousel from "../../Components/Carrousel/Carrousel";
import LodgingInfos from "../../Components/LodgingInfos/LodgingInfos";
import Collapse from "../../Components/Collapse/Collapse";
import Lodgings from "../../logements.json";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FicheLogement.css";

function FicheLogement() {

  const params = useParams();     // Hook permettant de récupérer les paramètres de route.
  const navigate = useNavigate(); // Hook donnant accès à l'objet de navigation.

  const product = 
    Lodgings.find((product) => params.id === product.id);
    if(!product) {
      navigate("/error");
    };

  const key = product.id;
  const pictures = product.pictures;
  const title = product.title;
  const location = product.location;
  const tags = product.tags;
  const host = product.host;
  const rating = product.rating;
  const description = product.description;
  const equipments = product.equipments;
    

  return (
    <main className="lodging_main">
      <Carrousel 
        key={key} 
        pictures={pictures} 
      />
      <section className="lodgings_infos_container">
        <LodgingInfos 
          key={key} 
          product={product}
          title={title} 
          location={location} 
          tags={tags}
          host={host}
          rating={rating}
        />
      </section>
      <section className="lodging_collapse_container">
        <div className="collapse_description">
          <Collapse
            title="Description"
            texte={description}
          />
        </div>
        <div className="collapse_equipments">
          <Collapse
            title="Equipements"
            texte={equipments.map((infos, index) => (
              <li className="list_equipments">{infos}</li>
            )
          )}
          />
        </div>
      </section>
    </main>
  )
}

// Proptype permet de définir le type de chaques props
Carrousel.propTypes = {
  key: PropTypes.string,
  pictures: PropTypes.string,
};

LodgingInfos.protoTypes = {
  key: PropTypes.string,
  product: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  tags: PropTypes.string,
  host: PropTypes.string,
  rating: PropTypes.number,
};

Collapse.prototype = {
  texte: PropTypes.string,
}

export default FicheLogement;