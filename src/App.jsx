import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import CustomCakes from "./components/CustomCakes";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedProducts />
        <CustomCakes />

        <section
          className="cake-request"
          id="cake-request"
          aria-labelledby="cake-request-heading"
        >
          <div className="cake-request-container">
            <h2>Vamos A Crear Algo Dulce</h2>

            <p>Nuestra forma para describir tu pastel llegara pronto</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
