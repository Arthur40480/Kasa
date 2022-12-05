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
        <div key={id}>
          <Collapse 
            title={datas.title}
            texte={datas.text}
          />
        </div>
        ))}
      </div>
    </section>
  )
}

export default About;