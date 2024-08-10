import React from 'react';
import ContactForm from './../../components/ContactForm';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
