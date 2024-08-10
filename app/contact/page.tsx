import React from 'react';
import ContactForm from './../../components/ContactForm';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center pt-16">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
