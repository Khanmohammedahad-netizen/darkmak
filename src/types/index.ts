export type Region = 'global' | 'japan' | 'europe' | 'uk' | 'usa' | 'uae' | 'saudi' | 'india';

export interface RegionConfig {
  id: Region;
  name: string;
  currency: string;
  phoneCode: string;
}

export const REGIONS: Record<Region, RegionConfig> = {
  global: { id: 'global', name: 'Global', currency: 'USD', phoneCode: '+1' },
  japan: { id: 'japan', name: 'Japan', currency: 'JPY', phoneCode: '+81' },
  europe: { id: 'europe', name: 'Europe', currency: 'EUR', phoneCode: '+49' },
  uk: { id: 'uk', name: 'United Kingdom', currency: 'GBP', phoneCode: '+44' },
  usa: { id: 'usa', name: 'United States', currency: 'USD', phoneCode: '+1' },
  uae: { id: 'uae', name: 'UAE', currency: 'AED', phoneCode: '+971' },
  saudi: { id: 'saudi', name: 'Saudi Arabia', currency: 'SAR', phoneCode: '+966' },
  india: { id: 'india', name: 'India', currency: 'INR', phoneCode: '+91' },
};

export type Route =
  | 'home'
  | 'global'
  | 'who-we-are'
  | 'services'
  | 'technical-capabilities'
  | 'current-work'
  | 'global-delivery'
  | 'process'
  | 'contact';
