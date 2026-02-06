// import { useEffect, useState } from "react";
// import { FaCloud, FaShieldAlt, FaServer, FaRocket } from "react-icons/fa";

// export default function CloudSolutions() {

//   // 🔢 Animated counters
//   const [years, setYears] = useState(0);
//   const [deployments, setDeployments] = useState(0);
//   const [uptime, setUptime] = useState(0);
//   const [support, setSupport] = useState(0);

//   useEffect(() => {
//     let y = 0, d = 0, u = 0, s = 0;

//     const interval = setInterval(() => {
//       if (y < 10) setYears(++y);
//       if (d < 200) setDeployments(d += 10);
//          if (u < 99.9) {
//       u += 3.3; // smooth jump
//       if (u > 99.9) u = 99.9;
//       setUptime(Number(u.toFixed(1)));
//     }

//       if (s < 24) setSupport(++s);

//       if (y >= 10 && d >= 200 && u >= 99.9 && s >= 24) {
//         clearInterval(interval);
//       }
//     }, 40);

//     return () => clearInterval(interval);
//   }, []);

//  const Metric = ({ title, description }) => {
//   return (
//     <div className="space-y-3">

//       <h3 className="
//         text-lg md:text-xl 
//         font-semibold 
//         text-blue-600
//       ">
//         {title}
//       </h3>

//       <p className="
//         text-sm 
//         text-slate-600 
//         leading-relaxed 
//         max-w-xs 
//         mx-auto
//       ">
//         {description}
//       </p>

//     </div>
//   );
// };



//   return (
//     <div className="bg-slate-50 text-slate-800">

//       {/* HERO */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
        
//         <div className="max-w-7xl mx-auto px-6 py-32">
//           <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
//             Cloud Solutions
//           </span>

//           <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
//             Secure, Scalable & Future-Ready Cloud Infrastructure
//           </h1>

//           <p className="mt-6 text-slate-600 max-w-2xl text-lg">
//             We help enterprises architect, migrate, and optimize cloud environments
//             with reliability, security, and performance at scale.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
//               Get Consultation
//             </button>
//             <button className="px-6 py-3 border border-slate-300 hover:border-slate-400 rounded-lg transition">
//               View Capabilities
//             </button>
//           </div>
//         </div>
//       </section>

// <section className="border-t border-slate-200 bg-white">
// <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">


//     <h2 className="
//       text-3xl md:text-4xl 
//       font-semibold 
//       text-slate-900 
//       text-center 
//       mb-14
//     ">
//       Cloud Engineering Excellence
//     </h2>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

//       <Metric 
//         title="Cloud-native Architecture"
//         description="Designed using modern cloud patterns for scalability and resilience"
//       />

//       <Metric 
//         title="Secure Cloud Infrastructure"
//         description="Built with enterprise-grade security and compliance standards"
//       />

//       <Metric 
//         title="Highly Available Deployments"
//         description="Ensuring uptime, redundancy, and fault-tolerant systems"
//       />

//       <Metric 
//         title="Continuous Monitoring & Support"
//         description="Proactive monitoring and ongoing infrastructure optimization"
//       />

//     </div>

//   </div>

// </section>




//       {/* CAPABILITIES */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-3xl font-bold mb-12">
//           Our Cloud Capabilities
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <Capability
//             icon={<FaCloud />}
//             title="Cloud Migration"
//             desc="Seamless migration to AWS, Azure, or GCP."
//             color="text-blue-600 bg-blue-100"
//           />
//           <Capability
//             icon={<FaServer />}
//             title="Cloud Architecture"
//             desc="Highly available and fault-tolerant systems."
//             color="text-indigo-600 bg-indigo-100"
//           />
//           <Capability
//             icon={<FaShieldAlt />}
//             title="Security & Compliance"
//             desc="Enterprise-grade security and compliance."
//             color="text-emerald-600 bg-emerald-100"
//           />
//           <Capability
//             icon={<FaRocket />}
//             title="Optimization & Scaling"
//             desc="Cost-optimized and auto-scalable infrastructure."
//             color="text-orange-600 bg-orange-100"
//           />
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="bg-slate-100 border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-24">
//           <h2 className="text-3xl font-bold mb-12">
//             How We Deliver Cloud Excellence
//           </h2>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               "Assessment & Strategy",
//               "Architecture Design",
//               "Migration & Deployment",
//               "Optimization & Support",
//             ].map((step, i) => (
//               <div key={i}>
//                 <span className="text-blue-600 font-bold text-xl">
//                   0{i + 1}
//                 </span>
//                 <h4 className="mt-2 font-semibold">{step}</h4>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Structured approach ensuring reliability and scalability.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-24 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Ready to Modernize Your Cloud Infrastructure?
//           </h2>
//           <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
//             Partner with experts who deliver secure, scalable, and future-proof
//             cloud solutions.
//           </p>
//           <button className="mt-8 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-semibold transition">
//             Schedule a Free Consultation
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// }

// /* 🔹 Small reusable components */

// function Metric({ value, label }) {
//   return (
//     <div>
//       <h3 className="text-4xl font-bold text-blue-600">{value}</h3>
//       <p className="text-slate-600 mt-2">{label}</p>
//     </div>
//   );
// }

// function Capability({ icon, title, desc, color }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
//       <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${color} mb-4 text-xl`}>
//         {icon}
//       </div>
//       <h3 className="font-semibold text-lg mb-2">{title}</h3>
//       <p className="text-slate-600 text-sm">{desc}</p>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { FaCloud, FaShieldAlt, FaServer, FaRocket } from "react-icons/fa";

export default function CloudSolutions() {

  const Metric = ({ title, description }) => {
    return (
      <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-blue-600">
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">

        {/* changed py-32 → pt-24 pb-16 */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">

          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Cloud Solutions
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Secure, Scalable & Future-Ready Cloud Infrastructure
          </h1>

          <p className="mt-6 text-slate-600 max-w-2xl text-lg">
            We help enterprises architect, migrate, and optimize cloud environments
            with reliability, security, and performance at scale.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              Get Consultation
            </button>

            <button className="px-6 py-3 border border-slate-300 hover:border-slate-400 rounded-lg transition">
              View Capabilities
            </button>
          </div>

        </div>
      </section>


      {/* CLOUD ENGINEERING EXCELLENCE */}
      <section className="border-t border-slate-200 bg-white">

        {/* changed pt-12 pb-20 → py-16 */}
        <div className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-12">
            Cloud Engineering Excellence
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <Metric
              title="Cloud-native Architecture"
              description="Designed using modern cloud patterns for scalability and resilience"
            />

            <Metric
              title="Secure Cloud Infrastructure"
              description="Built with enterprise-grade security and compliance standards"
            />

            <Metric
              title="Highly Available Deployments"
              description="Ensuring uptime, redundancy, and fault-tolerant systems"
            />

            <Metric
              title="Continuous Monitoring & Support"
              description="Proactive monitoring and ongoing infrastructure optimization"
            />

          </div>

        </div>
      </section>


      {/* CAPABILITIES */}
      {/* changed py-24 → py-16 */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-12">
          Our Cloud Capabilities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Capability
            icon={<FaCloud />}
            title="Cloud Migration"
            desc="Seamless migration to AWS, Azure, or GCP."
            color="text-blue-600 bg-blue-100"
          />

          <Capability
            icon={<FaServer />}
            title="Cloud Architecture"
            desc="Highly available and fault-tolerant systems."
            color="text-indigo-600 bg-indigo-100"
          />

          <Capability
            icon={<FaShieldAlt />}
            title="Security & Compliance"
            desc="Enterprise-grade security and compliance."
            color="text-emerald-600 bg-emerald-100"
          />

          <Capability
            icon={<FaRocket />}
            title="Optimization & Scaling"
            desc="Cost-optimized and auto-scalable infrastructure."
            color="text-orange-600 bg-orange-100"
          />

        </div>

      </section>


      {/* PROCESS */}
      {/* changed py-24 → py-16 */}
      <section className="bg-slate-100 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold mb-12">
            How We Deliver Cloud Excellence
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Assessment & Strategy",
              "Architecture Design",
              "Migration & Deployment",
              "Optimization & Support",
            ].map((step, i) => (

              <div key={i}>

                <span className="text-blue-600 font-bold text-xl">
                  0{i + 1}
                </span>

                <h4 className="mt-2 font-semibold">
                  {step}
                </h4>

                <p className="text-slate-600 text-sm mt-2">
                  Structured approach ensuring reliability and scalability.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      {/* changed py-24 → py-16 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Modernize Your Cloud Infrastructure?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Partner with experts who deliver secure, scalable, and future-proof
            cloud solutions.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-semibold transition">
            Schedule a Free Consultation
          </button>

        </div>

      </section>

    </div>
  );
}


/* Capability component */
function Capability({ icon, title, desc, color }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${color} mb-4 text-xl`}>
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-slate-600 text-sm">
        {desc}
      </p>

    </div>
  );

}
