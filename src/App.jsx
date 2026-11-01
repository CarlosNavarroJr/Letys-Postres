import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </>
  );
}

export default App;
