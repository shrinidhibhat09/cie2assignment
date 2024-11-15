import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CakeCategories from "./pages/CakeCategories";
import CakeDetails from "./pages/CakeDetails";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CakeCategories />} />
        <Route path="/details/:id" element={<CakeDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
