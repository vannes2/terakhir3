import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Pastikan Link diimpor
import "./file_css/LoginAdmin.css";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({ email, password }); // Log data yang dikirim untuk memastikan formatnya benar.

    // Hardcode email dan password admin
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      // Jika login berhasil
      localStorage.setItem("token", "admin-token"); // Simpan token admin
      navigate("/Dashboard"); // Redirect to admin page
    } else {
      // Jika login gagal
      setError("Email atau password salah.");
    }
  };

  return (
    <div className="LoginAdmin-page">
      <header>
        <div className="logo">
          <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="#">DASHBOARD</Link>
            </li>
            <li>
              <Link to="#">DATA PRODUK</Link>
            </li>
            <li>
              <Link to="#">DATA DOKTER</Link>
            </li>
            <li>
              <Link to="#">DATA USER</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="main">
          <div className="login">
            <h2>ADMIN</h2>
            <form onSubmit={handleLogin}>
              <p>E-mail</p>
              <input
                type="email"
                placeholder="Input your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>Kata sandi</p>
              <input
                type="password"
                placeholder="Input your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit" className="btn">
                MASUK
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>

      <div className="footer-separator"></div>

      {/* footer */}
      <footer className="aboutus-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
          </div>
          <div className="footer-content">
            <div className="customer-care">
              <h3>Layanan Pelanggan</h3>
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
              <h3>Akun Saya</h3>
              <p>
                <Link to="#">Profil</Link>
              </p>
              <p>
                <Link to="/signup">Daftar</Link>
              </p>
              <p>
                <Link to="/Login">Masuk</Link>
              </p>
            </div>
            <div className="social-media">
              <h3>Ikuti Kami:</h3>
              <div className="social-icons">
                <a href="#">
                  <img src="assets/images/instagram.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="assets/images/twt.png" alt="Twitter" />
                </a>
                <a href="#">
                  <img src="assets/images/yt.png" alt="YouTube" />
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

export default LoginAdmin;