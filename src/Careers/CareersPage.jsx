import React, { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { jobs } from "./jobData"; // ✅ external jobs data

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Job Category");
  const [jobType, setJobType] = useState("All Job Type");
  const [location, setLocation] = useState("All Job Location");
  const navigate = useNavigate();

  // dropdown data
  const categories = ["All Job Category", ...new Set(jobs.map(job => job.category))];
  const jobTypes = ["All Job Type", ...new Set(jobs.map(job => job.workspace))];
  const locations = [
    "All Job Location",
    ...new Set(jobs.flatMap(job => job.location.split(", "))),
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Job Category" || job.category === category;

    const matchesJobType =
      jobType === "All Job Type" || job.workspace === jobType;

    const matchesLocation =
      location === "All Job Location" || job.location.includes(location);

    return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ================= CAREERS BANNER ================= */}
      <section className="relative h-[280px] md:h-[360px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mt-20 md:mt-8 lg:mt-10  mb-4">
            <span>Join Our Team</span>
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Careers at <span className="text-orange-400">Itrika</span>
          </h1>

          <p className="mt-2 max-w-2xl text-white/90 text-sm md:text-base leading-relaxed">
            Discover opportunities that empower your growth, innovation,
            and professional success.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mt-6"></div>
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
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer bg-white transition-all text-gray-700"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>

          {/* Job Type */}
          <div className="relative">
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer bg-white transition-all text-gray-700"
            >
              {jobTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>

          {/* Location */}
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer bg-white transition-all text-gray-700"
            >
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>
        </div>

        {/* ================= JOB LISTINGS ================= */}
        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    {job.title}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600">
                    <span className="font-medium">{job.category}</span>
                    <span className="font-medium">{job.workspace}</span>
                    <span className="font-medium">{job.location}</span>
                  </div>

                  <button
                    onClick={() => navigate(`/careers/${job.id}`)}
                    className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-md 
                   hover:from-orange-600 hover:to-orange-500 transition-all duration-300 
                    text-sm font-medium whitespace-nowrap flex items-center justify-center gap-2 group shadow-sm"
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
          Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> job(s)
        </div>
      </div>
    </div>
  );
}
