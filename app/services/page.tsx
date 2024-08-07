'use client';

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const services: string[] = [
  "Managing and coping with mental health symptoms",
  "Healthy lifestyle skills and practices",
  "Preventing relapse and sobriety management",
  "Cooking and nutritional skills",
  "Engaging in meaningful activities",
  "Interpersonal communication",
  "Identifying and accessing benefits and resources",
  "Employment-related tasks",
  "Crisis assistance",
  "Medication education",
  "Assist in overcoming barriers to accessing resources",
  "Provide support for individuals in creating a community for themselves",
  "Explore appropriate healthcare options with individuals"
];

interface ServiceCardProps {
  service: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="flex items-center space-x-4 mb-4">
      <CheckCircle className="text-green-500 w-6 h-6" />
      <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
    </div>
  </motion.div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Empowering your journey to wellness with comprehensive mental health support at Rayk Wellness Center.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              download
              href="/Rayk-Wellness-Center-ARMHS-Program-Referral-Form.docx"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;