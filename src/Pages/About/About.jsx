import PropTypes from "prop-types";
import Bannerabout from "../../Components/BannerAbout/BannerAbout";
import Collapse from "../../Components/Collapse/Collapse";
import AboutDatas from "../../aboutDatas.json";
import "./About.css";

function About() {
  return (
    <section className="collapse_container">
      <Bannerabout />
      <div className="collapse_div">
        { AboutDatas.map((datas, id) => (
          <Collapse 
            key={id}
            title={datas.title}
            texte={datas.text}
          />
        ))}
      </div>
    </section>
  )
}

// Proptype permet de définir le type de chaques props
Collapse.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  texte: PropTypes.string,
}

export default About;