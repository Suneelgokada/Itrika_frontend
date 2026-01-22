import {
  FaCogs,
  FaMobileAlt,
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function SoftwareEngineering() {
      const technologies = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
  ];
  return (
    <section className="bg-white border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* ================= INTRO ================= */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full">
            Software Engineering
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Engineering software that scales,<br />
            <span className="text-slate-700">
              performs, and lasts.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We build reliable, scalable software systems focused on real-world
            business problems. Our engineering approach prioritizes clean
            architecture, long-term maintainability, and measurable impact.
          </p>
        </div>

        {/* ================= CAPABILITIES ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">

          <CapabilityCard
            icon={<FaCode />}
            title="Custom Software Development"
            desc="Tailored software solutions built to support complex workflows and evolving business requirements."
          />

          <CapabilityCard
            icon={<FaMobileAlt />}
            title="Web & Mobile Applications"
            desc="High-performance applications engineered for usability, scalability, and long-term growth."
          />

          <CapabilityCard
            icon={<FaCloud />}
            title="Cloud-Native Architecture"
            desc="Modern, cloud-first systems designed for scalability, resilience, and operational efficiency."
          />

          <CapabilityCard
            icon={<FaCogs />}
            title="Backend & API Engineering"
            desc="Robust backend systems and APIs built for performance, security, and seamless integrations."
          />

          <CapabilityCard
            icon={<FaShieldAlt />}
            title="Security & Performance Engineering"
            desc="Security, reliability, and performance built into every layer of the system."
          />

          <CapabilityCard
            icon={<FaCheckCircle />}
            title="Quality & Maintainability"
            desc="Engineering practices focused on clean code, testing, and long-term maintainability."
          />

        </div>

        {/* ================= ENGINEERING PHILOSOPHY ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Our Engineering Philosophy
            </h3>

            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Great software is not just built — it is engineered with intent.
              Our teams follow structured engineering principles to ensure every
              system we deliver remains stable, scalable, and adaptable.
            </p>

            <div className="space-y-4">
              <PhilosophyItem text="Architecture-first system design" />
              <PhilosophyItem text="Maintainable and testable codebases" />
              <PhilosophyItem text="Security and performance by design" />
              <PhilosophyItem text="Clear ownership and accountable delivery" />
            </div>
          </div>

          {/* ================= CALM CTA ================= */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h4 className="text-2xl font-semibold text-slate-900 mb-4">
              Let’s build software that lasts.
            </h4>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Partner with an engineering team that understands scalability,
              reliability, and long-term product success.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition">
              Talk to Our Engineering Team
            </button>
          </div>

        </div>
      </div>
       <section className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-28">

    

        {/* ================= CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT – CAPABILITIES */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              What We Deliver
            </h3>

            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-orange-500"></span>
                Custom software engineering tailored to business workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-orange-500"></span>
                Scalable backend systems and API-driven architectures
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-orange-500"></span>
                Secure, performance-optimized applications
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-orange-500"></span>
                Long-term maintainability and clean code practices
              </li>
            </ul>

            <p className="mt-8 text-slate-600 leading-relaxed">
              Whether you are building a new product, modernizing legacy systems,
              or scaling existing platforms, our engineering approach ensures
              stability, performance, and growth.
            </p>
          </div>

          {/* RIGHT – TECH STACK */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Technology Stack
            </h3>

            <p className="text-slate-600 mb-8">
              We use industry-proven technologies trusted by enterprises
              worldwide to ensure reliability and future scalability.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="
                    bg-slate-50
                    border border-slate-200
                    rounded-lg
                    px-5 py-3
                    text-sm
                    font-medium
                    text-slate-800
                    text-center
                    hover:border-orange-400
                    hover:bg-white
                    transition
                  "
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
    </section>
    
  );
}


/* ================= SUB COMPONENTS ================= */

function CapabilityCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-6">
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

function PhilosophyItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-orange-600 mt-1" />
      <span className="text-slate-700 text-base">{text}</span>
    </div>
  );
}
