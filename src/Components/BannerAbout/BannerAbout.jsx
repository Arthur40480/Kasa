import BannerAbout from "../../Assets/Banner_about.png";
import "./BannerAbout.css";

function Bannerabout() {
    return (
        <section className="banner">
            <div className="banner_div">
                <img className="banner_img" src={BannerAbout} alt="Bannière du site de l'agence Kasa" />
            </div>   
        </section>
    )
}

export default Bannerabout;