import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Topic from "./components/Topic";

// TODO: Populate data with API:
// https://jasonwatmore.com/post/2020/07/17/react-axios-http-get-request-examples

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
