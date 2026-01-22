// import { FaArrowRight } from "react-icons/fa";

// export default  ServiceCard = ({ title, description, icon: Icon, link, image }) => {
//   return (
//     <div
//       className="
//         group
//         relative
//         rounded-2xl
//         shadow-xl
//         border
//         border-gray-200
//         min-h-[320px]
//         overflow-hidden
//       "
//     >
//       {/* ================= BACKGROUND IMAGE ================= */}
//       <div className="absolute inset-0">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* ================= BASE CONTENT ================= */}
//       <div className="relative z-10 p-8 flex items-center gap-4 text-white">
//         <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
//           <Icon size={28} />
//         </div>

//         <h3 className="text-xl font-semibold">{title}</h3>
//       </div>

//       {/* ================= GLASS HOVER OVERLAY ================= */}
//       <div
//         className="
//           absolute
//           inset-0
//           z-20
//           px-8
//           py-8
//           transform
//           translate-y-full
//           group-hover:translate-y-0
//           transition-transform
//           duration-500
//           ease-out
//           flex
//           flex-col
//           bg-white/30
//           backdrop-blur-lg
//           border-t
//           border-white/30
//         "
//       >
//         {/* Icon + Heading */}
//         <div className="flex items-center gap-4 mb-6 text-white">
//           <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/30 backdrop-blur-md">
//             <Icon size={28} />
//           </div>
//           <h3 className="text-xl font-semibold">{title}</h3>
//         </div>

//         {/* Description */}
//         <p className="text-white/90 text-sm leading-relaxed mb-8">
//           {description}
//         </p>

//         {/* CTA – BOTTOM LINE ONLY */}
//         <a
//           href={link}
//           className="
//             mt-auto
//             inline-flex
//             items-center
//             gap-2
//             text-sm
//             font-semibold
//             text-orange-400
//             border-b
//             border-sky-400
//             pb-1
//             w-fit
//             hover:text-orange-500
//             hover:border-sky-300
//             transition-colors
//           "
//         >
//           Learn More
//           <span className="transition-transform duration-300 group-hover:translate-x-1">
//             <FaArrowRight size={14} />
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon: Icon, link, image }) => {
  return (
    <Link to={link} className="block">
      <div
        className="
          group relative rounded-xl shadow-lg border border-gray-200
          h-[260px] md:h-[280px] overflow-hidden cursor-pointer
        "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />
        </div>

        {/* BASE CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white mb-3">
            <Icon size={16} />
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>

        {/* HOVER */}
        <div className="absolute inset-0 z-20 p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center bg-blue-900/40 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 text-white">
              <Icon size={16} />
            </div>
            <h3 className="text-base font-bold text-white">{title}</h3>
          </div>

          <p className="text-white/90 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            Learn More <FaArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;



// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ServiceCard = ({ title, description, icon: Icon, link, image }) => {
//   return (
//     <Link to={link} className="block">
//       <div
//         className="
//           group
//           relative
//           rounded-xl
//           shadow-lg
//           border
//           border-gray-200
//           h-[260px] md:h-[280px]
//           overflow-hidden
//           cursor-pointer
//         "
//       >
//         {/* BACKGROUND IMAGE */}
//         <div className="absolute inset-0">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />
//         </div>

//         {/* BASE CONTENT */}
//         <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
//           <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600/90 text-white mb-3 shadow-lg">
//             <Icon size={16} />
//           </div>
//           <h3 className="text-lg md:text-xl font-bold text-white">
//             {title}
//           </h3>
//         </div>

//         {/* HOVER OVERLAY */}
//         <div
//           className="
//             absolute inset-0 z-20 p-5 md:p-6
//             opacity-0 group-hover:opacity-100
//             translate-y-4 group-hover:translate-y-0
//             transition-all duration-500
//             flex flex-col justify-center
//             bg-blue-900/40 backdrop-blur-md
//           "
//         >
//           <div className="flex items-center gap-3 mb-3">
//             <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 text-white">
//               <Icon size={16} />
//             </div>
//             <h3 className="text-base md:text-lg font-bold text-white">
//               {title}
//             </h3>
//           </div>

//           <p className="text-white/90 text-sm mb-4 line-clamp-3">
//             {description}
//           </p>

//           <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
//             Learn More
//             <FaArrowRight size={12} />
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ServiceCard;
