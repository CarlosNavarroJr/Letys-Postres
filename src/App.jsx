import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="app">
        <div className="welcome-card">
          <h1>Lety's Postres</h1>

          <p>Pasteles frescos hechos con amor</p>

          <button className="welcome-button">Explora nuestros pasteles</button>
        </div>
      </main>
    </>
  );
}

export default App;
