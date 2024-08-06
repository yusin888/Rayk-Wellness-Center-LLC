import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from './../components/Header';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[Manrope,_Noto_Sans,_sans-serif]">
      <Header />

      {/* Hero Section - Full Width */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/img1.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          paddingTop: "45%", // This creates a 4:3 aspect ratio
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6 items-start justify-end">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                  Welcome to Rayk Wellness Center
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal sm:text-base max-w-2xl">
                  We offer Adult Rehabilitative Mental Health Services (ARMHS)
                  that are designed to help you improve your mental health and
                  wellness. Our goal is to help you reach your full potential
                  and be as independent as possible. We provide services to
                  individuals who are eligible for Medical Assistance (MA) and
                  who have a mental illness diagnosis.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/services">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 sm:h-12 sm:px-5 bg-[#2c90e2] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base">
                  <span className="truncate">Learn More</span>
                </button>
                </Link>
                <a download href="/Canvas-Health-ARMHS-Program-Referral-Form.docx">

                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 sm:h-12 sm:px-5 bg-[#f0f2f4] text-[#111517] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base">
                  <span className="truncate">Referral Forms</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARMHS Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#111517] text-3xl font-bold leading-tight tracking-[-0.033em] sm:text-4xl">
                What are ARMHS?
              </h2>
              <p className="text-[#111517] text-base font-normal leading-normal">
                Here are some of the most frequently asked questions about ARMHS
                and how they can help you or a loved one improve their mental
                health and wellness.
              </p>
            </div>
            <h3 className="text-[#111517] text-2xl font-bold leading-tight tracking-[-0.015em] mt-8 mb-4">
              What is ARMHS?
            </h3>
            <p className="text-[#111517] text-base font-normal leading-normal">
              Adult Rehabilitative Mental Health Services (ARMHS) are a set of
              services that help people with mental illness live more
              independently. These services are provided by mental health
              practitioners and include things like skill-building and support
              for daily living. The goal of ARMHS is to help individuals with
              mental illness develop the skills they need to live a fulfilling
              and productive life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "images/img2.png",
                title: "Our Team",
                description:
                  "Our team of mental health practitioners are dedicated to helping individuals with mental illness live more independently and improve their overall quality of life.",
              },
              {
                image: "images/img3.png",
                title: "Our Locations",
                description:
                  "We provide ARMHS services to individuals living in the Twin Cities Metro Area, Central Minnesota, and Southern Minnesota. We also offer services to individuals living in select counties in Wisconsin.",
              },
              {
                image: "images/img4.png",
                title: "Our Mission",
                description:
                  "Our mission is to help individuals with mental illness reach their full potential and live a fulfilling and independent life.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${item.image}")` }}
                />
                <div>
                  <h3 className="text-[#111517] text-lg font-medium leading-normal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#647787] text-sm font-normal leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}