import Carrousel from "../../Components/Carrousel/Carrousel";
import Lodgings from "../../logements.json";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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
    /*const tags = product.tags;
    const equipments = product.equipments;
    const rating = product.rating;*/

    console.log(product.rating)

    return (
      <main>
        <Carrousel key={key} pictures={pictures} />
      </main>
        
    )
}

// Proptype permet de définir le type de chaques props
Carrousel.propTypes = {
  key: PropTypes.string,
  pictures: PropTypes.string,
}

export default FicheLogement;