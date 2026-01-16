import { Search, Layout, Code, TestTube, Rocket, Wrench } from 'lucide-react';

export function Process() {
  const phases = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery & Assessment',
      description: 'Initial phase focuses on understanding technical requirements, existing infrastructure, and integration points.',
      activities: [
        'Requirements documentation and validation',
        'Technical capability assessment',
        'Infrastructure and system review',
        'Risk identification and mitigation planning',
        'Resource and timeline estimation',
      ],
      deliverables: 'Technical requirements document, capability assessment, project scope definition',
    },
    {
      icon: Layout,
      number: '02',
      title: 'Architecture & Planning',
      description: 'System design and implementation strategy development. Architecture decisions are documented with clear rationale.',
      activities: [
        'System architecture design',
        'Technology stack selection and justification',
        'Database schema and data model design',
        'API design and integration planning',
        'Security architecture and protocols',
      ],
      deliverables: 'Architecture documentation, technical specifications, implementation roadmap',
    },
    {
      icon: Code,
      number: '03',
      title: 'Execution & Delivery',
      description: 'Iterative development with continuous integration and regular progress validation. Code quality maintained through review protocols.',
      activities: [
        'Sprint-based development cycles',
        'Code review and quality assurance',
        'Continuous integration and testing',
        'Regular progress demonstrations',
        'Documentation as development proceeds',
      ],
      deliverables: 'Working software increments, technical documentation, test coverage reports',
    },
    {
      icon: TestTube,
      number: '04',
      title: 'Quality & Reliability',
      description: 'Comprehensive testing across functional, security, and performance dimensions. Quality gates enforced before progression.',
      activities: [
        'Automated testing implementation',
        'Security vulnerability assessment',
        'Performance and load testing',
        'User acceptance testing support',
        'Bug tracking and resolution',
      ],
      deliverables: 'Test reports, security audit results, performance benchmarks',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Deployment & Integration',
      description: 'Production release planning and execution. Systems are deployed with appropriate monitoring and rollback capabilities.',
      activities: [
        'Deployment automation and CI/CD setup',
        'Production environment configuration',
        'Data migration and validation',
        'Integration with existing systems',
        'Monitoring and alerting implementation',
      ],
      deliverables: 'Deployed production system, operations documentation, monitoring dashboards',
    },
    {
      icon: Wrench,
      number: '06',
      title: 'Long-Term Support',
      description: 'Ongoing maintenance, monitoring, and system evolution. Technical support and enhancement capabilities remain available.',
      activities: [
        'System monitoring and incident response',
        'Regular maintenance and updates',
        'Performance optimization',
        'Feature enhancements and evolution',
        'Technical consultation and guidance',
      ],
      deliverables: 'Maintained system, enhancement releases, technical support',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-32">
          <h1 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
            Process & Methodology
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-[800px]">
            Structured engineering approach with defined phases, clear deliverables, and consistent quality standards. Process adapts to project requirements while maintaining core principles.
          </p>
        </div>

        <div className="space-y-24 mb-32">
          {phases.map((phase, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <phase.icon className="w-12 h-12 text-cyan-400 mb-6" strokeWidth={1.5} />
                  <div className="text-gray-600 text-sm font-mono mb-4">{phase.number}</div>
                  <h2 className="text-3xl font-light mb-4">{phase.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="border border-white/5 p-10 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-cyan-400 text-xs tracking-widest mb-6">KEY ACTIVITIES</h3>
                  <div className="space-y-3 mb-8">
                    {phase.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <h4 className="text-gray-600 text-xs tracking-widest mb-3">DELIVERABLES</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{phase.deliverables}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-32 border-t border-white/5">
          <h2 className="text-4xl font-light mb-16">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light mb-4">Transparency</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Complete visibility into technical decisions, progress, and challenges. Regular communication and accessible documentation throughout engagement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Accountability</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clear ownership of deliverables, timelines, and quality standards. Technical leadership remains engaged and accessible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Adaptability</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Process adjusts to project requirements and organizational preferences while maintaining engineering discipline and quality gates.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <div className="max-w-[900px]">
            <h2 className="text-3xl font-light mb-8">Documentation Standards</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Every project includes comprehensive documentation covering architecture decisions, API specifications, deployment procedures, and operational guidelines.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Documentation is maintained throughout development, not created retrospectively. Architecture decision records capture the rationale behind technical choices.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Operations runbooks, troubleshooting guides, and system diagrams are standard deliverables. Documentation enables knowledge transfer and long-term system maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
