import ProductCard from "./ProductCard";
import { featuredProducts } from "../data/products";
import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section
      className="featured-products"
      id="treats"
      aria-labelledby="featured-heading"
    >
      <div className="featured-container">
        <div className="featured-heading">
          <span className="featured-eyebrow">Hechos Frescos, Con Amor</span>

          <h2 id="featured-heading">Nuestras Delicias Favoritas</h2>

          <p>
            Desde pasteles para cualquier tipo de celebracion y tambien
            antojitos deliciosos. Hacemos delicias para cualquier tipo de
            celebracion.
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
