import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import './file_css/consul.css';

const socket = io('http://localhost:5000'); // Hubungkan ke backend di port 5000

const Consul = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('Pesan diterima di Consul:', message); // Log diterima
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = { sender: 'dokter', text: message };
      console.log('Mengirim pesan dari Consul:', msg); // Log pengiriman
      socket.emit('message', msg);
      setMessage(''); // Kosongkan input setelah mengirim pesan
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleUploadClick = () => {
    setShowPopup(false);
    setShowSecondPopup(true);
  };

  const handleSecondPopupClose = () => {
    setShowSecondPopup(false);
    navigate("/Recom");
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="consul-page-container">
      <header>
        <div className="logo">
          <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeAfterLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs_Login">TENTANG KAMI</Link></li>
            <li><Link to="/Produk">PRODUK</Link></li>
            <li><Link to="/Ahli">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/profil"><button>Ayyunie</button></Link>
        </div>
      </header>

      {/* Content */}
      <div className="header-divider">
        <span className="header-divider-text">Konsultasi</span>
      </div>

      <div>
        <section className="consultation">
          <div className="chat-section">
            <div className="chat-box">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="input-box">
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Type here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div id="cam-button">
                  <button type="button"><img src="assets/images/cam.png" alt="Camera" /></button>
                </div>
                <button type="submit"><img src="assets/images/send.png" alt="Send" /></button>
              </form>
            </div>
          </div>

          {/* Doctor Profile Section */}
          <aside className="profile-section">
            <div className="doctor-profile">
              <h1>Profile Dokter</h1>
              <img src="assets/images/expert2.png" alt="Dr. Emy Kusumaningsih" />
              <h2>Dr. Emy Kusumaningsih, Sp.DV</h2>
              <h6>Dokter Spesialis Kulit</h6>
              <br />
              <p>Beliau merupakan dokter spesialis dermatovenereologi estetika kulit yang sudah lama bergabung di klinik kecantikan, tentunya pengalaman beliau sudah banyak tentang masalah kulit yang sering dialami oleh kebanyakan orang</p>
            </div>
            <br />
            <div className="skin-problems">
              <h1>Masalah Kulit</h1>
              <form action="recommendations.html" method="GET">
                <label htmlFor="skin-type">Tipe Kulit</label>
                <select name="skin-type" id="skin-type">
                  <option value="">Pilih jenis kulit...</option>
                  <option value="normal">Kulit Normal</option>
                  <option value="oily">Kulit Berminyak</option>
                  <option value="dry">Kulit Kering</option>
                  <option value="sensitive">Kulit Sensitif</option>
                  <option value="combination">Kulit Kombinasi</option>
                </select>

                <label htmlFor="skin-concerns">Kondisi Kulit:</label>
                <textarea name="skin-concerns" id="skin-concerns" placeholder="Masukkan Kondisi Kulit Anda sesuai dengan hasil Konsultasi"></textarea>

                <label htmlFor="age">Usia:</label>
                <input type="text" id="age" placeholder="Masukkan Usia" />

                <button type="button" onClick={togglePopup}>Rekomendasi</button>
              </form>
            </div>
          </aside>
        </section>
      </div>

      {/* Review Pop-up */}
      {showPopup && (
        <div id="reviewPopup" className="popup-overlay-unggah">
          <div className="popup-content-unggah">
            <div className="popup-header">Berikan ulasan Dokter lalu dapatkan koin</div>
            <div className="stars" id="starRating">
              <input type="radio" name="star" id="star1" /><label htmlFor="star1">★</label>
              <input type="radio" name="star" id="star2" /><label htmlFor="star2">★</label>
              <input type="radio" name="star" id="star3" /><label htmlFor="star3">★</label>
              <input type="radio" name="star" id="star4" /><label htmlFor="star4">★</label>
              <input type="radio" name="star" id="star5" /><label htmlFor="star5">★</label>
            </div>
            <div className="tulis">
              <p>Tuliskan ulasan Anda (opsional*)</p>
            </div>
            <div>
              <textarea className="textarea" placeholder="Tambahkan ulasan tertulis jika anda ingin memberikan masukan"></textarea>
            </div>
            <div className="popup-button-container">
              <button className="unggah-btn" onClick={handleUploadClick}>Unggah</button>
            </div>
          </div>
        </div>
      )}

      {/* Second Pop-up */}
      {showSecondPopup && (
        <div id="secondPopup" className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">Ulasan berhasil disimpan</div>
            <p className="selamat">SELAMAT!!</p>
            <p className="koin">500 KOIN</p>
            <p className="liat">Koin dapat dilihat pada halaman profil.</p>
            <div className="popup-button-container">
              <button className="rekom-btn" onClick={handleSecondPopupClose}>Rekomendasi</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="footer-separator"></div>
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
                <strong>Jam operasional:</strong><br />
                Senin-Jumat: 10:00 - 21:00 WIB<br />
                Sabtu: 10:00 - 17:00 WIB
              </p>
            </div>
            <div className="account">
              <h3>Akun Saya</h3>
              <p><Link to="/profil">Profil</Link></p>
              <p><Link to="/signup">Daftar</Link></p>
              <p><Link to="/login">Masuk</Link></p>
            </div>
            <div className="social-media">
              <h3>Ikuti Kami:</h3>
              <div className="social-icons">
                <a href="#"><img src="assets/images/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="assets/images/twt.png" alt="Twitter" /></a>
                <a href="#"><img src="assets/images/yt.png" alt="YouTube" /></a>
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

export default Consul;
