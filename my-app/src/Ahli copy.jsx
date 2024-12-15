import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate untuk navigasi
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const Ahli = () => {
  const [dokters, setDokters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Inisialisasi useNavigate

  // Ambil data dari endpoint backend
  useEffect(() => {
    const fetchDokters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/dokters");
        const data = await response.json();
        setDokters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDokters();
  }, []);

  const filteredDokters = dokters.filter((dokter) =>
    dokter.nama_dokter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fungsi untuk navigasi ke halaman RincianBayar
  const handleDetailClick = (dokter) => {
    navigate("/rincianbayar", { state: { dokter } }); // Kirim data dokter sebagai state
  };

  const handleNavigateToConsul = (dokter) => {
    localStorage.setItem("selectedDoctor", JSON.stringify(dokter)); // Simpan data dokter di local storage
    navigate("/consul", { state: { dokter } });
  };
  

  return (
    <div>
      <Header />
      <div className="ahli-container">
        <h1>Pilih Ahli</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Cari dokter..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="dokter-grid">
          {filteredDokters.map((dokter) => (
            <div key={dokter.id} className="dokter-card">
              <div className="dokter-left">
                {/* Foto Dokter dengan Navigasi */}
                <img
                  className="dokter-image"
                  src={`http://localhost/assets/images/${dokter.gambar}`}
                  alt={dokter.nama_dokter}
                  onClick={() => handleDetailClick(dokter)} // Navigasi saat foto diklik
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="dokter-right">
                {/* Nama Dokter dengan Navigasi */}
                <h2
                  className="dokter-name"
                  onClick={() => handleDetailClick(dokter)} // Navigasi saat nama diklik
                  style={{ cursor: "pointer", color: "#0,0,0", }}
                >
                  {dokter.nama_dokter}
                </h2>
                <p className="dokter-specialty">{dokter.bidang_dokter}</p>
                <p className="dokter-experience">
                  <span className="icon">📆</span> {dokter.riwayat_dokter}
                </p>
                <p className="dokter-schedule">Tersedia: {dokter.jadwal}</p>
                <p className="dokter-price">
                  Rp {dokter.harga_dokter.toLocaleString()}
                </p>
                <div className="dokter-status">
                  <span
                    className={`status-label ${
                      dokter.is_available === 1
                        ? "status-active"
                        : "status-inactive"
                    }`}
                  >
                    {dokter.is_available === 1
                      ? "Tersedia"
                      : "Tidak Tersedia"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-separator full-width"></div>
      <Footer />

{/* CSS inline */}
  <style jsx>{`
    .ahli-container {
      padding: 20px;
      text-align: center;
      background-color: #f9f9f9; /* Background untuk seluruh container */
    }

    h1 {
    font-size: 50px;
    style: font-extrabold
    margin-bottom: 20px;
    color: #333; /* Warna teks (opsional) */
    }

    .search-bar {
      width: 50%;
      padding: 10px;
      margin-bottom: 20px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    .dokter-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 20px;
    }

    .dokter-card {
      background-color: #e3f2ed; /* Warna putih untuk kartu dokter */
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .dokter-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    .dokter-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    .dokter-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #ddd;
    }

    .dokter-right {
      flex: 2;
      padding: 15px;
      text-align: left;
      background-color: #e3f2ed;
    }

    .dokter-name {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }

    .dokter-specialty {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }

    .dokter-experience {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .dokter-schedule {
      font-size: 14px;
      color: #28a745;
      margin-bottom: 10px;
    }

    .dokter-price {
      font-weight: bold;
      font-size: 16px;
      color: #000;
      margin-bottom: 10px;
    }

    .dokter-status {
      display: flex;
      justify-content: flex-end;
    }

    .status-label {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      color: #fff;
    }

    .status-active {
      background-color: #28a745; /* Warna hijau */
    }

    .status-inactive {
      background-color: #dc3545; /* Warna merah */
    }

    @media (max-width: 1024px) {
      .dokter-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .dokter-grid {
        grid-template-columns: 1fr;
      }
    }`
  }</style>
    </div>
  );
};

export default Ahli;
