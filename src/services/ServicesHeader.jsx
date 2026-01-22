// // import { motion } from "framer-motion";
// // import hdimg from "../../assets/services/hdimage.jpg";


// // const ServicesHeader = () => {
// //   return (
// //     <div
// //       className="relative py-28 px-6 overflow-hidden"
// //       style={{
// //         backgroundImage: `url(${headingImg})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //       }}
// //     >
// //       <div className="relative max-w-6xl mx-auto">
        
// //         {/* Heading */}
// //         <motion.h2
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           className="
// //             text-4xl md:text-5xl font-bold mb-4
// //             text-[#0b1c3d]
// //             drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
// //           "
// //         >
// //           Our Services
// //         </motion.h2>

// //         {/* Accent Line */}
// //         <motion.div
// //           initial={{ width: 0 }}
// //           animate={{ width: "96px" }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           className="h-1.5 bg-orange-400 mb-6 rounded-full"
// //         />

// //         {/* Description */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.6 }}
// //           className="
// //             max-w-3xl
// //             text-[#0b1c3d]
// //             leading-relaxed
// //             text-lg
// //             drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]
// //           "
// //         >
// //           With a deep commitment to innovation, our expert team harnesses the
// //           latest technologies and proven best practices to craft software
// //           solutions that are not only highly functional but also visually
// //           stunning.
// //         </motion.p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesHeader;



// import { motion } from "framer-motion";
// import hdimg from "../../src/assets/services/hdimg.jpg";

// export default ServicesHeader = () => {
//   return (
//     <div
//       className="relative py-28 px-6 overflow-hidden"
//       style={{
//         backgroundImage: `url(${hdimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="relative max-w-6xl mx-auto">
        
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="
//             text-4xl md:text-5xl font-bold mb-4
//             text-white
//             drop-shadow-2xl
//           "
//         >
//           Our Services
//         </motion.h2>

//         {/* Accent Line */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "96px" }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="h-1.5 bg-orange-400 mb-6 rounded-full"
//         />

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//           className="
//             max-w-3xl
//             text-white
//             leading-relaxed
//             text-lg
//             drop-shadow-xl
//           "
//         >
//           With a deep commitment to innovation, our expert team harnesses the
//           latest technologies and proven best practices to craft software
//           solutions that are not only highly functional but also visually
//           stunning.
//         </motion.p>
//       </div>
//     </div>
//   );
// };

// import { motion } from "framer-motion";
// import hdimg from "../assets/services/hdimg.jpg";

// const ServicesHeader = () => {
//   return (
//     <div
//       className="relative py-28 px-6 overflow-hidden"
//       style={{
//         backgroundImage: `url(${hdimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="relative max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl"
//         >
//           Our Services
//         </motion.h2>

//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "96px" }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="h-1.5 bg-orange-400 mb-6 rounded-full"
//         />

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="max-w-3xl text-white leading-relaxed text-lg drop-shadow-xl"
//         >
//           With a deep commitment to innovation, our expert team harnesses the
//           latest technologies and proven best practices to craft software
//           solutions that are both functional and visually stunning.
//         </motion.p>
//       </div>
//     </div>
//   );
// };

// export default ServicesHeader;

// import { motion } from "framer-motion";
// import hdimg from "../assets/services/hdimg.jpg";

// const ServicesHeader = () => {
//   return (
//     <div className="w-full">
//       <div
//         /* mx-[30px]: Left & Right 30px margin 
//            rounded-2xl: Corners ni smooth cheyadaniki (Professional look)
//            overflow-hidden: Image corners bayataki raakunda
//         */
//         className="relative mx-[30px] pt-20 pb-16 px-6 lg:px-12 overflow-hidden min-h-[350px] flex items-center mb-[100px] rounded-2xl shadow-lg" 
//         style={{
//           backgroundImage: `url(${hdimg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>

//         {/* Content Container - Width sync with Cards */}
//         <div className="relative max-w-6xl mx-auto z-10 w-full">
//           <div className="flex flex-col items-start">
            
//             <motion.h2
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className="text-3xl md:text-5xl font-black mb-3 text-white drop-shadow-lg uppercase tracking-tight"
//             >
//               Our <span className="text-orange-500">Services</span>
//             </motion.h2>

//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "80px" }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="h-1.5 bg-orange-400 mb-5 rounded-full"
//             />

//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="max-w-2xl text-slate-100 leading-relaxed text-sm md:text-lg font-medium drop-shadow-md"
//             >
//               Empowering your business with innovative technology solutions 
//               crafted for excellence and visual impact.
//             </motion.p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesHeader;


import { motion } from "framer-motion";
import hdimg from "../assets/services/hdimg.jpg";

const ServicesHeader = () => {
  return (
    <div
      /* mb-[10px] add cheshanu - Dheenivalla cards header nundi 10px kindhaki jaruguthayi */
      className="relative pt-20 pb-16 px-6 overflow-hidden min-h-[350px] flex items-center mb-[100px]" 
      style={{
        backgroundImage: `url(${hdimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>

      <div className="relative max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col items-start">
          
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-black mb-3 text-white drop-shadow-lg"
          >
            Our <span className="text-orange-500">Services</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-orange-400 mb-5 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl text-slate-100 leading-relaxed text-sm md:text-lg font-medium drop-shadow-md"
          >
            Empowering your business with innovative technology solutions 
            crafted for excellence and visual impact.
          </motion.p>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;