import React from "react";
import ProdukListRecom from "./components/produkListRecom";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <ProdukListRecom />
      <div className="footer-separator"></div>
      <Footer />
    </div>
  );
};

export default App;
