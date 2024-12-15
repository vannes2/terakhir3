import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./file_css/dataproduk.css";
import AdminGuard from "./AdminGuard";

const DataProduk = () => {
  const [dataProduk, setDataProduk] = useState([]);
  const [tipeKulit, setTipeKulit] = useState([]);
  const [masalahKulit, setMasalahKulit] = useState([]);
  const [formData, setFormData] = useState({
    id_brand: "",
    nama: "",
    id_kategori: "",
    kisaran_harga: "",
    id_tipe_kulit: "",
    id_masalah: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/LoginAdmin");
    } else {
      fetchDataProduk();
      fetchTipeKulit();
      fetchMasalahKulit();
    }
  }, [navigate]);

  const fetchDataProduk = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/produk');
      if (response.ok) {
        const produk = await response.json();
        setDataProduk(produk);
      } else {
        console.error('Failed to fetch produk:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching produk:', error);
    }
  };

  const fetchTipeKulit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tipe-kulit');
      if (response.ok) {
        const tipeKulitData = await response.json();
        setTipeKulit(tipeKulitData);
      } else {
        console.error('Failed to fetch tipe kulit:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching tipe kulit:', error);
    }
  };

  const fetchMasalahKulit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/masalah-kulit');
      if (response.ok) {
        const masalahKulitData = await response.json();
        setMasalahKulit(masalahKulitData);
      } else {
        console.error('Failed to fetch masalah kulit:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching masalah kulit:', error);
    }
  };

  const handleKeluar = () => {
    setShowPopup(true);
  };

  const handleConfirmKeluar = () => {
    localStorage.removeItem("token");
    navigate("/LoginAdmin");
  };

  const handleCancelKeluar = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/produk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchDataProduk();
        setFormData({
          id_brand: "",
          nama: "",
          id_kategori: "",
          kisaran_harga: "",
          id_tipe_kulit: "",
          id_masalah: "",
        });
      } else {
        console.error('Error adding produk:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding produk:', error);
    }
  };

  const handleEdit = (id) => {
    const produk = dataProduk.find((p) => p.id === id);
    setFormData({
      id_brand: produk.id_brand,
      nama: produk.nama_produk,
      id_kategori: produk.id_kategori,
      kisaran_harga: produk.kisaran_harga,
      id_tipe_kulit: produk.id_tipe_kulit,
      id_masalah: produk.id_masalah,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/produk/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        fetchDataProduk();
        setFormData({
          id_brand: "",
          nama: "",
          id_kategori: "",
          kisaran_harga: "",
          id_tipe_kulit: "",
          id_masalah: "",
        });
        setIsEditing(false);
        setEditId(null);
      } else {
        console.error('Error updating produk:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating produk:', error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/produk/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        fetchDataProduk();
      } else {
        console.error('Error deleting produk:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting produk:', error);
    }
  };  
  

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

const filteredProduk = dataProduk.filter(
  (produk) =>
    produk.nama_produk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produk.nama_brand.toLowerCase().includes(searchTerm.toLowerCase())
);

// Function to get the name of the skin type by id
const getTipeKulitName = (id) => {
  const tipe = tipeKulit.find((t) => t.id === id);
  return tipe ? tipe.nama_tipe : "";
};

// Function to get the name of the skin issue by id
const getMasalahKulitName = (id) => {
  const masalah = masalahKulit.find((m) => m.id === id);
  return masalah ? masalah.nama_masalah : "";
};

return (
  <AdminGuard>
    <div className="data-page">
      <header>
        <div className="logo">
          <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/Dashboard">DASHBOARD</Link>
            </li>
            <li>
              <Link to="/Dataproduk">DATA PRODUK</Link>
            </li>
            <li>
              <Link to="/Datadokter">DATA DOKTER</Link>
            </li>
            <li>
              <Link to="/Datauser">DATA USER</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button onClick={handleKeluar}>Keluar</button>
        </div>
      </header>

      <main>
        <h1>Data Produk</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari nama produk..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <p>
          Silakan kelola <strong>Data Produk</strong> dengan apik ya rek!
        </p>
        <div className="form-container">
          <div className="input-group">
            <input
              type="text"
              name="id_brand"
              placeholder="Nama Brand"
              value={formData.id_brand}
              onChange={handleChange}
            />
            <input
              type="text"
              name="nama"
              placeholder="Nama Produk"
              value={formData.nama}
              onChange={handleChange}
            />
            <input
              type="text"
              name="id_kategori"
              placeholder="Kategori"
              value={formData.id_kategori}
              onChange={handleChange}
            />
            <input
              type="text"
              name="kisaran_harga"
              placeholder="Harga"
              value={formData.kisaran_harga}
              onChange={handleChange}
            />
            <select
              name="id_tipe_kulit"
              value={formData.id_tipe_kulit}
              onChange={handleChange}
            >
              <option value="1">Kulit Normal</option>
              <option value="2">Kulit Sensitif</option>
              <option value="3">Kulit Berminyak</option>
              <option value="4">Kulit Kering</option>
              <option value="5">Kulit Kombinasi</option>
            </select>
            <select
              name="id_masalah"
              value={formData.id_masalah}
              onChange={handleChange}
            >
              <option value="1">Jerawat</option>
              <option value="2">Flek Hitam</option>
              <option value="3">Keriput</option>
              <option value="4">Kulit Kering</option>
              <option value="5">Minyak Berlebih</option>
            </select>
          </div>
          <div className="auth-buttons">
            <button onClick={isEditing ? handleUpdate : handleAdd}>
              {isEditing ? "Update Data" : "Tambah Data +"}
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Brand</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Tipe Kulit</th>
              <th>Masalah Kulit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProduk.map((produk, index) => (
              <tr key={produk.id}>
                <td>{index + 1}</td>
                <td>{produk.nama_brand}</td>
                <td>{produk.nama_produk}</td>
                <td>{produk.nama_kategori}</td>
                <td>{produk.kisaran_harga}</td>
                <td>{getTipeKulitName(produk.id_tipe_kulit)}</td>
                <td>{getMasalahKulitName(produk.id_masalah)}</td>
                <td>
                  <button onClick={() => handleEdit(produk.id)}>Edit</button>
                  <button
                    onClick={() => navigate(`/EditDeskripsiProduk/${produk.id}`)}
                  >
                    Edit Deskripsi Produk
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(produk.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Popup konfirmasi */}
      {showPopup && (
        <div className="consul-page-container">
          <div className="popup-overlay">
            <div className="popup-content small-popup">
              <div className="popup-header">Konfirmasi Keluar</div>
              <p className="popup-text-large">
                Apakah Anda yakin ingin keluar?
              </p>
              <div className="popup-button-container">
                <button
                  onClick={handleConfirmKeluar}
                  className="popup-confirm"
                >
                  Yakin
                </button>
                <button onClick={handleCancelKeluar} className="popup-cancel">
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="aboutus-footer">
      <div className="footer-separator full-width"></div>
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
                  <Link to="/profil">Profil</Link>
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
  </AdminGuard>
);
};

export default DataProduk;
