'use client';
import { useState } from 'react';

const JerseyCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const jerseyData = [
    {
      id: 1,
      name: "Manchester United",
      price: "Rp 1.500.000",
      image: "/images/mu.jpeg",
      category: "premier-league",
      club: "Manchester United"
    },
    {
      id: 2,
      name: "Barcelona",
      price: "Rp 1.750.000",
      image: "/images/barca.jpeg",
      category: "la-liga",
      club: "Barcelona"
    },
    {
      id: 3,
      name: "Liverpool",
      price: "Rp 1.600.000",
      image: "/images/livistanbul.jpeg",
      category: "premier-league",
      club: "Liverpool"
    },
    {
      id: 4,
      name: "Manchester City",
      price: "Rp 1.800.000",
      image: "/images/city.jpeg",
      category: "premier-league",
      club: "Manchester City"
    },
    {
      id: 5,
      name: "AC Milan",
      price: "Rp 1.650.000",
      image: "/images/acmilan.jpeg",
      category: "serie-a",
      club: "AC Milan"
    },
    {
      id: 6,
      name: "Leeds United",
      price: "Rp 1.550.000",
      image: "/images/leeds.jpeg",
      category: "premier-league",
      club: "Leeds United"
    },
    {
      id: 7,
      name: "Croatia",
      price: "Rp 1.900.000",
      image: "/images/croatia.jpeg",
      category: "nasional",
      club: "Croatia"
    },
    {
      id: 8,
      name: "AC Padova",
      price: "Rp 1.700.000",
      image: "/images/seriea1.jpeg",
      category: "serie-a",
      club: "AC Padova"
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'Semua' },
    { id: 'premier-league', label: 'Premier League' },
    { id: 'la-liga', label: 'La Liga' },
    { id: 'serie-a', label: 'Serie A' },
    { id: 'nasional', label: 'Tim Nasional' }
  ];

  const filteredJerseys = activeFilter === 'all' 
    ? jerseyData 
    : jerseyData.filter(jersey => jersey.category === activeFilter);

  const orderJersey = (name: string, price: string) => {
    const message = `Halo, saya ingin memesan:\n\n*${name}*\nHarga: ${price}\n\nMohon info lebih lanjut. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6285156492409?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
//interface and component for JerseyCard
  interface Jersey {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    club: string;
  }
  const JerseyCard = ({ jersey }: {jersey: Jersey}) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img 
          src={jersey.image} 
          alt={jersey.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          ORIGINAL
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{jersey.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{jersey.club}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{jersey.price}</span>
          <button 
            onClick={() => orderJersey(jersey.name, jersey.price)}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
            </svg>
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volleyball-icon lucide-volleyball">
              <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/>
              <path d="M12 12a12.6 12.6 0 0 1-8.7 5"/>
              <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/>
              <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/>
              <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/>
              <circle cx="12" cy="12" r="10"/>
              </svg>
              </div>
              <h1 className="text-3xl font-bold">Jersey Original</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-300 transition-colors duration-300">Home</a>
              <a href="#katalog" className="hover:text-yellow-300 transition-colors duration-300">Katalog</a>
              <a href="#about" className="hover:text-yellow-300 transition-colors duration-300">Tentang</a>
              <a href="#contact" className="hover:text-yellow-300 transition-colors duration-300">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-6 animate-pulse">Jersey Original Terlengkap</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Koleksi jersey original dari berbagai klub terbaik dunia. Kualitas seperti baru, keaslian terjamin!
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Lihat Katalog 🏆
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🏆",
                title: "100% Original",
                desc: "Semua jersey dijamin original"
              },
              {
                icon: "🚀",
                title: "Kirim antar kota atau COD",
                desc: "Bisa juga cek langsung"
              },
              {
                icon: "💬",
                title: "Customer Service 24/7",
                desc: "Siap membantu Anda kapan saja melalui WhatsApp"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Katalog */}
      <section id="katalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Katalog Jersey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Temukan jersey favorit Anda dari koleksi terlengkap kami
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Jersey Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredJerseys.map((jersey) => (
              <JerseyCard key={jersey.id} jersey={jersey} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Tentang Kami</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Menyediakan jersey sepak bola original 
              dari berbagai klub dan tim nasional terbaik dunia.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { number: "100%", label: "Jersey Dijamin Original", color: "text-green-600" },
                { number: "50+", label: "Klub Tersedia", color: "text-purple-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 mb-10">
            Punya pertanyaan atau ingin memesan? Langsung chat aja!
          </p>
          <button 
            onClick={() => window.open('https://wa.me/6285156492409?text=Halo,%20saya%20ingin%20bertanya%20tentang%20jersey', '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full font-bold text-lg inline-flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
            </svg>
            <span>Chat WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volleyball-icon lucide-volleyball">
              <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/>
              <path d="M12 12a12.6 12.6 0 0 1-8.7 5"/>
              <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/>
              <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/>
              <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/>
              <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Jersey Original</h3>
          </div>
          <p className="text-gray-400 mb-6 text-lg">Jersey original & terpercaya</p>
          <div className="flex justify-center space-x-8 mb-8">
            {['instagram'].map((social) => (
              <a key={social} href="https://www.instagram.com/abrahamyada?igsh=MXZ6dnBlMGp5Mzkzcw==" className="text-gray-400 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2025 Jersey Original. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/6285156492409?text=Halo,%20saya%20ingin%20bertanya%20tentang%20jersey', '_blank')}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      </button>
    </div>
  );
};

export default JerseyCatalog;