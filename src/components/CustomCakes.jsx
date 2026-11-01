import "../styles/CustomCakes.css";
import customCake from "../assets/images/custom-cake.JPG";

function CustomCakes() {
  return (
    <section
      className="custom-cakes"
      id="custom-cakes"
      aria-labelledby="custom-cakes-heading"
    >
      <div className="custom-cakes-container">
        <div className="custom-cakes-image-wrapper">
          <img
            src={customCake}
            alt="Beautiful decorated custom celebration cake"
            className="custom-cakes-image"
            loading="lazy"
          />
        </div>

        <div className="custom-cakes-content">
          <span className="custom-cakes-eyebrow">Hechos solo para ti</span>

          <h2 id="custom-cakes-heading">
            El Pastel de tus Suenos
            <span>Hecho Realidad!</span>
          </h2>

          <p>
            Toda celebracion merece algo especial. Desde cumpleanos, babyshowers
            o bodas, aqui hacemos pasteles personalizados para cualqier ocacion
          </p>

          <ul className="custom-cakes-features">
            <li>Disenos personalizados</li>
            <li>Sabores deliciosos</li>
            <li>Pasteles para cada ocacion</li>
          </ul>

          <a href="#cake-request" className="custom-cakes-button">
            Pide Tu Pastel
          </a>
        </div>
      </div>
    </section>
  );
}

export default CustomCakes;
