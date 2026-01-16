import { useRegion } from '../context/RegionContext';
import { getRegionContent } from '../content/regionContent';
import { CheckCircle2 } from 'lucide-react';

export function WhoWeAre() {
  const { region } = useRegion();
  const content = getRegionContent(region);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-32">
          <h1 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
            Engineering Organization
          </h1>
          <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-[700px]">
            {content.whoWeAreEmphasis}
          </p>
        </div>

        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Process Maturity</h2>
              <div className="space-y-6">
                {[
                  'Documented engineering standards',
                  'Code review protocols',
                  'Architecture decision records',
                  'Comprehensive testing requirements',
                  'Security validation procedures',
                  'Deployment verification steps',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-8">Technical Accountability</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We maintain complete visibility into technical decisions, system architecture, and implementation approaches. All engineering work includes documentation of design rationale and operational considerations.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our teams follow established protocols for quality assurance, security review, and performance validation. Technical leadership remains engaged throughout project lifecycle.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <h2 className="text-4xl font-light mb-16">Partnership Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-cyan-400 text-sm font-mono mb-4">01</div>
              <h3 className="text-xl font-light mb-4">Discovery Phase</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Initial engagements focus on technical requirements, integration points, and capability assessment.
              </p>
            </div>
            <div>
              <div className="text-cyan-400 text-sm font-mono mb-4">02</div>
              <h3 className="text-xl font-light mb-4">Integrated Delivery</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our teams align with existing processes, communication channels, and operational cadences.
              </p>
            </div>
            <div>
              <div className="text-cyan-400 text-sm font-mono mb-4">03</div>
              <h3 className="text-xl font-light mb-4">Long-Term Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Post-deployment maintenance, system evolution, and technical guidance remain available as needed.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <div className="max-w-[800px]">
            <h2 className="text-4xl font-light mb-8">No Hyperbole</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              We do not claim to be selective about clients, nor do we position ourselves as exclusive. We are an engineering services organization that delivers technical systems for businesses requiring custom software.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our work is evaluated on system reliability, code quality, delivery consistency, and operational outcomes. We maintain engineering discipline and process rigor as baseline expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
