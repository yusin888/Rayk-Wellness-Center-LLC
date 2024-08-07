import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const locationAddress = "8685 Magnolia Trail, Eden Prairie, MN, 55344";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;

  return (
    <footer className="bg-[#e6e8ea] text-[#0a0b0c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-bold mb-4">Rayk Wellness Center LLC</h2>
            <p className="text-sm mb-4">
              Providing Adult Rehabilitative Mental Health Services (ARMHS) to help improve mental health and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="text-[#1a5a9e] hover:text-[#0a0b0c]">
                <Facebook size={24} />
              </a>
              <a href="#twitter" className="text-[#1a5a9e] hover:text-[#0a0b0c]">
                <Twitter size={24} />
              </a>
              <a href="#instagram" className="text-[#1a5a9e] hover:text-[#0a0b0c]">
                <Instagram size={24} />
              </a>
              <a href="#linkedin" className="text-[#1a5a9e] hover:text-[#0a0b0c]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#1a5a9e]">
                  Home
                </Link>
              </li>
              {['Services', 'Referral Forms', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-[#1a5a9e]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a5a9e]">
                  {locationAddress}
                </a>
              </li>
              <li>Phone: (763) 439-1742</li>
              <li>Email: <a href="mailto:Raykwellnesscenter@gmail.com" className="hover:text-[#1a5a9e]">Raykwellnesscenter@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Rayk Wellness Center LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;