// import {
//   FaServer,
//   FaNetworkWired,
//   FaUserShield,
//   FaHeadset,
//   FaChartBar,
//   FaSyncAlt,
// } from "react-icons/fa";

// export default function ManagingITServices() {
//   return (
//     <div className="bg-white text-slate-800">

//       {/* INTRO (TEXT-FIRST BANNER) */}
//       <section className="border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-20">
//           <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
//             Managed IT Services
//           </span>

//           <h1 className="mt-3 text-4xl md:text-5xl font-semibold max-w-4xl">
//             Reliable IT Operations Without Daily Disruptions
//           </h1>

//           <p className="mt-5 text-lg text-slate-600 max-w-3xl">
//             We take full responsibility for managing your IT environment—ensuring
//             stability, security, and predictable operations across your business.
//           </p>
//         </div>
//       </section>

//       {/* OPERATIONAL COVERAGE */}
//       <section className="bg-slate-50 border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
//           <Coverage title="Infrastructure" />
//           <Coverage title="Network" />
//           <Coverage title="Security" />
//           <Coverage title="User Support" />
//         </div>
//       </section>

//       {/* WHAT WE MANAGE */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-2xl font-semibold mb-10">
//           What We Actively Manage
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           <ManageItem
//             icon={<FaServer />}
//             title="Servers & Systems"
//             desc="OS health, patching, performance, backups, and recovery readiness."
//           />
//           <ManageItem
//             icon={<FaNetworkWired />}
//             title="Network Infrastructure"
//             desc="Connectivity, firewall rules, VPNs, and bandwidth monitoring."
//           />
//           <ManageItem
//             icon={<FaUserShield />}
//             title="Security Controls"
//             desc="Endpoint protection, access policies, vulnerability mitigation."
//           />
//           <ManageItem
//             icon={<FaHeadset />}
//             title="IT Support"
//             desc="User incidents, service requests, root cause analysis."
//           />
//         </div>
//       </section>

//       {/* DAILY OPERATIONS FLOW */}
//       <section className="bg-slate-50 border-t border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-24">
//           <h2 className="text-2xl font-semibold mb-14">
//             How Daily IT Operations Are Managed
//           </h2>

//           <div className="grid md:grid-cols-5 gap-6 text-sm text-slate-600">
//             <OperationStep title="Monitor" />
//             <OperationStep title="Detect" />
//             <OperationStep title="Resolve" />
//             <OperationStep title="Optimize" />
//             <OperationStep title="Report" />
//           </div>
//         </div>
//       </section>

//       {/* ENGAGEMENT MODELS */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-2xl font-semibold mb-10">
//           Engagement Models
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           <Model
//             title="Fully Managed IT"
//             desc="End-to-end responsibility for your entire IT environment."
//           />
//           <Model
//             title="Co-Managed IT"
//             desc="We work alongside your internal IT team."
//           />
//           <Model
//             title="Support On-Demand"
//             desc="Expert assistance when you need it most."
//           />
//         </div>
//       </section>

//       {/* RISK REDUCTION */}
//       <section className="bg-slate-50 border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-24">
//           <h2 className="text-2xl font-semibold mb-8">
//             Reduced Risk. Predictable Operations.
//           </h2>

//           <p className="text-slate-600 max-w-3xl">
//             Our managed IT approach minimizes unplanned outages, security incidents,
//             and operational surprises—giving leadership confidence in IT stability.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-slate-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//           <h2 className="text-3xl font-semibold">
//             Ready to Simplify IT Operations?
//           </h2>
//           <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
//             Speak with our managed services specialists to understand the right
//             operating model for your business.
//           </p>
//           <button className="mt-8 px-8 py-4 bg-white text-slate-900 rounded-md font-semibold hover:bg-slate-100 transition">
//             Talk to an Expert
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// }

// /* ---------- Small Components ---------- */

// function Coverage({ title }) {
//   return (
//     <div className="text-sm font-semibold text-slate-700">
//       {title}
//     </div>
//   );
// }

// function ManageItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-4">
//       <div className="text-blue-600 text-xl mt-1">{icon}</div>
//       <div>
//         <h3 className="font-semibold">{title}</h3>
//         <p className="text-slate-600 text-sm mt-1">{desc}</p>
//       </div>
//     </div>
//   );
// }

// function OperationStep({ title }) {
//   return (
//     <div className="border border-slate-200 bg-white px-4 py-6 text-center rounded-md font-medium">
//       {title}
//     </div>
//   );
// }

// function Model({ title, desc }) {
//   return (
//     <div className="border border-slate-200 rounded-md p-6 bg-white">
//       <h3 className="font-semibold mb-2">{title}</h3>
//       <p className="text-sm text-slate-600">{desc}</p>
//     </div>
//   );
// }


// import {
//   FaServer,
//   FaShieldAlt,
//   FaNetworkWired,
//   FaClock,
//   FaChartLine,
//   FaHeadset,
//   FaCheckCircle,
//   FaCloud,
//   FaLock,
//   FaTools,
// } from "react-icons/fa";

// export default function ITService() {
//   return (
//     <div className="bg-white text-slate-800">

//       {/* ================= HERO (PROFESSIONAL MSP STYLE) ================= */}
//       <section className="bg-slate-50 border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-28">

//           <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
//             Managed IT Services
//           </span>

//           <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight max-w-4xl text-slate-900">
//             Reliable IT Operations That Support Business Growth
//           </h1>

//           <p className="mt-6 text-lg text-slate-600 max-w-3xl">
//             We proactively manage, monitor, and support your IT environment to
//             reduce risk, prevent downtime, and deliver predictable performance.
//           </p>

//           <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-700">
//             <Capability text="Infrastructure Management" />
//             <Capability text="Network & Security Operations" />
//             <Capability text="24/7 Monitoring & Support" />
//             <Capability text="Predictable IT Performance" />
//           </div>

//         </div>
//       </section>

//       {/* ================= TRUST BAR ================= */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-600 text-sm">
//           Trusted by organizations across healthcare, finance, technology, and retail
//         </div>
//       </section>

//       {/* ================= IT INFRASTRUCTURE MANAGEMENT ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-3xl font-semibold mb-12">
//           IT Infrastructure Management
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           <ServiceItem
//             icon={<FaServer />}
//             title="Servers & Systems"
//             desc="Management of servers, operating systems, patching, backups, and performance monitoring."
//           />
//           <ServiceItem
//             icon={<FaNetworkWired />}
//             title="Network Infrastructure"
//             desc="LAN, WAN, firewall, VPN, and Wi-Fi operations designed for stability and security."
//           />
//           <ServiceItem
//             icon={<FaShieldAlt />}
//             title="Security Controls"
//             desc="Endpoint protection, access policies, threat mitigation, and compliance support."
//           />
//           <ServiceItem
//             icon={<FaHeadset />}
//             title="IT Support & Helpdesk"
//             desc="Responsive incident handling, service requests, and root-cause resolution."
//           />
//         </div>
//       </section>

//       {/* ================= END-TO-END IT OPERATIONS SUPPORT ================= */}
//       <section className="bg-slate-100 border-t border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">

//           <div>
//             <h2 className="text-3xl font-semibold mb-6">
//               End-to-End IT Operations Support
//             </h2>

//             <p className="text-slate-600 text-lg mb-6">
//               Our managed IT services reduce operational risk, minimize downtime,
//               and provide predictable IT performance through proactive management.
//             </p>

//             <p className="text-slate-600 text-lg">
//               Whether fully managed or co-managed, our services scale with your
//               business while maintaining stability and security.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <Benefit text="Reduced downtime and operational risk" />
//             <Benefit text="Predictable IT costs and performance" />
//             <Benefit text="Enterprise-level security practices" />
//             <Benefit text="Scalable support aligned to growth" />
//           </div>

//         </div>
//       </section>

//       {/* ================= METRICS STRIP ================= */}
//       <section className="bg-blue-600 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//           <Metric icon={<FaClock />} value="< 4 Hrs" label="Response Time" />
//           <Metric icon={<FaChartLine />} value="24/7" label="Monitoring" />
//           <Metric icon={<FaShieldAlt />} value="99.9%" label="Uptime SLA" />
//           <Metric icon={<FaHeadset />} value="Dedicated" label="Support Team" />
//         </div>
//       </section>

//       {/* ================= SUPPORTING FEATURES ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div className="grid md:grid-cols-4 gap-8">
//           <Feature icon={<FaCloud />} title="Cloud Enablement" />
//           <Feature icon={<FaLock />} title="Cybersecurity" />
//           <Feature icon={<FaTools />} title="IT Consulting" />
//           <Feature icon={<FaServer />} title="Data Center Support" />
//         </div>
//       </section>

//       {/* ================= FINAL CONTACT FORM (ONLY HERE) ================= */}
//       <section className="bg-slate-900 text-white">
//         <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

//           <div>
//             <h2 className="text-3xl md:text-4xl font-semibold">
//               Ready to Simplify IT Operations?
//             </h2>

//             <p className="mt-4 text-slate-300 max-w-xl">
//               Speak with our managed IT specialists to identify the right support
//               model for your organization.
//             </p>

//             <ul className="mt-6 space-y-2 text-slate-300 text-sm">
//               <li>• No long-term contracts</li>
//               <li>• Free initial assessment</li>
//               <li>• Flexible engagement models</li>
//             </ul>
//           </div>

//           <div className="bg-white text-slate-800 rounded-xl p-8 shadow-xl">
//             <h3 className="text-xl font-semibold mb-6">
//               Request a Consultation
//             </h3>

//             <form className="space-y-4">
//               <input className="w-full border p-3 rounded-md" placeholder="First Name" />
//               <input className="w-full border p-3 rounded-md" placeholder="Last Name" />
//               <input className="w-full border p-3 rounded-md" placeholder="Email" />
//               <input className="w-full border p-3 rounded-md" placeholder="Phone" />
//               <textarea className="w-full border p-3 rounded-md" rows="3" placeholder="Describe your IT needs"></textarea>
//               <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-semibold">
//                 Submit Request
//               </button>
//             </form>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// /* ================= SMALL COMPONENTS ================= */

// function Capability({ text }) {
//   return (
//     <div className="border-l-2 border-blue-600 pl-4">
//       {text}
//     </div>
//   );
// }

// function ServiceItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-4">
//       <div className="text-blue-600 text-xl mt-1">{icon}</div>
//       <div>
//         <h3 className="font-semibold text-lg mb-1">{title}</h3>
//         <p className="text-slate-600 text-sm">{desc}</p>
//       </div>
//     </div>
//   );
// }

// function Benefit({ text }) {
//   return (
//     <div className="flex items-center gap-3">
//       <FaCheckCircle className="text-green-600" />
//       <span className="text-slate-700">{text}</span>
//     </div>
//   );
// }

// function Metric({ icon, value, label }) {
//   return (
//     <div>
//       <div className="text-2xl mb-2 flex justify-center">{icon}</div>
//       <h3 className="text-3xl font-bold">{value}</h3>
//       <p className="text-blue-100 mt-1 text-sm">{label}</p>
//     </div>
//   );
// }

// function Feature({ icon, title }) {
//   return (
//     <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:shadow-md transition">
//       <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl mx-auto mb-4">
//         {icon}
//       </div>
//       <h3 className="font-semibold">{title}</h3>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import {
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaClock,
  FaChartLine,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaCloud,
  FaLock,
  FaTools,
  FaBolt,
} from "react-icons/fa";

export default function ITService() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    requirements: ""
  });

  const [errors, setErrors] = useState({});

  // validation rules
  const validate = (name, value) => {

    let error = "";

    if (name === "Name") {
      if (!value.trim()) error = "Name is required";
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "phone") {
      if (!value.trim()) {
        error = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(value)) {
        error = "Enter a valid 10-digit phone number";
      }
    }

    if (name === "requirements") {
      if (!value.trim()) error = "Please describe your requirements";
    }

    return error;
  };

  // handle change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // realtime validation
    setErrors({
      ...errors,
      [name]: validate(name, value)
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // validate all fields
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // stop if validation errors exist
    if (Object.keys(newErrors).length !== 0) return;

    setIsSubmitting(true);

    // combine full name
    const fullName = `${formData.Name}`;

    // API payload
    const data = {

      name: fullName,

      email: formData.email,

      phone: formData.phone,

      toMail: "suneelgokada1227@gmail.com",

      toName: "Itrika Admin",

      subject: `New Cloud Consultation Request from ${fullName}`,

      message: `
Consultation Requirements:
${formData.requirements}
    `,
    };

    try {

      const response = await fetch(
        "https://api.qrdcard.com/api/url/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Email sending failed");
      }

      // success
      setIsSuccess(true);

      alert("Consultation request sent successfully!");

      // reset form
      setFormData({
        Name: "",
        email: "",
        phone: "",
        requirements: ""
      });

      setErrors({});

    } catch (error) {

      console.error(error);

      alert("Failed to send consultation request. Please try again.");

    } finally {

      setIsSubmitting(false);

    }

  };


  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-slate-800">

      {/* ================= HERO WITH GRADIENT & FORM ================= */}
      {/* ================= PROFESSIONAL HERO WITH FORM ================= */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* BADGE */}
            <span className="inline-block mb-8 px-4 py-1.5 text-sm font-semibold 
    text-blue-700 bg-blue-100 rounded-full">
              Managed IT Services
            </span>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-slate-900">
              Proactive IT Management
              <span className="block mt-2 md:mt-3 text-blue-700 leading-[1.2]">
                Designed for <br className="hidden md:block" /> Growing Businesses
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
              We help organizations reduce operational risk, prevent downtime,
              and maintain predictable IT performance through reliable managed
              IT services.
            </p>

            {/* BULLETS */}
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500 text-sm" />
                Infrastructure & Network Management
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500 text-sm" />
                24/7 Monitoring & IT Support
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500 text-sm" />
                Security, Backup & Compliance
              </li>
            </ul>

          </div>


          {/* RIGHT FORM */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Request a Free IT Consultation
            </h3>

            <p className="text-slate-500 mb-8 text-sm">
              Tell us about your IT needs. Our specialists will reach out shortly.
            </p>

            {/* <form className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="First Name required"
          />
          <input
            className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="Last Name"
          />
        </div>

        <input
          className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:border-blue-600"
          placeholder="Work Email"
        />

        <input
          className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:border-blue-600"
          placeholder="Phone Number"
        />

        <textarea
          rows={4}
          className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:border-blue-600"
          placeholder="Briefly describe your IT requirements"
        />

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-lg transition"
        >
          Schedule Consultation
        </button>
      </form> */}

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* First Name */}
              <div>
                <input
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg focus:outline-none ${errors.Name
                      ? "border-red-500"
                      : "border-slate-300 focus:border-blue-600"
                    }`}
                  placeholder="Full Name *"
                />
                {errors.Name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Name}
                  </p>
                )}
              </div>



              {/* Email */}
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg focus:outline-none ${errors.email
                      ? "border-red-500"
                      : "border-slate-300 focus:border-blue-600"
                    }`}
                  placeholder="Work Email *"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg focus:outline-none ${errors.phone
                      ? "border-red-500"
                      : "border-slate-300 focus:border-blue-600"
                    }`}
                  placeholder="Phone Number *"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Requirements */}
              <div>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full border p-3 rounded-lg focus:outline-none ${errors.requirements
                      ? "border-red-500"
                      : "border-slate-300 focus:border-blue-600"
                    }`}
                  placeholder="Briefly describe your IT requirements *"
                />
                {errors.requirements && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.requirements}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-lg transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Schedule Consultation"}
              </button>


            </form>
          </div>
        </div>
      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-3 text-slate-600 text-sm">
            <FaCheckCircle className="text-green-600" />
            <span className="font-medium">Trusted by 500+ businesses across technology, healthcare, finance, and retail sectors</span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID - INTERACTIVE ================= */}
      {/* ================= MANAGED IT SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            What Our Managed IT Services Cover
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
            Structured, reliable IT services designed to ensure stability,
            security, and long-term scalability for growing organizations.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          <PremiumServiceCard
            icon={<FaServer />}
            title="IT Infrastructure Management"
            desc="Centralized management of servers, systems, patching, and backups
      to maintain stability, performance, and availability."
            color="blue"
            features={[
              "Server & OS Management",
              "Patch & Update Control",
              "Data Backup & Recovery",
              "Performance Monitoring",
            ]}
          />

          <PremiumServiceCard
            icon={<FaNetworkWired />}
            title="Network & Connectivity"
            desc="Secure and reliable network operations covering LAN, WAN,
      firewall configurations, and remote connectivity."
            color="cyan"
            features={[
              "Network Architecture",
              "Firewall & VPN Setup",
              "Secure Connectivity",
              "Wi-Fi Optimization",
            ]}
          />

          <PremiumServiceCard
            icon={<FaShieldAlt />}
            title="Security & Compliance"
            desc="Integrated security controls and compliance practices designed
      to protect data, users, and critical systems."
            color="green"
            features={[
              "Threat Detection",
              "Access Control",
              "Policy Enforcement",
              "Compliance Reviews",
            ]}
          />

          <PremiumServiceCard
            icon={<FaHeadset />}
            title="IT Support & Helpdesk"
            desc="Responsive IT support with structured incident handling,
      resolution workflows, and clear escalation paths."
            color="purple"
            features={[
              "24/7 IT Support",
              "Incident Management",
              "Remote Assistance",
              "Root Cause Analysis",
            ]}
          />

        </div>
      </section>


      {/* ================= HOW WE OPERATE ================= */}
      <section className="bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How We Deliver Reliable IT Operations
            </h2>
            <p className="text-lg text-slate-600">
              Our managed IT services are built on proven operational practices —
              not reactive fixes or short-term solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <OperationCard
              icon={<FaChartLine />}
              title="Proactive Monitoring"
              desc="We continuously monitor infrastructure, systems, and networks to identify issues before they impact operations."
            />

            <OperationCard
              icon={<FaClock />}
              title="Predictable Response"
              desc="Clear response frameworks ensure incidents are handled efficiently with minimal disruption to your business."
            />

            <OperationCard
              icon={<FaShieldAlt />}
              title="Security-First Operations"
              desc="Security controls, access management, and compliance practices are embedded into daily IT operations."
            />

            <OperationCard
              icon={<FaTools />}
              title="Continuous Optimization"
              desc="We regularly review performance, costs, and scalability to ensure your IT environment evolves with your business."
            />

          </div>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              End-to-End IT Operations Support
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Our managed IT services are designed to reduce operational risk,
              prevent downtime, and provide predictable IT performance. We focus
              on proactive management rather than reactive fixes.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Whether you need fully managed IT or co-managed support alongside
              your internal team, our services scale with your business needs.
            </p>

            <div className="space-y-4">
              <BenefitItem text="Reduce IT costs by up to 40%" />
              <BenefitItem text="Minimize downtime and business disruptions" />
              <BenefitItem text="Scale infrastructure as you grow" />
              <BenefitItem text="Access to enterprise-level expertise" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FeatureBox icon={<FaCloud />} title="Cloud Solutions" />
            <FeatureBox icon={<FaLock />} title="Cybersecurity" />
            <FeatureBox icon={<FaTools />} title="IT Consulting" />
            <FeatureBox icon={<FaServer />} title="Data Center" />
          </div>
        </div>
      </section>

      {/* ================= ENTERPRISE CLOSING SECTION ================= */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                A Reliable IT Partner,<br />
                Not Just a Service Provider
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Managing IT is not just about resolving issues—it’s about building
                systems that support your business today and scale for tomorrow.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our managed IT services are designed to give you confidence,
                visibility, and control over your IT operations—without unnecessary
                complexity or disruption.
              </p>
            </div>

            {/* RIGHT TRUST BLOCKS */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Proactive, Not Reactive
                </h4>
                <p className="text-sm text-slate-600">
                  Issues are identified and resolved before they impact business
                  operations.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Built for Long-Term Stability
                </h4>
                <p className="text-sm text-slate-600">
                  Infrastructure decisions aligned with growth, security, and cost
                  efficiency.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Clear Communication
                </h4>
                <p className="text-sm text-slate-600">
                  No jargon. No surprises. Just clear reporting and accountability.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Flexible Engagement Models
                </h4>
                <p className="text-sm text-slate-600">
                  Fully managed or co-managed services based on your internal needs.
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Let’s Talk About Your IT Environment
            </h3>

            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Speak with our managed IT specialists to understand how we can support
              your infrastructure, security, and long-term IT strategy.
            </p>

            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition">
              Schedule a Consultation
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

/* ================= PREMIUM COMPONENTS ================= */

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-blue-100">
      <div className="w-6 h-6 bg-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function PremiumServiceCard({ icon, title, desc, color, features }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
  };

  const iconColors = {
    blue: 'text-blue-500',
    cyan: 'text-cyan-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
  };

  return (
    <div
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses[color]} opacity-10 rounded-bl-full transition-all duration-500 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>

      <div className="relative">
        <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[color]} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : 'scale-100'}`}>
          {icon}
        </div>

        <h3 className="font-bold text-2xl mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
              <FaCheckCircle className={`${iconColors[color]} flex-shrink-0`} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className={`flex items-center gap-2 ${iconColors[color]} font-semibold hover:gap-3 transition-all duration-300`}>
          Learn More <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}

function ModernMetric({ icon, value, label }) {
  return (
    <div className="text-center group">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2">{value}</h3>
      <p className="text-blue-100">{label}</p>
    </div>
  );
}

function BenefitItem({ text }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
      <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}

function FeatureBox({ icon, title }) {
  return (
    <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-2">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-slate-900">{title}</h3>
    </div>
  );
}

function OperationCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xl mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
