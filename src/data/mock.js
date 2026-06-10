export const LOGO_URL = '/images/trek_logo.png';

export const IMAGES = {
  heroMain: '/images/hero-main3.webp',
  product: '/images/product1.webp',
  about: '/images/about-us1.webp',
  process: '/images/Process.webp',
  collage2: '/images/about-img2.webp',
  service: '/images/services1.webp',
  cleanWater: 'https://images.unsplash.com/photo-1671461838930-f70c86753275?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Product & Technology', path: '/products' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_STATS = [
  { value: '30+', label: 'Years System Life' },
  { value: '70-80%', label: 'Less Energy Use' },
  { value: 'PAN', label: 'India Presence' },
  { value: 'Mon-Sat 9am-6pm', label: 'Support' },
];

export const CORE_VALUES = [
  {
    title: 'Japanese-Inspired Innovation',
    desc: 'Advanced MBBR technology adapted from proven Japanese engineering for Indian climate, soil, and regulatory needs.',
  },
  {
    title: 'Trusted Across India',
    desc: 'Chosen by civil contractors, government bodies, and institutions for proven performance and CPCB/SPCB compliance.',
  },
  {
    title: 'Sustainable by Design',
    desc: 'Every Trek Enviro system recycles water, reduces freshwater demand, and promotes a circular water economy.',
  },
  {
    title: 'End-to-End Support',
    desc: 'From site assessment and engineering to installation, commissioning, and long-term O&M — one partner, one promise.',
  },
];

export const IMPACT_STATS = [
  { value: '15+', label: 'Years of Plant Life' },
  { value: '1', label: 'Trusted Technology Partner' },
  { value: '50+', label: 'Installations Planned' },
  { value: 'PAN', label: 'India Coverage' },
  { value: '70%', label: 'Less OPEX' },
];

export const FEATURE_HIGHLIGHTS = [
  { title: 'Leak Proof', desc: 'FRP tanks manufactured using state-of-the-art machinery and individually pre-tested to ensure zero leakage.' },
  { title: 'No Smell & Low Sound', desc: 'No odour emission except during maintenance. Sound is lower than 50 dB \u2014 similar to a mobile phone vibration.' },
  { title: 'Reduced Maintenance Cost', desc: 'Just 1\u20132 hours of attention per week is sufficient. Operators are not required for small and mid-range packaged plants.' },
  { title: 'Revolutionary Technology', desc: 'A state-of-the-art Packaged Sewage Treatment Plant designed for Indian conditions and statutory norms.' },
  { title: 'Meets Regulatory Standards', desc: 'Engineered to meet NGT, CPCB, SPCB, and CPHEEO regulatory standards across India.' },
  { title: 'High BOD/COD Removal', desc: 'Excellent nutrient removal (N & P), high BOD/COD reduction, and reusable water output for flushing & irrigation.' },
];

export const SMART_STPS = [
  { title: 'IoT Enabled STPs', desc: 'Cloud-connected packaged STPs with secure access from any device.' },
  { title: 'Real Time Monitoring', desc: 'Live water quality, flow, blower & pump health visible 24/7.' },
  { title: 'On / Off Control', desc: 'Remote start, stop, and scheduling of plant operations from your phone.' },
  { title: 'Maintenance Reports', desc: 'Auto-generated AMC reports, desludging logs, and compliance summaries.' },
  { title: 'Plant Performance Alerts', desc: 'Smart alerts on parameter drift before they become compliance issues.' },
  { title: 'Critical Alerts', desc: 'Instant notifications for power, sensor, and treatment-line failures.' },
];

export const PRODUCT_DETAILS = [
  {
    name: 'Capsule Type STP',
    image: "/images/capsule_image.webp",
    // image: 'https://customer-assets.emergentagent.com/job_axisbd-build/artifacts/l31u8o26_transparent_1.png',
    tagline: 'Compact. Efficient. Sustainable.',
    intro: 'Designed for domestic wastewater treatment in residential complexes, villages, and small communities. Its prefabricated FRP structure allows for quick installation, minimal maintenance, and complete compliance with India\u2019s environmental standards.',
    specs: [
      { k: 'Capacity Range', v: '5 KLD \u2013 30 KLD' },
      { k: 'Construction', v: '100% FRP, capsule shape' },
      { k: 'Footprint', v: 'Ultra-compact (~4\u20139 sqm)' },
      { k: 'Installation', v: 'Above or under ground' },
      { k: 'Operation', v: 'Fully automatic, no specific operator required' },
      { k: 'Power Load', v: '0.75 \u2013 1.5 kW' },
    ],
    ideal: ['Individual Villas', 'Farm Houses', 'Gated Communities', 'Small Hotels', 'Schools', 'Health Centres'],
    benefits: ['Quick Plug & Play installation', 'Minimal civil work required', 'No foul odour or noise', 'Reusable water for flushing & gardening'],
  },
  {
    name: 'Cylindrical Type STP',
    image: "/images/cylindrical_image.webp",
    // image: 'https://customer-assets.emergentagent.com/job_axisbd-build/artifacts/pl5pe3qx_transparent_3.png',
    tagline: 'Powerful Performance for Large-Scale Needs.',
    intro: 'Trek Enviro\u2019s Cylindrical Type STP is engineered for efficient industrial and commercial sewage treatment across India. Built to handle high loads, ensure fast and effective treatment, and require minimal maintenance \u2014 a preferred choice for industries seeking reliability, sustainability, and compliance.',
    specs: [
      { k: 'Capacity Range', v: '30 KLD \u2013 100+ KLD' },
      { k: 'Construction', v: 'Heavy-duty cylindrical FRP' },
      { k: 'Footprint', v: 'Modular \u2014 grows with load' },
      { k: 'Installation', v: 'Above or under ground' },
      { k: 'Treatment Stages', v: 'Anaerobic + MBBR + Sedimentation + Disinfection' },
      { k: 'Power Load', v: '2.2 \u2013 7.5 kW (load-based)' },
    ],
    ideal: ['Industrial Clusters', 'Hospitals', 'Hotels & Resorts', 'Townships', 'Commercial Complexes', 'Government Projects'],
    benefits: ['Robust FRP body with long life', 'Fast processing rate at high BOD/COD', 'Up to 80% lower energy than conventional STP', 'Compliance with NGT/CPCB/SPCB norms'],
  },
];

// Compact card list (derived from PRODUCT_DETAILS) used by ProductShowcase
export const PRODUCTS = PRODUCT_DETAILS.map((p) => ({
  name: p.name,
  tagline: p.tagline,
  desc: p.intro,
  image: p.image,
}));

export const SECTORS = [
  { title: 'Real Estate & Housing', desc: 'Gated societies, apartments, townships, and villa projects.' },
  { title: 'Industrial & Manufacturing', desc: 'Textile, food processing, light industries, and warehouses.' },
  { title: 'Commercial & Hospitality', desc: 'Hotels, resorts, shopping malls, restaurants, and offices.' },
  { title: 'Institutions & Government', desc: 'Hospitals, schools, colleges, and public sector buildings.' },
  { title: 'Rural & Community Projects', desc: 'Decentralized STPs for villages and areas without sewerage.' },
];

export const PROJECTS = [
  { title: 'Residential Township, Noida', category: 'Packaged STP', capacity: '60 KLD', client: 'Civil Contractor', year: '2025' },
  { title: 'Government Office Complex, Lucknow', category: 'MBBR STP', capacity: '120 KLD', client: 'State Govt.', year: '2024' },
  { title: 'Boutique Hotel, Rishikesh', category: 'Packaged FRP STP', capacity: '25 KLD', client: 'Hospitality', year: '2024' },
  { title: 'Industrial Unit, Greater Noida', category: 'Hybrid STP', capacity: '80 KLD', client: 'Manufacturer', year: '2023' },
  { title: 'Multi-Specialty Hospital, Delhi NCR', category: 'MBBR STP', capacity: '150 KLD', client: 'Healthcare', year: '2023' },
  { title: 'Residential Villa, Dadri', category: 'Compact STP', capacity: '8 KLD', client: 'Private', year: '2022' },
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Consultation & Site Assessment', desc: 'Detailed site survey, feasibility study, and sustainability goal mapping. Custom design aligned with CPCB/SPCB norms.' },
  { num: '02', title: 'Engineering & Manufacturing', desc: 'Precision-engineered FRP modules built with proven MBBR technology — durable, compact, and ready for quick installation.' },
  { num: '03', title: 'Delivery & Installation', desc: 'Trained teams handle safe transport, excavation, piping, and electricals. Most units operational within days.' },
  { num: '04', title: 'Testing & Commissioning', desc: 'Comprehensive water-quality and performance tests to verify compliance, safety, and efficiency before handover.' },
  { num: '05', title: 'Operation & Maintenance', desc: 'Annual maintenance contracts, periodic desludging, and optional remote monitoring for 15+ years of reliable life.' },
];

export const WHY_US = [
  { title: 'Proven Japanese-Rooted Technology', desc: 'Backed by decades of global MBBR expertise through our strategic partner Susbio, adapted for Indian conditions.' },
  { title: 'Cost-Effective from Day One', desc: 'Lower CAPEX and OPEX than conventional STPs, with rapid ROI through water reuse and energy savings.' },
  { title: 'Engineered for Sustainability', desc: 'Treat at site, reuse at site — reducing freshwater demand and protecting rivers, lakes, and groundwater.' },
  { title: 'Regulatory & Compliance Ready', desc: 'High treatment efficiency supporting Namami Gange, Swachh Bharat, and NGT/CPCB/SPCB guidelines.' },
  { title: 'PAN-India Local Expertise', desc: 'Indian manufacturing and assembly with a nationwide installation and service footprint.' },
];

export const TESTIMONIALS = [
  { quote: 'Trek Enviro delivered a compact FRP STP that fits perfectly under our driveway. Zero odor, near-zero maintenance — and our garden now runs entirely on recycled water.', name: 'Rohit Malhotra', role: 'Homeowner, Noida' },
  { quote: 'Their engineering team understood our hospital\'s load pattern better than any vendor we evaluated. Compliance reporting has never been easier.', name: 'Dr. Anjali Sharma', role: 'Facility Head, Delhi NCR' },
  { quote: 'From design to commissioning in six weeks. The MBBR system runs on 40% less power than our old STP and effluent quality is consistently under CPCB limits.', name: 'Vikram Iyer', role: 'Project Manager, Civil Contractor' },
];


export const CONTACT_INFO = {
  phone: '+91 96169 80885',
  email: 'trekenviro@gmail.com',
  whatsapp: '+91 96169 80885',
  address1: 'Varanasi',
  address2: 'Dehli NCR',
  hours: 'Mon – Sat : 9:00 AM – 7:00 PM',
};

export const APPLICATIONS = [
  'Residential Apartments', 'Primary Health Centres', 'Community Health Centres', 'Office Buildings',
  'Gram Panchayat', 'Farm Houses', 'Banquet Halls', 'Restaurants',
  'Hospitals', 'Factories', 'Gardens & Parks', 'Water Parks',
  'Hotels & Resorts', 'Schools & Colleges', 'Villages', 'Industrial Clusters',
];

export const RECYCLED_WATER_USES = [
  { title: 'Agriculture', desc: 'Safe irrigation for farms and crops.' },
  { title: 'Gardening', desc: 'Landscape and horticultural watering.' },
  { title: 'Cooling Towers', desc: 'Industrial process cooling reuse.' },
  { title: 'Toilet Flushing', desc: 'Non-potable building reuse.' },
  { title: 'Vehicle Wash', desc: 'Wash bays and service stations.' },
  { title: 'Cleaning Systems', desc: 'Floor and equipment washdown.' },
];

export const INSTALLATION_STEPS = [
  { num: '01', title: 'Excavation', desc: 'Site preparation and pit excavation as per design layout.' },
  { num: '02', title: 'Concrete Slab', desc: 'Base concrete slab cast and cured for tank placement.' },
  { num: '03', title: 'Ship to Site', desc: 'Pre-fabricated FRP modules safely delivered to project site.' },
  { num: '04', title: 'Upper Concrete Work', desc: 'Anchoring and upper concrete works around modules.' },
  { num: '05', title: 'Backfill', desc: 'Engineered backfilling to lock the unit in position.' },
  { num: '06', title: 'Install & Commission', desc: 'Piping, electricals, testing, and final handover.' },
];

export const COMPARISON_ROWS = [
  { param: 'Tanks & Platforms', conv: '4–6 Tanks and platforms required for pumps & blowers', johk: 'Single compact pre-fab modular unit' },
  { param: 'Civil Work', conv: 'Considerably high', johk: 'Minimal civil work' },
  { param: 'Maintenance', conv: 'Oil, grease, belts, bearings & chlorine', johk: 'Only chlorine' },
  { param: 'Operator', conv: 'Skilled labour required to operate', johk: 'Fully automatic — no specific operator required' },
  { param: 'Installation', conv: 'Needs installation on site', johk: 'Pre-fab — Ready to install, Plug & Play' },
  { param: 'Electricity Consumption', conv: 'High', johk: '70-80% less' },
  { param: 'Sludge Generation', conv: 'High', johk: 'No daily sludge generation(Treatment required)' },
];

export const EFFLUENT_PARAMS = [
  { param: 'pH', inlet: '6.0 – 8.0', outlet: '6.5 – 9.0', polished: '6.0 – 8.0' },
  { param: 'BOD (mg/L)', inlet: '300', outlet: '< 20', polished: '< 5' },
  { param: 'COD (mg/L)', inlet: '500', outlet: '< 100', polished: '< 50' },
  { param: 'TSS (mg/L)', inlet: '240', outlet: '< 50', polished: '≤ 1' },
  { param: 'F. Coliform (MPN/100 mL)', inlet: '> 10,000', outlet: '< 100', polished: '< 100' },
];

export const TREATMENT_STAGES = [
  { name: 'Sewage Inlet', sub: 'Raw wastewater entry' },
  { name: 'Solid–Liquid Separation', sub: 'Primary sedimentation' },
  { name: 'Anaerobic Filter Bed', sub: 'Anaerobic digestion' },
  { name: 'MBBR Bio-Career Reaction', sub: 'Aerobic biological treatment' },
  { name: 'Filtration Sedimentation', sub: 'Secondary clarification' },
  { name: 'Disinfection', sub: 'Chlorination / UV' },
  { name: 'Treated Water', sub: 'Ready for reuse' },
];
