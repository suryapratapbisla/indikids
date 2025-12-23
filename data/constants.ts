import type {
  PreschoolCard,
  Activity,
  Rhyme,
  Stat,
  TimelineItem,
  Testimonial,
  IntroCard,
  FAQ,
} from "@/types";

export const PRESCHOOL_CARDS: PreschoolCard[] = [
  {
    title: "Playgroup (2+ Years)",
    desc: "Gentle introduction to school with songs, sensory play and stories.",
    tag: "Happy first school",
  },
  {
    title: "Nursery (3+ Years)",
    desc: "Foundations in language, numbers, fine-motor skills and social confidence.",
    tag: "Early skills",
  },
  {
    title: "Kindergarten (4–5 Years)",
    desc: "Structured pre-primary program preparing children for formal school.",
    tag: "School-ready",
  },
];

export const DAYCARE_POINTS = [
  "Flexible timings for working parents.",
  "Comfortable rest areas and supervised play zones.",
  "Guided play, stories and quiet activity corners.",
  "Mixed-age social learning for 2–10 years.",
];

export const ACTIVITIES: Activity[] = [
  {
    title: "Indikids Taekwondo Academy",
    desc: "Affiliated to Odisha Taekwondo Association and mentored by a National-level coach. Kids train through a graded belt system that builds discipline, focus and fitness.",
    tag: "Discipline & fitness",
    image: "/images/activities/image1.png",
  },
  {
    title: "Indikids Chess Academy",
    desc: "Led by a FIDE-certified arbiter, Chess Academy trains children in strategy, concentration and pattern-recognition through regular practice and tournaments.",
    tag: "Sharp thinking",
    image: "/images/activities/image2.png",
  },
  {
    title: "Indikids Dance Academy",
    desc: "Training in Odissi classical and contemporary dance that builds grace, confidence and stage presence in a joyful group setting.",
    tag: "Expression & rhythm",
    image: "/images/activities/image3.png",
  },
  {
    title: "Indikids Art Academy",
    desc: "Drawing and painting classes that sharpen observation, imagination and fine-motor skills while giving children a medium for self-expression.",
    tag: "Creative minds",
    image: "/images/activities/image4.png",
  },
  {
    title: "Indikids Music Academy",
    desc: "Vocal and instrumental music sessions that help children explore rhythm, pitch, listening skills and the joy of performing.",
    tag: "Melody & joy",
    image: "/images/activities/image5.png",
  },
  {
    title: "Indikids Phonics Academy",
    desc: "Systematic phonics training that strengthens reading, spelling and pronunciation, giving children a strong foundation in English.",
    tag: "Strong readers",
    image: "/images/activities/image6.png",
  },
];

export const RHYMES: Rhyme[] = [
  {
    title: "Morning Circle Rhymes",
    desc: "Welcome songs and warm-up rhymes to settle children happily.",
    age: "Playgroup & Nursery",
  },
  {
    title: "Action Rhymes",
    desc: "High-energy rhymes with claps, jumps and actions for coordination.",
    age: "Nursery & KG",
  },
  {
    title: "Story Carpet Time",
    desc: "Picture-book stories with values and imagination prompts.",
    age: "All age groups",
  },
  {
    title: "Language & Sound Play",
    desc: "Rhymes that build vocabulary, phonics awareness and clear speech.",
    age: "2–6 years",
  },
];

export const ADMISSIONS_HIGHLIGHTS = [
  "Limited seats in every batch for individual attention.",
  "Transparent communication with parents via calls and messages.",
  "Campus visits encouraged – see classrooms and meet teachers.",
  "Activity classes on weekday evenings and weekend mornings.",
];

export const STATS: Stat[] = [
  { label: "Years of Care", value: "7+", detail: "Early childhood excellence" },
  { label: "Branches", value: "2", detail: "Patia · Bhubaneswar" },
  { label: "Kids Nurtured", value: "300+", detail: "Preschool & daycare" },
  { label: "Activity Academies", value: "6", detail: "Sports & arts" },
];

export const DAY_TIMELINE: TimelineItem[] = [
  {
    time: "09:00",
    title: "Arrival & Free Play",
    desc: "Children settle in with favourite toys and exploratory play.",
  },
  {
    time: "10:00",
    title: "Circle Time & Rhymes",
    desc: "Greetings, calendar, songs and theme-based sharing.",
  },
  {
    time: "11:00",
    title: "Activity & Learning",
    desc: "Art, concept games, stories and hands-on exploration.",
  },
  {
    time: "12:30",
    title: "Snack & Quiet Time",
    desc: "Healthy snacks, rest, quiet reading and calm music.",
  },
  {
    time: "14:00",
    title: "Play & Wrap-Up",
    desc: "Indoor / outdoor play, tidy-up and goodbye routine.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Parent of Nursery Student",
    quote:
      "Our daughter looks forward to school every single day. Her language skills and confidence have grown beautifully.",
  },
  {
    name: "Parent of KG Student",
    quote:
      "The activity-based learning has made concepts very clear. We love the balance of academics and play.",
  },
  {
    name: "Working Parent (Daycare)",
    quote:
      "Daycare at Indikids gives us peace of mind. We know our child is safe, engaged and cared for even after school.",
  },
];

export const INTRO_CARDS: IntroCard[] = [
  {
    title: "Indikids Preschool & Daycare",
    desc: "Activity-based programs for Play Group, Nursery and Kindergarten with daycare facilities for 2–10 years – all under one child-focused campus.",
    image: "/images/students/student1.jpg",
    cta: "Explore preschool",
    href: "#about",
  },
  {
    title: "Indikids Activity Centre",
    desc: "Taekwondo, Chess, Music, Dance, Art, Phonics and more – structured after-school programs by reputed mentors to shape all-round personalities.",
    image: "/images/students/student2.jpg",
    cta: "Explore activities",
    href: "#activities",
  },
];

export const IMAGES_PER_PAGE = 16;

export const FAQS: FAQ[] = [
  {
    q: "What age groups do you cater to?",
    a: "Preschool programs are for ages 2–5 (Playgroup, Nursery, KG). Daycare and activity programs are available for ages 2–10.",
  },
  {
    q: "What are your school timings?",
    a: "Preschool operates in the morning hours. Daycare timings are flexible during the day. Activity classes run on weekday evenings and weekend mornings.",
  },
  {
    q: "Can parents visit the campus before admission?",
    a: "Yes. We encourage parents to visit, see the classrooms and meet teachers before making a decision.",
  },
  {
    q: "How do I start the admission process?",
    a: "Call us on 7205502915 or send an enquiry using the form. Our team will share batch details, timings and fee information.",
  },
];





