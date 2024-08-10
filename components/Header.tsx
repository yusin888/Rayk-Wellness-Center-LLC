'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, PhoneCall } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Careers", href: "/careers" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/images/logo1.png"
                alt="Rayk Wellness Logo"
                width={64}
                height={53}
              />
              <h2 className={`text-xl font-bold leading-tight ${isScrolled ? 'text-[#111517]' : 'text-white'}`}>
                Rayk Wellness Center
              </h2>
            </Link>
          </div>
          
          <nav className={`hidden md:flex items-center gap-6`}>
            {navItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className={`text-sm font-medium hover:text-[#2c90e2] transition-colors ${isScrolled ? 'text-[#111517]' : 'text-white'}`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="tel:+(763) 439-1742" className="hidden sm:block">
              <button className="bg-[#2c90e2] text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-[#2570b3] transition duration-300 flex items-center gap-2">         
                <PhoneCall size={18} />
                <span>(763) 439-1742</span>
              </button>
            </a>
            <button className={`p-2 rounded-full ${isScrolled ? 'text-[#111517] hover:bg-gray-100' : 'text-white hover:bg-white/20'} transition-colors`}>
              <Search size={20} />
            </button>
            <button
              className="md:hidden p-2 rounded-full text-[#111517] hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-md`}>
        <nav className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="block py-2 text-[#111517] hover:text-[#2c90e2] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          <a href="tel:(763) 439-1742" className="flex items-center gap-2 py-2 text-[#111517] hover:text-[#2c90e2] transition-colors">
            <PhoneCall size={18} />
            <span className="text-sm font-medium">(763) 439-1742</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;