// import React, { useState } from 'react';
// import { CheckCircle, AlertCircle } from 'lucide-react';

// export default function JobApplicationForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     position: '',
//     startDate: '',
//     resumeLink: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const positions = [
//     '.Net Developer',
//     'AI/ML Developer',
//     'ServiceNow Developer',
//     'Java Developer',
//     'Programmer Analyst',
//     'System Admin'
//   ];

//   const validateField = (name, value) => {
//     switch (name) {
//       case 'firstName':
//         if (!value.trim()) return 'First name is required';
//         if (value.trim().length < 2) return 'Name must be at least 2 characters';
//         if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters';
//         return '';
//       case 'lastName':
//         if (!value.trim()) return 'Last name is required';
//         if (value.trim().length < 2) return 'Name must be at least 2 characters';
//         if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters';
//         return '';
//       case 'email':
//         if (!value.trim()) return 'Email is required';
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
//         return '';
//       case 'phone':
//         if (!value.trim()) return 'Phone number is required';
//         if (!/^[0-9]{10}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid 10-digit phone number';
//         return '';
//       case 'position':
//         if (!value) return 'Please select a position';
//         return '';
//       case 'startDate':
//         if (!value) return 'Available start date is required';
//         return '';
//       case 'resumeLink':
//         if (!value.trim()) return 'Resume link is required';
//         if (!/^https?:\/\/.+/.test(value)) return 'Enter a valid URL (e.g., https://...)';
//         return '';
//       default:
//         return '';
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (touched[name]) {
//       const error = validateField(name, value);
//       setErrors(prev => ({ ...prev, [name]: error }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//     const error = validateField(name, value);
//     setErrors(prev => ({ ...prev, [name]: error }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     const newTouched = {};
//     Object.keys(formData).forEach(key => {
//       newTouched[key] = true;
//       const error = validateField(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });
//     setTouched(newTouched);
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setSubmitSuccess(true);
//         setTimeout(() => {
//           setFormData({
//             firstName: '', lastName: '', email: '', phone: '',
//             position: '', startDate: '', resumeLink: ''
//           });
//           setTouched({});
//           setErrors({});
//           setSubmitSuccess(false);
//         }, 3000);
//       }, 1500);
//     }
//   };

//   // Label style constant for consistency
//   const labelStyle = "block text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-1";

//   if (submitSuccess) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center border-2 border-green-500">
//           <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
//             <CheckCircle className="w-12 h-12 text-white" />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Application Submitted!</h2>
//           <p className="text-gray-600 mb-6">Thank you for applying. We'll review your application and get back to you soon.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       <div className="grid lg:grid-cols-2 min-h-screen">
//         {/* Left Side */}
//         <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 
//                 mt-[100px] mb-[100px] 
//                 p-12 flex flex-col justify-center text-white rounded-lg">
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/40"></div>

//   {/* Background image */}
//   <div 
//     className="absolute inset-0 bg-cover bg-center opacity-40"
//     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80')" }}
//   ></div>

//   {/* Content */}
//   <div className="relative z-10 max-w-lg">
//     <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase tracking-tighter">
//       Job<br />Application
//     </h1>
//     <p className="text-xl text-gray-200 leading-relaxed font-light">
//       Please complete the form to apply<br />for a position with us.
//     </p>

//     <div className="mt-12 space-y-4">
//       {['Professional opportunities', 'Innovative work environment', 'Career growth'].map((text, i) => (
//         <div key={i} className="flex items-center gap-3">
//           <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//           <span className="text-gray-300 font-medium text-sm uppercase tracking-wide">{text}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>


//         {/* Right Side - Form */}
//         <div className="bg-white p-8 lg:p-16 flex items-center justify-center">
//           <div className="w-full max-w-xl">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <label className={labelStyle}>First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
//                       ${touched.firstName && errors.firstName ? 'border-red-500' : touched.firstName && formData.firstName ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                   />
//                   {touched.firstName && errors.firstName && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.firstName}</div>}
//                 </div>

//                 <div className="space-y-1">
//                   <label className={labelStyle}>Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
//                       ${touched.lastName && errors.lastName ? 'border-red-500' : touched.lastName && formData.lastName ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                   />
//                   {touched.lastName && errors.lastName && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.lastName}</div>}
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className={labelStyle}>Email Address *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
//                     ${touched.email && errors.email ? 'border-red-500' : touched.email && formData.email ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                 />
//                 {touched.email && errors.email && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.email}</div>}
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <label className={labelStyle}>Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="000 000 0000"
//                     className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
//                       ${touched.phone && errors.phone ? 'border-red-500' : touched.phone && formData.phone ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                   />
//                   {touched.phone && errors.phone && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.phone}</div>}
//                 </div>

//                 <div className="space-y-1">
//                   <label className={labelStyle}>Job Position</label>
//                   <select
//                     name="position"
//                     value={formData.position}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none cursor-pointer font-medium
//                       ${touched.position && errors.position ? 'border-red-500' : touched.position && formData.position ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                   >
//                     <option value="">Select position</option>
//                     {positions.map((pos, index) => (
//                       <option key={index} value={pos}>{pos}</option>
//                     ))}
//                   </select>
//                   {touched.position && errors.position && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.position}</div>}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <label className={labelStyle}>Availability Date</label>
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
//                       ${touched.startDate && errors.startDate ? 'border-red-500' : touched.startDate && formData.startDate ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                   />
//                   {touched.startDate && errors.startDate && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.startDate}</div>}
//                 </div>

//                 <div className="space-y-1">
//                   <label className={labelStyle}>Resume Portfolio Link</label>
//                   <input
//                     type="url"
//                     name="resumeLink"
//                     value={formData.resumeLink}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="https://..."
//                     className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
//                       ${touched.resumeLink && errors.resumeLink ? 'border-red-500' : touched.resumeLink && formData.resumeLink ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
//                   />
//                   {touched.resumeLink && errors.resumeLink && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.resumeLink}</div>}
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full py-4 bg-blue-600 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
//                 >
//                   {isSubmitting ? 'Processing...' : 'Submit Application'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

// export default function JobApplicationForm() {
//   const [formData, setFormData] = useState({
//     firstName: '', lastName: '', email: '', phone: '',
//     position: '', startDate: '', resumeLink: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const positions = ['.Net Developer', 'AI/ML Developer', 'ServiceNow Developer', 'Java Developer', 'Programmer Analyst', 'System Admin'];

//   const validateField = (name, value) => {
//     switch (name) {
//       case 'firstName': return !value.trim() ? 'First name is required' : '';
//       case 'lastName': return !value.trim() ? 'Last name is required' : '';
//       case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email' : '';
//       case 'phone': return !/^[0-9]{10}$/.test(value.replace(/\s/g, '')) ? 'Valid 10-digit number required' : '';
//       case 'position': return !value ? 'Select a position' : '';
//       case 'startDate': return !value ? 'Start date is required' : '';
//       case 'resumeLink': return !/^https?:\/\/.+/.test(value) ? 'Valid URL required' : '';
//       default: return '';
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (touched[name]) setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//     setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach(key => {
//       const error = validateField(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });
//     setErrors(newErrors);
//     setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setSubmitSuccess(true);
//       }, 1500);
//     }
//   };

//   const labelStyle = "block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1";

//   if (submitSuccess) {
//     return (
//       <div className="min-h-[600px] flex items-center justify-center p-6">
//         <div className="text-center p-12 bg-white rounded-3xl shadow-2xl border border-green-100">
//           <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-black uppercase tracking-tighter">Application Sent!</h2>
//           <p className="text-slate-500 mt-2">We will get back to you soon.</p>
//         </div>
//       </div>
//     );
//   }

//  return (
//   <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-6">
//     <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 min-h-[600px] lg:min-h-[700px]">
      
//       {/* Left Section - Image */}
//       <div className="relative hidden lg:flex flex-col justify-center p-16 text-white overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-110"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80')",
//           }}
//         >
//           <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-[2px]"></div>
//         </div>
//         <div className="relative z-10">
//           <h2 className="text-5xl font-black leading-none uppercase tracking-tighter mb-6">
//             Build Your<br />Future
//           </h2>
//           <p className="text-blue-100 text-lg font-light mb-8">
//             Join Itrika Inc and work on cutting-edge technologies.
//           </p>
//           <div className="space-y-4">
//             {["Innovation", "Growth", "Excellence"].map((item) => (
//               <div key={item} className="flex items-center gap-3">
//                 <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
//                 <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Form */}
//       <div className="p-12 lg:p-16 flex items-center">
//         <form onSubmit={handleSubmit} className="space-y-6 w-full">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className={labelStyle}>First Name</label>
//               <input
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`w-full py-2 bg-transparent border-b-2 outline-none transition-all ${
//                   touched.firstName && errors.firstName
//                     ? "border-red-500"
//                     : "border-slate-200 focus:border-blue-600"
//                 }`}
//               />
//             </div>
//             <div>
//               <label className={labelStyle}>Last Name</label>
//               <input
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`w-full py-2 bg-transparent border-b-2 outline-none transition-all ${
//                   touched.lastName && errors.lastName
//                     ? "border-red-500"
//                     : "border-slate-200 focus:border-blue-600"
//                 }`}
//               />
//             </div>
//           </div>

//           <div>
//             <label className={labelStyle}>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={`w-full py-2 bg-transparent border-b-2 outline-none transition-all ${
//                 touched.email && errors.email
//                   ? "border-red-500"
//                   : "border-slate-200 focus:border-blue-600"
//               }`}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className={labelStyle}>Phone</label>
//               <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`w-full py-2 bg-transparent border-b-2 outline-none transition-all ${
//                   touched.phone && errors.phone
//                     ? "border-red-500"
//                     : "border-slate-200 focus:border-blue-600"
//                 }`}
//               />
//             </div>
//             <div>
//               <label className={labelStyle}>Position</label>
//               <select
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 className="w-full py-2 bg-transparent border-b-2 outline-none border-slate-200 focus:border-blue-600"
//               >
//                 <option value="">Select</option>
//                 {positions.map((p) => (
//                   <option key={p} value={p}>
//                     {p}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className={labelStyle}>Portfolio/Resume Link</label>
//             <input
//               name="resumeLink"
//               value={formData.resumeLink}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="https://..."
//               className="w-full py-2 bg-transparent border-b-2 outline-none border-slate-200 focus:border-blue-600"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full py-4 mt-6 bg-blue-600 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-blue-600/20 active:scale-95"
//           >
//             {isSubmitting ? "Processing..." : "Submit Application"}
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );

// }


import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    position: "",
    resumeLink: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const positions = [
    ".Net Developer",
    "AI/ML Developer",
    "ServiceNow Developer",
    "Java Developer",
    "Programmer Analyst",
    "System Admin",
  ];

  /* ================= AUTO HIDE SUCCESS (3 SEC) ================= */
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit number";

    if (!formData.position)
      newErrors.position = "Please select a position";

    if (!formData.resumeLink.trim())
      newErrors.resumeLink = "Resume / Portfolio link is required";

    return newErrors;
  };

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    const data = {
      name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      toMail: "suneelgokada1227@gmail.com",
      toName: "Itrika HR",
      subject: `Job Application - ${formData.position}`,
      message: `
Name: ${formData.firstName}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}

Resume / Portfolio:
${formData.resumeLink}
      `,
    };

    try {
      const response = await fetch(
        "https://api.qrdcard.com/api/url/sendmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Mail failed");

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        position: "",
        resumeLink: "",
      });
    } catch (err) {
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= MAIN UI (UNCHANGED) ================= */
  return (
    <div className="bg-slate-50 flex items-start md:items-center justify-center font-[Poppins] px-4 sm:px-6 md:px-10 py-10">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[1.5rem] shadow-2xl overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[680px]">

        {/* LEFT PANEL – SAME */}
         <div className="relative flex flex-col justify-center text-white p-8 sm:p-10 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1b33] via-[#11254a] to-[#0c1b33]" />

          <div className="relative z-10 space-y-8">
            <div>
              <h2 className="text-[28px] sm:text-[32px] md:text-5xl font-semibold leading-tight tracking-tight">
                Join Our{" "}
                <span className="text-[#f97316]">Global Team</span>
              </h2>
              <div className="h-1 w-10 bg-[#f97316] mt-4" />
            </div>

            <p className="text-[15px] sm:text-lg text-slate-300 leading-[1.6] max-w-sm">
              Work with innovation and achieve excellence at Itrika Inc.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "INNOVATION",
                "GLOBAL EXPOSURE",
                "CAREER GROWTH",
                "WORK-LIFE BALANCE",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full" />
                  <span className="text-[11px] tracking-widest text-slate-400 uppercase font-semibold">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="p-8 sm:p-10 lg:p-16 flex items-center bg-white">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">

            {/* ✅ INLINE SUCCESS MESSAGE */}
            {submitSuccess && (
              <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-green-700 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Application submitted successfully.
              </div>
            )}

            <Input
              label="Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              <div>
                <Label>Position</Label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={`w-full py-2 border-b bg-transparent text-sm outline-none transition-colors
                    ${
                      errors.position
                        ? "border-red-500 hover:border-red-500 focus:border-red-500"
                        : "border-slate-200 hover:border-blue-600 focus:border-blue-600"
                    }`}
                >
                  <option value="">Select</option>
                  {positions.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
                {errors.position && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.position}
                  </p>
                )}
              </div>
            </div>

            <Input
              label="Portfolio / Resume Link"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              error={errors.resumeLink}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#2563eb] hover:bg-[#f97316] text-white font-semibold text-[11px] uppercase tracking-[0.2em] transition-all rounded disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE ================= */
function Label({ children }) {
  return (
    <label className="block text-[10px] uppercase tracking-widest font-semibold text-slate-700 mb-1">
      {children}
    </label>
  );
}

function Input({ label, error, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className={`w-full py-2 border-b bg-transparent text-sm outline-none transition-colors duration-200
          ${
            error
              ? "border-red-500 focus:border-red-500 hover:border-red-500"
              : "border-slate-200 hover:border-blue-600 focus:border-blue-600"
          }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
