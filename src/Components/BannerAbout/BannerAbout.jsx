import BannerAbout from "../../Assets/Banner_about.png";
import BannerAboutMobile from "../../Assets/Banner_mobile.png";
import "./BannerAbout.css";

function Bannerabout() {
  return (
    <section className="banner_about">
      <div className="banner_about_div">
        <img className="banner_about_img" src={BannerAbout} alt="Bannière du site de l'agence Kasa" />
        <img className="banner_about_img_mobile" src={BannerAboutMobile} alt="Bannière du site de l'agence Kasa mobile" />
      </div>   
    </section>
  )
}

export default Bannerabout;