"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-24 py-4">
        <Link href="/" className=" min-w-[200px]">
          <span className="text-2xl font-bold text-gray-800">JOHNSON</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="w-full hidden md:flex space-x-8 justify-center">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-black">
            Projects
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
