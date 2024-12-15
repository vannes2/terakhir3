import React from 'react';
import ProdukList from './components/produkList';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
          <Header />
            <ProdukList />
            <div className="footer-separator"></div>
          <Footer />
        </div>
    );
};

export default App;