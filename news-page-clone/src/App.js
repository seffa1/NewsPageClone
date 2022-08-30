import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Popular />
        <Topic title={"Investigations"} link={"1"} />
        <Topic title={"Geopolitics & Finance"} link={"1"} />
        <Topic title={"Health"} link={"1"} />
      </div>
    </div>
  );
}

export default App;
