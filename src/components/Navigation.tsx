import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useRegion } from '../context/RegionContext';
import { useRouter } from '../hooks/useRouter';
import { REGIONS, Region, Route } from '../types';

export function Navigation() {
  const { region, setRegion } = useRegion();
  const { currentRoute, navigate } = useRouter();
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: Route }[] = [
    { label: 'Global', route: 'global' },
    { label: 'Who We Are', route: 'who-we-are' },
    { label: 'Services', route: 'services' },
    { label: 'Technical Capabilities', route: 'technical-capabilities' },
    { label: 'Current Work', route: 'current-work' },
    { label: 'Global Delivery', route: 'global-delivery' },
    { label: 'Process', route: 'process' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavigate = (route: Route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="text-xl font-light tracking-wider text-white hover:text-cyan-400 transition-colors z-50"
        >
          MAK
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" strokeWidth={1.5} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`text-sm tracking-wide transition-colors ${currentRoute === item.route
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsRegionOpen(!isRegionOpen)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{REGIONS[region].name}</span>
            </button>

            {isRegionOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#12121a] border border-white/10 rounded-sm min-w-[180px] shadow-2xl">
                {Object.values(REGIONS).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setRegion(r.id);
                      setIsRegionOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-sm transition-colors ${region === r.id
                        ? 'text-cyan-400 bg-cyan-400/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0a0a0f] z-40 flex flex-col pt-24 px-8 lg:hidden h-[100dvh] overflow-y-auto">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNavigate(item.route)}
                  className={`text-2xl font-light text-left py-2 ${currentRoute === item.route
                      ? 'text-cyan-400'
                      : 'text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-white/10 w-full my-4" />

              <div className="flex flex-col gap-4 pb-12">
                <p className="text-sm text-gray-500 uppercase tracking-widest">Region</p>
                {Object.values(REGIONS).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setRegion(r.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-lg ${region === r.id
                        ? 'text-cyan-400'
                        : 'text-gray-400'
                      }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
