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
          <span className="featured-eyebrow">Baked Fresh, Made With Love</span>

          <h2 id="featured-heading">Our Sweet Favorites</h2>

          <p>
            From celebration cakes to delicious cupcakes, discover something
            sweet for every occasion.
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
