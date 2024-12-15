import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/images/logobesar.svg";
import "./Header.css"; // File CSS untuk Header

const HeaderAfterLogin = () => {
  return (
    <header>
        <div className="logo">
        <img src={logo} alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeAfterLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs_Login">TENTANG KAMI</Link></li>
            <li><Link to="/produk">PRODUK</Link></li>
            <li><Link to="/Ahli">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
        <Link to="/profil"><button>Ayyunie</button></Link>
        </div>
      </header>
  );
};

export default HeaderAfterLogin;