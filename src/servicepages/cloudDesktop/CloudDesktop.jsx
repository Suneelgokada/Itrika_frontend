import { useState, useEffect } from 'react';
import {
  FaCloud,
  FaShieldAlt,
  FaLock,
  FaLaptop,
  FaGlobe,
  FaSyncAlt,
  FaCheckCircle,
  FaArrowRight,
  FaServer,
  FaDesktop,
  FaUsers,
  FaChartLine,
  FaCog,
  FaBolt,
  FaUserShield,
  FaCloudDownloadAlt,
} from "react-icons/fa";

export default function CloudDesktop() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: <FaGlobe />, title: "Work Anywhere", desc: "Access your desktop securely from office, home, or on the go.", color: "blue" },
    { icon: <FaShieldAlt />, title: "Enterprise Security", desc: "Centralized control with advanced security and compliance.", color: "green" },
    { icon: <FaSyncAlt />, title: "Easy Scaling", desc: "Add or remove users instantly as your team grows.", color: "orange" },
    { icon: <FaLaptop />, title: "Device Independent", desc: "Works on laptops, tablets, and low-end devices.", color: "purple" },
  ];

  return (
    <div className="bg-white text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
<div
  className={`transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {/* Badge */}
  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full">
    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
    <span className="text-sm font-semibold text-orange-700">
      Cloud Desktop Solution
    </span>
  </div>

  {/* Heading */}
  <h1
    className="
      text-[30px]
      sm:text-[34px]
      lg:text-[42px]
      font-semibold
      leading-[1.15]
      tracking-tight
      text-slate-900
    "
  >
    Secure Cloud Desktops
    <span
      className="
        block
        mt-2
        text-[26px]
        sm:text-[30px]
        lg:text-[38px]
        font-semibold
        text-blue-600
      "
    >
      Work From Anywhere
    </span>
  </h1>

  {/* Description */}
  <p className="mt-6 text-[16px] sm:text-[17px] lg:text-[18px] text-slate-600 leading-relaxed max-w-xl">
    Enable your workforce with centralized, secure, and scalable
    cloud desktops that provide seamless access to business tools
    from any location or device.
  </p>

  {/* Checklist */}
  <div className="mt-8 space-y-3">
    <CheckItem text="Access desktops from any device" />
    <CheckItem text="Centralized data & security control" />
    <CheckItem text="Scalable for remote & hybrid teams" />
  </div>

  {/* CTA */}
  <div className="mt-10 flex flex-wrap gap-4">
    <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md shadow-blue-600/20">
      Get Started <FaArrowRight className="text-sm" />
    </button>

    <button className="px-7 py-3.5 bg-white border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-[15px] font-semibold rounded-lg transition-all duration-300">
      Schedule Demo
    </button>
  </div>
</div>


            {/* RIGHT – Professional Visual */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                {/* Main Desktop Visual */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white border border-slate-200 rounded-lg p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-3 bg-blue-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  {/* Device Icons */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <DeviceIcon icon={<FaDesktop />} label="Desktop" />
                    <DeviceIcon icon={<FaLaptop />} label="Laptop" />
                    <DeviceIcon icon={<FaCloud />} label="Cloud" />
                  </div>
                </div>

                {/* Floating Stats */}
                <FloatingStat value="99.9%" label="Uptime" position="top-0 -right-4" />
                <FloatingStat value="256-bit" label="Encryption" position="bottom-0 -left-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-slate-500 font-medium">
            Trusted by enterprises across healthcare, finance, technology, and professional services
          </p>
        </div>
      </section>

      {/* ================= WHAT IS CLOUD DESKTOP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Is a Cloud Desktop?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A Cloud Desktop is a virtual desktop environment hosted in the cloud.
              It allows users to securely access their work environment, applications,
              and data from anywhere—without relying on physical office systems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether your team is working remotely, in a hybrid model, or needs secure access to sensitive data, cloud desktops provide the flexibility and security modern businesses demand.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <InfoRow icon={<FaCloudDownloadAlt />} title="Cloud-Native" desc="Fully hosted and managed in the cloud" />
              <InfoRow icon={<FaUserShield />} title="Secure Access" desc="Multi-factor authentication and encryption" />
              <InfoRow icon={<FaCog />} title="Customizable" desc="Tailored to your business needs" />
              <InfoRow icon={<FaBolt />} title="High Performance" desc="Enterprise-grade infrastructure" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Cloud Desktop
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Designed to improve productivity, security, and operational
              flexibility for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <BenefitCard
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                desc={benefit.desc}
                color={benefit.color}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURE COMPARISON ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Traditional Desktop vs Cloud Desktop
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how cloud desktops transform your IT infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ComparisonCard
            title="Traditional Desktop"
            type="traditional"
            features={[
              { text: "Fixed location access", available: false },
              { text: "Hardware dependent", available: false },
              { text: "Manual updates required", available: false },
              { text: "Limited scalability", available: false },
              { text: "Higher IT overhead", available: false },
            ]}
          />
          <ComparisonCard
            title="Cloud Desktop"
            type="cloud"
            features={[
              { text: "Access from anywhere", available: true },
              { text: "Device independent", available: true },
              { text: "Automatic updates", available: true },
              { text: "Instant scaling", available: true },
              { text: "Reduced IT burden", available: true },
            ]}
          />
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">
                Ideal for Modern Work Environments
              </h2>

              <div className="space-y-6">
                <UseCaseItem 
                  icon={<FaUsers />}
                  title="Remote & Hybrid Teams"
                  desc="Enable seamless collaboration regardless of location"
                />
                <UseCaseItem 
                  icon={<FaServer />}
                  title="Distributed IT Management"
                  desc="Centralize control while supporting global workforces"
                />
                <UseCaseItem 
                  icon={<FaLock />}
                  title="Secure Partner Access"
                  desc="Provide contractors safe, controlled environment access"
                />
                <UseCaseItem 
                  icon={<FaChartLine />}
                  title="Cost Optimization"
                  desc="Reduce hardware costs and infrastructure overhead"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FeatureBox icon={<FaServer />} title="Centralized IT" color="blue" />
              <FeatureBox icon={<FaLock />} title="Data Protection" color="green" />
              <FeatureBox icon={<FaCloud />} title="Cloud Hosted" color="orange" />
              <FeatureBox icon={<FaLaptop />} title="Any Device" color="purple" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <StatBox value="60%" label="Cost Reduction" />
            <StatBox value="99.9%" label="Uptime SLA" />
            <StatBox value="24/7" label="Support Available" />
            <StatBox value="10min" label="Deployment Time" />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Enable the Future of Work with Cloud Desktops
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Let us help you deploy a secure, scalable, and reliable cloud
            desktop environment tailored to your business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-3 shadow-xl shadow-blue-600/20">
              Talk to Our Experts <FaArrowRight />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-semibold rounded-lg transition-all duration-300">
              Download Whitepaper
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              <span>Quick Setup</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-slate-700">
      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <FaCheckCircle className="text-green-600 text-sm" />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function DeviceIcon({ icon, label }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl mb-2">
        {icon}
      </div>
      <p className="text-xs text-slate-600 font-medium">{label}</p>
    </div>
  );
}

function FloatingStat({ value, label, position }) {
  return (
    <div className={`absolute ${position} bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg`}>
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <div className="text-xs text-slate-600 font-medium">{label}</div>
    </div>
  );
}

function InfoRow({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc, color, delay }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  };

  return (
    <div 
      className={`bg-white border-2 ${isHovered ? colorClasses[color].border : 'border-slate-200'} rounded-xl p-8 hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-14 h-14 ${colorClasses[color].bg} ${colorClasses[color].text} rounded-xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ComparisonCard({ title, type, features }) {
  const isCloud = type === 'cloud';
  
  return (
    <div className={`bg-white border-2 ${isCloud ? 'border-blue-500' : 'border-slate-200'} rounded-2xl p-8 ${isCloud ? 'shadow-xl' : ''}`}>
      {isCloud && (
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
          RECOMMENDED
        </div>
      )}
      <h3 className="text-2xl font-bold mb-6 text-slate-900">{title}</h3>
      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {feature.available ? (
              <FaCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-0.5" />
            ) : (
              <div className="w-5 h-5 border-2 border-slate-300 rounded-full flex-shrink-0 mt-0.5"></div>
            )}
            <span className={feature.available ? 'text-slate-700 font-medium' : 'text-slate-400'}>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UseCaseItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors duration-300">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1 text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function FeatureBox({ icon, title, color }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl p-8 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
      <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${colorClasses[color]} text-white rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h4 className="font-bold text-slate-900">{title}</h4>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div>
      <div className="text-5xl font-bold mb-2">{value}</div>
      <div className="text-slate-400 font-medium">{label}</div>
    </div>
  );
}