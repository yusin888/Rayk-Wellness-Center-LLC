import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from './../components/Header';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
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
                <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] sm:text-5xl">
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
                <a download href="/Rayk-Wellness-Center-ARMHS-Program-Referral-Form.docx">
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
                What are Adult Rehabilitative Mental Health Services (ARMHS)?
              </h2>
              <p className="text-[#111517] text-base font-normal leading-normal">
                ARMHS are mental health services that are rehabilitative and designed to help individuals with mental illness develop and enhance their psychiatric stability, social competencies, personal and emotional adjustment, and independent living and community skills. These services also enable individuals to retain stability and functioning if they are at risk of losing significant functionality or being admitted to a more restrictive service setting without these supports.
              </p>
              <p className="text-[#111517] text-base font-normal leading-normal">
                The ARMHS services instruct, assist and support individuals in areas such as medication education and monitoring, basic social and living skills, mental illness symptom management, household management, and employment-related or community living transitions.
              </p>
            </div>
            <h3 className="text-[#111517] text-2xl font-bold leading-tight tracking-[-0.015em] mt-8 mb-4">
              Who is Eligible for ARMHS?
            </h3>
            <p className="text-[#111517] text-base font-normal leading-normal">
              To be eligible for ARMHS, individuals must meet the following criteria:
            </p>
            <ul className="text-[#111517] text-base font-normal leading-normal list-disc pl-6 mt-2">
              <li>Be 18 years old or older</li>
              <li>Have a primary diagnosis of a mental illness as determined by a Diagnostic Assessment</li>
              <li>Have a completed level of care assessment</li>
              <li>Have a significant impairment in functioning in three or more areas of the Functional Assessment domains specified in statute</li>
            </ul>
            <p className="text-[#111517] text-base font-normal leading-normal mt-4">
              All covered ARMHS services are provided face-to-face, except for community intervention. The documentation of activities is included in the covered service and must not be billed separately.
            </p>
            <h3 className="text-[#111517] text-2xl font-bold leading-tight tracking-[-0.015em] mt-8 mb-4">
              Where Can ARMHS Be Provided?
            </h3>
            <p className="text-[#111517] text-base font-normal leading-normal">
              ARMHS services may be provided in a variety of settings, including but not limited to:
            </p>
            <ul className="text-[#111517] text-base font-normal leading-normal list-disc pl-6 mt-2">
              <li>A member's home</li>
              <li>The home of a relative or significant other</li>
              <li>A member's job site</li>
              <li>The community, such as any of the following:
                <ul className="list-disc pl-6">
                  <li>Psychosocial clubhouse</li>
                  <li>Drop-in center</li>
                  <li>Social setting</li>
                  <li>Classroom</li>
                  <li>Other place in the community</li>
                </ul>
              </li>
            </ul>
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
                link: "https://www.google.com/maps/search/?api=1&query=8685+Magnolia+Trail,+Eden+Prairie,+MN,+55344"
              },
              {
                image: "images/img4.png",
                title: "Our Mission",
                description:
                  "Our mission is to help individuals with mental illness reach their full potential and live a fulfilling and independent life.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="group">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                    <div>
                      <h3 className="text-[#111517] text-lg font-medium leading-normal mb-2 group-hover:text-[#2c90e2] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#647787] text-sm font-normal leading-normal group-hover:text-[#111517] transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}