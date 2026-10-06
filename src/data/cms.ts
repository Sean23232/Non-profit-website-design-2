/* ============================================================
   CMS-READY CONTENT
   ------------------------------------------------------------
   Every piece of dynamic content on this site lives in this
   file so it can later be connected to a CMS / backend without
   touching the UI components. Replace placeholder values
   (marked [TBD] / [XX]) with real organizational content.
   ============================================================ */

const img = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

/* ---------- Brand ---------- */
export const org = {
  name: "Leisure Delite Travel Academy",
  shortName: "Leisure Delite",
  tagline: "Learning Beyond the Classroom",
  email: "[email@leisuredelite.org]",
  phone: "[(555) 000-0000]",
  address: "[City, State — TBD]",
};

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Enrichment", href: "#enrichment" },
  { label: "Leadership", href: "#leadership" },
  { label: "Sessions", href: "#sessions" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

/* ---------- Hero ---------- */
export const hero = {
  image: img(23709119, 2000, 1200),
  imageAlt: "Diverse group of students and educators on the steps of a historic cathedral during an educational field trip",
  headline: "Learning Beyond the Classroom.",
  highlightedWord: "Beyond",
  subheadline:
    "Hands-on learning, meaningful travel, and leadership experiences that help young people discover the world and their potential.",
  supporting:
    "Leisure Delite Travel Academy provides educational enrichment experiences for students from Pre-K through 8th grade, and leadership development opportunities for high school students.",
  trustLine: ["Educational enrichment", "Travel experiences", "Leadership development"],
};

/* ---------- Programs ---------- */
export type ProgramId = "enrichment" | "leadership";

export const programs = [
  {
    id: "enrichment" as ProgramId,
    label: "Pre-K – 8th Grade",
    name: "Enrichment & Travel Academy",
    description:
      "A hands-on day camp experience designed for students during school breaks. Through activities, exploration, educational travel, and real-world experiences, students discover social studies in ways that make learning memorable.",
    features: [
      "Hands-on learning",
      "Educational travel",
      "Social studies enrichment",
      "Cultural experiences",
      "Interactive activities",
      "School-break programming",
    ],
    cta: "Explore Enrichment",
    href: "#enrichment",
    image: img(35106208, 1000, 750),
    imageAlt: "Children engaged in an outdoor learning activity on a nature trail with educators",
  },
  {
    id: "leadership" as ProgramId,
    label: "High School Students",
    name: "Leadership Development",
    description:
      "A leadership-focused program designed to help high-school students develop confidence, responsibility, communication skills, and leadership experience while preparing for their future.",
    features: [
      "Leadership development",
      "Confidence building",
      "Communication skills",
      "Real-world experiences",
      "Mentorship",
      "Future-focused growth",
    ],
    cta: "Explore Leadership",
    href: "#leadership",
    image: img(34526416, 1000, 750),
    imageAlt: "High school students collaborating during a group learning session",
  },
];

/* ---------- Enrichment journey ---------- */
export const enrichmentJourney = [
  {
    number: "01",
    title: "Discover",
    copy: "Students explore new subjects, places, cultures, and ideas.",
  },
  {
    number: "02",
    title: "Experience",
    copy: "Students participate in hands-on activities rather than simply reading about concepts.",
  },
  {
    number: "03",
    title: "Explore",
    copy: "Educational travel helps students connect classroom concepts with real-world environments.",
  },
  {
    number: "04",
    title: "Grow",
    copy: "Students leave with new knowledge, confidence, and memories.",
  },
];

export const enrichmentImages = {
  main: { src: img(8926832, 1000, 780), alt: "Students conducting a hands-on science experiment together" },
  small: { src: img(33029296, 700, 520), alt: "Children painting together during an outdoor art activity" },
};

/* ---------- Travel gallery (dark section) ---------- */
export const travelGallery = [
  {
    src: img(39633034, 1100, 1300),
    alt: "Students exploring a colorful historic old town square",
    caption: "Historic city centers",
    tall: true,
  },
  {
    src: img(30489756, 800, 600),
    alt: "Visitors admiring paintings inside an art museum gallery",
    caption: "Museum visits",
  },
  {
    src: img(13328689, 800, 600),
    alt: "Vibrant street festival with traditional clothing and celebrations",
    caption: "Cultural festivals",
  },
  {
    src: img(15141455, 800, 600),
    alt: "Group of students exploring ancient ruins at a historical site",
    caption: "Historical landmarks",
  },
  {
    src: img(9630184, 800, 600),
    alt: "Group of young travelers studying a map together outdoors",
    caption: "Planning the journey",
  },
];

export const travelStatement =
  "Because some of the best lessons happen when you step outside the classroom.";

/* ---------- Sessions (CMS: dates, themes, availability) ---------- */
export type Availability = "open" | "limited" | "waitlist";

export interface Session {
  id: string;
  name: string;
  theme: string;
  program: ProgramId;
  grades: string;
  dates: string;
  time: string;
  monthLabel: string;
  dayLabel: string;
  location: string;
  availability: Availability;
  seatsNote: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const sessions: Session[] = [
  {
    id: "summer-discovery-1",
    name: "Summer Discovery Session",
    theme: "History, Culture & Geography",
    program: "enrichment",
    grades: "Pre-K – 8th Grade",
    dates: "June 15 – June 26",
    time: "9:00 AM – 3:00 PM",
    monthLabel: "Jun",
    dayLabel: "15",
    location: "Local field sites & partner venues [TBD]",
    availability: "open",
    seatsNote: "Seats available",
    description:
      "Explore history, culture, geography, and the world through hands-on experiences. Two weeks of museums, cultural sites, outdoor learning, and interactive activities.",
    image: img(9292939, 800, 520),
    imageAlt: "Group of students trekking along a forest trail during an outdoor education day",
  },
  {
    id: "summer-discovery-2",
    name: "Summer Discovery Session II",
    theme: "American History & Landmarks",
    program: "enrichment",
    grades: "Pre-K – 8th Grade",
    dates: "July 13 – July 24",
    time: "9:00 AM – 3:00 PM",
    monthLabel: "Jul",
    dayLabel: "13",
    location: "Local field sites & partner venues [TBD]",
    availability: "limited",
    seatsNote: "Limited seats remaining",
    description:
      "A second summer session focused on American history and landmarks — connecting classroom concepts to real places through educational travel and themed activities.",
    image: img(27040524, 800, 520),
    imageAlt: "Historic town hall and lively urban square in a European city",
  },
  {
    id: "fall-explorer",
    name: "Fall Break Explorer Days",
    theme: "Local History & Community",
    program: "enrichment",
    grades: "Pre-K – 8th Grade",
    dates: "October 13 – October 17",
    time: "9:00 AM – 3:00 PM",
    monthLabel: "Oct",
    dayLabel: "13",
    location: "Community sites [TBD]",
    availability: "open",
    seatsNote: "Seats available",
    description:
      "A week of discovery close to home. Students explore local history, community organizations, and cultural institutions while building observation and research skills.",
    image: img(8082897, 800, 520),
    imageAlt: "Young students exploring a forest trail with hats and backpacks",
  },
  {
    id: "winter-leadership",
    name: "Leadership Intensive: Lead With Confidence",
    theme: "Confidence, Communication & Responsibility",
    program: "leadership",
    grades: "Grades 9 – 12",
    dates: "January 12 – January 16",
    time: "9:00 AM – 2:00 PM",
    monthLabel: "Jan",
    dayLabel: "12",
    location: "[Venue TBD]",
    availability: "open",
    seatsNote: "Seats available",
    description:
      "A one-week intensive for high school students focused on confidence, communication, collaboration, and responsibility — designed to help students grow as leaders.",
    image: img(7692763, 800, 520),
    imageAlt: "Teenagers celebrating a completed group project with a high five",
  },
  {
    id: "spring-cultural",
    name: "Spring Cultural Immersion",
    theme: "Festivals, Traditions & Community",
    program: "enrichment",
    grades: "Pre-K – 8th Grade",
    dates: "March 16 – March 20",
    time: "9:00 AM – 3:00 PM",
    monthLabel: "Mar",
    dayLabel: "16",
    location: "Local field sites & partner venues [TBD]",
    availability: "waitlist",
    seatsNote: "Waitlist open",
    description:
      "Students experience the traditions, festivals, foods, and stories that shape communities — learning to see the world through the perspectives of others.",
    image: img(31543719, 800, 520),
    imageAlt: "Crowd enjoying a lively street festival under colorful bunting",
  },
];

export const availabilityCopy: Record<Availability, string> = {
  open: "Open",
  limited: "Limited",
  waitlist: "Waitlist",
};

/* ---------- Scholarships / affordability ---------- */
export const affordabilityBlocks = [
  {
    icon: "shield" as const,
    tone: "gold" as const,
    title: "Scholarships",
    copy: "Financial assistance may be available to qualifying families. We believe cost should never be the reason a student misses out.",
  },
  {
    icon: "users" as const,
    tone: "sky" as const,
    title: "Sibling Discounts",
    copy: "Families enrolling more than one child may qualify for sibling discounts on tuition.",
  },
  {
    icon: "heart" as const,
    tone: "coral" as const,
    title: "Community Support",
    copy: "Your support helps us create more opportunities for students in our community.",
  },
];

/* ---------- Leadership ---------- */
export const leadership = {
  eyebrow: "Leadership Development",
  title: "Preparing Tomorrow's Leaders.",
  copy: "Our leadership development program gives high-school students opportunities to build confidence, strengthen communication skills, develop responsibility, and gain experiences that prepare them for life beyond high school.",
  images: {
    main: {
      src: img(8419261, 1000, 1150),
      alt: "High school students in conversation together by a classroom window",
    },
    small: {
      src: img(5029855, 700, 520),
      alt: "Volunteers working together on a community cleanup project",
    },
  },
  features: [
    {
      icon: "award" as const,
      title: "Lead With Confidence",
      copy: "Build confidence, self-awareness, and the presence to step forward.",
    },
    {
      icon: "message" as const,
      title: "Communicate",
      copy: "Develop communication, listening, and collaboration skills.",
    },
    {
      icon: "heart" as const,
      title: "Serve",
      copy: "Understand leadership through service, responsibility, and community.",
    },
    {
      icon: "target" as const,
      title: "Prepare",
      copy: "Gain experiences and skills that prepare students for what comes next.",
    },
  ],
};

/* ---------- Why families choose us ---------- */
export const whyUs = [
  {
    icon: "beaker" as const,
    title: "Hands-On Learning",
    copy: "Students actively participate, build, and explore — rather than simply listening to a lesson.",
  },
  {
    icon: "globe" as const,
    title: "Educational Travel",
    copy: "Students connect learning to real places, people, and experiences beyond their neighborhood.",
  },
  {
    icon: "book-open" as const,
    title: "Social Studies Enrichment",
    copy: "History, culture, geography, and community come alive through immersive experiences.",
  },
  {
    icon: "users" as const,
    title: "Leadership Development",
    copy: "Older students build confidence, communication, and responsibility for their future.",
  },
  {
    icon: "shield" as const,
    title: "Safe & Purposeful Experiences",
    copy: "Every activity is designed with clear purpose around meaningful student development.",
  },
  {
    icon: "star" as const,
    title: "Memorable Experiences",
    copy: "Students leave with new knowledge, new confidence, and memories that last.",
  },
];

/* ---------- Impact stats (PLACEHOLDERS — replace with real figures) ---------- */
export const impactStats = [
  { value: "[XX]+", label: "Students Served" },
  { value: "[XX]+", label: "Educational Experiences" },
  { value: "[XX]", label: "Years of Community Impact" },
  { value: "[XX]", label: "Communities & Schools Reached" },
];

export const impactPlaceholderNote =
  "Impact figures shown are editable placeholders — replace with your organization's actual numbers.";

/* ---------- Testimonials (CMS: editable) ---------- */
export const testimonials = [
  {
    quote:
      "Leisure Delite gave my child the chance to learn in a completely different way. They came home excited to share what they had experienced.",
    name: "Rachel M.",
    role: "Parent • Enrichment Program",
    initials: "RM",
  },
  {
    quote:
      "My daughter started the leadership program quiet and unsure. She finished it talking about goals, ideas, and projects she had never mentioned before.",
    name: "Danielle T.",
    role: "Parent • Leadership Program",
    initials: "DT",
  },
  {
    quote:
      "The scholarship made it possible for our son to attend a session he still talks about. Experiences like this shouldn't depend on a family's budget.",
    name: "Marcus J.",
    role: "Parent • Scholarship Family",
    initials: "MJ",
  },
];

/* ---------- Donation ---------- */
export const donationAmounts = [25, 50, 100, 250];

export const donationImpact: Record<number, string> = {
  25: "Provides hands-on learning materials for one student for a full day of programming.",
  50: "Helps cover transportation and admission for a student's educational field experience.",
  100: "Sponsors a student's place in a session activity day, including materials and travel.",
  250: "Helps fund a partial scholarship seat for a student who needs financial assistance.",
};

export const donationDefaultImpact =
  "Every dollar helps create more opportunities for students to learn beyond the classroom.";

/* ---------- Gallery (CMS: images) ---------- */
export const galleryItems = [
  { src: img(30150856, 800, 1000), alt: "Students exploring a dinosaur exhibit inside a natural history museum", caption: "Hands-on discovery at the museum", tall: true },
  { src: img(6684604, 800, 600), alt: "Students collaborating over a book in a library", caption: "Collaborative learning" },
  { src: img(7972534, 800, 600), alt: "Group of students walking and talking on a sunny campus", caption: "Exploring together" },
  { src: img(18717606, 800, 1000), alt: "Ancient Roman ruins with historic columns", caption: "History comes alive", tall: true },
  { src: img(33824863, 800, 600), alt: "Aerial view of children engaged in an art workshop", caption: "Creative expression" },
  { src: img(6147374, 800, 600), alt: "Diverse group of friends walking together on a city street", caption: "Cultural exploration" },
  { src: img(9290038, 800, 1000), alt: "Group of kids exploring a sunny field on an outdoor adventure", caption: "Outdoor learning", tall: true },
  { src: img(38132500, 800, 600), alt: "Visitors exploring fine art paintings in a gallery", caption: "Art & culture" },
  { src: img(7868883, 800, 600), alt: "Teens working together on a robotics project", caption: "STEM teamwork" },
  { src: img(2476637, 800, 1000), alt: "Colorful lantern festival at a night market street", caption: "Festivals & traditions", tall: true },
];

/* ---------- FAQ (CMS: editable) ---------- */
export const faqs = [
  {
    question: "What ages can participate in the enrichment program?",
    answer:
      "The Enrichment & Travel Academy day camp is designed for students from Pre-K through 8th grade. Activities are adapted so younger and older students can participate together meaningfully.",
  },
  {
    question: "When does the day camp operate?",
    answer:
      "Sessions run during school breaks — summer, fall, winter, and spring. Visit the Upcoming Experiences section for current dates, themes, and availability.",
  },
  {
    question: "What types of activities do students participate in?",
    answer:
      "Students take part in hands-on workshops, museum and cultural site visits, outdoor learning, group projects, creative activities, and educational travel experiences connected to social studies themes.",
  },
  {
    question: "Does the program include educational travel?",
    answer:
      "Yes. Educational travel is a core part of the experience. Students visit museums, historical landmarks, cultural neighborhoods, and community organizations — connecting what they learn in the classroom to the real world.",
  },
  {
    question: "What grades are eligible for the leadership program?",
    answer:
      "The Leadership Development program is designed for high school students in grades 9–12 who want to build confidence, communication skills, and real-world leadership experience.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes. Financial assistance may be available to qualifying families. Scholarship information is included with registration, and our team is happy to help you explore your options.",
  },
  {
    question: "Are sibling discounts available?",
    answer:
      "Yes. Families enrolling more than one child may qualify for sibling discounts. Discounts are applied during enrollment confirmation.",
  },
  {
    question: "How do I register my child?",
    answer:
      "Use the registration form on this page to submit your interest. Our team will follow up to confirm details, answer questions, and complete enrollment for your preferred session.",
  },
  {
    question: "Can my organization partner with Leisure Delite Travel Academy?",
    answer:
      "Absolutely. We welcome partnerships with schools, community organizations, businesses, and volunteers. Visit the Support section or contact us to start a conversation.",
  },
];

/* ---------- Footer ---------- */
export const footerMission =
  "Creating hands-on educational experiences, meaningful travel, and leadership opportunities for young people — learning beyond the classroom.";
