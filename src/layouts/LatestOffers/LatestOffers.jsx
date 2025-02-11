/* eslint-disable react/jsx-no-comment-textnodes */
import "./LatestOffers.css";
import flashOffers from "../../assets/flashoffers1.png";
import { useNavigate } from "react-router-dom";

const LatestOffers = () => {
  const navigate = useNavigate();
  function promotions() {
    navigate("/Promotions");
  }
  return (
    <section className="latest_offers">
      <div className="align_center">
        <h2 className="offers_title">Flash Deals on Quality Products</h2>
        <p className="offers_subtitle">
          Welcome to our exclusive Flash Deals section, where you can discover
          an array of high-quality products at unbeatable prices. From premium
          // eslint-disable-next-line react/no-unescaped-entities meats to fresh
          vegetables and more,we've curated a diverse selection to cater to your
          needs
        </p>
        <a className="offers_link" onClick={promotions}>
          Explore Offers
        </a>
      </div>
      <div className="align_center">
        <img src={flashOffers} className="offers_image" />
      </div>
    </section>
  );
};

export { LatestOffers };
