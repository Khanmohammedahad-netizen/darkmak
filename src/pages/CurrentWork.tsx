import { CheckCircle2, Circle } from 'lucide-react';

export function CurrentWork() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-32">
          <div className="inline-block px-4 py-2 border border-cyan-400/30 text-cyan-400 text-xs tracking-widest mb-8">
            ACTIVE PROJECTS
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
            Current Work & Progress
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-[700px]">
            Honest accounting of systems we have built and are currently building. No client projects listed without permission. Focus on internal capabilities and demonstrated execution.
          </p>
        </div>

        <div className="space-y-16 mb-32">
          <div className="border-l-2 border-cyan-400 pl-12 py-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
              <span className="text-cyan-400 text-sm tracking-widest">OPERATIONAL</span>
            </div>
            <h2 className="text-3xl font-light mb-4">Internal ERP Platform</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Complete business management system handling finance, project tracking, client operations, and resource allocation. Includes automated workflows for common business processes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-gray-500">
                <span className="text-gray-600">Stack:</span> React, Node.js, PostgreSQL
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Status:</span> Production, actively maintained
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Scale:</span> Multi-user, role-based access
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Security:</span> OAuth 2.0, encrypted data
              </div>
            </div>
          </div>

          <div className="border-l-2 border-cyan-400 pl-12 py-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
              <span className="text-cyan-400 text-sm tracking-widest">OPERATIONAL</span>
            </div>
            <h2 className="text-3xl font-light mb-4">Invoice & Quotation Automation</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Automated document generation system integrated with ERP platform. Handles invoice creation, quotation workflows, approval routing, and PDF generation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-gray-500">
                <span className="text-gray-600">Features:</span> Template engine, approval flows
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Integration:</span> Email, cloud storage
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Output:</span> PDF, email delivery
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Audit:</span> Complete transaction history
              </div>
            </div>
          </div>

          <div className="border-l-2 border-white/20 pl-12 py-8">
            <div className="flex items-center gap-3 mb-6">
              <Circle className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
              <span className="text-gray-600 text-sm tracking-widest">IN DEVELOPMENT</span>
            </div>
            <h2 className="text-3xl font-light mb-4">Vendor & Access Management System</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Role-based access control system for external vendors and internal team members. Granular permission management, activity logging, and integration with existing authentication infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-gray-500">
                <span className="text-gray-600">Progress:</span> Core RBAC implemented
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Remaining:</span> Audit trails, reporting
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Architecture:</span> Microservice-based
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Timeline:</span> Q1 completion target
              </div>
            </div>
          </div>

          <div className="border-l-2 border-white/20 pl-12 py-8">
            <div className="flex items-center gap-3 mb-6">
              <Circle className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
              <span className="text-gray-600 text-sm tracking-widest">IN DEVELOPMENT</span>
            </div>
            <h2 className="text-3xl font-light mb-4">Event Management Platform</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Internal platform for managing company events, client meetings, and operational activities. Calendar integration, notification system, and resource booking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-gray-500">
                <span className="text-gray-600">Progress:</span> Core scheduling complete
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Remaining:</span> Notifications, reporting
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Integration:</span> Calendar APIs, email
              </div>
              <div className="text-gray-500">
                <span className="text-gray-600">Timeline:</span> Q2 completion target
              </div>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <h2 className="text-3xl font-light mb-8">Engineering Priorities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-cyan-400 text-sm tracking-widest mb-4">RELIABILITY</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All systems include comprehensive error handling, logging, and monitoring. Uptime and operational stability are primary design considerations.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 text-sm tracking-widest mb-4">SECURITY</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Security protocols implemented at every layer. Regular security audits, dependency updates, and vulnerability assessments are standard practice.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 text-sm tracking-widest mb-4">MAINTAINABILITY</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clean code standards, comprehensive documentation, and modular architecture. Systems are built for long-term operation and future enhancement.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-t border-white/5">
          <div className="max-w-[700px]">
            <h2 className="text-3xl font-light mb-6">Approach to Disclosure</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We list only systems we have built for our own operations or have explicit permission to reference. Client work remains confidential unless otherwise agreed.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our capabilities are demonstrated through internal systems rather than claimed through external references. Technical discussions can include architecture details and implementation approaches without disclosing client information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
