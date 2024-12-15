import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./file_css/Index.css"; // Pastikan path file CSS benar
import Signup from "./signup.jsx";
import AboutUs from "./AboutUs.jsx";
import HomeAfterLogin from "./HomeAfterLogin.jsx";
import HomeBeforeLogin from "./HomeBeforeLogin.jsx";
import Login from "./Login.jsx";
import AboutUs_Login from "./AboutUs_Login.jsx";
import ForgotPass from "./forgotpass.jsx";
import ResetPassword from "./Resetpass.jsx";
import Profil from "./profil.jsx";
import Ahli from "./Ahli.jsx";
import Opsibayar from "./Opsi_Bayar.jsx";
import Rincianbayar from "./rincianbayar.jsx";
import QR from "./qr.jsx";
import VA from "./va.jsx";
import Consul from "./consul.jsx";
import Ulasan_Ahli from "./ulasan_ahli.jsx";
import Produk from "./Produk.jsx";
import ProdukPembersih from "./ProdukPembersih.jsx";
import DeskripsiProduk from "./DeskripsiProduk.jsx";
import ProdukToner from "./ProdukToner.jsx";
import ProdukPelembap from "./ProdukPelembap.jsx";
import ProdukSerum from "./ProdukSerum.jsx";
import ProdukSunscreen from "./ProdukSunscreen.jsx";
import ProdukMasker from "./ProdukMasker.jsx";
import Recom from "./Recom.jsx";
import LoginAdmin from "./LoginAdmin.jsx";
import Datadokter from "./Datadokter.jsx";
import DataUser from "./Datauser.jsx";
import DataProduk from "./dataproduk.jsx";
import EditDeskripsiProduk from "./EditDeskripsiProduk.jsx";
import Ulasan_produk from "./ulasan_produk.jsx";
import Dashboard from "./Dashboard.jsx";
import AdminGuard from "./AdminGuard";
import PasienKonsul from "./PasienKonsul"; // Ditambahkan untuk PasienKonsul

const App = () => {
  // Simulasi data user yang sudah login
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBeforeLogin />} />{" "}
        {/* Set this as the main page */}
        <Route path="/Ahli" element={<Ahli />} />
        <Route path="/HomeAfterLogin" element={<HomeAfterLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/AboutUs_Login" element={<AboutUs_Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profil" element={<Profil user={user} />} />{" "}
        {/* Data user diteruskan ke komponen Profil */}
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Produk/Toner" element={<ProdukToner />} />
        <Route path="/Produk/Pelembap" element={<ProdukPelembap />} />
        <Route path="/Produk/Serum" element={<ProdukSerum />} />
        <Route path="/Produk/Sunscreen" element={<ProdukSunscreen />} />
        <Route path="/Produk/Masker" element={<ProdukMasker />} />
        <Route path="/Produk/Pembersih" element={<ProdukPembersih />} />
        <Route
          path="/Produk/Pembersih/Deskripsi"
          element={<DeskripsiProduk />}
        />
        <Route path="/resetpass" element={<ResetPassword />} />{" "}
        {/* Use uppercase component name */}
        <Route path="/forgotpass" element={<ForgotPass />} />{" "}
        {/* Use uppercase component name */}
        <Route path="/Opsi_Bayar" element={<Opsibayar />} />
        <Route path="/Rincianbayar" element={<Rincianbayar />} />
        <Route path="/qr" element={<QR />} />
        <Route path="/va" element={<VA />} />
        <Route path="/consul" element={<Consul />} />
        <Route path="/ulasan_ahli" element={<Ulasan_Ahli />} />
        <Route path="/ulasan_produk" element={<Ulasan_produk />} />
        <Route path="/Recom" element={<Recom />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route
          path="/Datadokter"
          element={
            <AdminGuard>
              <Datadokter />
            </AdminGuard>
          }
        />
        <Route
          path="/Datauser"
          element={
            <AdminGuard>
              <DataUser />
            </AdminGuard>
          }
        />
        <Route
          path="/Dataproduk"
          element={
            <AdminGuard>
              <DataProduk />
            </AdminGuard>
          }
        />
        <Route
          path="/EditDeskripsiProduk/:id"
          element={
            <AdminGuard>
              <EditDeskripsiProduk />
            </AdminGuard>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <AdminGuard>
              <Dashboard />
            </AdminGuard>
          }
        />

        {/* Tambahkan rute untuk PasienKonsul */}
        <Route path="/pasienkonsul" element={<PasienKonsul />} />

        {/* Rute fallback untuk 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
