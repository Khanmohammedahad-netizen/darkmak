import { Region } from '../types';

export const getRegionContent = (region: Region) => {
  const content = {
    global: {
      heroTitle: 'Systems-First Engineering',
      heroSubtitle: 'Enterprise software platforms built on unified architecture and global delivery standards.',
      positioning: 'We engineer secure, scalable systems for organizations operating across jurisdictions and markets.',
      deliveryEmphasis: 'unified standards, cross-border coordination',
      whoWeAreEmphasis: 'We operate as a distributed engineering organization with consistent processes and technical standards.',
    },
    japan: {
      heroTitle: 'Precision Engineering for Long-Term Reliability',
      heroSubtitle: 'Enterprise systems designed for operational consistency and sustained technical excellence.',
      positioning: 'We build software platforms with attention to detail, process rigor, and long-term maintainability.',
      deliveryEmphasis: 'precision, reliability, lasting partnerships',
      whoWeAreEmphasis: 'We value methodical engineering, thorough documentation, and enduring technical relationships.',
    },
    europe: {
      heroTitle: 'Compliant, Transparent, Scalable Systems',
      heroSubtitle: 'Enterprise software engineering aligned with regulatory frameworks and data governance standards.',
      positioning: 'We deliver systems designed for compliance, auditability, and technical transparency across European markets.',
      deliveryEmphasis: 'GDPR-aligned delivery, transparent architecture',
      whoWeAreEmphasis: 'We maintain clear accountability, comprehensive documentation, and regulatory awareness in every engagement.',
    },
    uk: {
      heroTitle: 'Accountable Engineering for UK Enterprise',
      heroSubtitle: 'Software systems built with transparency, governance, and technical accountability.',
      positioning: 'We engineer platforms that meet UK regulatory expectations and support long-term business operations.',
      deliveryEmphasis: 'governance-first approach, clear documentation',
      whoWeAreEmphasis: 'We uphold rigorous engineering standards and maintain full accountability throughout delivery.',
    },
    usa: {
      heroTitle: 'Execution-Driven Technical Leadership',
      heroSubtitle: 'Enterprise software engineering focused on delivery velocity and technical scalability.',
      positioning: 'We build high-performance systems with rapid deployment cycles and infrastructure that scales.',
      deliveryEmphasis: 'execution speed, technical agility',
      whoWeAreEmphasis: 'We prioritize velocity without compromising system integrity, combining speed with engineering discipline.',
    },
    uae: {
      heroTitle: 'Modern Infrastructure for Digital Transformation',
      heroSubtitle: 'Enterprise platforms engineered to support accelerated modernization and operational evolution.',
      positioning: 'We deliver systems that enable digital transformation initiatives and large-scale organizational change.',
      deliveryEmphasis: 'modernization expertise, transformation-ready',
      whoWeAreEmphasis: 'We specialize in building platforms that support ambitious digital initiatives and infrastructure modernization.',
    },
    saudi: {
      heroTitle: 'Strategic Systems for National Transformation',
      heroSubtitle: 'Enterprise engineering capabilities aligned with Vision 2030 and large-scale modernization programs.',
      positioning: 'We architect software systems that support strategic initiatives and national-scale digital infrastructure.',
      deliveryEmphasis: 'strategic alignment, transformation capability',
      whoWeAreEmphasis: 'We understand the requirements of transformation programs and deliver systems that support long-term strategic goals.',
    },
    india: {
      heroTitle: 'Engineering Depth at Scale',
      heroSubtitle: 'Enterprise platforms delivered with technical rigor and comprehensive development capability.',
      positioning: 'We provide full-spectrum engineering expertise with deep technical knowledge and consistent delivery discipline.',
      deliveryEmphasis: 'engineering depth, delivery consistency',
      whoWeAreEmphasis: 'We combine technical depth with process maturity, delivering complex systems with architectural precision.',
    },
  };

  return content[region];
};
