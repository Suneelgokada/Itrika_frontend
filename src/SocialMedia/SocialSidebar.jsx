import {
  FaFacebookF,
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
        gap-2
        p-2
        /* Background remove chesi pure transparency ichanu */
        bg-transparent 
      "
    >
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
    </div>
  );
};

const SocialIcon = ({ href, icon, label, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group w-10 h-10 sm:w-11 sm:h-11 
      flex items-center justify-center 
      
      /* --- IKADA CHANGE CHESANU --- */
      /* Mobile lo (Hero dark background paina) bright white background */
      bg-white 
      /* Larger screens lo subtle glass effect background */
      sm:bg-white/10 sm:backdrop-blur-sm
      
      /* Mobile lo dark blue text (Itrika logo blue) icons ki highlight avvadaniki */
      text-[#085482] 
      /* Desktop lo normal text color */
      sm:text-slate-700
      
      /* Desktop hover states */
      sm:hover:bg-white 
      ${hoverColor} 
      /* ---------------------------- */

      rounded-full
      border border-slate-200/50
      shadow-xl
      transition-all duration-300 
      relative
      mb-2
    `}
  >
    <span className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    
    {/* Tooltip text color update chesa for clarity */}
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