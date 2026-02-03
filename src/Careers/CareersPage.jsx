// import React, { useState } from "react";
// import { Search, ChevronDown, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { jobs } from "./jobData"; // ✅ external jobs data

// export default function CareersPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Job Category");
//   const [jobType, setJobType] = useState("All Job Type");
//   const [location, setLocation] = useState("All Job Location");
//   const navigate = useNavigate();

//   // dropdown data
//   const categories = ["All Job Category", ...new Set(jobs.map(job => job.category))];
//   const jobTypes = ["All Job Type", ...new Set(jobs.map(job => job.workspace))];
//   const locations = [
//     "All Job Location",
//     ...new Set(jobs.flatMap(job => job.location.split(", "))),
//   ];

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.title.toLowerCase().includes(search.toLowerCase()) ||
//       job.location.toLowerCase().includes(search.toLowerCase());

//     const matchesCategory =
//       category === "All Job Category" || job.category === category;

//     const matchesJobType =
//       jobType === "All Job Type" || job.workspace === jobType;

//     const matchesLocation =
//       location === "All Job Location" || job.location.includes(location);

//     return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ================= CAREERS BANNER ================= */}
//       <section className="relative h-[280px] md:h-[360px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mt-20 md:mt-8 lg:mt-10  mb-4">
//             <span>Join Our Team</span>
//           </div>

//           <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-2">
//             Careers at <span className="text-orange-400">Itrika</span>
//           </h1>

//           <p className="mt-2 max-w-2xl text-white/90 text-sm md:text-base leading-relaxed">
//             Discover opportunities that empower your growth, innovation,
//             and professional success.
//           </p>

//           <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mt-6"></div>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
//           Current Openings
//         </h2>

//         {/* ================= FILTER BAR ================= */}
//         <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
//             />
//           </div>

//           {/* Category */}
//           <div className="relative">
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer bg-white transition-all text-gray-700"
//             >
//               {categories.map((cat) => (
//                 <option key={cat}>{cat}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//           </div>

//           {/* Job Type */}
//           <div className="relative">
//             <select
//               value={jobType}
//               onChange={(e) => setJobType(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer bg-white transition-all text-gray-700"
//             >
//               {jobTypes.map((type) => (
//                 <option key={type}>{type}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//           </div>

//           {/* Location */}
//           <div className="relative">
//             <select
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer bg-white transition-all text-gray-700"
//             >
//               {locations.map((loc) => (
//                 <option key={loc}>{loc}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//           </div>
//         </div>

//         {/* ================= JOB LISTINGS ================= */}
//         <div className="space-y-3">
//           {filteredJobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-200"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
//                 <div className="flex-1">
//                   <h3 className="text-base md:text-lg font-bold text-gray-900">
//                     {job.title}
//                   </h3>
//                 </div>

//                 <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-5">
//                   <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600">
//                     <span className="font-medium">{job.category}</span>
//                     <span className="font-medium">{job.workspace}</span>
//                     <span className="font-medium">{job.location}</span>
//                   </div>

//                   <button
//                     onClick={() => navigate(`/careers/${job.id}`)}
//                     className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-md 
//                    hover:from-orange-600 hover:to-orange-500 transition-all duration-300 
//                     text-sm font-medium whitespace-nowrap flex items-center justify-center gap-2 group shadow-sm"
//                   >
//                     More Details
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 text-center text-gray-600 text-sm">
//           Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> job(s)
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Search, ChevronDown, ArrowRight, Briefcase, MapPin, GraduationCap } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { jobs } from "./jobData"; // ✅ 17 unique roles data

// export default function CareersPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Eligibility");
//   const [jobType, setJobType] = useState("All Workspace");
//   const [location, setLocation] = useState("All Job Location");
//   const navigate = useNavigate();

//   // Dynamic dropdown data extraction from the jobs list
//   const categories = ["All Eligibility", ...new Set(jobs.map(job => job.category))];
//   const jobTypes = ["All Workspace", ...new Set(jobs.map(job => job.workspace))];
//   const locations = ["All Job Location", ...new Set(jobs.map(job => job.location))];

//   // Logic to prevent white screen - ensures all active filters work together
//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.title.toLowerCase().includes(search.toLowerCase()) ||
//       job.summary.toLowerCase().includes(search.toLowerCase());

//     const matchesCategory =
//       category === "All Eligibility" || job.category === category;

//     const matchesJobType =
//       jobType === "All Workspace" || job.workspace === jobType;

//     const matchesLocation =
//       location === "All Job Location" || job.location.includes(location);

//     return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-[#f8fafc]">
//       {/* ================= HERO BANNER ================= */}
//       <section className="relative py-20 bg-[#085482] overflow-hidden">
//         {/* Logo inspired backgrounds */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff872b] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-sky-300 uppercase tracking-widest mb-6">
//             <GraduationCap size={14} />
//             <span>F-1 Student Opportunities</span>
//           </div>
//           <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
//             Careers at <span className="text-[#ff872b]">ITRIKA</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-sky-100 text-lg leading-relaxed">
//             Specialized training programs in .NET, Java, Data Science, and more. 
//             Designed specifically for OPT and STEM OPT graduates.
//           </p>
//           <div className="h-1.5 w-24 bg-gradient-to-r from-[#ff872b] to-[#e6761f] rounded-full mx-auto mt-8 shadow-lg"></div>
//         </div>
//       </section>

//       {/* ================= SEARCH & FILTER BAR ================= */}
//       <div className="max-w-7xl mx-auto px-6 -mt-10">
//         <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-blue-900/10 border border-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
//           {/* Search Input */}
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search roles..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#085482] outline-none transition-all font-medium"
//             />
//           </div>

//           {/* Eligibility Filter */}
//           <div className="relative">
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none cursor-pointer focus:ring-2 focus:ring-[#085482] outline-none font-semibold text-slate-700"
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
//           </div>

//           {/* Workspace Filter */}
//           <div className="relative">
//             <select
//               value={jobType}
//               onChange={(e) => setJobType(e.target.value)}
//               className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none cursor-pointer focus:ring-2 focus:ring-[#085482] outline-none font-semibold text-slate-700"
//             >
//               {jobTypes.map((type) => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
//           </div>

//           {/* Location Filter */}
//           <div className="relative">
//             <select
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none cursor-pointer focus:ring-2 focus:ring-[#085482] outline-none font-semibold text-slate-700"
//             >
//               {locations.map((loc) => (
//                 <option key={loc} value={loc}>{loc}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
//           </div>

//         </div>
//       </div>

//       {/* ================= JOB LISTINGS ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="flex items-center justify-between mb-8 border-l-4 border-[#ff872b] pl-4">
//           <h2 className="text-2xl font-bold text-slate-900">
//             Open Training Positions ({filteredJobs.length})
//           </h2>
//         </div>

//         <div className="space-y-4">
//           {filteredJobs.length > 0 ? (
//             filteredJobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#ff872b] hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-center gap-6">
//                   <div className="flex-grow text-left">
//                     <div className="flex items-center gap-3 mb-2">
//                       <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#085482] transition-colors text-left">
//                         {job.title}
//                       </h3>
//                       <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
//                         job.category.includes("STEM") 
//                         ? "bg-sky-100 text-[#085482]" 
//                         : "bg-slate-100 text-slate-600"
//                       }`}>
//                         {job.category}
//                       </span>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
//                       <div className="flex items-center gap-1.5">
//                         <MapPin size={16} className="text-[#ff872b]" />
//                         {job.location}
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Briefcase size={16} className="text-sky-500" />
//                         {job.workspace}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="hidden xl:block max-w-md text-sm text-slate-600 line-clamp-2 italic border-l border-slate-100 pl-4 text-left">
//                     {job.summary}
//                   </div>

//                   <button
//                     onClick={() => navigate(`/careers/${job.id}`)}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-[#085482] text-white rounded-xl font-bold hover:bg-[#063d5e] transition-all whitespace-nowrap group"
//                   >
//                     View Role
//                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#ff872b]" />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
//               <p className="text-slate-500 font-medium italic">Oops! No positions found matching your criteria.</p>
//             </div>
//           )}
//         </div>

//         {/* ================= FOOTER CTA ================= */}
//         <div className="mt-20 bg-gradient-to-br from-[#085482] to-[#063d5e] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold mb-4 italic uppercase tracking-wider">Interested in joining ITRIKA?</h2>
//             <p className="text-sky-100 mb-8 max-w-xl mx-auto">
//               Please send your resume, Form I-20, and OPT start date details directly to our hiring team.
//             </p>
//             <a 
//               href="mailto:hire@itrika-inc.com" 
//               className="inline-block px-10 py-4 bg-[#ff872b] text-white font-bold rounded-2xl hover:scale-105 transition-all text-lg shadow-lg hover:bg-[#e6761f]"
//             >
//               hire@itrika-inc.com
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { Search, ChevronDown, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { getPublicJobs } from "../api-services/JobServices"; // ✅ API

// export default function CareersPage() {
//   const [jobs, setJobs] = useState([]);               // ✅ from API
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Job Category");
//   const [jobType, setJobType] = useState("All Job Type");
//   const [location, setLocation] = useState("All Job Location");

//   const navigate = useNavigate();

//   /* ================= FETCH JOBS ================= */
//   useEffect(() => {
//     getPublicJobs()
//       .then((res) => {
//         // backend response shape adjust cheyyi if needed
//         setJobs(res.data.jobs || res.data || []);
//       })
//       .catch((err) => {
//         console.error("Failed to load jobs", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   /* ================= DROPDOWN DATA ================= */
//   const categories = [
//     "All Job Category",
//     ...new Set(jobs.map((job) => job.category).filter(Boolean)),
//   ];

//   const jobTypes = [
//     "All Job Type",
//     ...new Set(jobs.map((job) => job.workspace).filter(Boolean)),
//   ];

//   const locations = [
//     "All Job Location",
//     ...new Set(
//       jobs
//         .map((job) => job.location)
//         .filter(Boolean)
//         .flatMap((loc) => loc.split(", ").map((l) => l.trim()))
//     ),
//   ];

//   /* ================= FILTER LOGIC ================= */
//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.title?.toLowerCase().includes(search.toLowerCase()) ||
//       job.location?.toLowerCase().includes(search.toLowerCase());

//     const matchesCategory =
//       category === "All Job Category" || job.category === category;

//     const matchesJobType =
//       jobType === "All Job Type" || job.workspace === jobType;

//     const matchesLocation =
//       location === "All Job Location" || job.location?.includes(location);

//     return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
//   });

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading jobs...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ================= CAREERS BANNER ================= */}
//       <section className="relative h-[280px] md:h-[360px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mt-20 mb-4">
//             <span>Join Our Team</span>
//           </div>

//           <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-2">
//             Careers at <span className="text-orange-400">Itrika</span>
//           </h1>

//           <p className="mt-2 max-w-2xl text-white/90 text-sm md:text-base leading-relaxed">
//             Discover opportunities that empower your growth, innovation,
//             and professional success.
//           </p>

//           <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mt-6"></div>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
//           Current Openings
//         </h2>

//         {/* ================= FILTER BAR ================= */}
//         <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg"
//             />
//           </div>

//           {/* Category */}
//           <Select value={category} onChange={setCategory} options={categories} />

//           {/* Job Type */}
//           <Select value={jobType} onChange={setJobType} options={jobTypes} />

//           {/* Location */}
//           <Select value={location} onChange={setLocation} options={locations} />
//         </div>

//         {/* ================= JOB LISTINGS ================= */}
//         <div className="space-y-3">
//           {filteredJobs.map((job) => (
//             <div
//               key={job._id}
//               className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-200"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
//                 <div className="flex-1">
//                   <h3 className="text-base md:text-lg font-bold text-gray-900">
//                     {job.title}
//                   </h3>
//                 </div>

//                 <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-5">
//                   <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600">
//                     <span className="font-medium">{job.category}</span>
//                     <span className="font-medium">{job.workspace}</span>
//                     <span className="font-medium">{job.location}</span>
//                   </div>

//                   {/* <button
//                     onClick={() => navigate(`/careers/${job._id}`)}
//                     className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-md flex items-center gap-2"
//                   >
//                     More Details
//                     <ArrowRight className="w-4 h-4" />
//                   </button> */}

//                   <button
//   onClick={() =>
//     navigate(`/careers/${encodeURIComponent(job.title)}`)
//   }
//   className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-md flex items-center gap-2"
// >
//   More Details
//   <ArrowRight className="w-4 h-4" />
// </button>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 text-center text-gray-600 text-sm">
//           Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> job(s)
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= REUSABLE SELECT ================= */
// function Select({ value, onChange, options }) {
//   return (
//     <div className="relative">
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full px-4 py-2.5 border border-gray-200 rounded-lg appearance-none bg-white"
//       >
//         {options.map((opt) => (
//           <option key={opt}>{opt}</option>
//         ))}
//       </select>
//       <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getPublicJobs } from "../api-services/JobServices";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Job Category");
  const [jobType, setJobType] = useState("All Job Type");
  const [location, setLocation] = useState("All Job Location");

  const navigate = useNavigate();

  /* ================= FETCH JOBS ================= */
  useEffect(() => {
    getPublicJobs()
      .then((res) => {
        setJobs(res.data.jobs || res.data || []);
      })
      .catch((err) => console.error("Failed to load jobs", err))
      .finally(() => setLoading(false));
  }, []);

  /* ================= DROPDOWN DATA ================= */
  const categories = [
    "All Job Category",
    ...new Set(jobs.map((job) => job.category).filter(Boolean)),
  ];

  const jobTypes = [
    "All Job Type",
    ...new Set(jobs.map((job) => job.workspace).filter(Boolean)),
  ];

  const locations = [
    "All Job Location",
    ...new Set(
      jobs
        .map((job) => job.location)
        .filter(Boolean)
        .flatMap((loc) => loc.split(", ").map((l) => l.trim()))
    ),
  ];

  /* ================= FILTER LOGIC ================= */
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.location?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Job Category" || job.category === category;

    const matchesJobType =
      jobType === "All Job Type" || job.workspace === jobType;

    const matchesLocation =
      location === "All Job Location" || job.location?.includes(location);

    return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
  });

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm">Loading jobs...</p>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-white">
      {/* ================= CAREERS BANNER ================= */}
      <section className="relative h-[280px] md:h-[360px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mt-20 mb-4">
            Join Our Team
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
            Careers at <span className="text-orange-400">Itrika</span>
          </h1>

          <p className="max-w-2xl text-white/90 text-sm md:text-base">
            Discover opportunities that empower your growth, innovation,
            and professional success.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mt-6" />
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Current Openings
        </h2>

        {/* ================= FILTER BAR ================= */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            />
          </div>

          <Select value={category} onChange={setCategory} options={categories} />
          <Select value={jobType} onChange={setJobType} options={jobTypes} />
          <Select value={location} onChange={setLocation} options={locations} />
        </div>

        {/* ================= JOB LISTINGS ================= */}
        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg border border-gray-200 p-5
              shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {job.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-5">
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-600">
                    <span className="font-medium">{job.category}</span>
                    <span className="font-medium">{job.workspace}</span>
                    <span className="font-medium">{job.location}</span>
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/careers/${encodeURIComponent(job.title)}`)
                    }
                    className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400
                    hover:from-orange-600 hover:to-orange-500 transition-all
                    text-white rounded-md text-sm font-medium whitespace-nowrap
                    flex items-center gap-2 group shadow-sm"
                  >
                    More Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredJobs.length}
          </span>{" "}
          job(s)
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE SELECT ================= */
function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
        appearance-none cursor-pointer bg-white transition-all text-gray-700"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  );
}
