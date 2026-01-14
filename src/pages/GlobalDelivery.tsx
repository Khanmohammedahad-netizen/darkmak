import { useRegion } from '../context/RegionContext';
import { REGIONS, Region } from '../types';
import { MapPin } from 'lucide-react';

export function GlobalDelivery() {
  const { region, setRegion } = useRegion();

  const regionHighlights: Record<Region, { emphasis: string; approach: string }> = {
    global: {
      emphasis: 'Unified standards and cross-border coordination',
      approach: 'Systems designed for multi-jurisdiction operation with consistent technical standards and distributed team coordination.',
    },
    japan: {
      emphasis: 'Precision, reliability, and long-term partnerships',
      approach: 'Methodical engineering with comprehensive documentation, thorough testing protocols, and sustained technical relationships.',
    },
    europe: {
      emphasis: 'GDPR compliance and transparent architecture',
      approach: 'Systems aligned with European regulatory frameworks, data governance standards, and privacy requirements.',
    },
    uk: {
      emphasis: 'Governance and technical accountability',
      approach: 'Engineering practices emphasizing auditability, documentation rigor, and clear accountability throughout delivery.',
    },
    usa: {
      emphasis: 'Execution velocity and technical scalability',
      approach: 'Rapid deployment cycles combined with infrastructure designed for scale and high-performance requirements.',
    },
    uae: {
      emphasis: 'Digital transformation and modernization',
      approach: 'Platforms engineered to support accelerated change initiatives and organizational modernization programs.',
    },
    saudi: {
      emphasis: 'Strategic alignment with Vision 2030',
      approach: 'Systems designed to support national transformation initiatives and large-scale digital infrastructure programs.',
    },
    india: {
      emphasis: 'Engineering depth and delivery consistency',
      approach: 'Comprehensive technical expertise with process maturity and architectural precision across complex implementations.',
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-32">
          <h1 className="text-6xl font-light mb-12 leading-tight">
            Global Delivery Capabilities
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-[800px]">
            Engineering services delivered across regions with consistent standards and localized understanding. Technical approach adapts to regional requirements while maintaining unified quality protocols.
          </p>
        </div>

        <div className="mb-32 p-12 border border-cyan-400/20 bg-gradient-to-br from-cyan-950/10 to-transparent">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-light">Current Region: {REGIONS[region].name}</h2>
          </div>
          <p className="text-xl text-gray-400 mb-4">{regionHighlights[region].emphasis}</p>
          <p className="text-gray-500 leading-relaxed">{regionHighlights[region].approach}</p>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-light mb-12">Select Region for Localized View</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.values(REGIONS).map((r) => (
              <button
                key={r.id}
                onClick={() => setRegion(r.id)}
                className={`p-8 border transition-all text-left ${
                  region === r.id
                    ? 'border-cyan-400 bg-cyan-400/5'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <h3 className="text-lg font-light mb-2">{r.name}</h3>
                <p className="text-xs text-gray-600">View regional approach</p>
              </button>
            ))}
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <h2 className="text-4xl font-light mb-16">Universal Delivery Standards</h2>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-6">Technical Consistency</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Engineering processes remain consistent across regions. Code standards, review protocols, testing requirements, and documentation expectations apply uniformly.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Architecture decisions follow the same evaluation framework regardless of delivery location. Quality gates and security validation procedures are standardized.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Regional Adaptation</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Communication style, engagement cadence, and operational emphasis adapt to regional business practices and regulatory contexts.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Teams understand local compliance requirements, data sovereignty considerations, and market-specific technical expectations without compromising core standards.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <h2 className="text-4xl font-light mb-16">Distributed Team Coordination</h2>
          <div className="grid grid-cols-3 gap-12">
            <div className="border border-white/5 p-8">
              <div className="text-cyan-400 text-sm font-mono mb-4">SYNCHRONIZATION</div>
              <h3 className="text-xl font-light mb-4">Unified Processes</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Shared project management systems, documentation repositories, and communication protocols ensure coordination across time zones and locations.
              </p>
            </div>
            <div className="border border-white/5 p-8">
              <div className="text-cyan-400 text-sm font-mono mb-4">TRANSPARENCY</div>
              <h3 className="text-xl font-light mb-4">Visibility</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Complete visibility into development progress, technical decisions, and system status. Regular updates and accessible documentation maintained throughout engagement.
              </p>
            </div>
            <div className="border border-white/5 p-8">
              <div className="text-cyan-400 text-sm font-mono mb-4">INTEGRATION</div>
              <h3 className="text-xl font-light mb-4">Seamless Collaboration</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Teams integrate with existing workflows, communication channels, and operational cadences. Flexible to organizational preferences and established processes.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <div className="max-w-[800px]">
            <h2 className="text-3xl font-light mb-6">No Physical Presence Required</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We operate as a distributed engineering organization. Services are delivered remotely with appropriate communication infrastructure and collaboration tools.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Physical presence can be arranged for specific engagement requirements, but it is not a prerequisite for effective delivery. Technical work proceeds through established remote collaboration patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
