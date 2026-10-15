export const site = {
  name: 'Kensa Embroidery & Printing',
  tagline: 'Where Branding Meets Marketing',
  phonePrimary: '+27 68 987 1997',
  phonePrimaryDial: '+27689871997',
  phoneSecondary: '+27 84 473 0983',
  phoneSecondaryDial: '+27844730983',
  emailSales: 'sales@kensaembroidery.co.za',
  emailGeneral: 'Kensaembroidery@gmail.com',
  addressShort: '917 Morkels Cl, Halfway House, Midrand, 1683',
  addressFull: 'Unit 69, Innospace Allandale Exchange, 917 Morkels Cl, Halfway House, Midrand, 1683',
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 1:00 PM' },
    { days: 'Sunday & Public Holidays', time: 'Closed' },
  ],
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/share/1EF4Pb59bf/', icon: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com/kensa_embroidery?dlrf=MWwwd3VkeWI5bXNlcg%3D%3D', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kensa-embroideryandprinting/', icon: 'linkedin' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@kensaembroidery?_r=1&_t=ZS-9AYFeMigrjg', icon: 'tiktok' },
    { label: 'WhatsApp', href: 'https://wa.me/27689871997', icon: 'whatsapp' },
  ],
  mapsQuery: 'Unit 69 Innospace Allandale Exchange, 917 Morkels Cl, Halfway House, Midrand, 1683',
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/27689871997${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export type NavItem = { label: string; to: string };

export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  image?: string;
  /** Describes what the image actually shows (verified against the file). */
  imageAlt?: string;
  icon: 'embroidery' | 'dtf' | 'sublimation' | 'display' | 'collateral' | 'gifts';
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'embroidery',
    title: 'Embroidery',
    tagline: 'Your brand deserves to be worn with pride.',
    summary:
      'Premium, durable branding that holds up to years of wash and wear. We transform ordinary uniforms into professional, long-lasting brand statements that build trust the moment your team walks in.',
    image: '/images/bulk-embroidery.jpeg',
    imageAlt:
      'Multi-head embroidery machines stitching Kensa-branded workwear on the production floor in Midrand',
    icon: 'embroidery',
    bullets: [
      'Corporate wear, workwear and PPE',
      'Uniforms, sports teams and club wear',
      'Left-chest, cap and sleeve placements',
      'Bulk runs of 300 – 1,000+ units',
    ],
  },
  {
    slug: 'dtf-printing',
    title: 'DTF Printing',
    tagline: 'Stand out instantly.',
    summary:
      'Our DTF printing brings your designs to life with sharp detail and vibrant colour that turns heads and gets attention — on almost any fabric, including cotton, blends and performance wear.',
    image: '/images/dtf-printing.jpeg',
    imageAlt:
      'DTF printer producing full-colour transfers and printed corporate T-shirts at Kensa Embroidery & Printing',
    icon: 'dtf',
    bullets: [
      'Full-colour, photo-real detail',
      'No minimums on colours or gradients',
      'Soft hand-feel that survives washing',
      'Ideal for large front and back prints',
    ],
  },
  {
    slug: 'sublimation',
    title: 'Sublimation Printing',
    tagline: 'Flawless branding without limits.',
    summary:
      'A clean, full-colour finish that becomes part of the fabric itself — no fading, no cracking, no peeling. Best for custom-made designs on sportswear, corporate golf shirts, T-shirts, jackets and more.',
    image: '/images/sublimation-uniforms.jpeg',
    imageAlt: 'Sublimated full-colour polo shirts printed for a sports and corporate team order',
    icon: 'sublimation',
    bullets: [
      'Dye sinks into the fabric — it cannot peel',
      'Unlimited colours for complex artwork',
      'All-over prints and full garment designs',
      'Perfect for performance and sportswear',
    ],
  },
  {
    slug: 'displays',
    title: 'Indoor & Outdoor Displays',
    tagline: 'Be seen. Be remembered.',
    summary:
      'We turn your brand into high-impact visual presence that attracts attention at events, sites and activations — custom printed gazebos, banners, flags and more.',
    image: '/image2/service 4.jpeg',
    imageAlt: 'Event branding solutions including pop-up canopy tents, feather flags, backdrop banners and retractable banner stands',
    icon: 'display',
    bullets: [
      'Branded gazebos, banners and flags',
      'Event and activation signage',
      'Site branding and hoarding graphics',
      'Weather-ready outdoor materials',
    ],
  },
  {
    slug: 'screen-printing',
    title: 'Screen Printing',
    tagline: 'Crisp colour, serious volume.',
    summary:
      'A cost-effective way to brand large garment orders. Bold, opaque ink coverage built for high-volume runs where consistency across every unit matters.',
    image: '/image2/service 5.jpeg',
    imageAlt: 'Bulk screen printing specialists producing vibrant printed T-shirts and apparel on an industrial rotary screen printing machine',
    icon: 'collateral',
    bullets: [
      'Best value on high-volume runs',
      'Bold, opaque spot-colour coverage',
      'Consistent results across every unit',
      'Great for event and staff T-shirts',
    ],
  },
  {
    slug: 'corporate-branding',
    title: 'Corporate Branding & Gifts',
    tagline: 'Branded items people actually keep.',
    summary:
      'Cards, flyers, corporate gifts, notebooks, pens, mugs, caps and bags — professional marketing collateral and promotional items that carry your brand far beyond the office.',
    image: '/image2/service 6.jpeg',
    imageAlt: 'Marketing materials and promotional items including business cards, brochures, calendars, diaries and stickers',
    icon: 'gifts',
    bullets: [
      'Business cards and flyers',
      'Client and staff gifting ranges',
      'Notebooks, pens and desk items',
      'Caps, bags and drinkware',
    ],
  },
];

export const homeServices = services.slice(0, 3);

export const industries: {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: 'Security',
    copy: 'Professional security uniforms designed for protection, visibility, comfort and a strong professional appearance.',
    image: '/images/industry-security.jpeg',
    imageAlt: 'Folded pink branded T-shirts from a completed client print order',
  },
  {
    title: 'Cleaning',
    copy: 'Durable cleaning uniforms that provide comfort, cleanliness and a professional appearance throughout every shift.',
    image: '/images/industry-cleaning.jpeg',
    imageAlt: 'High-visibility vests branded with client printing, folded ready for collection',
  },
  {
    title: 'Logistics',
    copy: 'Reliable logistics workwear built for comfort, durability, visibility and demanding daily operations.',
    image: '/images/industry-logistics.jpeg',
    imageAlt: 'Stack of navy branded T-shirts printed for a client order',
  },
  {
    title: 'Construction',
    copy: 'Professional corporate wear tailored to create a polished, confident and memorable business image on every site.',
    image: '/images/industry-construction.jpeg',
    imageAlt: 'High-visibility safety vests branded for a client order',
  },
];

export const differentiators = [
  {
    title: 'In-house production',
    copy: 'No outsourcing and no middlemen. Every step happens on our own floor, under our own quality checks.',
    icon: 'factory',
  },
  {
    title: 'Quality control',
    copy: 'Every batch is checked before it leaves our facility — stitching, placement, colour and finish.',
    icon: 'shield',
  },
  {
    title: 'Bulk order specialists',
    copy: 'Built and staffed to handle 300, 500 or 1,000+ units at once without missing your deadline.',
    icon: 'boxes',
  },
  {
    title: 'Fast turnaround',
    copy: 'Realistic timelines we commit to up front — and hit. You always know exactly where your order stands.',
    icon: 'clock',
  },
];

export const stats = [
  {
    display: '100 – 1,000+',
    label: 'Staff per uniform rollout',
  },
  {
    display: '300 – 1,000+',
    label: 'Units per bulk order',
  },
  {
    display: '100%',
    label: 'Produced in-house in Midrand',
  },
  {
    display: '6',
    label: 'Branding services under one roof',
  },
];

export const testimonials = [
  {
    quote:
      'I received such a wonderful service when I ordered personalised pastors towels. The embroidery was done to perfection and the colours came out so beautifully.',
    name: 'Ayanda Sithole',
    role: 'Personalised order',
  },
  {
    quote:
      'We have been using Kensa Embroidery for our school uniform embroidery since 2022, and their work has been consistently excellent. The quality of their work is neat, durable and professionally finished, even after regular washing.',
    name: 'Pam Tshibubudze',
    role: 'School uniforms',
  },
  {
    quote:
      'I have been using Kensa Embroidery for over a year now — I run an SME. Judy is phenomenal with customer service and their work is exceptional every time. The prices are very reasonable and the turnaround time is quick. Best embroidery by far!',
    name: 'Lalita Reddy',
    role: 'SME owner',
  },
];

export const values = [
  {
    title: 'In-house production',
    copy: 'Greater control over quality, consistency and turnaround — because we never hand your brand to someone else.',
    icon: 'factory',
  },
  {
    title: 'Built for bulk',
    copy: 'We specialise in larger orders and are equipped to handle 300 to 1,000+ units with the same care as a single piece.',
    icon: 'boxes',
  },
  {
    title: 'One reliable branding partner',
    copy: 'Multiple branding solutions under one roof, making your ordering process simpler and your results consistent.',
    icon: 'handshake',
  },
  {
    title: 'Business-focused service',
    copy: 'Your branding represents your company. We focus on professional results, consistency and meeting your deadlines.',
    icon: 'briefcase',
  },
  {
    title: 'Midrand-based, serving nationwide',
    copy: 'Whether you are nearby or across South Africa, we make it easy to get your branding completed professionally.',
    icon: 'pin',
  },
  {
    title: 'More than just branding',
    copy: 'You supply the garment — we turn it into a professional brand that works as hard as your team does.',
    icon: 'sparkle',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Share your brief',
    copy: 'Send us your logo, garment and quantity. Not sure what you need? We will advise on the best method for your fabric and budget.',
  },
  {
    step: '02',
    title: 'Free quote & artwork check',
    copy: 'You get a clear written quote, and we confirm artwork, size and placement with you before anything goes into production.',
  },
  {
    step: '03',
    title: 'Production in-house',
    copy: 'We digitise, print or embroider on our own floor, checking every batch for placement, colour and finish.',
  },
  {
    step: '04',
    title: 'Delivery & aftercare',
    copy: 'Orders are packed and delivered on the timeline we committed to, with support if anything needs attention.',
  },
];

export const catalogues: {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  tag: string;
}[] = [
  {
    title: 'Corporate Gifts & Workwear',
    imageAlt: 'Workwear and corporate apparel range available for branding',
    copy: 'A leading supplier of promotional products, corporate gifts and workwear in South Africa.',
    image: '/images/cat-workwear.jpeg',
    tag: 'Workwear',
  },
  {
    title: 'Hoodies & T-Shirts',
    imageAlt: 'Hoodies and T-shirt range available for custom branding',
    copy: 'Specialises in headwear and custom-branded apparel for everyday team wear.',
    image: '/images/cat-tshirts.jpeg',
    tag: 'Apparel',
  },
  {
    title: 'Aprons & Hospitality Apparel',
    imageAlt: 'Aprons and hospitality apparel range available for branding',
    copy: 'Provides uniforms and workwear for the hospitality industry, built for long shifts.',
    image: '/images/cat-aprons.jpeg',
    tag: 'Hospitality',
  },
  {
    title: 'Notebooks, Pens & More',
    imageAlt: 'Stationery and promotional items range available for branding',
    copy: 'A wide range of stationery, office supplies and promotional items your clients keep.',
    image: '/images/cat-stationery.jpeg',
    tag: 'Stationery',
  },
  {
    title: 'Caps & Hats',
    imageAlt: 'Caps and hats range available for branded embroidery',
    copy: 'Trendy and fully customisable headwear for branding on site and off duty.',
    image: '/images/cat-caps.jpeg',
    tag: 'Headwear',
  },
  {
    title: 'Bags & Gifts',
    imageAlt: 'Bags and corporate gifting range available for branding',
    copy: 'A wholesale supplier of unique and creative gifts for promotional use.',
    image: '/images/cat-bags.jpeg',
    tag: 'Gifting',
  },
];

export const categoryLinks = [
  {
    title: 'Corporate Clothing',
    copy: 'Corporate clothing and workwear ranges for branding your team.',
    image: '/images/cat-corporate-clothing.jpeg',
    imageAlt: 'Corporate clothing and workwear products from Kensa Enterprises',
    tag: 'Corporate',
    url: 'https://promoafrica.com/www.kensaembroidery.co.za/categories/corporate-clothing',
  },
  {
    title: 'Notebooks & More',
    copy: 'Quality notebooks, stationery and promotional items.',
    image: '/images/cat-notebooks.jpeg',
    imageAlt: 'Promotional gifts, notebooks and stationery from KMQ',
    tag: 'Stationery',
    url: 'https://www.kmq.co.za/',
  },
  {
    title: 'Hoodies & T-Shirts',
    copy: 'Custom hoodies and t-shirts for teams and events.',
    image: '/images/cat-hoodies-tshirts.jpeg',
    imageAlt: 'Headwear, apparel and accessories from Captivity',
    tag: 'Apparel',
    url: 'https://captivity.co.za/',
  },
  {
    title: 'Caps & Hats',
    copy: 'Branded caps and hats for your team.',
    image: '/images/cat-caps-hats.jpeg',
    imageAlt: 'Headwear and custom branding options from TwentyFour',
    tag: 'Headwear',
    url: 'https://twentyfour.store/',
  },
  {
    title: 'Diaries, Bottles & More',
    copy: 'Diaries, bottles and promotional gifts for your business.',
    image: '/images/cat-diaries-bottles.jpeg',
    imageAlt: 'Corporate gifts and catalogues from Trade Only Gifts',
    tag: 'Gifting',
    url: 'https://www.tradeonlygifts.co.za/?spm=a2ty_o01.29997173.0.0.77915171iNp3ho',
  },
  {
    title: 'Workwear & PPE Supply',
    copy: 'Workwear and PPE supplies for safety and compliance.',
    image: '/images/cat-workwear-ppe.jpeg',
    imageAlt: 'Corporate clothing and gifting solutions from Barron',
    tag: 'PPE',
    url: 'https://barron.com/dashboard/transact/orders/BAR-SO014166',
  },
] as const;

export const faqs = [
  {
    q: 'What is the smallest order you accept?',
    a: 'We are set up for bulk work, but smaller runs and once-off personalised items are part of what we do as well. Send us your quantity and we will confirm pricing and the most suitable branding method.',
  },
  {
    q: 'How long does a bulk order take?',
    a: 'Lead time depends on the garment, stock availability and the size of the order. Tell us your deadline with your quote request and we will confirm a realistic completion date in writing before you commit.',
  },
  {
    q: 'Can you supply the garments too?',
    a: 'Yes. We can brand garments you supply, or quote and source the workwear, corporate wear, PPE and promotional items for you — including caps, bags, stationery and gifting ranges.',
  },
  {
    q: 'Which branding method is best for my order?',
    a: 'Embroidery gives a durable, premium finish for logos on polos, shirts, jackets and caps. DTF printing suits detailed, multi-colour artwork. Sublimation is the right choice for polyester sportswear and all-over designs. Send us your logo and garment and we will recommend the best option at quoting stage.',
  },
  {
    q: 'Do you work with companies outside Midrand?',
    a: 'Yes. We are based in Halfway House, Midrand, and supply businesses, manufacturers, distributors and workwear suppliers across South Africa.',
  },
];
