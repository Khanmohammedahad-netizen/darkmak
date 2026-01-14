import { Database, Code2, Users, Cpu } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Database,
      title: 'Internal ERP & Business Systems',
      description: 'Complete enterprise resource planning platforms designed for specific operational requirements. Custom modules for finance, project management, resource allocation, and client operations.',
      capabilities: [
        'Financial management and reporting systems',
        'Project tracking and resource planning',
        'Client relationship management platforms',
        'Workflow automation and approval systems',
        'Document generation and management',
        'Integration with existing business tools',
      ],
    },
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Application development for proprietary business logic and specialized operational workflows. Full-stack engineering covering frontend interfaces, backend services, and data infrastructure.',
      capabilities: [
        'Web application development',
        'API design and implementation',
        'Database architecture and optimization',
        'Third-party system integration',
        'Legacy system modernization',
        'Performance optimization and scaling',
      ],
    },
    {
      icon: Users,
      title: 'Dedicated Engineering Teams',
      description: 'Embedded technical teams that function as extensions of internal engineering organizations. Dedicated resources operating under your processes, standards, and governance frameworks.',
      capabilities: [
        'Full-stack development teams',
        'Specialized technical expertise',
        'Long-term team assignments',
        'Alignment with internal processes',
        'Direct communication channels',
        'Flexible team scaling',
      ],
    },
    {
      icon: Cpu,
      title: 'AI & Automation Solutions',
      description: 'Machine learning integration and intelligent automation applied to business operations. Data processing pipelines, predictive systems, and process automation capabilities.',
      capabilities: [
        'Machine learning model integration',
        'Natural language processing applications',
        'Data pipeline architecture',
        'Process automation engineering',
        'Intelligent document processing',
        'Predictive analytics systems',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="mb-24">
          <div className="max-w-[900px]">
            <h1 className="text-7xl font-light mb-8 leading-tight">Service Capabilities</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Engineering disciplines maintained internally. Each service area represents established technical capability with documented processes and quality standards.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-12 gap-16 items-start">
              <div className="col-span-5">
                <service.icon className="w-16 h-16 text-cyan-400 mb-8" strokeWidth={1.5} />
                <h2 className="text-4xl font-light mb-6">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed text-lg">{service.description}</p>
              </div>
              <div className="col-span-7">
                <div className="bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 p-12">
                  <h3 className="text-sm text-cyan-400 tracking-widest mb-8">TECHNICAL CAPABILITIES</h3>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm leading-relaxed">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-32 border-t border-white/5">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Engagement Model</h2>
            <p className="text-gray-400 leading-relaxed mb-12">
              Services are delivered through fixed-scope projects, dedicated team arrangements, or ongoing technical partnerships. Engagement structure aligns with project requirements and organizational preferences.
            </p>
            <p className="text-sm text-gray-600">
              Initial conversations focus on technical requirements, integration needs, and capability fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
