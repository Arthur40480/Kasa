import BannerImg from "../../Assets/Banner_img.png";
import "./Banner.css";

function Banner() {
    return (
        <section className="banner">
            <div className="banner_div">
                <img className="banner_img" src={BannerImg} alt="Bannière du site de l'agence Kasa" />
            </div>   
            <p className="banner_txt">Chez vous, partout et ailleurs</p>
        </section>
    )
}

export default Banner;