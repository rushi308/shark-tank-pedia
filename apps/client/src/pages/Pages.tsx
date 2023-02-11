import Home from "./home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./about/about";
import Spinner from "../components/Spinner";
import ProductDetail from "./product-detail/ProductDetail";

function Pages() {
  return (
    <>
      <Spinner />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
