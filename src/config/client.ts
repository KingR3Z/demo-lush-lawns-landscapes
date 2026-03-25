export const client = {
  // Business Details
  name: "Lush Lawns & Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Southampton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07714 927413",
  email: "",
  website: "",

  // Location
  address: "Southampton",
  city: "Southampton",
  county: "",
  postcode: "",
  basedIn: "Southampton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Susie Koukoulis", rating: 5, text: "Alex transformed our garden above and beyond our expectations . It is now a garden where we can relax as a family and is very practical for use when childminding. Could not praise this company enough and would highly recommend . Thank you  ", date: "5 years ago" },
    { name: "Siobhan Andrews", rating: 5, text: "Friendly and helpful service, Lush Lawns & Landscapes were able to advise on what would look best. Very pleased with our garden transformation. Would highly recommend ", date: "6 years ago" },
    { name: "matt hallett", rating: 5, text: "Amazing prices, amazing work. Will definitely use these guys again. ", date: "6 years ago" },
    { name: "Deb Parish", rating: 5, text: "Really disappointed Alex - you cam to quote and then never responded to my emails after i sent information as promised - Also ignore all further emails to find out what was going on ! I will not be recommending you ", date: "6 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Lush Lawns & Landscapes | Landscaper in Southampton",
    description: "Professional landscaper in Southampton. 5.0-star rated on Google. Call for a free quote.",
  },
};
