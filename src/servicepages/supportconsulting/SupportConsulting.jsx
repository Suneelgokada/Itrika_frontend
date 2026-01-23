import {
  FaUserTie,
  FaChartLine,
  FaClipboardCheck,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaCog,
  FaHandshake,
  FaFileAlt,
  FaUsers,
  FaRoute,
  FaBullseye,
} from "react-icons/fa";

export default function SupportConsulting() {
  return (
    <div className="bg-white text-slate-800">

      {/* ================= CONTEXT INTRODUCTION (Type A) ================= */}
<section className="relative bg-white border-b border-slate-100 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      
      {/* Left Side: Tight Content (lg:w-5/12) */}
      <div className="w-full lg:w-5/12 z-10">
        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Strategy & Execution
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
          High-Impact Consulting <br />
          <span className="text-blue-600">Built for Action.</span>
        </h1>

        <p className="text-base text-slate-500 leading-relaxed mb-8 font-light">
          We bridge the gap between leadership vision and technical reality. 
          No generic advice—just high-performance execution tailored to your 
          operational needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-[11px] tracking-widest transition-all">
            Schedule Discovery
          </button>
          <button className="px-6 py-3.5 bg-white border border-slate-200 text-slate-900 font-bold uppercase text-[11px] tracking-widest hover:bg-slate-50 transition-all">
            Our Framework
          </button>
        </div>
      </div>

      {/* Right Side: Visual Anchor (lg:w-7/12) - Focus on Fitting */}
      <div className="w-full lg:w-6/12 relative">
        <div className="relative border border-slate-200 bg-slate-50 p-4 shadow-2xl overflow-hidden group">
          {/* Abstract Tech Visual: Instead of a generic photo, use a focused strategy visual */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
            alt="Data Analysis & Consulting Strategy"
            className="w-full h-[350px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          
          {/* Overlay Technical Tag */}
          <div className="absolute top-8 right-8 bg-slate-900 text-white px-4 py-2 text-[10px] font-mono tracking-tighter">
            ANALYSIS_REF: 00492
          </div>

          {/* Floating Professional Stat */}
          <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 p-5 shadow-xl">
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-600">98%</span>
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Client Retention</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* ================= WHAT WE DELIVER (Type B - Capability Strip) ================= */}
   <section className="border-b border-slate-200">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-2xl font-bold text-slate-900 mb-12">
      What We Help You With
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      <ServiceBlock
        title="Strategy & Planning"
        desc="Clear direction, priorities, and execution roadmap"
      />
      <ServiceBlock
        title="Process & Operations"
        desc="Fix inefficiencies, improve workflows, reduce friction"
      />
      <ServiceBlock
        title="Technology Enablement"
        desc="Choose, implement, and scale the right tools"
      />
    </div>
  </div>
</section>


      {/* ================= HOW WE WORK (Visual Process) ================= */}
    <section className="bg-slate-50 border-b border-slate-200">
  <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        How We Work With You
      </h2>
      <p className="text-slate-600 mb-10">
        Our approach is practical, collaborative, and execution-focused.
      </p>

      <div className="space-y-6">
        <ProcessRow
          title="Understand"
          desc="We study your current challenges, systems, and constraints"
        />
        <ProcessRow
          title="Plan"
          desc="We define a clear, realistic execution plan with priorities"
        />
        <ProcessRow
          title="Implement"
          desc="We work alongside your team to deliver real outcomes"
        />
      </div>
    </div>

    <img
      src="https://images.unsplash.com/photo-1552664730-d307ca884978"
      alt="Team planning"
      className="rounded-xl shadow-lg"
    />
  </div>
</section>


      {/* ================= BUSINESS IMPACT (Type C) ================= */}
      {/* <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Organizations Choose Our Consulting Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our consulting engagements are designed to deliver tangible value through a combination of strategic thinking and practical implementation support.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We don't just provide recommendations—we work alongside your team to ensure successful execution and sustainable results.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Typical Engagement Focus Areas
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Operational efficiency and cost optimization</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Technology strategy and digital transformation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Process improvement and automation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Organizational change management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <ImpactItem 
                title="Faster Decision Making"
                desc="Clear frameworks and data-driven insights accelerate strategic decisions"
              />
              <ImpactItem 
                title="Reduced Operational Costs"
                desc="Process optimization and efficiency improvements lower operating expenses"
              />
              <ImpactItem 
                title="Improved Team Productivity"
                desc="Streamlined workflows and better tools enable higher output"
              />
              <ImpactItem 
                title="Risk Mitigation"
                desc="Structured approach identifies and addresses potential issues early"
              />
              <ImpactItem 
                title="Sustainable Growth"
                desc="Scalable solutions support long-term business expansion"
              />
              <ImpactItem 
                title="Knowledge Transfer"
                desc="Your team gains capabilities and understanding through collaboration"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="border-b border-slate-200">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">
      We Don’t Stop at Recommendations
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <ImplementationCard
        title="Hands-On Execution"
        desc="We actively participate in implementation, not just planning"
      />
      <ImplementationCard
        title="Team Collaboration"
        desc="Your team works directly with our consultants"
      />
      <ImplementationCard
        title="Continuous Improvement"
        desc="We adapt based on feedback and results"
      />
    </div>
  </div>
</section>




      {/* ================= CONSULTING AREAS ================= */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ExpertiseArea
              icon={<FaBullseye />}
              title="Business Strategy & Planning"
              items={[
                "Strategic planning and goal setting",
                "Market analysis and competitive positioning",
                "Business model development",
                "Growth strategy formulation"
              ]}
            />
            <ExpertiseArea
              icon={<FaRoute />}
              title="Digital Transformation"
              items={[
                "Technology roadmap development",
                "Cloud migration strategy",
                "Digital tools assessment and selection",
                "Change management planning"
              ]}
            />
            <ExpertiseArea
              icon={<FaCog />}
              title="Process Improvement"
              items={[
                "Workflow analysis and optimization",
                "Automation opportunity identification",
                "Standard operating procedures",
                "Performance measurement frameworks"
              ]}
            />
            <ExpertiseArea
              icon={<FaUsers />}
              title="Organizational Development"
              items={[
                "Team structure optimization",
                "Skills gap analysis",
                "Training program development",
                "Communication strategy"
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-slate-600 mb-12 max-w-3xl">
            We structure our consulting services to match your specific needs, timeline, and budget requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <EngagementModel
              title="Project-Based"
              desc="Fixed-scope engagements with defined deliverables and timelines"
              suited="Specific initiatives with clear objectives"
            />
            <EngagementModel
              title="Retainer"
              desc="Ongoing advisory support with regular touchpoints and continuous guidance"
              suited="Long-term strategic partnership"
            />
            <EngagementModel
              title="On-Demand"
              desc="Flexible consulting support as needed for specific challenges or questions"
              suited="Periodic strategic input or reviews"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT CLIENTS RECEIVE ================= */}
      {/* <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              What You Receive
            </h2>

            <div className="space-y-6">
              <DeliverableItem
                icon={<FaFileAlt />}
                title="Comprehensive Documentation"
                desc="Detailed reports, recommendations, and implementation guides that serve as reference materials"
              />
              <DeliverableItem
                icon={<FaHandshake />}
                title="Hands-On Support"
                desc="Direct collaboration with our consultants throughout the engagement period"
              />
              <DeliverableItem
                icon={<FaChartLine />}
                title="Measurable Outcomes"
                desc="Clear metrics and KPIs to track progress and demonstrate value"
              />
              <DeliverableItem
                icon={<FaUserTie />}
                title="Expert Guidance"
                desc="Access to experienced consultants with deep industry and technical knowledge"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= WHO WE SERVE ================= */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ClientSegment
              title="Growing Businesses"
              desc="Organizations scaling operations and need strategic guidance on technology and process improvements"
            />
            <ClientSegment
              title="Enterprise Teams"
              desc="Large organizations requiring specialized expertise for specific initiatives or transformation projects"
            />
            <ClientSegment
              title="Technology Companies"
              desc="Tech-focused businesses seeking operational optimization and scalability planning"
            />
          </div>
        </div>
      </section>

      {/* ================= SOFT CTA (Type E) ================= */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Let's discuss how our consulting services can address your specific business challenges.
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can support your strategic initiatives and operational improvements.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Schedule a Consultation <FaArrowRight className="text-sm" />
          </button>
          
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Initial consultation includes a complimentary assessment of your current situation and preliminary recommendations.
            </p>
          </div>
        </div>
      </section>

      

    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function ServiceBlock({ title, desc }) {
  return (
    <div className="border-l-2 border-slate-300 pl-6">
      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function ProcessCard({ icon, title, points }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="w-12 h-12 bg-slate-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-4 text-lg">
        {title}
      </h3>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-0.5 text-xs" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImpactItem({ title, desc }) {
  return (
    <div className="flex gap-4 py-4 border-b border-slate-200 last:border-0">
      <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ExpertiseArea({ icon, title, items }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
        <div className="w-10 h-10 text-blue-600 text-xl">
          {icon}
        </div>
        <h3 className="font-bold text-slate-900 text-lg">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="text-blue-600 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EngagementModel({ title, desc, suited }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="font-bold text-slate-900 mb-3 text-lg">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {desc}
      </p>
      <div className="pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
          Best Suited For
        </p>
        <p className="text-sm text-slate-700">
          {suited}
        </p>
      </div>
    </div>
  );
}

function DeliverableItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex-shrink-0 w-10 h-10 bg-slate-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ClientSegment({ title, desc }) {
  return (
    <div className="border-l-2 border-blue-600 pl-6">
      <h3 className="font-bold text-slate-900 mb-3 text-lg">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function ProcessRow({ title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
function ImplementationCard({ title, desc }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}
