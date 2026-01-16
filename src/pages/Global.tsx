import { useRegion } from '../context/RegionContext';
import { getRegionContent } from '../content/regionContent';
import { Globe2, Shield, Layers } from 'lucide-react';

export function Global() {
  const { region } = useRegion();
  const content = getRegionContent(region);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-32">
          <div className="inline-block px-4 py-2 border border-cyan-400/30 text-cyan-400 text-xs tracking-widest mb-8">
            EXECUTIVE OVERVIEW
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-12 max-w-[900px] leading-[1.1]">
            Unified Architecture Across Markets
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-[800px]">
            {content.positioning}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-32">
          <div className="bg-[#0a0a0f] p-16 border border-white/5">
            <Globe2 className="w-12 h-12 text-cyan-400 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-light mb-6">Standards-Based Delivery</h3>
            <p className="text-gray-500 leading-relaxed">
              Consistent engineering processes, documentation standards, and quality protocols maintained across all regions and engagements.
            </p>
          </div>
          <div className="bg-[#0a0a0f] p-16 border border-white/5">
            <Shield className="w-12 h-12 text-cyan-400 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-light mb-6">Security & Compliance</h3>
            <p className="text-gray-500 leading-relaxed">
              Systems designed with data governance, regulatory awareness, and security principles integrated at the architecture level.
            </p>
          </div>
          <div className="bg-[#0a0a0f] p-16 border border-white/5">
            <Layers className="w-12 h-12 text-cyan-400 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-light mb-6">Distributed Coordination</h3>
            <p className="text-gray-500 leading-relaxed">
              Engineering teams operate across time zones with synchronized processes, shared technical standards, and unified project governance.
            </p>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-6">System-Level Thinking</h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-xl text-gray-400 leading-relaxed">
                We approach software engineering as infrastructure design. Each system is architected for integration, maintainability, and operational longevity.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Our methodology prioritizes architectural clarity, comprehensive documentation, and technical decisions that support long-term system evolution. We maintain detailed records of design rationale and implementation patterns.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Quality assurance extends beyond functional testing to include security validation, performance analysis, and operational readiness verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
