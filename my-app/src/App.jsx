import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./file_css/index.css";
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
import DeskripsiProdukRecom from "./DeskripsiProdukRecom.jsx";
import Profil_Edit from "./profil_edit.jsx";
import { PaymentProvider } from "./PaymentContext"; // Import PaymentProvider
import Footer from "./components/Footer.jsx";
import HeaderBeforeLogin from "./components/HeaderBeforeLogin.jsx";
import HeaderAfterLogin from "./components/HeaderAfterLogin.jsx";
import LoginAdmin from "./LoginAdmin.jsx";
import Datadokter from "./Datadokter.jsx";
import DataUser from "./Datauser.jsx";
import DataProduk from "./Dataproduk.jsx";
import EditDeskripsiProduk from "./EditDeskripsiProduk.jsx";
import Dashboard from "./Dashboard.jsx";
import AdminGuard from "./AdminGuard";
import PasienKonsul from "./PasienKonsul"; // Ditambahkan untuk PasienKonsul
import UlasanProduk from "./ulasan_produk.jsx";
import HeaderDokter from "./components/HeaderDokter.jsx";
import FooterDokter from "./components/FooterDokter.jsx";
import ProdukList from "./components/produkList.jsx";
import ProdukListRecom from "./components/produkListRecom.jsx";
import Datadeskripsiproduk from "./datadeskripsiproduk.jsx";

const App = () => {
  // Simulasi data user yang sudah login
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  });

  return (
    <div>
      <PaymentProvider>
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
          <Route path="/ProdukToner" element={<ProdukToner />} />
          <Route path="/ProdukPelembap" element={<ProdukPelembap />} />
          <Route path="/ProdukSerum" element={<ProdukSerum />} />
          <Route path="/ProdukSunscreen" element={<ProdukSunscreen />} />
          <Route path="/ProdukMasker" element={<ProdukMasker />} />
          <Route path="/ProdukPembersih" element={<ProdukPembersih />} />
          <Route path="/produk/:id" element={<DeskripsiProduk />} />
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
          <Route path="/Recom" element={<Recom />} />
          <Route
            path="/DeskripsiProdukRecom"
            element={<DeskripsiProdukRecom />}
          />
          <Route path="/profil_edit" element={<Profil_Edit />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/HeaderBeforeLogin" element={<HeaderBeforeLogin />} />
          <Route path="/HeaderAfterLogin" element={<HeaderAfterLogin />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/ulasan_produk" element={<UlasanProduk />} />
          <Route path="/HeaderDokter" element={<HeaderDokter />} />
          <Route path="/FooterDokter" element={<FooterDokter />} />
          <Route path="/ProdukList" element={<ProdukList />} />
          <Route path="/ProdukListRecom" element={<ProdukListRecom />} />
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
          <Route
            path="/Datadeskripsiproduk"
            element={
              <AdminGuard>
                <Datadeskripsiproduk />
              </AdminGuard>
            }
          />
          {/* Tambahkan rute untuk PasienKonsul */}
          <Route path="/pasienkonsul" element={<PasienKonsul />} />
          {/* Rute fallback untuk 404 */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </PaymentProvider>
    </div>
  );
};

export default App;
