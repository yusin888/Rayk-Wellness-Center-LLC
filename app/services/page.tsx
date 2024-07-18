'use client'

import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

const services: string[] = [
  "We help clients set goals and make decisions about their treatment plans",
  "We provide holistic support and guidance to clients while respecting their autonomy",
  "We help clients develop crisis prevention and intervention plans to address potential crises",
  "We assist clients in identifying coping strategies and support systems for difficult times",
  "We help coordinate emergency response services for clients by connecting them to relevant authorities",
  "We maintain accurate and confidential records of client assessment and interventions",
  "We monitor significant changes in client's mental health or well-being and report to appropriate authorities"
];

interface ServiceCardProps {
  service: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300"
  >
    <CheckCircle className="text-[#2c90e2] flex-shrink-0 mt-1" />
    <p className="text-[#111517]">{service}</p>
  </motion.div>
);

const MotionH1: React.FC<HTMLMotionProps<"h1">> = motion.h1;
const MotionP: React.FC<HTMLMotionProps<"p">> = motion.p;

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-[Manrope,_Noto_Sans,_sans-serif]">
      {/* Header */}
      <header className="border-b border-solid border-b-[#f0f2f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between whitespace-nowrap py-3">
            <div className="flex items-center gap-4 text-[#111517]">
              <div className="size-4">{/* SVG logo */}</div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                Rayk Wellness Center LLC
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <nav className="hidden md:flex items-center gap-9">
                {[
                  { text: "Call (651) 374-1620", href: "tel:+16513741620" },
                  { text: "Referral Forms", href: "/referral-forms" },
                  { text: "Careers", href: "/careers" },
                  { text: "Message Us", href: "/contact" },
                  { text: "Home", href: "/" },
                  { text: "Services", href: "/services" },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="text-[#111517] text-sm font-medium leading-normal"
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
              <div className="flex gap-2">{/* Search and Globe buttons */}</div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/4f31e2da-6d16-446c-bfcb-cc62f804d13e.png")',
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MotionH1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#111517] mb-8"
          >
            Our Services
          </MotionH1>
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center text-[#647787] mb-12 max-w-3xl mx-auto"
          >
            At Rayk Wellness Center, we offer a comprehensive range of mental health services
            designed to support and empower our clients on their journey to wellness.
          </MotionP>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f0f2f4] text-[#111517]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg font-bold mb-4">Rayk Wellness Center LLC</h2>
              <p className="text-sm mb-4">
                Providing Adult Rehabilitative Mental Health Services (ARMHS) to help improve mental health and wellness.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons */}
                <a href="#facebook" className="text-[#2c90e2] hover:text-[#111517]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#twitter" className="text-[#2c90e2] hover:text-[#111517]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#instagram" className="text-[#2c90e2] hover:text-[#111517]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#linkedin" className="text-[#2c90e2] hover:text-[#111517]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
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
            <p>&copy; {new Date().getFullYear()} Rayk Wellness Center LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;