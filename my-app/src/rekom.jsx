import React from "react";
import { Link } from "react-router-dom";
import "./recom.css"; // Make sure to import the CSS

const Recom = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="homeafterlogin.html">Home</a>
            </li>
            <li>
              <a href="aboutus.html">About Us</a>
            </li>
            <li>
              <a href="product.html">Product</a>
            </li>
            <li>
              <a href="pilihahli.html">Consultation</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="profile.html">
            <button>PROFILE</button>
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>RECOMMENDATIONS</h1>
          </div>
        </section>

        <section className="recommendations-section">
          <div className="skin-problems">
            <h2>Skin Problems</h2>
            <div>
              Skin Type: <span className="badge">Dry Skin</span>
            </div>
            <div>
              Skin Concerns:{" "}
              <span className="badge">Dryness, Sensitive Skin</span>
            </div>
            <div>
              Age: <span className="badge">23</span>
            </div>
          </div>

          {/* Products Categories */}
          <div className="product-category">
            <h3>Pembersih</h3>
            <div className="product-list">
              <div className="product-item">
                <img src="images/pembersih1.png" alt="Cetaphil" />
                <a href="detailproduct.html">
                  <div className="links">
                    <p>
                      <strong>CETAPHIL</strong>
                    </p>
                    <p>Hydrating Foaming Cream...</p>
                    <p>Rp 155.000 - Rp 167.000</p>
                  </div>
                </a>
              </div>
              {/* Add other products in the same way */}
            </div>
          </div>

          {/* Repeat similar blocks for other product categories */}
          <div className="product-category">
            <h3>Pelembap</h3>
            <div className="product-list">
              <div className="product-item">
                <img src="images/hale.png" alt="Hale" />
                <p>
                  <strong>HALE</strong>
                </p>
                <p>Rp 110.000 - Rp 130.000</p>
              </div>
              {/* Add other products */}
            </div>
          </div>

          {/* Continue with the rest of the categories: Serum, Sunscreen, Masker */}
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="images/logobesar.svg" alt="Logo Ayune" />
          </div>
          <div className="footer-content">
            <div className="customer-care">
              <h3>Customer Care</h3>
              <p>Whatsapp: +62-851-6564-4356</p>
              <p>Instagram: @ayunneconsultation</p>
              <p>Email: ayunneconsultation@gmail.com</p>
              <p>
                <strong>Jam operasional:</strong>
                <br />
                Senin-Jumat: 10:00 - 21:00 WIB
                <br />
                Sabtu: 10:00 - 17:00 WIB
              </p>
            </div>
            <div className="account">
              <h3>My Account</h3>
              <p>
                <a href="profile.html">Profile</a>
              </p>
              <p>
                <a href="signup.html">Sign In</a>
              </p>
              <p>
                <a href="login.html">Login</a>
              </p>
            </div>
            <div className="social-media">
              <h3>Follow us:</h3>
              <div className="social-icons">
                <a href="#">
                  <img src="images/instagram.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="images/twt.png" alt="Twitter" />
                </a>
                <a href="#">
                  <img src="images/yt.png" alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©AYUNNE, 2024. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default Recom;
