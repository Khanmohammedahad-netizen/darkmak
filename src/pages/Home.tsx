import { useRegion } from '../context/RegionContext';
import { useRouter } from '../hooks/useRouter';
import { getRegionContent } from '../content/regionContent';
import { ArrowRight, Code2, Database, Network, Layers } from 'lucide-react';

export function Home() {
  const { region } = useRegion();
  const { navigate } = useRouter();
  const content = getRegionContent(region);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <div className="max-w-[900px]">
            <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent mb-12" />

            <h1 className="text-7xl font-light tracking-tight mb-8 leading-[1.1]">
              {content.heroTitle}
            </h1>

            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-[700px]">
              {content.heroSubtitle}
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
          <span className="text-xs text-gray-600 tracking-widest">SCROLL</span>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-5">
              <h2 className="text-5xl font-light mb-6">Enterprise Positioning</h2>
            </div>
            <div className="col-span-7">
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                {content.positioning}
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Our work centers on internal business systems, custom development, and dedicated engineering teams that integrate with existing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl font-light mb-6">Core Capabilities</h2>
            <p className="text-gray-500 text-lg">Engineering disciplines we maintain internally.</p>
          </div>

          <div className="grid gap-px bg-white/5">
            {[
              {
                icon: Database,
                title: 'Internal ERP & Business Systems',
                description: 'Custom enterprise resource planning platforms, business process automation, and operational systems designed for specific organizational requirements.',
              },
              {
                icon: Code2,
                title: 'Custom Software Development',
                description: 'Application development for proprietary business logic, industry-specific requirements, and specialized operational workflows.',
              },
              {
                icon: Network,
                title: 'Dedicated Engineering Teams',
                description: 'Embedded technical teams that operate as extensions of internal engineering organizations, maintaining consistent processes and standards.',
              },
              {
                icon: Layers,
                title: 'AI & Automation Solutions',
                description: 'Machine learning integration, process automation, and intelligent system capabilities applied to business operations and data infrastructure.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#0a0a0f] p-12 border border-white/5 hover:border-cyan-400/20 transition-colors">
                <item.icon className="w-8 h-8 text-cyan-400 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-7">
              <h2 className="text-5xl font-light mb-8">Current Work</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-cyan-400/30 pl-8">
                  <h3 className="text-xl font-light mb-3">Internal ERP Platform</h3>
                  <p className="text-gray-500 leading-relaxed">Complete business management system including finance, project tracking, and client operations. Operational and in active use.</p>
                </div>
                <div className="border-l-2 border-cyan-400/30 pl-8">
                  <h3 className="text-xl font-light mb-3">Invoice & Quotation Automation</h3>
                  <p className="text-gray-500 leading-relaxed">Automated document generation and approval workflows integrated with core business systems.</p>
                </div>
                <div className="border-l-2 border-cyan-400/30 pl-8">
                  <h3 className="text-xl font-light mb-3">Vendor & Access Management</h3>
                  <p className="text-gray-500 leading-relaxed">Role-based systems for external vendors and internal team members. Currently in development.</p>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex items-center">
              <div className="text-gray-600">
                <p className="text-sm leading-relaxed">
                  All systems prioritize security, maintainability, and operational reliability. We document architecture decisions and maintain comprehensive testing protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-light mb-6">Global Delivery Standards</h2>
            <p className="text-xl text-gray-500">Emphasis on {content.deliveryEmphasis}.</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { label: 'Discovery & Assessment', description: 'Requirements analysis and technical evaluation.' },
              { label: 'Architecture & Planning', description: 'System design and implementation roadmap.' },
              { label: 'Execution & Delivery', description: 'Iterative development with continuous validation.' },
              { label: 'Quality Assurance', description: 'Testing protocols and security verification.' },
              { label: 'Deployment & Integration', description: 'Production release and system integration.' },
              { label: 'Long-Term Support', description: 'Ongoing maintenance and technical evolution.' },
            ].map((phase, index) => (
              <div key={index} className="border border-white/5 p-8 hover:border-cyan-400/20 transition-colors">
                <div className="text-cyan-400 text-sm mb-4 font-mono">{'0' + (index + 1)}</div>
                <h3 className="text-lg font-light mb-3">{phase.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Engage with MAK</h2>
          <p className="text-gray-500 mb-12 max-w-[600px] mx-auto">
            Technical discussions begin with project assessment and capability alignment.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors text-cyan-400"
          >
            <span>Contact Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
