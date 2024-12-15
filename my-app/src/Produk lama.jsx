import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropright } from 'react-icons/io';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

const Produk = () => {
  const products = [
    { id: 1, name: 'SENKA' ,jenis: 'Miraculous Retinol Toner', price: 'Rp169.000 - Rp175.000', image: 'assets/images/pembersih/senkapembersih.png', category: 'Pembersih' },
    { id: 2, name: 'CETAPHIL' ,jenis: 'Acne Essence Toner', price: 'Rp83.000 - Rp90.000', image: 'assets/images/pembersih/cetaphilpembersih.png', category: 'Pembersih' },
    { id: 3, name: 'EMINA' ,jenis: 'Hydrate Glow Face Toner', price: 'Rp57.000 - Rp65.000', image: 'assets/images/pembersih/eminapembersih.png', category: 'Pembersih' },
    { id: 4, name: 'SKINTIFIC' ,jenis: 'Hydrate Glow Face Toner', price: 'Rp57.000 - Rp65.000', image: 'assets/images/pembersih/skintificpembersih.png', category: 'Pembersih' },
    { id: 5, name: 'BREYLEE' ,jenis: 'Hydrate Glow Face Toner', price: 'Rp57.000 - Rp65.000', image: 'assets/images/pembersih/breyleepembersih.png', category: 'Pembersih' },

    { id: 6, name: 'AVOSKIN' ,jenis: 'Miraculous Retinol Toner', price: 'Rp169.000 - Rp175.000', image: 'assets/images/toner/avoskintonerr.png', category: 'Toner' },
    { id: 7, name: 'SCARLETT' ,jenis: 'WHITENING Acne Essence Toner', price: 'Rp83.000 - Rp90.000', image: 'assets/images/toner/scarlettonerr.png', category: 'Toner' },
    { id: 8, name: 'DERMALUZ' ,jenis: 'Hydrate Glow Face Toner', price: 'Rp57.000 - Rp65.000', image: 'assets/images/toner/dermatonerr.png', category: 'Toner' },
    { id: 9, name: 'BARENBLISS' ,jenis: 'Glow Bottle! Lavabiome', price: 'Rp16.900 - Rp.20.000', image: 'assets/images/toner/bnbtonerr.png', category: 'Toner' },
    { id: 10, name: 'PONDS' ,jenis: 'White Beauty Toner 150ml', price: 'Rp33.000 - Rp40.000', image: 'assets/images/toner/pondstonerr.png', category: 'Toner' },

    { id: 11, name: 'Y.O.U' ,jenis: 'Acneplus Multi Action Cream', price: 'Rp45.000 - Rp56.000', image: 'assets/images/pelembap/youpelembap.png', category: 'Pelembap' },
    { id: 12, name: 'HALE' ,jenis: 'Fountain Of Youth', price: 'Rp139.000 - Rp145.000', image: 'assets/images/pelembap/halepelembap.png', category: 'Pelembap' },
    { id: 13, name: 'CETAPHIL' ,jenis: 'Moisturising Cream', price: 'Rp360.000 - Rp375.000', image: 'assets/images/pelembap/cetaphilpelembap.png', category: 'Pelembap' },
    { id: 14, name: 'GORJES' ,jenis: 'Magnificent Ace Moisturizer', price: 'Rp240.000 - Rp244.000', image: 'assets/images/pelembap/gorjespelembap.png', category: 'Pelembap' },
    { id: 15, name: 'STUDIO' ,jenis: 'TROPIK Rich Skin Barrier Cream', price: 'Rp199.000 - Rp219.000', image: 'assets/images/pelembap/studiopelembap.png', category: 'Pelembap' },

    { id: 16, name: 'GLAD2GLOW' ,jenis: 'Yuja Symwhite 377 Dark Spot...', price: 'Rp49.000 - Rp55.000', image: 'assets/images/serum/g2gserum.png', category: 'Serum' },
    { id: 17, name: 'NIVEA' ,jenis: 'Luminous 630 Spotclear Intensive', price: 'Rp335.000 - Rp350.000', image: 'assets/images/serum/niveaserum.png', category: 'Serum' },
    { id: 18, name: 'SOMETHINC' ,jenis: 'Calm Down! Skinpair Barrier', price: 'Rp139.000 - Rp145.000', image: 'assets/images/serum/somethincserum.png', category: 'Serum' },
    { id: 19, name: 'FIRSTLAB' ,jenis: 'Probiotic Barrier Ampoule', price: 'Rp283.000 - Rp300.000', image: 'assets/images/serum/firstserum.png', category: 'Serum' },
    { id: 20, name: 'JARKEEN' ,jenis: 'Vit C Booster Serum', price: 'Rp150.000 - Rp177.000', image: 'assets/images/serum/jarkeenserum.png', category: 'Serum' },

    { id: 21, name: 'AZARINE' ,jenis:'Hydracool Ceraspray Sunscreen', price: 'Rp65.000 - Rp71.000', image: 'assets/images/ss/azarinesun.png', category: 'Sunscreen' },
    { id: 22, name: 'BIORE' ,jenis: 'UV Fresh & Bright Instant Cover...', price: 'Rp38.000 - Rp41.000', image: 'assets/images/ss/bioresun.png', category: 'Sunscreen' },
    { id: 23, name: 'EMINA' ,jenis: 'Skin Buddy Sun Protection...', price: 'Rp38.000 - Rp42.000', image: 'assets/images/ss/eminasun.png', category: 'Sunscreen' },
    { id: 24, name: 'TRUE' ,jenis: 'TO SKIN Sunfriends Soothing Sunscreen', price: 'Rp78.000 - Rp83.000', image: 'assets/images/ss/truesun.png', category: 'Sunscreen' },
    { id: 25, name: 'WARDAH' ,jenis: 'UV Shield Aqua Fresh Essence...', price: 'Rp61.000 - Rp66.000', image: 'assets/images/ss/wardahsun.png', category: 'Sunscreen' },

    { id: 26, name: 'SKINTIFIC' ,jenis: 'Niacinamide Bright Boost Clay Mask', price: 'Rp110.000 - Rp118.000', image: 'assets/images/masker/skintificmasker.png', category: 'Masker' },
    { id: 27, name: 'BANOBAGI' ,jenis: 'Vita Genic Jelly Mask Relaxing', price: 'Rp14.000 - Rp20.000', image: 'assets/images/masker/banobagimasker.png', category: 'Masker' },
    { id: 28, name: 'SENKA' ,jenis: 'Perfect Aqua Bouncy Mask', price: 'Rp31.000 - Rp33.000', image: 'assets/images/masker/senkamasker.png', category: 'Masker' },
    { id: 29, name: 'HADA' ,jenis: 'LABO Gokujyun Alpha Ultimate', price: 'Rp95.000 - Rp103.000', image: 'assets/images/masker/hadalabomasker.png', category: 'Masker' },
    { id: 30, name: 'LACOCO' ,jenis: 'Watermelon Glow Sheet Mask', price: 'Rp150.000 - Rp156.000', image: 'assets/images/masker/lacocomasker.png', category: 'Masker' },
  ];

  const categories = ['Pembersih', 'Toner', 'Pelembap', 'Serum', 'Sunscreen', 'Masker'];

  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on the search query (filter only by product name)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFilteredCategoryProducts = (startId, endId) => {
    return filteredProducts.filter(product => product.id >= startId && product.id <= endId);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      <div className='space-y-[30px] bg-white'>
        {/* Section Search Produk */}
        <section className='bg-[#E3F2ED] py-[5px]'>
          <div className='flex gap-[89px] px-[120px]'>
            <p className='text-[#4A4A4A] text-[40px] font-bold'>PRODUK</p>
            <div className='flex gap-2 items-center bg-white px-[21px] py-[16px] w-full'>
              <CiSearch className='font-bold text-3xl'/>
              <input 
                type="text" 
                className='outline-none w-full rounded' 
                placeholder='Telusuri produk perawatan kulit Anda...' 
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </section>

        {/* Section Pembersih */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Pembersih</p>
            <Link to={'/Produk/Pembersih'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            {getFilteredCategoryProducts(1, 5).map(product => (
              <Link key={product.id} to={product.link || "#"} className="space-y-[16px]">
                <div className="flex justify-center">
                  <img className="h-[261px] w-[261px] object-contain" src={product.image} alt={product.name} />
                </div>
                <div className="text-[#4A4A4A] text-[12px]">
                  <p className='text-[#147A63] font-extrabold'>{product.name}</p>
                  <p>{product.jenis}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Toner */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Toner</p>
            <Link to={'/Produk/Toner'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            {getFilteredCategoryProducts(6, 10).map(product => (
              <Link key={product.id} to={product.link || "#"} className="space-y-[16px]">
                <div className="flex justify-center">
                  <img className="h-[261px] w-[261px] object-contain" src={product.image} alt={product.name} />
                </div>
                <div className="text-[#4A4A4A] text-[12px]">
                  <p className='text-[#147A63] font-extrabold'>{product.name}</p>
                  <p>{product.jenis}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Pelembap */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Pelembap</p>
            <Link to={'/Produk/Pelembap'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            {getFilteredCategoryProducts(11, 15).map(product => (
              <Link key={product.id} to={product.link || "#"} className="space-y-[16px]">
                <div className="flex justify-center">
                  <img className="h-[261px] w-[261px] object-contain" src={product.image} alt={product.name} />
                </div>
                <div className="text-[#4A4A4A] text-[12px]">
                  <p className='text-[#147A63] font-extrabold'>{product.name}</p>
                  <p>{product.jenis}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Serum */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Serum</p>
            <Link to={'/Produk/Serum'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            {getFilteredCategoryProducts(16, 20).map(product => (
              <Link key={product.id} to={product.link || "#"} className="space-y-[16px]">
                <div className="flex justify-center">
                  <img className="h-[261px] w-[261px] object-contain" src={product.image} alt={product.name} />
                </div>
                <div className="text-[#4A4A4A] text-[12px]">
                  <p className='text-[#147A63] font-extrabold'>{product.name}</p>
                  <p>{product.jenis}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Sunscreen */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Sunscreen</p>
            <Link to={'/Produk/Sunscreen'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            {getFilteredCategoryProducts(21, 25).map(product => (
              <Link key={product.id} to={product.link || "#"} className="space-y-[16px]">
                <div className="flex justify-center">
                  <img className="h-[261px] w-[261px] object-contain" src={product.image} alt={product.name} />
                </div>
                <div className="text-[#4A4A4A] text-[12px]">
                  <p className='text-[#147A63] font-extrabold'>{product.name}</p>
                  <p>{product.jenis}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Masker */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Masker</p>
            <Link to={'/Produk/Masker'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            {getFilteredCategoryProducts(26, 30).map(product => (
              <Link key={product.id} to={product.link || "#"} className="space-y-[16px]">
                <div className="flex justify-center">
                  <img className="h-[261px] w-[261px] object-contain" src={product.image} alt={product.name} />
                </div>
                <div className="text-[#4A4A4A] text-[12px]">
                  <p className='text-[#147A63] font-extrabold'>{product.name}</p>
                  <p>{product.jenis}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Produk;