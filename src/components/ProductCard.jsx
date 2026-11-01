import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-image"
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">{formattedPrice}</span>

          <span className="product-coming-soon">Ordering Soon</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
