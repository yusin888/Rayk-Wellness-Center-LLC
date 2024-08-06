// 'use client';
// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { ArrowLeft, Send } from 'lucide-react';
// import fs from 'fs';

// type FormInputs = {
//   referralSourceName: string;
//   referralSourcePhoneNumber: string;
//   agency: string;
//   relationshipToClient: string;
//   legalName: string;
//   legalGender: string;
//   preferredName: string;
//   genderIdentityPronouns: string;
//   dateOfBirth: string;
//   primaryPhoneNumber: string;
//   email: string;
//   secondaryPhoneNumber: string;
//   residentialAddress: string;
//   insurance1Type: string;
//   insurance1Company: string;
//   insurance1IDPMI: string;
//   insurance1PolicyHolder: string;
//   insurance2Type: string;
//   insurance2Company: string;
//   insurance2IDPMI: string;
//   insurance2PolicyHolder: string;
//   insurance3Type: string;
//   insurance3Company: string;
//   insurance3IDPMI: string;
//   insurance3PolicyHolder: string;
//   reasonForReferral: string;
//   clientGoals: string;
//   preferredLanguage: string;
//   interpreterNeeded: boolean;
//   safetyConcerns: string;
//   mentalHealthHistory: string;
//   legalGuardianInfo: string;
//   caseManagerInfo: string;
//   mentalHealthTriggers: string;
// };

// const ReferralFormPage: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const onSubmit: SubmitHandler<FormInputs> = (data) => {
//     fs.writeFileSync('referralData.json', JSON.stringify(data, null, 2));
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-[Manrope,_Noto_Sans,_sans-serif]">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="flex items-center space-x-2 text-[#2c90e2] hover:text-[#1a5a8f]">
//               <ArrowLeft size={20} />
//               <span>Back to Home</span>
//             </Link>
//             <h1 className="text-2xl font-bold text-[#111517]">ARMHS Referral Form</h1>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8"
//         >
//           {isSubmitted ? (
//             <div className="text-center">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100"
//               >
//                 <Send className="text-green-600" size={32} />
//               </motion.div>
//               <h2 className="text-2xl font-bold text-[#111517] mb-4">Thank You!</h2>
//               <p className="text-[#647787] mb-6">Your referral has been submitted successfully. We'll be in touch soon.</p>
//               <Link href="/" className="inline-block bg-[#2c90e2] text-white py-2 px-6 rounded-full hover:bg-[#1a5a8f] transition-colors">
//                 Return to Home
//               </Link>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <div>
//                 <h2 className="text-xl font-bold mb-4">Referral Source Information</h2>
//                 <label htmlFor="referralSourceName" className="block text-sm font-medium text-[#111517] mb-1">Name</label>
//                 <input
//                   {...register("referralSourceName", { required: "Name is required" })}
//                   type="text"
//                   id="referralSourceName"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.referralSourceName && <p className="mt-1 text-sm text-red-600">{errors.referralSourceName.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="referralSourcePhoneNumber" className="block text-sm font-medium text-[#111517] mb-1">Phone Number</label>
//                 <input
//                   {...register("referralSourcePhoneNumber", { required: "Phone number is required" })}
//                   type="tel"
//                   id="referralSourcePhoneNumber"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.referralSourcePhoneNumber && <p className="mt-1 text-sm text-red-600">{errors.referralSourcePhoneNumber.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="agency" className="block text-sm font-medium text-[#111517] mb-1">Agency</label>
//                 <input
//                   {...register("agency", { required: "Agency is required" })}
//                   type="text"
//                   id="agency"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.agency && <p className="mt-1 text-sm text-red-600">{errors.agency.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="relationshipToClient" className="block text-sm font-medium text-[#111517] mb-1">Relationship to Client</label>
//                 <input
//                   {...register("relationshipToClient", { required: "Relationship to client is required" })}
//                   type="text"
//                   id="relationshipToClient"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.relationshipToClient && <p className="mt-1 text-sm text-red-600">{errors.relationshipToClient.message}</p>}
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold mb-4">Client Information</h2>
//                 <label htmlFor="legalName" className="block text-sm font-medium text-[#111517] mb-1">Legal Name</label>
//                 <input
//                   {...register("legalName", { required: "Legal name is required" })}
//                   type="text"
//                   id="legalName"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.legalName && <p className="mt-1 text-sm text-red-600">{errors.legalName.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="legalGender" className="block text-sm font-medium text-[#111517] mb-1">Legal Gender</label>
//                 <input
//                   {...register("legalGender", { required: "Legal gender is required" })}
//                   type="text"
//                   id="legalGender"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.legalGender && <p className="mt-1 text-sm text-red-600">{errors.legalGender.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="preferredName" className="block text-sm font-medium text-[#111517] mb-1">Preferred Name</label>
//                 <input
//                   {...register("preferredName", { required: "Preferred name is required" })}
//                   type="text"
//                   id="preferredName"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.preferredName && <p className="mt-1 text-sm text-red-600">{errors.preferredName.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="genderIdentityPronouns" className="block text-sm font-medium text-[#111517] mb-1">Gender Identity & Pronouns</label>
//                 <input
//                   {...register("genderIdentityPronouns", { required: "Gender identity and pronouns are required" })}
//                   type="text"
//                   id="genderIdentityPronouns"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.genderIdentityPronouns && <p className="mt-1 text-sm text-red-600">{errors.genderIdentityPronouns.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="dateOfBirth" className="block text-sm font-medium text-[#111517] mb-1">Date of Birth</label>
//                 <input
//                   {...register("dateOfBirth", { required: "Date of birth is required" })}
//                   type="date"
//                   id="dateOfBirth"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="primaryPhoneNumber" className="block text-sm font-medium text-[#111517] mb-1">Primary Phone Number</label>
//                 <input
//                   {...register("primaryPhoneNumber", { required: "Primary phone number is required" })}
//                   type="tel"
//                   id="primaryPhoneNumber"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.primaryPhoneNumber && <p className="mt-1 text-sm text-red-600">{errors.primaryPhoneNumber.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-[#111517] mb-1">Email</label>
//                 <input
//                   {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
//                   type="email"
//                   id="email"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="secondaryPhoneNumber" className="block text-sm font-medium text-[#111517] mb-1">Secondary Phone Number</label>
//                 <input
//                   {...register("secondaryPhoneNumber")}
//                   type="tel"
//                   id="secondaryPhoneNumber"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="residentialAddress" className="block text-sm font-medium text-[#111517] mb-1">Residential Address</label>
//                 <input
//                   {...register("residentialAddress", { required: "Residential address is required" })}
//                   type="text"
//                   id="residentialAddress"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//                 {errors.residentialAddress && <p className="mt-1 text-sm text-red-600">{errors.residentialAddress.message}</p>}
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold mb-4">Insurance Information</h2>
//                 <label htmlFor="insurance1Type" className="block text-sm font-medium text-[#111517] mb-1">Insurance 1 Type</label>
//                 <input
//                   {...register("insurance1Type")}
//                   type="text"
//                   id="insurance1Type"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance1Company" className="block text-sm font-medium text-[#111517] mb-1">Insurance 1 Company</label>
//                 <input
//                   {...register("insurance1Company")}
//                   type="text"
//                   id="insurance1Company"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance1IDPMI" className="block text-sm font-medium text-[#111517] mb-1">Insurance 1 ID/PMI</label>
//                 <input
//                   {...register("insurance1IDPMI")}
//                   type="text"
//                   id="insurance1IDPMI"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance1PolicyHolder" className="block text-sm font-medium text-[#111517] mb-1">Insurance 1 Policy Holder</label>
//                 <input
//                   {...register("insurance1PolicyHolder")}
//                   type="text"
//                   id="insurance1PolicyHolder"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance2Type" className="block text-sm font-medium text-[#111517] mb-1">Insurance 2 Type</label>
//                 <input
//                   {...register("insurance2Type")}
//                   type="text"
//                   id="insurance2Type"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance2Company" className="block text-sm font-medium text-[#111517] mb-1">Insurance 2 Company</label>
//                 <input
//                   {...register("insurance2Company")}
//                   type="text"
//                   id="insurance2Company"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance2IDPMI" className="block text-sm font-medium text-[#111517] mb-1">Insurance 2 ID/PMI</label>
//                 <input
//                   {...register("insurance2IDPMI")}
//                   type="text"
//                   id="insurance2IDPMI"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance2PolicyHolder" className="block text-sm font-medium text-[#111517] mb-1">Insurance 2 Policy Holder</label>
//                 <input
//                   {...register("insurance2PolicyHolder")}
//                   type="text"
//                   id="insurance2PolicyHolder"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance3Type" className="block text-sm font-medium text-[#111517] mb-1">Insurance 3 Type</label>
//                 <input
//                   {...register("insurance3Type")}
//                   type="text"
//                   id="insurance3Type"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance3Company" className="block text-sm font-medium text-[#111517] mb-1">Insurance 3 Company</label>
//                 <input
//                   {...register("insurance3Company")}
//                   type="text"
//                   id="insurance3Company"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance3IDPMI" className="block text-sm font-medium text-[#111517] mb-1">Insurance 3 ID/PMI</label>
//                 <input
//                   {...register("insurance3IDPMI")}
//                   type="text"
//                   id="insurance3IDPMI"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="insurance3PolicyHolder" className="block text-sm font-medium text-[#111517] mb-1">Insurance 3 Policy Holder</label>
//                 <input
//                   {...register("insurance3PolicyHolder")}
//                   type="text"
//                   id="insurance3PolicyHolder"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 />
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold mb-4">Additional Information</h2>
//                 <label htmlFor="reasonForReferral" className="block text-sm font-medium text-[#111517] mb-1">Why are you referring the client for ARMHS?</label>
//                 <textarea
//                   {...register("reasonForReferral", { required: "Reason for referral is required" })}
//                   id="reasonForReferral"
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//                 {errors.reasonForReferral && <p className="mt-1 text-sm text-red-600">{errors.reasonForReferral.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="goalsForARMHS" className="block text-sm font-medium text-[#111517] mb-1">What goal(s) is/are the client hoping to work on with ARMHS?</label>
//                 <textarea
//                   {...register("goalsForARMHS", { required: "Goals for ARMHS are required" })}
//                   id="goalsForARMHS"
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//                 {errors.goalsForARMHS && <p className="mt-1 text-sm text-red-600">{errors.goalsForARMHS.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="preferredLanguage" className="block text-sm font-medium text-[#111517] mb-1">Does the client have a preferred language other than English? If yes, please list below and do they need an interpreter.</label>
//                 <textarea
//                   {...register("preferredLanguage")}
//                   id="preferredLanguage"
//                   rows={2}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//               </div>

//               <div>
//                 <label htmlFor="safetyConcerns" className="block text-sm font-medium text-[#111517] mb-1">Are there any safety concerns Rayk Wellness Center should be aware of for this client and ARMHS Practitioners? If yes, please elaborate.</label>
//                 <textarea
//                   {...register("safetyConcerns")}
//                   id="safetyConcerns"
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//               </div>

//               <div>
//                 <label htmlFor="mentalHealthHistory" className="block text-sm font-medium text-[#111517] mb-1">Please describe the client’s mental health and substance use treatment history.</label>
//                 <textarea
//                   {...register("mentalHealthHistory", { required: "Mental health and substance use treatment history is required" })}
//                   id="mentalHealthHistory"
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//                 {errors.mentalHealthHistory && <p className="mt-1 text-sm text-red-600">{errors.mentalHealthHistory.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="legalGuardian" className="block text-sm font-medium text-[#111517] mb-1">Does the client have a legal guardian? If so, what is their name and contact information (email and phone number).</label>
//                 <textarea
//                   {...register("legalGuardian")}
//                   id="legalGuardian"
//                   rows={2}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//               </div>

//               <div>
//                 <label htmlFor="caseManager" className="block text-sm font-medium text-[#111517] mb-1">Does the Client have a Case Manager/Social Worker/Care Coordinator? If yes, please include their contact information.</label>
//                 <textarea
//                   {...register("caseManager")}
//                   id="caseManager"
//                   rows={2}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//               </div>

//               <div>
//                 <label htmlFor="mentalHealthTriggers" className="block text-sm font-medium text-[#111517] mb-1">Does the client have any mental health triggers Rayk Wellness Center should be aware of? If yes, please elaborate.</label>
//                 <textarea
//                   {...register("mentalHealthTriggers")}
//                   id="mentalHealthTriggers"
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c90e2]"
//                 ></textarea>
//               </div>

//               <div>
//                 <button type="submit" className="w-full bg-[#2c90e2] text-white py-2 px-4 rounded-md hover:bg-[#1a5a8f] transition-colors">
//                   Submit Referral
//                 </button>
//               </div>
//             </form>
//           )}
//         </motion.div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#f0f2f4] text-[#111517]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center">
//             <p>&copy; {new Date().getFullYear()} Rayk Wellness Center LLC. All rights reserved.</p>
//             <p className="mt-2">
//               <Link href="/privacy-policy" className="text-[#2c90e2] hover:underline">Privacy Policy</Link>
//               {' | '}
//               <Link href="/terms-of-service" className="text-[#2c90e2] hover:underline">Terms of Service</Link>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ReferralFormPage;