import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Science from "./pages/Science";
import Health from "./pages/Health";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Sports from "./pages/Sports";
import Subscribe from "./components/Subscribe";

// TODO: Populate data with API:
// https://jasonwatmore.com/post/2020/07/17/react-axios-http-get-request-examples

function App() {
  // THIS KEY SHOULD BE MOVED TO A CONFIG FILE, OR TO A LOCAL VARIABLE!
  const API_KEY = "880af114303b43ac96c84590f587e886";
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home API_KEY={API_KEY} />}></Route>
          <Route
            path="/technology"
            element={<Technology API_KEY={API_KEY} />}
          ></Route>
          <Route
            path="/science"
            element={<Science API_KEY={API_KEY} />}
          ></Route>
          <Route path="/health" element={<Health API_KEY={API_KEY} />}></Route>
          <Route
            path="/business"
            element={<Business API_KEY={API_KEY} />}
          ></Route>
          <Route
            path="/entertainment"
            element={<Entertainment API_KEY={API_KEY} />}
          ></Route>
          <Route path="/sports" element={<Sports API_KEY={API_KEY} />}></Route>
        </Routes>
        <Subscribe />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
