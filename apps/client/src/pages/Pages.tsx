import Home from "./home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "../components/Spinner";
import ProductDetail from "./product-detail/ProductDetail";
import AboutSharks from "./about-sharks/about-sharks";

function Pages() {
  return (
    <>
      <Spinner />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-sharks" element={<AboutSharks />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
