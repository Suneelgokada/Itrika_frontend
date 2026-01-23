// import React, { useState } from "react";
// import { Mail, Phone, Send, CheckCircle, MapPin } from "lucide-react";

// export default function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateField = (name, value) => {
//     if (!value.trim() && name !== "company") return `${name} is required`;
//     if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//       return "Invalid email address";
//     if (name === "phone" && !/^[0-9]{10}$/.test(value.replace(/\s/g, "")))
//       return "10 digits required";
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//     if (touched[name]) {
//       setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((p) => ({ ...p, [name]: true }));
//     setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const err = validateField(key, formData[key]);
//       if (err) newErrors[key] = err;
//     });
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
//       await new Promise((r) => setTimeout(r, 2000));
//       setIsSubmitting(false);
//       setIsSuccess(true);
//     }
//   };

//   const labelStyle =
//     "block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1";
//   const inputStyle =
//     "w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 outline-none text-sm";

//   return (
//     <div className="w-full">
//       {/* ================= BANNER ================= */}
//       <section className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] overflow-hidden">
//         <img
//           src="./contactbanner.png"
//           alt="Contact Banner"
//           className="w-full h-full object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 via-blue-600/60 to-indigo-700/70" />

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
//             <span className="text-orange-400">Contact</span>{" "}
//             <span className="text-sky-300">Us</span>
//           </h1>

//           <p className="mt-3 max-w-xl text-sm sm:text-base text-white/90 font-medium">
//             Let’s connect and build something meaningful together
//           </p>

//           <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-orange-400 to-sky-400 rounded-full" />
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="max-w-7xl mx-auto px-4 py-20">
//         {/* 🔥 OUTER WRAPPER CONTAINER */}
//         <div className="bg-slate-50 rounded-2xl shadow-xl p-6 md:p-10">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* LEFT: CONTACT FORM */}
//             <div className="bg-white shadow-2xl rounded-xl p-10">
//               {isSuccess ? (
//                 <div className="text-center py-20">
//                   <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold">Message Sent</h3>
//                   <p className="text-slate-500 mt-2">
//                     We will contact you shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label className={labelStyle}>Full Name</label>
//                     <input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputStyle}
//                     />
//                     {errors.name && touched.name && (
//                       <p className="text-[10px] text-red-500 mt-1">
//                         {errors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <div>
//                       <label className={labelStyle}>Email</label>
//                       <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={inputStyle}
//                       />
//                     </div>

//                     <div>
//                       <label className={labelStyle}>Phone</label>
//                       <input
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={inputStyle}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className={labelStyle}>Company (Optional)</label>
//                     <input
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className={inputStyle}
//                     />
//                   </div>

//                   <div>
//                     <label className={labelStyle}>Message</label>
//                     <textarea
//                       rows="3"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`${inputStyle} resize-none`}
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full py-4 bg-indigo-600 hover:bg-orange-600 text-white uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 rounded-md"
//                   >
//                     {isSubmitting ? "Processing..." : "Send Inquiry"}
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* RIGHT: MAP */}
//             <div className="space-y-3">
//               <div className="rounded-xl overflow-hidden shadow-2xl">
//                 <iframe
//                   title="Itrika Location"
//                   className="w-full h-[410px]"
//                   loading="lazy"
//                   allowFullScreen
//                   src="https://www.google.com/maps?q=1821%20Walden%20Office%20Square%20Suite%20400%20Schaumburg%20Illinois%2060173&output=embed"
//                 />
//               </div>

//               <div className="bg-indigo-700 text-white rounded-xl p-8 space-y-5">
//                 <div className="flex items-start gap-3">
//                   <MapPin />
//                   <p>
//                     1821 Walden Office Square, Suite 400,
//                     <br />
//                     Schaumburg, Illinois, 60173
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Phone />
//                   <p>+1 (555) 012 3456</p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Mail />
//                   <p>support@itrikainc.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState,useEffect } from "react";
import { Mail, Phone, Send, CheckCircle, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    if (!value.trim() && name !== "company") return `${name} is required`;
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email address";
    if (name === "phone" && !/^[0-9]{10}$/.test(value.replace(/\s/g, "")))
      return "10 digits required";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (touched[name]) {
      setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
    }
  };

  useEffect(() => {
  if (isSuccess) {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [isSuccess]);


  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
     setTouched({
    name: true,
    email: true,
    phone: true,
    company: true,
    message: true,
  });
    if (Object.keys(newErrors).length !== 0) return;

    setIsSubmitting(true);

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      toMail: "hire@itrika-inc.com",
      toName: "Itrika Admin",
      subject: `New Contact Inquiry from ${formData.name}`,
      message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}

Message:
${formData.message}
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

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  /* ✅ MOBILE input height reduced */
  const inputStyle =
    "w-full px-4 py-3 max-[425px]:py-2.5 max-[375px]:py-2 bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 outline-none text-sm";

  const labelStyle =
    "block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1";

    const errorTextStyle = "mt-1 text-xs text-red-500 font-medium";
const getInputStyle = (name) =>
  `${inputStyle} ${
    errors[name]
      ? "border-red-500 focus:border-red-500"
      : "border-slate-200 focus:border-indigo-600"
  }`;

  return (
    <div className="w-full">
      {/* ================= BANNER ================= */}
      <section
        className="
          relative
          h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px]
          overflow-hidden

          /* ✅ MOBILE HEADER GAP */
          mt-[60px]
          max-[425px]:mt-[70px]
          max-[375px]:mt-[80px]

          sm:mt-0
        "
      >
        <img
          src="./contactbanner.png"
          alt="Contact Banner"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 via-blue-600/60 to-indigo-700/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            <span className="text-orange-400">Contact</span>{" "}
            <span className="text-sky-300">Us</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-white/90 font-medium">
            Let’s connect and build something meaningful together
          </p>

          <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-orange-400 to-sky-400 rounded-full" />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section
        className="
          max-w-7xl mx-auto px-4 pb-20

          /* ✅ MOBILE GAP REDUCED */
          mt-16 max-[425px]:mt-14 max-[375px]:mt-12

          sm:mt-0
        "
      >
        <div className="bg-slate-50 rounded-2xl shadow-xl p-5 sm:p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT: CONTACT FORM */}
         <div
  className="
    bg-white shadow-2xl rounded-xl
    p-10 sm:p-10
    max-[425px]:p-5
    max-[375px]:p-4
  "
>
  {/* ✅ SUCCESS MESSAGE */}
{isSuccess && (
  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700 text-sm font-medium flex items-center gap-2 animate-fade-in">
    <CheckCircle className="w-5 h-5 text-green-600" />
    Message sent successfully. Our team will contact you shortly.
  </div>
)}


  <form
    onSubmit={handleSubmit}
    className="
      space-y-5
      max-[425px]:space-y-4
      max-[375px]:space-y-3
    "
  >
   <div>
  <label className={labelStyle}>Full Name</label>
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
    onBlur={handleBlur}
    disabled={isSubmitting}
    className={getInputStyle("name")}
  />
  {errors.name && <p className={errorTextStyle}>{errors.name}</p>}
</div>


    <div className="grid sm:grid-cols-2 gap-5 max-[425px]:gap-4">
   <div>
  <label className={labelStyle}>Email</label>
  <input
    name="email"
    value={formData.email}
    onChange={handleChange}
    onBlur={handleBlur}
    disabled={isSubmitting}
    className={getInputStyle("email")}
  />
  {errors.email && <p className={errorTextStyle}>{errors.email}</p>}
</div>


      <div>
  <label className={labelStyle}>Phone</label>
  <input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    onBlur={handleBlur}
    disabled={isSubmitting}
    className={getInputStyle("phone")}
  />
  {errors.phone && <p className={errorTextStyle}>{errors.phone}</p>}
</div>

    </div>

    <div>
      <label className={labelStyle}>Company (Optional)</label>
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        disabled={isSubmitting}
        className={inputStyle}
      />
    </div>
<div>
  <label className={labelStyle}>Message</label>
  <textarea
    rows="3"
    name="message"
    value={formData.message}
    onChange={handleChange}
    onBlur={handleBlur}
    disabled={isSubmitting}
    className={`${getInputStyle("message")} resize-none`}
  />
  {errors.message && <p className={errorTextStyle}>{errors.message}</p>}
</div>


    <button
      type="submit"
      disabled={isSubmitting}
      className="
        w-full
        px-8 md:px-10 py-4
        bg-blue-600/80 hover:bg-orange-600/80
        text-white font-bold
        text-[11px] md:text-xs uppercase tracking-[0.2em]
        flex items-center justify-center gap-2
        transition-all duration-500
        shadow-xl shadow-blue-600/30
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
      "
    >
      {isSubmitting ? "Sending..." : "Send Inquiry"}
      {!isSubmitting && <Send className="w-4 h-4" />}
    </button>
  </form>
</div>


            {/* RIGHT: MAP */}
            <div className="space-y-3 max-[425px]:space-y-2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  title="Itrika Location"
                  className="w-full h-[280px] sm:h-[340px] md:h-[410px]"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=1821%20Walden%20Office%20Square%20Suite%20400%20Schaumburg%20Illinois%2060173&output=embed"
                />
              </div>

         <div className="bg-blue-600/80 backdrop-blur-md text-white rounded-xl p-8 space-y-6 max-[425px]:p-6 shadow-2xl shadow-blue-900/20 border border-white/10">
  
  {/* Address Section */}
  <div className="flex items-start gap-4 group cursor-pointer">
    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
      <MapPin className="w-5 h-5 text-blue-100 group-hover:text-orange-400 transition-colors duration-300" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-blue-200 font-semibold mb-1 group-hover:text-orange-200 transition-colors">Our Location</span>
      <p className="text-sm md:text-base leading-relaxed font-medium">
        1821 Walden Office Square, Suite 400,
        <br />
        <span className="text-white/90">Schaumburg, Illinois, 60173</span>
      </p>
    </div>
  </div>

  {/* Phone Section */}
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
      <Phone className="w-5 h-5 text-blue-100 group-hover:text-orange-400 transition-colors duration-300" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-blue-200 font-semibold group-hover:text-orange-200 transition-colors">Call Us</span>
      <p className="text-sm md:text-base font-bold tracking-wide">+1 (555) 012 3456</p>
    </div>
  </div>

  {/* Email Section */}
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
      <Mail className="w-5 h-5 text-blue-100 group-hover:text-orange-400 transition-colors duration-300" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-blue-200 font-semibold group-hover:text-orange-200 transition-colors">Email Us</span>
      <p className="text-sm md:text-base font-medium group-hover:text-white transition-colors">
        support@itrikainc.com
      </p>
    </div>
  </div>
</div>
            </div>
            {/* END MAP */}
          </div>
        </div>
      </section>
    </div>
  );
}
