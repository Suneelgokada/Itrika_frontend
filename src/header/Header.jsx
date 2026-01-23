import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PremiumHeader({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Why Choose Us", path: "/whychoose", type: "route" },
    { name: "Our Services", href: "#services" },
    { name: "Tools & Tips", path: "tools", type: "route" },
    { name: "Contact Us", path: "/contact-us", type: "route" },
    { name: "Careers", path: "/careers", type: "route" },
  ];

  const handleNavClick = (item) => {
    if (item.type === "route") {
      navigate(item.path);
      setIsMobileMenuOpen(false);
      return;
    }
  
   if (window.location.pathname !== "/") {
    // ఒకవేళ యూజర్ హోమ్ పేజీలో లేకపోతే
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector(item.href);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    // హోమ్ పేజీలోనే ఉంటే
    const section = document.querySelector(item.href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }


    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b
        ${
          // isScrolled
          //   ? "bg-[#0f172a]/85 backdrop-blur-md border-white/10 shadow-2xl"
          //   : "bg-white/95 backdrop-blur-sm border-transparent shadow-md"

          "bg-[#0f172a]/85 backdrop-blur-md border-white/10 shadow-2xl"
        }
      `}
    >
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 h-16`}
        >
          {/* ================= LOGO ================= */}
          <div
            className="items-center justify-center h16"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo1.png"
              alt="Logo"
              className={`
                /* Mobile: 130px | Tablet: 160px | Large Screen: 192px (w-48) */
                w-32 sm:w-40 lg:w-48
                h-auto object-contain
                transition-all duration-300 group-hover:scale-105
                ${isScrolled ? "brightness-125 contrast-125" : "brightness-110"}
              `}
            />
            {isScrolled && (
              <div className="absolute -inset-3 bg-blue-500/10 blur-2xl rounded-full animate-pulse -z-10" />
            )}
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={`relative group text-[16px] md:text-[15px] sm:text-[14px] font-semibold text-white hover:text-orange-400 transition-colors duration-300
                  ${
                   
                       "text-white hover:text-orange-400"
                     
                  }
                `}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300
                    ${
                        "bg-orange-500 group-hover:w-full" 
                    }
                  `}
                />
              </button>
            ))}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          {/* <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={`w-7 h-7 ${isScrolled ? "text-white" : "text-slate-800"}`} />
            ) : (
              <Menu className={`w-7 h-7 ${isScrolled ? "text-white" : "text-slate-800"}`} />
            )}
          </button> */}
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={`w-7 h-7 text-white`} />
            ) : (
              <Menu className={`w-7 h-7 text-white`} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {/* {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t backdrop-blur-xl animate-in slide-in-from-top duration-300 bg-white/98 border-slate-100`}
        >
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all text-gray-200 hover:bg-white/10`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )} */}


      {/* ================= MOBILE DRAWER ================= */}
{isMobileMenuOpen && (
  <div className="lg:hidden border-t backdrop-blur-xl bg-white border-slate-100 shadow-xl">
    <div className="px-6 py-6 space-y-2">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleNavClick(item)}
          className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all text-slate-800 hover:bg-slate-50"
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
)}
    </header>
  );
}