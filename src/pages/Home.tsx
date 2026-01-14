import { useRegion } from '../context/RegionContext';
import { useRouter } from '../hooks/useRouter';
import { getRegionContent } from '../content/regionContent';
import { ArrowRight, Code2, Database, Network, Layers } from 'lucide-react';
import { NanobotGlobe } from "../components/NanobotGlobe";

export function Home() {
  const { region } = useRegion();
  const { navigate } = useRouter();
  const content = getRegionContent(region);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">

        {/* Nanobot Globe */}
        <NanobotGlobe />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" />

        {/* Ambient glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Hero Content */}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
          <span className="text-xs text-gray-600 tracking-widest">SCROLL</span>
        </div>
      </section>

      {/* ================= POSITIONING ================= */}
      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <h2 className="text-5xl font-light mb-6">Enterprise Positioning</h2>
          </div>
          <div className="col-span-7">
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              {content.positioning}
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Our work centers on internal business systems, custom development,
              and dedicated engineering teams integrated into operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-32 px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl font-light mb-6">Core Capabilities</h2>
            <p className="text-gray-500 text-lg">
              Engineering disciplines we maintain internally.
            </p>
          </div>

          <div className="grid gap-px bg-white/5">
            {[
              {
                icon: Database,
                title: 'Internal ERP & Business Systems',
                description:
                  'Enterprise platforms and workflow automation built for operational reliability.',
              },
              {
                icon: Code2,
                title: 'Custom Software Development',
                description:
                  'Purpose-built applications for proprietary workflows and logic.',
              },
              {
                icon: Network,
                title: 'Dedicated Engineering Teams',
                description:
                  'Embedded teams operating as extensions of internal engineering orgs.',
              },
              {
                icon: Layers,
                title: 'AI & Automation Solutions',
                description:
                  'Intelligent systems enhancing efficiency and decision-making.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0a0a0f] p-12 border border-white/5 hover:border-cyan-400/20 transition-colors"
              >
                <item.icon className="w-8 h-8 text-cyan-400 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURRENT WORK ================= */}
      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-16">
          <div className="col-span-7">
            <h2 className="text-5xl font-light mb-8">Current Work</h2>

            <div className="space-y-8">
              {[
                ['Internal ERP Platform', 'Enterprise-wide business management system in production.'],
                ['Invoice & Quotation Automation', 'Automated approval and document workflows.'],
                ['Vendor & Access Management', 'Role-based access systems in active development.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-l-2 border-cyan-400/30 pl-8">
                  <h3 className="text-xl font-light mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-5 flex items-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Systems prioritize security, maintainability, and long-term operational reliability.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-8 text-center">
        <h2 className="text-4xl font-light mb-6">Engage with MAK</h2>
        <p className="text-gray-500 mb-12 max-w-[600px] mx-auto">
          Technical discussions begin with assessment and capability alignment.
        </p>

        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center gap-3 px-8 py-4 border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors text-cyan-400"
        >
          <span>Contact Engineering Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
