import { Server, Cloud, Lock, Workflow } from 'lucide-react';

export function TechnicalCapabilities() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-32">
          <h1 className="text-6xl font-light mb-12 leading-tight max-w-[800px]">
            Technical Stack & Infrastructure Expertise
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-[700px]">
            Engineering capabilities across application layers, infrastructure, security, and system integration.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-2 gap-16">
            <div className="border border-white/5 p-12 hover:border-cyan-400/20 transition-colors">
              <Server className="w-10 h-10 text-cyan-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-light mb-6">Full-Stack Engineering</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  Modern web frameworks and component architectures. Server-side rendering, state management, and responsive interface design.
                </p>
                <div className="pt-4 space-y-2 text-sm text-gray-500">
                  <p>React, TypeScript, Next.js, Vue</p>
                  <p>Node.js, Python, Go, Java</p>
                  <p>PostgreSQL, MongoDB, Redis</p>
                </div>
              </div>
            </div>

            <div className="border border-white/5 p-12 hover:border-cyan-400/20 transition-colors">
              <Lock className="w-10 h-10 text-cyan-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-light mb-6">Secure Backend Systems</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  API design, authentication frameworks, and data security protocols. Authorization models, encryption standards, and secure communication channels.
                </p>
                <div className="pt-4 space-y-2 text-sm text-gray-500">
                  <p>RESTful & GraphQL APIs</p>
                  <p>OAuth 2.0, JWT, RBAC</p>
                  <p>TLS/SSL, data encryption</p>
                </div>
              </div>
            </div>

            <div className="border border-white/5 p-12 hover:border-cyan-400/20 transition-colors">
              <Cloud className="w-10 h-10 text-cyan-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-light mb-6">Cloud-Native Architecture</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  Containerized deployments, orchestration platforms, and infrastructure automation. Scalable system design and distributed computing patterns.
                </p>
                <div className="pt-4 space-y-2 text-sm text-gray-500">
                  <p>AWS, Azure, Google Cloud</p>
                  <p>Docker, Kubernetes</p>
                  <p>Terraform, CI/CD pipelines</p>
                </div>
              </div>
            </div>

            <div className="border border-white/5 p-12 hover:border-cyan-400/20 transition-colors">
              <Workflow className="w-10 h-10 text-cyan-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-light mb-6">Enterprise System Design</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  Microservices architecture, event-driven systems, and integration patterns. Service mesh design and distributed transaction management.
                </p>
                <div className="pt-4 space-y-2 text-sm text-gray-500">
                  <p>Microservices, event streaming</p>
                  <p>Message queues, API gateways</p>
                  <p>Service orchestration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 py-32 border-t border-white/5">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-4">
              <h2 className="text-3xl font-light">Integration Capabilities</h2>
            </div>
            <div className="col-span-8 space-y-6">
              <p className="text-xl text-gray-400 leading-relaxed">
                Systems are designed for integration with existing enterprise infrastructure. We implement standard protocols, maintain API compatibility, and ensure data consistency across platforms.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Integration work includes legacy system connectivity, third-party service integration, data migration, and synchronization protocols. All integration points are documented with clear data flow diagrams and error handling procedures.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <div className="max-w-[900px]">
            <h2 className="text-3xl font-light mb-8">Quality & Testing Standards</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-cyan-400 text-sm tracking-widest mb-4">AUTOMATED TESTING</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Unit tests, integration tests, end-to-end validation. Test coverage requirements and continuous testing protocols.
                </p>
              </div>
              <div>
                <h3 className="text-cyan-400 text-sm tracking-widest mb-4">SECURITY REVIEW</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Vulnerability scanning, dependency audits, security protocol validation. Regular security assessments and compliance checks.
                </p>
              </div>
              <div>
                <h3 className="text-cyan-400 text-sm tracking-widest mb-4">PERFORMANCE ANALYSIS</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Load testing, optimization profiling, scalability validation. Performance benchmarks and monitoring implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
