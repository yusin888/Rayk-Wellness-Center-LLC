'use client';
import React, { useRef } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const FeaturedRole: React.FC<{ title: string; type: string; location: string; imageUrl: string }> = ({ title, type, location, imageUrl }) => (
  <div className="flex items-stretch justify-between gap-4 rounded-xl p-4">
    <div className="flex flex-[2_2_0px] flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-[#647787] text-sm font-normal leading-normal">{location}</p>
        <p className="text-[#111517] text-base font-bold leading-tight">{title}</p>
        <p className="text-[#647787] text-sm font-normal leading-normal">{type}</p>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f0f2f4] text-[#111517] text-sm font-medium leading-normal w-fit">
        <span className="truncate">Learn More</span>
      </button>
    </div>
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    />
  </div>
);

const AllRole: React.FC<{ title: string; location: string }> = ({ title, location }) => (
  <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
    <div className="flex flex-col justify-center">
      <p className="text-[#111517] text-base font-medium leading-normal line-clamp-1">{title}</p>
      <p className="text-[#647787] text-sm font-normal leading-normal line-clamp-2">{location}</p>
    </div>
    <div className="shrink-0">
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111517] text-sm font-medium leading-normal w-fit">
        <span className="truncate">Apply Now</span>
      </button>
    </div>
  </div>
);

const Home: React.FC = () => {
  const jobListingsRef = useRef<HTMLDivElement>(null);

  const scrollToJobListings = () => {
    jobListingsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <Header />

      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col bg-cover bg-center bg-no-repeat @[480px]:rounded-xl relative"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/046b988c-d5cf-4423-908c-2a93ee432b03.png")',
                  }}
                >
                  <div className="absolute bottom-8 left-8 max-w-xl text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4 @[480px]:text-5xl">
                      Make a Difference with Rayk Wellness Center
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal mb-6 @[480px]:text-base">
                      Join our team of dedicated professionals committed to transforming lives through compassionate care. Your skills and passion can help create positive change in our community.
                    </h2>
                    <div className="flex gap-4">
                      <button 
                        onClick={scrollToJobListings} 
                        className="bg-[#2c90e2] text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-[#2570b3] transition duration-300"
                      >
                        View Openings
                      </button>
                      <a 
                        download
                        href="/Application for Employment.docx" 
                        onClick={() => {
                          alert("Please email the completed form to Raykwellnesscenter@gmail.com");
                        }}
                        className="bg-white text-[#2c90e2] text-sm font-bold py-3 px-6 rounded-full hover:bg-[#f0f2f4] transition duration-300"
                      >
                        Download Application Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured roles</h2>
              
              <FeaturedRole
                title="Licensed Therapist"
                type="Full-time, Part-time"
                location="Remote"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/dd42c7ed-b318-4279-89a0-c3bfe08ac001.png"
              />
              <FeaturedRole
                title="Licensed Therapist"
                type="Full-time, Part-time"
                location="Remote"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/96722178-67f6-4009-b328-7886ab456c73.png"
              />
              <FeaturedRole
                title="Licensed Therapist"
                type="Full-time, Part-time"
                location="Remote"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/b1f4a60d-75d1-432b-aedc-174f35333577.png"
              />
              <FeaturedRole
                title="Licensed Therapist"
                type="Full-time, Part-time"
                location="Remote"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/c42ec8d2-c462-4e1f-a8ee-7116e62819ba.png"
              />
              <FeaturedRole
                title="Licensed Therapist"
                type="Full-time, Part-time"
                location="Remote"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/4f889012-ae3e-42b6-95c4-98d96491237d.png"
              />
              <FeaturedRole
                title="Licensed Therapist"
                type="Full-time, Part-time"
                location="Remote"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/44cf71e0-f648-4a4b-88d4-2cd8b177dd7c.png"
              />

              <div ref={jobListingsRef}>
                <h2 className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">All roles</h2>
                <AllRole title="ARMHS Practitioner" location="Minneapolis, Minnesota, United States" />
                <AllRole title="ARMHS Practitioner" location="Minneapolis, Minnesota, United States" />
                <AllRole title="ARMHS Practitioner" location="Minneapolis, Minnesota, United States" />
                <AllRole title="ARMHS Practitioner" location="Minneapolis, Minnesota, United States" />
                <AllRole title="ARMHS Practitioner" location="Minneapolis, Minnesota, United States" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;