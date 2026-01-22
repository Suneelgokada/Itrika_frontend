import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { jobs } from "./jobData";

export default function JobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Job not found
      </div>
    );
  }

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!formData.coverLetter.trim())
      newErrors.coverLetter = "Cover letter is required";

    if (!formData.resume)
      newErrors.resume = "Resume is required";

    return newErrors;
  };

  const baseInput =
    "w-full px-4 py-3 bg-transparent border-b-2 outline-none transition";

  const getInputStyle = (field) =>
    `${baseInput} ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-blue-500 focus:border-blue-700"
    }`;

  const errorText = "mt-1 text-xs text-red-500 font-medium";

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      toMail: "suneelgokada1227@gmail.com",
      toName: "Itrika HR",
      subject: `New Job Application - ${job.title}`,
      message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Cover Letter:
${formData.coverLetter}
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
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
      });
    } catch (err) {
      alert("Unable to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative h-[260px] md:h-[340px]">
        <img
          src="/careers-banner.jpg"
          alt="Career Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-sky-900/70 to-orange-600/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl font-bold">{job.title}</h1>
          <p className="text-white/90 mt-2">
            {job.location} · {job.workspace}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate("/careers")}
          className="flex items-center gap-2 text-blue-600 font-semibold mb-8"
        >
          <ArrowLeft /> Back to Careers
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            <Section title="Summary">{job.summary}</Section>
            <ListSection title="Responsibilities" items={job.responsibilities} />
            <ListSection title="Qualifications" items={job.qualifications} />
          </div>

          {/* RIGHT */}
         <div className="lg:sticky lg:top-24">
  <div className="bg-white shadow-2xl rounded-2xl p-6">
    <h3 className="text-xl font-bold mb-4">
      Apply for this position
    </h3>

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={getInputStyle("name")}
        />
        {errors.name && <p className={errorText}>{errors.name}</p>}
      </div>

      <div>
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={getInputStyle("email")}
        />
        {errors.email && <p className={errorText}>{errors.email}</p>}
      </div>

      <div>
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={getInputStyle("phone")}
        />
        {errors.phone && <p className={errorText}>{errors.phone}</p>}
      </div>

      <div>
        <textarea
          name="coverLetter"
          rows="4"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleChange}
          className={getInputStyle("coverLetter")}
        />
        {errors.coverLetter && (
          <p className={errorText}>{errors.coverLetter}</p>
        )}
      </div>

      <div>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="w-full text-sm"
        />
        {errors.resume && <p className={errorText}>{errors.resume}</p>}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>

    </form>
  </div>
</div>

        </div>
      </div>
    </>
  );
}

/* ================= HELPERS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="list-disc ml-6 text-slate-600 space-y-2">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
