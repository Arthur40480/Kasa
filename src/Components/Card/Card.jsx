import "./Card.css";

function Card({cover, title}) {
  return(
    <figure className="card_figure">
      <img className="card_img" src={cover} alt="Illustration du logement" />
      <figcaption className="card_title">
        <strong>{title}</strong>
      </figcaption>
    </figure>      
  )
}

export default Card;