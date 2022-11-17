import Bannerabout from "../../Components/BannerAbout/BannerAbout";
import Collapse from "../../Components/Collapse/Collapse";
import AboutDatas from "../../aboutDatas.json";
import "./About.css";

function About() {
    return (
        <section className="collapse_container">
            <Bannerabout />
            { AboutDatas.map((datas, id) => (
                <Collapse 
                key={id}
                title={datas.title}
                texte={datas.text}
                />
            ))}
        </section>
    )
}

export default About;