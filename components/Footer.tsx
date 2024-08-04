import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f0f2f4] text-[#111517]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-bold mb-4">Rayk Wellness Center LLC</h2>
            <p className="text-sm mb-4">
              Providing Adult Rehabilitative Mental Health Services (ARMHS) to help improve mental health and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="text-[#2c90e2] hover:text-[#111517]">
                <Facebook size={24} />
              </a>
              <a href="#twitter" className="text-[#2c90e2] hover:text-[#111517]">
                <Twitter size={24} />
              </a>
              <a href="#instagram" className="text-[#2c90e2] hover:text-[#111517]">
                <Instagram size={24} />
              </a>
              <a href="#linkedin" className="text-[#2c90e2] hover:text-[#111517]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Referral Forms', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-[#2c90e2]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Main Street, City, State 12345</li>
              <li>Phone: (651) 374-1620</li>
              <li>Email: info@raykwellness.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Rayk Wellness Center LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;