import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [ 
  { name: 'Mirana Bella',
    date: '10/10/2024',
    rating: 4,
    age: 28,
    skinType: 'Kering',
    skinIssue: 'Sangat kering,Sensitif',
    skinProblem: 'Sangat Kering',
    comment: 'Busanya banyak dan lembut bgt jd bikin mood buat cuci muka 🥰 wangi buahnya seger, setelah pakai wajah jd lembab dan gabikin kering ketarik gt 💆‍♀️' 
  },
  { name: 'Ariana Joe', 
    date: '01/10/2024', 
    rating: 5, 
    age: 19, 
    skinType: 'Kering', 
    skinIssue: 'Sangat kering, Sensitif', 
    skinProblem: 'Sansitif',
    comment: 'Bikin cerahan banget, jerawat yg aktif dan meradang jd kempes dalam semalam, teksturnya lembut banget, tapi untuk aku di kulit yang kombinasi ini bikin beberapa area jadi kering tp overall bagus banget sihh karna tinggal lanjutin skincarean aja dan biar kulitnya moist lagi' 
  }, 
  { name: 'Sandrina', 
    date: '27/09/2024', 
    rating: 5, 
    age: 19, 
    skinType: 'Kombinasi', 
    skinIssue: 'Sensitif',
    skinProblem: 'Bruntusan',
    comment: 'Facial foam dari Senka yang ada kandungan mixed berries yang kaya akan antioksidan, saat pakai facial foam ini dia punya foam yang lembut banget di kulit, busanya juga banyak, ada sedikit aroma apel yang enak, dan facial foam ini meresap banget ke kulit bikin kulit lebih cerah, sehat dan lembab' 
  }, 
];

const DeskripsiProduk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Mengelola modal
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleModal = (action) => {
    if (action === 'mengerti') {
      navigate('/ulasanproduk'); // Navigasi ke halaman ulasan
    }
    setIsModalOpen(false); // Tutup modal
  };

  return (
    <div className="profile-page">
      {/* header */}
      <Header />

      <div className='space-y-[30px] bg-white'>
        <section className='bg-[#E3F2ED] py-[5px]'>
          <div className='flex gap-[89px] px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[40px] font-bold'>PRODUK</p>
          </div>
        </section>
        {/* Section Detail Produk */}
        <section>
          <div className='grid grid-cols-2 gap-y-[10px] px-[130px] py-[40px] bg-white'>
            <div>
                <div className='flex items-center justify-center'>
                    <img src="/assets/images/senkadetail.png" alt="SENKA" />
                </div>
                <p className='text-center font-bold text-[#3B3B3B] text-[20px]'>Kisaran Harga</p>
                <p className='text-center text-[12px]'>Rp72.000 - Rp80.000</p>
            </div>
            <div className='space-y-[21px]'>
                <div className='text-[#3B3B3B]'>
                    <p className='text-[40px]'><span className='font-bold'>SENKA - </span>Perfect Whip Berry Brihght</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Deskripsi</p>
                    <p className='text-[16px] text-justify'>Facial foam terbaru dari Senka yang dapat membuat kulit wajahmu bersih, lembap, dan tampak cerah merona alami! Diformulasikan dengan Mixed Berries (Cranberry & Raspberry) yang kaya antioksidan, Perfect Whip Berry Bright dapat membuat kulit wajah tampak cerah merona (healthy blush). Selain itu, kandungan Japanese Yoshino Cherry Extract bisa membantu deep cleansing sel kulit mati dan kotoran secara lembut. Cocok digunakan bagi kulit normal hingga berminyak yang kusam, kering, dan terasa kasar.</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Komposisi</p>
                    <p className='text-[16px] text-justify'>Water (Aqua), Glycerin, Stearic Acid, Myristic Acid, Potassium Hyfroxide, Lauric Acid, PEG-8, Glyceryl Stearate SE, Sodium Methyl Cocoyl Taurate, Polyquaternium-7, Fragrance, Acrylates Copolymer, Disodium EDTA, Sodium Citrate, Algin, Sodium Benzoate, Sodium Metabisulfite, Phenoxyethanol, Caprylyl Glycol, Chondrus Crispus, Iron Oxides, Sodium Lauryl Sulfate, Clacium Chloride, RED 30, PEG/PPG-14/7 Dimethyl Ether, Vaccinium Macrocarpon (Cranberry) Fruit Extract, Butylene Glycol, Sericin, Lauryl Glucoside, Potassium Sorbate, Citric Acid, Prunus Yedoensis Leaf Extract, Sodium Acetylated Hyaluronate, Sodium Hyaluronate, Sorbic Acid, Glycyrrhiza Glabra (Licorice) Root Extract, Rubus Idaeus (Raspberry) Fruit Extract.</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Cara Pemakaian</p>
                    <ol>
                        <li>1. Cuci tangan hingga bersih dan keluarkan Senka Perfect Whip kurang lebih 2 cm di atas permukaan tangan</li>
                        <li>2. Beri air kurang lebih sebanyak 1 sendok teh</li>
                        <li>3. Buat Gerakan melingkar 0 untuk menghasilkan foam yang tebal dan padat</li>
                        <li>4. Usapkan dan gunakan foam untuk cuci muka</li>
                    </ol>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Link Pembelian</p>
                    <div className='flex items-center justify-start gap-[8px]'>
                        <Link to="https://shopee.co.id/Senka-Perfect-Whip-Gentle-Rose-Facial-Foam-100g-i.140192883.24620214729?sp_atk=888cba8a-a499-44b5-a31c-5c62143b65e6&xptdk=888cba8a-a499-44b5-a31c-5c62143b65e6"><img className='w-[76px] h-[76px]' src="/assets/images/shopee.png" alt="shopee" /></Link>
                        <Link to="https://www.tokopedia.com/nihonmart/senka-perfect-whip-berry-bright-100g?extParam=ivf%3Dfalse%26keyword%3Dsenka+perfect+whip+berry+bright%26search_id%3D202411231704385EF27DE50DE81D3CA6PW%26src%3Dsearch"><img className='w-[66px] h-[66px]' src="/assets/images/tokopedia.png" alt="tokopedia" /></Link>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className='bg-[#E3F2ED] py-[21px] flex justify-center relative'>
          <div className=' px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[20px] font-bold text-center mb-[5px]'>Ulasan</p>
            <div className='flex gap-[10px] items-center justify-center'>
                <div className='flex gap-[4.34px] items-center mb-[10px]' >
                    <img src="/assets/images/1b.png" alt="1b" />
                    <img src="/assets/images/2b.png" alt="2b" />
                    <img src="/assets/images/3b.png" alt="3b" />
                    <img src="/assets/images/4b.png" alt="4b" />
                    <img src="/assets/images/5b.png" alt="5b" />
                </div>
                <p className='font-bold text-[24.24px]'>4.7 / 5</p>
            </div>
          </div>
        
          <button className='px-[11px] bg-[#147A63] text-white font-bold rounded-full h-[37px] w-[200px] py-[50px] text-[20px] absolute right-[120px] top-[16px]' onClick={() => setIsModalOpen(true)} // Pastikan fungsi ini dipanggil
          >
            Berikan Ulasan
          </button>
         
        </section>
        {/* kumpulan ulasan */}
        <section className='ulas'>
            {/* ulasan 1 */}
            <div className="review-container">
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-left">
                    <h3 className="review-name">{review.name}</h3>
                    <p className="review-date">{review.date}</p>
                    <div className="review-rating">
                      {"★".repeat(review.rating)}{" "}
                    <span className="empty-stars">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                </div>
            <div className="review-center">
              <p>
                <strong>Umur:</strong> {review.age}
              </p>
              <p>
                <strong>Tipe Kulit:</strong> {review.skinType}
              </p>
              <p>
                <strong>Masalah Kulit:</strong> {review.skinProblem}
              </p>
            </div>
            <div className="review-right">
              <p className="review-comment">{review.comment}</p>
            </div>
          </div>
          ))}
          {/* swipe */}
          <div className='flex items-center justify-center gap-[17px]'>
              <FaChevronLeft className='text-xl' />
              <div className='flex gap-[7px]'>
              <p className="flex items-center justify-center rounded-full bg-[#147A63] text-white text-[24px] w-[50px] h-[50px] font-bold">
                1
              </p>
              </div>
              <FaChevronRight className='text-xl' />
            </div>
          </div>
        </section>
      </div>

      {/* popup */}
      {isModalOpen && (
        <div className='popup-overlay'>
          <div className='popup-content-ulas'>
            <h3 className='popup-header'>Simpan ulasan anda dan dapatkan koin</h3>
            <div className='posisi'>
              <p>
                <strong>Pastikan keaslian ulasan anda</strong><br />
                Pada saat menulis ulasan diharapkan user menulis berdasarkan pengalaman pribadi.
              </p>
              <p>
                <strong>Ulas sesuai dengan produk</strong><br />
                Pastikan ulasan kamu relevan dan hanya berfokus pada produk yang sedang dikomentari.
              </p>
              <p>
                <strong>Sopan dan tidak SARA</strong><br />
                Gunakan bahasa yang sopan dan hindari konten yang mengandung unsur SARA (Suku, Agama, Ras, dan Antargolongan).
              </p>
              <p>
                <strong>Ada ulasan yang mengganggu?</strong><br />
                Bagian ini memungkinkan kamu untuk melaporkan ulasan yang mungkin tidak pantas atau melanggar aturan.
              </p>
            </div>
            <div className="popup-button-container">
              <button className='popup-button btn-cancel' onClick={() => handleModal('batal')}>Batal</button>
              <button className='popup-button btn-exit' onClick={() => handleModal('mengerti')}>Mengerti</button>
            </div>
          </div>
        </div>
      )}

    <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default DeskripsiProduk