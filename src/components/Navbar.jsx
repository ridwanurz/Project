import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-emerald-400">
          <Camera className="w-6 h-6" />
          <span>Sewa Kamera Bandung</span>
        </Link>

        {/*Menu*/}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Beranda</Link>
          <Link to="/about" className="hover:text-emerald-400 transition-colors">Tentang</Link>
          <Link to="/services" className="hover:text-emerald-400 transition-colors">Layanan</Link>
          <Link to="/portfolio" className="hover:text-emerald-400 transition-colors">Portofolio</Link>
          <Link to="/contact" className="hover:text-emerald-400 transition-colors">Kontak</Link>
        </div>

        {/*Tombol Mobile*/}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/*Menu Mobile*/}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-3 text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Service</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Portfolio</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}