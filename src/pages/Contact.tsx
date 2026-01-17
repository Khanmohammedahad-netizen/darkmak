import { useState } from 'react';
import { useRegion } from '../context/RegionContext';
import { REGIONS } from '../types';
import { Send } from 'lucide-react';

export function Contact() {
  const { region } = useRegion();
  const regionConfig = REGIONS[region];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    countryCode: regionConfig.phoneCode,
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
  });

  const budgetRanges: Record<string, string[]> = {
    USD: ['$1k - $5k', '$5k - $10k', '$10k - $20k', '$20k+'],
    EUR: ['€1k - €5k', '€5k - €10k', '€10k - €20k', '€20k+'],
    GBP: ['£1k - £5k', '£5k - £10k', '£10k - £20k', '£20k+'],
    JPY: ['¥150k - ¥750k', '¥750k - ¥1.5M', '¥1.5M - ¥3M', '¥3M+'],
    AED: ['AED 2.5k - 5k', 'AED 5k - 10k', 'AED 10k - 20k', 'AED 20k+'],
    SAR: ['SAR 2.5k - 5k', 'SAR 5k - 10k', 'SAR 10k - 20k', 'SAR 20k+'],
    INR: ['₹50k - ₹2L', '₹2L - ₹5L', '₹5L - ₹10L', '₹10L+'],
  };

  const countryCodes = [
    { code: '+1', label: 'US/CA (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+49', label: 'DE (+49)' },
    { code: '+81', label: 'JP (+81)' },
    { code: '+91', label: 'IN (+91)' },
    { code: '+966', label: 'SA (+966)' },
    { code: '+971', label: 'AE (+971)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  useState(() => {
    setFormData(prev => ({
      ...prev,
      countryCode: regionConfig.phoneCode,
    }));
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-5">
            <div className="lg:sticky lg:top-32">
              <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Initiate Technical Discussion
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                Engineering inquiries begin with project assessment and capability alignment. Initial conversations focus on technical requirements and delivery approach.
              </p>

              <div className="space-y-8 text-sm text-gray-500">
                <div>
                  <h3 className="text-cyan-400 text-xs tracking-widest mb-3">RESPONSE TIME</h3>
                  <p className="leading-relaxed">
                    Technical inquiries receive response within 24-48 hours. Complex assessments may require additional evaluation time.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 text-xs tracking-widest mb-3">ENGAGEMENT PROCESS</h3>
                  <p className="leading-relaxed">
                    Discovery call to understand requirements, followed by capability assessment and project scoping. Formal proposals provided after technical evaluation.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-400 text-xs tracking-widest mb-3">GLOBAL DELIVERY</h3>
                  <p className="leading-relaxed">
                    Services delivered remotely across all regions. Currently viewing {regionConfig.name} context with {regionConfig.currency} budget ranges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Phone</label>
                  <div className="grid grid-cols-3 gap-3">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => updateFormData('countryCode', e.target.value)}
                      className="bg-white/5 border border-white/10 px-3 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code} className="bg-[#12121a]">
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="col-span-2 bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => updateFormData('projectType', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="" className="bg-[#12121a]">Select project type</option>
                  <option value="erp" className="bg-[#12121a]">Internal ERP & Business Systems</option>
                  <option value="custom" className="bg-[#12121a]">Custom Software Development</option>
                  <option value="team" className="bg-[#12121a]">Dedicated Engineering Team</option>
                  <option value="ai" className="bg-[#12121a]">AI & Automation Solutions</option>
                  <option value="integration" className="bg-[#12121a]">Enterprise Integration</option>
                  <option value="other" className="bg-[#12121a]">Other / Multiple Areas</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  >
                    <option value="" className="bg-[#12121a]">Select timeline</option>
                    <option value="immediate" className="bg-[#12121a]">Immediate (1-2 months)</option>
                    <option value="short" className="bg-[#12121a]">Short-term (3-6 months)</option>
                    <option value="medium" className="bg-[#12121a]">Medium-term (6-12 months)</option>
                    <option value="long" className="bg-[#12121a]">Long-term (12+ months)</option>
                    <option value="flexible" className="bg-[#12121a]">Flexible / Ongoing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-3">
                    Budget ({regionConfig.currency})
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  >
                    <option value="" className="bg-[#12121a]">Select budget range</option>
                    {budgetRanges[regionConfig.currency].map((range) => (
                      <option key={range} value={range} className="bg-[#12121a]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">Project Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe technical requirements, integration needs, and project objectives..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-400/10 border border-cyan-400/30 hover:bg-cyan-400/20 text-cyan-400 px-8 py-5 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <span>Submit Engineering Inquiry</span>
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-600 leading-relaxed text-center">
                Submissions are reviewed by technical team. Confidential information should not be included in initial inquiry. Detailed technical discussions occur after engagement agreement.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
