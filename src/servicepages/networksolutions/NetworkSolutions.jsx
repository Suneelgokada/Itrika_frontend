import { useState, useEffect, useRef } from 'react';
import {
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaServer,
  FaLock,
  FaCog,
  FaDesktop,
} from "react-icons/fa";

export default function NetworkSolutions() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section - Clean, Professional */}
      {/* ================= NETWORK SOLUTIONS – PROFESSIONAL HERO ================= */}
<section className="bg-white border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-8">
      <span className="inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100 rounded-full">
        Network Solutions
      </span>

      <h1 className="
        text-[32px]
        sm:text-[40px]
        lg:text-[48px]
        font-semibold
        leading-[1.15]
        tracking-tight
        text-slate-900
      ">
        Enterprise Network Infrastructure
        <span className="block mt-3 text-blue-700">
          Built for Performance, Security & Scale
        </span>
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
        We design, deploy, and manage resilient network environments that
        support mission-critical operations across on-prem, cloud, and
        hybrid infrastructures.
      </p>

      <ul className="space-y-3 text-slate-600">
        <li className="flex items-start gap-3">
          <span className="mt-1 text-orange-500">●</span>
          High-availability and redundant network architectures
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 text-orange-500">●</span>
          Security-first design with compliance-ready controls
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 text-orange-500">●</span>
          Scalable infrastructure aligned to business growth
        </li>
      </ul>

      <div className="flex flex-wrap gap-4 pt-4">
        <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-all">
          Start Network Assessment
        </button>
        <button className="px-8 py-4 border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-semibold rounded-md transition-all">
          View Capabilities
        </button>
      </div>
    </div>

    {/* RIGHT VISUAL (NON-HUMAN, TECH-FOCUSED) */}
    <div className="relative">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-10">
        <div className="grid grid-cols-2 gap-6">
          
          <HeroStat title="Uptime SLA" value="99.9%" />
          <HeroStat title="Monitoring" value="24/7" />
          <HeroStat title="Latency" value="<10ms" />
          <HeroStat title="Compliance" value="100%" />

        </div>

        <div className="mt-8 text-sm text-slate-500">
          Architecture designed with redundancy, segmentation,
          and continuous performance monitoring.
        </div>
      </div>
    </div>

  </div>
</section>


      {/* Network Topology Visual Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Architecture That Powers Performance
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Your network infrastructure is the foundation of every digital operation. We design layered architectures that ensure redundancy, security, and scalability from the ground up.
              </p>
              
              <div className="space-y-4">
                <MetricCard 
                  value="99.9%" 
                  label="Uptime Guarantee"
                  icon={<FaCheckCircle className="text-green-500" />}
                />
                <MetricCard 
                  value="<10ms" 
                  label="Avg Latency"
                  icon={<FaChartLine className="text-blue-500" />}
                />
                <MetricCard 
                  value="24/7" 
                  label="Network Monitoring"
                  icon={<FaShieldAlt className="text-cyan-500" />}
                />
              </div>
            </div>

            <div className="relative">
              <NetworkTopologyVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Tab Interface */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Network Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end solutions covering every aspect of network infrastructure
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Design & Planning', 'Security', 'Cloud Integration', 'Management'].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <TabContent activeTab={activeTab} />
        </div>
      </section>

      {/* Business Impact - Stats Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="40%" 
              label="Reduction in Network Downtime"
              delay="0"
            />
            <StatCard 
              number="3x" 
              label="Faster Issue Resolution"
              delay="100"
            />
            <StatCard 
              number="60%" 
              label="Lower Infrastructure Costs"
              delay="200"
            />
            <StatCard 
              number="100%" 
              label="Compliance Coverage"
              delay="300"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <ImpactCard 
              title="Operational Continuity"
              description="Multi-layer redundancy eliminates single points of failure, ensuring business operations continue without interruption."
            />
            <ImpactCard 
              title="Security Posture"
              description="Defense-in-depth architecture with network segmentation, access controls, and real-time threat monitoring."
            />
            <ImpactCard 
              title="Scalable Growth"
              description="Infrastructure designed to expand seamlessly as your organization grows, without costly overhauls."
            />
          </div>
        </div>
      </section>

      {/* Implementation Process - Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Our Implementation Process
          </h2>
          <p className="text-slate-600 mb-16 text-center max-w-2xl mx-auto">
            Structured deployment methodology that minimizes disruption while maximizing results
          </p>

          <div className="space-y-8">
            <ProcessStep
              number="01"
              title="Infrastructure Assessment"
              description="Comprehensive audit of current network state, performance analysis, security evaluation, and business requirement documentation."
              timeline="Week 1-2"
            />
            <ProcessStep
              number="02"
              title="Architecture Design"
              description="Custom network topology design, technology selection, security framework planning, and detailed implementation roadmap."
              timeline="Week 3-4"
            />
            <ProcessStep
              number="03"
              title="Phased Deployment"
              description="Incremental rollout with minimal disruption, continuous validation, redundancy testing, and performance optimization."
              timeline="Week 5-8"
            />
            <ProcessStep
              number="04"
              title="Monitoring & Support"
              description="24/7 network monitoring, proactive maintenance, performance optimization, and regular security updates."
              timeline="Ongoing"
            />
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Security-First Network Design
            </h2>
            <p className="text-lg text-slate-600">
              Multi-layered security controls integrated at every level of your network infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SecurityFeature
              icon={<FaLock />}
              title="Zero Trust Architecture"
              description="Verify every access request regardless of source or location"
            />
            <SecurityFeature
              icon={<FaShieldAlt />}
              title="Network Segmentation"
              description="Isolate critical systems and limit lateral movement"
            />
            <SecurityFeature
              icon={<FaCog />}
              title="Automated Threat Response"
              description="Real-time detection and automated mitigation protocols"
            />
            <SecurityFeature
              icon={<FaNetworkWired />}
              title="Encrypted Tunnels"
              description="End-to-end encryption for all data in transit"
            />
          </div>
        </div>
      </section>

      {/* Technical Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Technical Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CapabilityColumn
              title="Infrastructure"
              items={[
                "LAN/WAN Architecture",
                "Network Segmentation",
                "Load Balancing & QoS",
                "Redundant Pathways",
                "High-Availability Design"
              ]}
            />
            <CapabilityColumn
              title="Security & Compliance"
              items={[
                "Next-Gen Firewalls",
                "VPN & Secure Access",
                "IDS/IPS Implementation",
                "Compliance Controls",
                "Audit Trail Systems"
              ]}
            />
            <CapabilityColumn
              title="Cloud & Hybrid"
              items={[
                "Multi-Cloud Networking",
                "SD-WAN Solutions",
                "Direct Cloud Connect",
                "Hybrid Infrastructure",
                "Edge Computing"
              ]}
            />
            <CapabilityColumn
              title="Wireless Solutions"
              items={[
                "Enterprise Wi-Fi 6/6E",
                "Guest Network Isolation",
                "Location Services",
                "Coverage Optimization",
                "Mobile Device Mgmt"
              ]}
            />
            <CapabilityColumn
              title="Monitoring & Analytics"
              items={[
                "Real-time Performance",
                "Traffic Analysis",
                "Capacity Planning",
                "Predictive Alerts",
                "Custom Dashboards"
              ]}
            />
            <CapabilityColumn
              title="Optimization"
              items={[
                "Bandwidth Management",
                "Latency Reduction",
                "Protocol Tuning",
                "Application Acceleration",
                "WAN Optimization"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Seamless Integration Across Your IT Ecosystem
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Network infrastructure that connects and enables your entire technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <IntegrationCard
              icon={<FaCloud />}
              title="Cloud Desktop Infrastructure"
              description="Optimized connectivity to cloud desktops with guaranteed performance SLAs and automatic failover capabilities"
            />
            <IntegrationCard
              icon={<FaServer />}
              title="Application Infrastructure"
              description="Network architecture designed around application requirements with dedicated bandwidth allocation and priority routing"
            />
            <IntegrationCard
              icon={<FaDesktop />}
              title="Managed IT Operations"
              description="Integrated network management as part of comprehensive IT service delivery with unified monitoring and support"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Build a Better Network?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Schedule a comprehensive network assessment. We'll analyze your current infrastructure, identify optimization opportunities, and provide a detailed roadmap for improvement.
          </p>
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule Network Assessment <FaArrowRight />
          </button>
          <p className="text-sm text-slate-500 mt-6">
            No commitment required • Free consultation • 48-hour response time
          </p>
        </div>
      </section>
    </div>
  );
}

// Component Definitions
function NetworkTopologyVisual() {
  return (
    <div className="relative w-full h-96 bg-slate-900 rounded-lg p-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="60" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.3" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.2" />
          
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const x = 200 + 100 * Math.cos((angle * Math.PI) / 180);
            const y = 200 + 100 * Math.sin((angle * Math.PI) / 180);
            return (
              <g key={i}>
                <line x1="200" y1="200" x2={x} y2={y} stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
                <circle cx={x} cy={y} r="8" fill="#3b82f6" />
              </g>
            );
          })}
          
          <circle cx="200" cy="200" r="12" fill="#06b6d4" />
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <FaNetworkWired className="text-6xl text-cyan-400 mb-4 mx-auto" />
          <p className="text-white font-semibold text-lg">Multi-Layer Architecture</p>
          <p className="text-slate-400 text-sm mt-2">Redundant • Secure • Scalable</p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ value, label, icon }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        <div className="text-sm text-slate-600">{label}</div>
      </div>
    </div>
  );
}

function TabContent({ activeTab }) {
  const content = [
    {
      title: "Network Design & Planning",
      description: "Strategic infrastructure architecture tailored to business requirements",
      points: [
        "Detailed network topology design and documentation",
        "Capacity planning and bandwidth allocation",
        "Technology stack evaluation and selection",
        "Implementation roadmap with phased deployment"
      ]
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security controls protecting your network perimeter and internal systems",
      points: [
        "Next-generation firewall deployment and management",
        "Secure VPN and remote access solutions",
        "Network segmentation and micro-segmentation",
        "Intrusion detection and prevention systems"
      ]
    },
    {
      title: "Cloud Integration",
      description: "Seamless connectivity between on-premises and cloud infrastructure",
      points: [
        "Multi-cloud networking and interconnection",
        "SD-WAN implementation for distributed locations",
        "Direct cloud provider connections (AWS, Azure, GCP)",
        "Hybrid infrastructure optimization"
      ]
    },
    {
      title: "Network Management",
      description: "Proactive monitoring, maintenance, and optimization of network infrastructure",
      points: [
        "24/7 network monitoring and alerting",
        "Performance analysis and optimization",
        "Automated backup and disaster recovery",
        "Regular security updates and patches"
      ]
    }
  ];

  const current = content[activeTab];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-12">
      <h3 className="text-3xl font-bold text-slate-900 mb-4">{current.title}</h3>
      <p className="text-lg text-slate-600 mb-8">{current.description}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {current.points.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-slate-700">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroStat({ title, value }) {
  return (
    <div className="p-4 bg-white border border-slate-200 rounded-lg">
      <div className="text-2xl font-semibold text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
        {title}
      </div>
    </div>
  );
}


function StatCard({ number, label, delay }) {
  return (
    <div 
      className="text-center p-8 bg-slate-800 border border-slate-700 rounded-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-5xl font-bold text-cyan-400 mb-3">{number}</div>
      <div className="text-slate-300">{label}</div>
    </div>
  );
}

function ImpactCard({ title, description }) {
  return (
    <div className="p-8 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-500 transition-colors duration-300">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description, timeline }) {
  return (
    <div className="flex gap-8 items-start">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-1 rounded-full">{timeline}</span>
        </div>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SecurityFeature({ icon, title, description }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function CapabilityColumn({ title, items }) {
  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
      <h3 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-900">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-700">
            <span className="text-blue-600 mt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntegrationCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-500 transition-colors duration-300">
      <div className="text-4xl text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}