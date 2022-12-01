import BannerImg from "../../Assets/Banner_img.png";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner_div">
        <img className="banner_img" src={BannerImg} alt="Bannière du site de l'agence Kasa" />
      </div>   
      <p className="banner_txt">Chez vous, <span className="banner_undertxt"> partout et ailleurs</span></p>
    </section>
  )
}

export default Banner;