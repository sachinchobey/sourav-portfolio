import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#03064A] py-6 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1720px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-madimi text-white text-2xl md:text-3xl lg:text-4xl tracking-widest whitespace-nowrap">
          SOURAV CHOBEY
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            to="/"
            className="text-[#FEE711] font-inter font-medium text-lg lg:text-xl tracking-widest uppercase transition-colors hover:text-[#FEE711]/80"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-white font-inter font-medium text-lg lg:text-xl tracking-widest uppercase transition-colors hover:text-[#FEE711]"
          >
            ABOUT
          </Link>
          <Link
            to="/work"
            className="text-white font-inter font-medium text-lg lg:text-xl tracking-widest uppercase transition-colors hover:text-[#FEE711]"
          >
            WORK
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4">
          <Link
            to="/"
            className="text-[#FEE711] font-medium text-lg tracking-widest uppercase"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-white font-medium text-lg tracking-widest uppercase hover:text-[#FEE711]"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/work"
            className="text-white font-medium text-lg tracking-widest uppercase hover:text-[#FEE711]"
            onClick={() => setMenuOpen(false)}
          >
            WORK
          </Link>
        </nav>
      )}
    </header>
  );
}
