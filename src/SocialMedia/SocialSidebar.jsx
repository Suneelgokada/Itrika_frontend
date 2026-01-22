import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div
      className="
        fixed
        top-1/2
        -translate-y-1/2
        right-0
        z-50
        flex
        flex-col
        gap-1
        p-2
        bg-white/80
        backdrop-blur-md
        shadow-2xl
        rounded-l-2xl
        border-l border-y border-slate-200
      "
    >
      {/* Social Link Component to keep it DRY */}
      <SocialIcon 
        href="https://facebook.com" 
        icon={<FaFacebookF />} 
        label="Facebook" 
        hoverColor="hover:text-[#1877F2]" 
      />
      <SocialIcon 
        href="https://linkedin.com" 
        icon={<FaLinkedinIn />} 
        label="LinkedIn" 
        hoverColor="hover:text-[#0A66C2]" 
      />
      <SocialIcon 
        href="https://twitter.com" 
        icon={<FaTwitter />} 
        label="Twitter" 
        hoverColor="hover:text-[#1DA1F2]" 
      />
      <SocialIcon 
        href="https://instagram.com" 
        icon={<FaInstagram />} 
        label="Instagram" 
        hoverColor="hover:text-pink-600" 
      />
    </div>
  );
};

// Reusable Icon Component for cleaner code
const SocialIcon = ({ href, icon, label, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group w-10 h-10 sm:w-11 sm:h-11 
      flex items-center justify-center 
      bg-transparent text-slate-600 
      ${hoverColor} 
      hover:bg-slate-50
      rounded-xl
      transition-all duration-300 
      relative
    `}
  >
    <span className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    
    {/* Tooltip */}
    <span className="
      absolute right-full mr-4 
      opacity-0 group-hover:opacity-100 
      translate-x-2 group-hover:translate-x-0
      transition-all duration-300 
      text-[10px] font-bold uppercase tracking-widest
      bg-slate-900 text-white 
      px-3 py-1.5 rounded-md 
      pointer-events-none
      shadow-xl
    ">
      {label}
    </span>
  </a>
);

export default SocialSidebar;