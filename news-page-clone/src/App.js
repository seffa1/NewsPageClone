import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Popular />
    </div>
  );
}

export default App;
