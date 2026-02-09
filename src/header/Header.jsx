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
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-[#0f172a]/85 backdrop-blur-md border-white/10 shadow-2xl"
>
  {/* Top Accent Line */}
  <div className="h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-400" />

  {/* Container (left alignment optimized) */}
 <div className="max-w-7xl mx-auto pl-0 sm:pl-1 lg:pl-1 pr-4 sm:pr-6 lg:pr-8">

     {/* <div className="max-w-7xl mx-auto pl-0 sm:pl-1 lg:pl-1 pr-4 sm:pr-6 lg:pr-8 -ml-3"></div> */}
    {/* Navbar inner */}
    <div className="flex items-center justify-between h-16">

<div
  className="relative flex items-center gap-0 cursor-pointer -ml-1"
  onClick={() => navigate("/")}
>
  {/* Logo */}
  <img
    src="/itrikalogo.png"
    alt="Itrika Logo"
    className={`
      w-20 h-10              /* MOBILE ONLY */
      sm:w-28 sm:h-12
      md:w-34 md:h-14
      lg:w-38 lg:h-16
      object-contain
      transition-all duration-300 hover:scale-105
      ${isScrolled ? "brightness-125 contrast-125" : "brightness-110"}
    `}
  />

  {/* Company Name */}
<span
  className={`
    text-[#51B9FF]
    font-medium

    /* MOBILE ONLY FIX */
    text-[22px] h-[46px]
    -ml-[18px]        /* ← CRITICAL FIX */

    sm:text-[28px] sm:h-[55px] sm:-ml-4
    md:text-[34px] md:h-[65px] md:-ml-5
    lg:text-[38px] lg:h-[75px] lg:-ml-6

    leading-[1.05]
    tracking-tight
    flex items-center

    transition-all duration-300
  `}
>
  ITRIKA
</span>


  {/* Glow effect */}
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
            className="relative group text-[15px] font-semibold text-white hover:text-orange-400 transition-colors duration-300"
          >
            {item.name}

            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />
          </button>
        ))}
      </nav>

      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2"
      >
        {isMobileMenuOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Menu className="w-7 h-7 text-white" />
        )}
      </button>

    </div>
  </div>

  {/* ================= MOBILE DRAWER ================= */}
  {isMobileMenuOpen && (
    <div className="lg:hidden border-t backdrop-blur-xl bg-white border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
      
      <div className="px-6 py-6 space-y-2">

        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item)}
            className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 transition-all"
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