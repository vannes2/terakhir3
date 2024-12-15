"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Camera, Send, Instagram, Twitter, Youtube } from 'lucide-react'

export default function UserConsul() {
  const [messages, setMessages] = useState([
    {
      message: "Halo, Ayyunie bisakah anda menceritakan masalah kulit yang anda alami bisa juga dengan menyertakan foto agar mudah bagi kami untuk mengenalisa masalah kulit anda",
      timestamp: "12:00",
      isUser: false,
    }
  ])

  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        {
          message: inputMessage,
          timestamp: new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          }),
          isUser: true,
        },
      ])
      setInputMessage("")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <Link href="/">
          <Image 
            src="/placeholder.svg?height=40&width=120" 
            alt="Ayune Logo" 
            width={120} 
            height={40}
            className="text-[#147a63]"
          />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/beranda" className="text-[#333333] hover:text-[#147a63]">
            BERANDA
          </Link>
          <Link href="/tentang-kami" className="text-[#333333] hover:text-[#147a63]">
            TENTANG KAMI
          </Link>
          <Link href="/produk" className="text-[#333333] hover:text-[#147a63]">
            PRODUK
          </Link>
          <Link href="/konsultasi" className="text-[#333333] hover:text-[#147a63]">
            KONSULTASI
          </Link>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 text-[#147a63] border border-[#147a63] rounded-full">
          <User className="w-4 h-4" />
          <span>Ayyunie</span>
        </div>
      </nav>

      {/* Konsultasi Header */}
      <div className="bg-[#e3f2ed] py-8">
        <h1 className="text-3xl font-bold text-center text-[#333333]">KONSULTASI</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Chat Section */}
          <div className="border rounded-lg bg-white">
            <div className="h-[600px] overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex flex-col gap-1 mb-4 ${msg.isUser ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isUser ? "bg-[#147a63] text-white" : "bg-[#e3f2ed] text-[#333333]"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    {msg.image && (
                      <div className="mt-2">
                        <Image
                          src={msg.image}
                          alt="Consultation image"
                          width={200}
                          height={200}
                          className="rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-[#333333] block">
                    {msg.timestamp}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex gap-2 p-4 border-t">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ketik di sini..."
                className="flex-1 px-4 py-2 text-sm border rounded-full focus:outline-none focus:border-[#147a63] text-[#333333]"
              />
              <button
                type="button"
                className="p-2 text-[#333333] hover:text-[#147a63] transition-colors"
              >
                <Camera className="w-6 h-6" />
              </button>
              <button
                type="submit"
                className="p-2 text-[#333333] hover:text-[#147a63] transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
          
          {/* Doctor Profile Section */}
          <div className="w-full max-w-md p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Profil Dokter</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Doctor profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-[#333333]">Dr. Emy Kusumaningsh, Sp.DV</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Beliau merupakan dokter spesialis dermatovenereologi estetika kulit yang sudah lama bergabung di klinik kecantikan, tentunya pengalaman beliau sudah banyak tentang masalah kulit yang sering dialami oleh kebanyakan orang
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#333333]">Masalah Kulit</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#333333]">Tipe Kulit:</label>
                  <select className="w-full mt-1 p-2 border rounded-md text-[#333333]">
                    <option>Pilih tipe kulit anda</option>
                    <option>Normal</option>
                    <option>Kering</option>
                    <option>Berminyak</option>
                    <option>Kombinasi</option>
                    <option>Sensitif</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#333333]">Masalah Kulit:</label>
                  <select className="w-full mt-1 p-2 border rounded-md text-[#333333]">
                    <option>Pilih masalah kulit anda</option>
                    <option>Jerawat & Komedo</option>
                    <option>Penuaan</option>
                    <option>Pigmentasi</option>
                    <option>Tekstur Kulit</option>
                    <option>Kering & Sensitif</option>
                    <option>Berminyak</option>
                    <option>Kehamilan</option>
                    <option>Warna Kulit</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#333333]">Usia:</label>
                  <input type="number" placeholder="23" className="w-full mt-1 p-2 border rounded-md text-[#333333]" />
                </div>

                <button className="w-full bg-[#147a63] hover:bg-[#0f5c4a] text-white py-2 rounded-md">
                  Rekomendasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#e3f2ed] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <Image 
                src="/placeholder.svg?height=40&width=120" 
                alt="Ayune Logo" 
                width={120} 
                height={40}
                className="mb-6"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-[#333333]">Layanan Pelanggan</h3>
                <p className="text-sm text-[#333333]">
                  <span className="font-medium text-[#333333]">Whatsapp:</span> +62 851-5664-4356
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="font-medium text-[#333333]">Instagram:</span> @ayuneconsultation
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="font-medium text-[#333333]">Email:</span> ayuneconsultation@gmail.com
                </p>
                <div className="space-y-1">
                  <p className="font-medium text-sm text-[#333333]">Jam operasional:</p>
                  <p className="text-sm text-[#333333]">Senin-Jumat: 10:00 - 21:00 WIB</p>
                  <p className="text-sm text-[#333333]">Sabtu: 10:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-[#333333]">Akun Saya</h3>
              <div className="space-y-2">
                <Link href="/profile" className="block text-sm text-[#333333] hover:text-[#147a63]">
                  Profil
                </Link>
                <Link href="/register" className="block text-sm text-[#333333] hover:text-[#147a63]">
                  Daftar
                </Link>
                <Link href="/login" className="block text-sm text-[#333333] hover:text-[#147a63]">
                  Masuk
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-[#333333]">Ikuti kami:</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-[#333333] hover:text-[#147a63]">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-[#333333] hover:text-[#147a63]">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-[#333333] hover:text-[#147a63]">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-4 border-t border-gray-200">
            <p className="text-sm text-center text-[#333333]">
              ©AYUNE, 2024. SEMUA HAK DILINDUNGI
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

