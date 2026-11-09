import "../styles/Hero.css";
import heroCake from "../assets/images/hero-cake.JPG";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Hechos frescos con amor</span>

          <h1>
            Endulzando tu
            <span> Paladar, </span>
            Un Pastel ala Vez
          </h1>

          <p>
            Descrubre nuestras delicias pasteles, cupcakes y muchos antojitos
            mas.
          </p>

          <div className="hero-buttons">
            <a href="#treats" className="hero-button-primary">
              Pasteles
            </a>

            <a href="#custom-cakes" className="hero-button-secondary">
              Ordena tu Pastel
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src={heroCake}
            alt="Decorated celebration cake from Lety's Postres"
            className="hero-image"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
