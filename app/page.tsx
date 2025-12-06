"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";
import Loader from "../components/Loader";

/* =========================================================
   DATA CONSTANTS
   ========================================================= */

type Announcement = {
  date: string;
  title: string;
  desc: string;
  image: string;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    date: "01 Jan",
    title: "New Year Welcome Day",
    desc: "Gratitude circle, wish trees and resolution crafts to start the year bright.",
    image: "/images/events/new-year.jpg",
  },
  {
    date: "26 Jan",
    title: "Republic Day Celebration",
    desc: "Mini parade walk, tricolour art and simple stories about the constitution.",
    image: "/images/events/republic-day.jpg",
  },
  {
    date: "14 Feb",
    title: "Kindness Week",
    desc: "Kind words wall, compliment cards and buddy activities.",
    image: "/images/events/kindness-week.jpg",
  },
  {
    date: "22 Mar",
    title: "World Water Day",
    desc: "Blue dress-up, water cycle demos and ‘save every drop’ pledges.",
    image: "/images/events/world-water-day.jpg",
  },
  {
    date: "05 Jun",
    title: "World Environment Day",
    desc: "Planting saplings, leaf rubbings and ‘little earth heroes’ badges.",
    image: "/images/events/environment-day.jpg",
  },
  {
    date: "21 Jun",
    title: "International Yoga Day",
    desc: "Kid-friendly asanas, breathing games and relaxation music.",
    image: "/images/events/yoga-day.jpg",
  },
  {
    date: "15 Aug",
    title: "Independence Day",
    desc: "Flag hoisting, patriotic songs, tricolour snacks and costumes.",
    image: "/images/events/independence-day.jpg",
  },
  {
    date: "05 Sep",
    title: "Teachers’ Day",
    desc: "Little performances, thank-you notes and role-reversal fun.",
    image: "/images/events/teachers-day.jpg",
  },
  {
    date: "14 Nov",
    title: "Children’s Day Carnival",
    desc: "Games, special treats and stage time for every child.",
    image: "/images/events/childrens-day.jpg",
  },
  {
    date: "25 Dec",
    title: "Christmas Joy Party",
    desc: "Secret Santa, carols, red-green dress-up and kindness tree.",
    image: "/images/events/christmas.jpg",
  },
];

const WHY_INDIKIDS_FEATURES = [
  {
    title: "Child-Centred Curriculum",
    desc: "Activity-based thematic learning aligned with early childhood milestones.",
    tag: "Cognitive + emotional growth",
  },
  {
    title: "Small, Safe Classrooms",
    desc: "Limited batch sizes with child-safe infrastructure and supervised spaces.",
    tag: "Safety first, always",
  },
  {
    title: "Loving, Experienced Teachers",
    desc: "Warm mentors who know each child’s strengths, pace and personality.",
    tag: "Trusted educators",
  },
  {
    title: "Strong Bhubaneswar Roots",
    desc: "Close parent–school partnership and long-term community relationships.",
    tag: "Local & personal",
  },
];

const PRESCHOOL_CARDS = [
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

const DAYCARE_POINTS = [
  "Flexible timings for working parents.",
  "Comfortable rest areas and supervised play zones.",
  "Guided play, stories and quiet activity corners.",
  "Mixed-age social learning for 2–10 years.",
];

/* === UPDATED: full Activity Centre copy + images + Call us === */

const ACTIVITIES = [
  {
    title: "Indikids Taekwondo Academy",
    desc:
      "Indikids Taekwondo Academy is affiliated to Odisha Taekwondo Association and provides training for graded belt systems to kids of all age groups, mentored by a National-level coach.",
    tag: "Discipline & fitness",
    image: "/images/activities/taekwondo.jpg",
  },
  {
    title: "Indikids Chess Academy",
    desc:
      "Chess improves cognitive function and keeps children mentally sharp. Indikids Chess Academy offers chess training for kids of all age groups, mentored by a FIDE certified Arbiter.",
    tag: "Sharp thinking",
    image: "/images/activities/chess.jpg",
  },
  {
    title: "Indikids Dance Academy",
    desc:
      "Dancing supports both physical and mental well-being. Indikids Dance Academy offers training in Odissi classical and contemporary dance for all age groups, helping children build self-confidence and social skills.",
    tag: "Expression & rhythm",
    image: "/images/activities/dance.jpg",
  },
  {
    title: "Indikids Art Academy",
    desc:
      "Drawing and painting enhance observation skills, foster creativity and imagination, and promote self-expression. Indikids Art Academy offers drawing and painting classes for kids of all age groups.",
    tag: "Creative minds",
    image: "/images/activities/art.jpg",
  },
  {
    title: "Indikids Music Academy",
    desc:
      "Music relieves stress, enhances mood and fosters creativity and self-expression. Indikids Music Academy offers training in vocal and instrumental music for kids of all ages.",
    tag: "Melody & joy",
    image: "/images/activities/music.jpg",
  },
  {
    title: "Indikids Phonics Academy",
    desc:
      "Phonics teaches the connection between sounds and letters, building a strong foundation for reading and spelling. Indikids Phonics Academy offers special phonics training to help children improve their reading skills.",
    tag: "Strong readers",
    image: "/images/activities/phonics.jpg",
  },
];

const RHYMES = [
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

const ADMISSIONS_HIGHLIGHTS = [
  "Limited seats in every batch for individual attention.",
  "Transparent communication with parents via calls and messages.",
  "Campus visits encouraged – see classrooms and meet teachers.",
  "Activity classes on weekday evenings and weekend mornings.",
];

const STATS = [
  { label: "Years of Care", value: "7+", detail: "Early childhood excellence" },
  { label: "Branches", value: "2", detail: "Patia · Bhubaneswar" },
  { label: "Kids Nurtured", value: "300+", detail: "Preschool & daycare" },
  { label: "Activity Academies", value: "6", detail: "Sports & arts" },
];

const DAY_TIMELINE = [
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

const TESTIMONIALS = [
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

/* === UPDATED INTRO: brochure copy + Learn More + 2 images === */

const INTRO_CARDS = [
  {
    title: "Indikids Preschool & Daycare",
    desc:
      "Indikids Preschool & Daycare aims to provide a unique early learning experience for kids through an activity-based learning curriculum. We offer learning programs for Play Group, Nursery and Kindergarten and provide daycare facilities for 2–10 year olds.",
    image: "/images/intro/preschool-main.jpg",
    cta: "Learn More",
    href: "#about",
  },
  {
    title: "Indikids Activity Centre",
    desc:
      "Indikids Activity Centre helps your child nurture and hone hidden talents and develop an all-round personality through various activities. The centre offers Taekwondo, Chess, Music (Vocal & Instrumental), Art, Phonics and more, by reputed and acclaimed mentors.",
    image: "/images/intro/activity-main.jpg",
    cta: "Learn More",
    href: "#activities",
  },
];

/* Hero-level highlight cards */

const ACTIVITY_HEROES = [
  {
    title: "Taekwondo Academy",
    desc: "Structured belt-based program that builds discipline, focus and fitness.",
    image: "/images/activity-hero/taekwondo.jpg",
  },
  {
    title: "Chess Academy",
    desc: "Carefully designed sessions to develop strategy, patience and planning.",
    image: "/images/activity-hero/chess.jpg",
  },
  {
    title: "Dance Academy",
    desc: "Mix of classical and creative dance to build confidence on stage.",
    image: "/images/activity-hero/dance.jpg",
  },
];

// For real site, create img1..imgN in /public/images/gallery
const GALLERY_IMAGES = Array.from({ length: 40 }, (_, i) => {
  const index = i + 1;
  return {
    src: `/images/gallery/img${index}.jpg`,
    alt: `Indikids moment ${index}`,
  };
});

const IMAGES_PER_PAGE = 16;

/* =========================================================
   HOME PAGE COMPONENT
   ========================================================= */

export default function Home() {
  const [scrollScore, setScrollScore] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [heroGalleryIndex, setHeroGalleryIndex] = useState(0);
  const [galleryPage, setGalleryPage] = useState(0);
  const [featuredEventIndex, setFeaturedEventIndex] = useState(0);
  const [isAnnouncementHovered, setIsAnnouncementHovered] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiIsThinking, setAiIsThinking] = useState(false);

  const announcementRowRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  /* ----------------- cursor aura ----------------- */

  useEffect(() => {
    const aura = document.createElement("div");
    aura.className = "cursor-aura";
    document.body.appendChild(aura);

    const handleMove = (e: PointerEvent) => {
      aura.style.transform = `translate3d(${e.clientX - 26}px,${
        e.clientY - 26
      }px,0)`;
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      aura.remove();
    };
  }, []);

  /* ----------------- scroll percentage ----------------- */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.body.scrollHeight - (window.innerHeight || 1);
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollScore(Math.round(Math.min(100, Math.max(0, percent))));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----------------- in-view animation ----------------- */

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ----------------- announcements strip auto-scroll ----------------- */

  const scrollAnnouncements = (direction: "left" | "right") => {
    const row = announcementRowRef.current;
    if (!row) return;
    const amount = row.clientWidth * 0.75;
    row.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = announcementRowRef.current;
    if (!row) return;

    let frameId: number;

    const step = () => {
      if (!isAnnouncementHovered) {
        row.scrollLeft += 0.5;
        const maxScroll = row.scrollWidth - row.clientWidth;
        if (row.scrollLeft >= maxScroll - 2) {
          row.scrollLeft = 0;
        }
      }
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isAnnouncementHovered]);

  /* ----------------- featured event auto-rotate ----------------- */

  const goToNextEvent = () => {
    setFeaturedEventIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const goToPrevEvent = () => {
    setFeaturedEventIndex((prev) =>
      prev === 0 ? ANNOUNCEMENTS.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isAnnouncementHovered) return;
    const id = window.setInterval(goToNextEvent, 5000);
    return () => window.clearInterval(id);
  }, [isAnnouncementHovered]);

  /* ----------------- hero gallery auto-slide ----------------- */

  useEffect(() => {
    if (lightboxImg) return;
    if (!GALLERY_IMAGES.length) return;

    const id = window.setInterval(() => {
      setHeroGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [lightboxImg]);

  /* ----------------- contact form (simple) ----------------- */

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Thank you for contacting Indikids. Our team will reach out to you shortly."
    );
  };

  /* ----------------- IndiBot AI helper ----------------- */

  const handleAiSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    setAiIsThinking(true);

    const q = aiQuestion.toLowerCase();
    let answer =
      "A quick call or campus visit will help us suggest the best program. Share your child’s age and timings, and our team will guide you.";

    if (q.includes("2") || q.includes("playgroup")) {
      answer =
        "For a 2-year-old, Playgroup with short, gentle hours works best. You can gradually extend timings or add daycare as your child settles and if you are a working parent.";
    } else if (q.includes("3") || q.includes("nursery")) {
      answer =
        "For age 3, the Nursery program is ideal. It focuses on early language, number sense and social skills. Many parents combine morning Nursery with daycare support in the afternoon.";
    } else if (q.includes("4") || q.includes("5") || q.includes("kg")) {
      answer =
        "For ages 4–5, Kindergarten prepares your child for Grade 1 with structured literacy and numeracy. Adding at least one activity, like Taekwondo or Phonics, is a great advantage.";
    } else if (q.includes("daycare") || q.includes("after school")) {
      answer =
        "Daycare is suitable if you need support after school hours. You can choose flexible timings and pair it with an activity such as Chess, Dance or Music so your child learns while you manage work.";
    } else if (q.includes("fee") || q.includes("fees") || q.includes("charges")) {
      answer =
        "Fee structures depend on the program and timings. The best next step is to call 7205502915 or fill the enquiry form so we can share exact details for your child’s age and schedule.";
    }

    window.setTimeout(() => {
      setAiAnswer(answer);
      setAiIsThinking(false);
    }, 400);
  };

  /* ----------------- derived gallery state ----------------- */

  const heroImage =
    GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES[heroGalleryIndex] : null;

  const totalGalleryPages = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_PAGE);
  const galleryStart = galleryPage * IMAGES_PER_PAGE;
  const gallerySlice = GALLERY_IMAGES.slice(
    galleryStart,
    galleryStart + IMAGES_PER_PAGE
  );

  const featuredEvent = ANNOUNCEMENTS[featuredEventIndex];

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <div>
      <Loader />

      {/* background layers */}
      <div className="page-grid-overlay" aria-hidden="true" />
      <div className="page-parallax-layer" aria-hidden="true" />

      {/* scroll orb */}
      <div className="scroll-score-orb" aria-hidden="true">
        <div className="scroll-score-ring">
          <span>{scrollScore}</span>
          <small>%</small>
        </div>
        <p>Explored</p>
      </div>

      {/* NAVBAR */}
      <header className="top-nav">
        <div className="top-nav-inner">
          <a href="#" className="brand" aria-label="Indikids Preschool home">
            <img
              src="/logo/small.jpg"
              alt="Indikids logo"
              className="brand-logo"
            />
            <div className="brand-text">
              Indikids Preschool
              <span>Bhubaneswar · Preschool · Daycare · Activity Centre</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#why">Why Indikids</a>
            <a href="#highlights">Highlights</a>
            <a href="#activities">Activities</a>
            <a href="#rhymes">Rhymes</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="page">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title" data-animate>
          <div className="hero-video">
            <video
              src="/vedio/back.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>
          <div className="hero-overlay" />

          <div className="floating-toys">
            <div className="toy toy-ball" />
            <div className="toy toy-block" />
            <div className="toy toy-star" />
            <div className="toy toy-cloud" />
            <div className="toy toy-kite" />
            <div className="toy toy-bird" />
          </div>

          <div className="hero-inner">
            <div className="hero-logo-wrap" data-animate>
              <img
                src="/logo/big.jpg"
                alt="Indikids Preschool & Daycare"
                className="hero-logo-main"
              />
            </div>

            <div className="hero-badge" data-animate>
              Indikids Preschool &amp; Daycare · Patia · Bhubaneswar
            </div>

            <h1 id="hero-title" className="hero-title" data-animate>
              The future <span>starts here</span>
            </h1>

            <p className="hero-subtitle" data-animate>
              A warm, joyful early learning space for children 2–10 years –
              blending play, creativity and strong foundations for school and
              life.
            </p>

            <div className="hero-actions" data-animate>
              <a className="btn btn-primary" href="#admissions">
                Apply for Admission
              </a>
              <a className="btn btn-outline" href="tel:7205502915">
                Call us · 7205502915
              </a>
            </div>

            <div className="hero-floating-badges" data-animate>
              <div className="hero-pill">Small, child-safe classrooms</div>
              <div className="hero-pill">
                Activity-based, screen-light learning
              </div>
              <div className="hero-pill">Loving, experienced teachers</div>
            </div>

            <div className="scroll-hint" data-animate>
              <span>Scroll to explore Indikids</span>
              <div className="scroll-mouse">
                <div className="scroll-wheel" />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO CARDS – Preschool & Activity Centre */}
        <section
          className="section section-intro-dual"
          aria-label="Indikids programs"
          data-animate
        >
          <div className="section-header">
            <div className="section-header-badge">
              Indikids Preschool &amp; Daycare and Activity Centre
            </div>
            <h2>Indikids Preschool &amp; Activity Centre</h2>
            <p>
              One child-friendly space for early learning, daycare and
              co-curricular academies – a single trusted campus for your
              child’s growth.
            </p>
          </div>

          <div className="intro-dual-grid">
            {INTRO_CARDS.map((card) => (
              <article key={card.title} className="intro-card card-3d">
                <div className="intro-card-circle">
                  <img src={card.image} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a href={card.href} className="btn btn-outline">
                  {card.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ANNOUNCEMENT / 365 DAYS */}
        <section
          className="announcement"
          aria-label="Events calendar"
          data-animate
          onMouseEnter={() => setIsAnnouncementHovered(true)}
          onMouseLeave={() => setIsAnnouncementHovered(false)}
        >
          <div className="announcement-top-row">
            <div className="announcement-heading">
              <span className="announcement-chip">Events Calendar</span>
              <h2>
                365 Days of <span>Joyful Learning</span>
              </h2>
              <p>
                Theme days, festivals and little adventures across the year –
                every month brings new memories for Indikids children.
              </p>
            </div>
            <div className="announcement-buttons">
              <button
                type="button"
                className="btn-icon"
                onClick={goToPrevEvent}
                aria-label="Previous event"
              >
                ‹
              </button>
              <button
                type="button"
                className="btn-icon"
                onClick={goToNextEvent}
                aria-label="Next event"
              >
                ›
              </button>
            </div>
          </div>

          <div className="announcement-layout">
            {/* thumbs */}
            <div className="announcement-thumbs-wrapper">
              <div
                className="announcement-marquee"
                ref={announcementRowRef}
                aria-label="Event thumbnails"
              >
                <div className="announcement-row">
                  {ANNOUNCEMENTS.map((item, idx) => (
                    <button
                      key={item.title}
                      type="button"
                      className={
                        "announcement-thumb " +
                        (featuredEventIndex === idx
                          ? "announcement-thumb-active"
                          : "")
                      }
                      onClick={() => setFeaturedEventIndex(idx)}
                    >
                      <div className="announcement-thumb-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <span className="announcement-thumb-date">
                        {item.date}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="announcement-thumb-controls">
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => scrollAnnouncements("left")}
                  aria-label="Scroll announcements left"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => scrollAnnouncements("right")}
                  aria-label="Scroll announcements right"
                >
                  ›
                </button>
              </div>
            </div>

            {/* main card */}
            <article className="announcement-feature-card">
              <div className="announcement-feature-image">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  loading="lazy"
                />
              </div>
              <div className="announcement-feature-content">
                <span className="announcement-feature-date">
                  {featuredEvent.date}
                </span>
                <h3>{featuredEvent.title}</h3>
                <p>{featuredEvent.desc}</p>
                <div className="announcement-dots" aria-hidden="true">
                  {ANNOUNCEMENTS.map((_, idx) => (
                    <span
                      key={idx}
                      className={
                        "announcement-dot-indicator " +
                        (idx === featuredEventIndex
                          ? "announcement-dot-active"
                          : "")
                      }
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ABOUT – PRESCHOOL & DAYCARE */}
        <section id="about" className="section" data-animate>
          <div className="section-header">
            <div className="section-header-badge">
              About Indikids Preschool &amp; Daycare
            </div>
            <h2>Preschool &amp; Daycare Programs</h2>
            <p>
              Indikids Preschool offers Play Group, Nursery and KG programs for
              children aged 2–5 years, along with daycare facilities for 2–10
              years. The curriculum is activity-based, thematic and centred on
              skill-based learning outcomes.
            </p>
          </div>

          <div className="about-facilities-grid">
            <div className="about-facility">
              <div className="about-facility-image">
                <img
                  src="/images/about/preschool-facilities.jpg"
                  alt="Indikids Preschool Facilities"
                />
              </div>
              <h3>Preschool Facilities</h3>
              <p>
                Indikids Preschool offers programs in Play Group, Nursery and KG
                grades, for kids in the age group of 2–5 years.
              </p>
              <p>
                It follows an activity-based thematic learning approach with
                focus on child-centric, skill-based learning outcomes. The
                curriculum supports the overall development of a child –
                Cognitive, Language, Physical, Social and Emotional.
              </p>
              <a href="tel:7205502915" className="btn btn-outline btn-small">
                Call us
              </a>
            </div>

            <div className="about-facility">
              <div className="about-facility-image">
                <img
                  src="/images/about/daycare-facilities.jpg"
                  alt="Indikids Daycare Facilities"
                />
              </div>
              <h3>Daycare Facilities</h3>
              <p>
                Indikids Daycare provides daycare facilities for kids in the age
                group of 2–10 years.
              </p>
              <p>
                The daycare offers a comfortable, child-centric environment with
                fun-filled learning activities to keep children engaged and
                active with personalised attention. Flexible schedules are
                available to suit the needs of both kids and parents.
              </p>
              <a href="tel:7205502915" className="btn btn-outline btn-small">
                Call us
              </a>
            </div>
          </div>

          <div className="card-grid">
            {PRESCHOOL_CARDS.map((card) => (
              <div key={card.title} className="card card-3d">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="card-tag">{card.tag}</div>
              </div>
            ))}

            <div className="card card-3d">
              <h3>Daycare (2–10 Years)</h3>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.1rem" }}>
                {DAYCARE_POINTS.map((point) => (
                  <li
                    key={point}
                    style={{
                      fontSize: "0.9rem",
                      marginBottom: "0.3rem",
                      color: "#e5e7eb",
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="card-tag">Safe · Flexible · Caring</div>
            </div>
          </div>
        </section>

        {/* WHY INDIKIDS */}
        <section id="why" className="section-alt" data-animate>
          <div className="section-header">
            <div className="section-header-badge">Why Parents Choose Us</div>
            <h2>Why Indikids Preschool &amp; Daycare</h2>
            <p>
              A trusted early learning partner for families – blending
              structured learning with play, safety, values and emotional care.
            </p>
          </div>

          <div className="feature-grid">
            {WHY_INDIKIDS_FEATURES.map((item) => (
              <div
                key={item.title}
                className="feature-card card-3d"
                data-animate
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className="card-tag">{item.tag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS & DAY TIMELINE */}
        <section id="highlights" className="section-light" data-animate>
          <div className="section-header">
            <div className="section-header-badge">Indikids in Numbers</div>
            <h2>Highlights at a Glance</h2>
            <p>Quick facts that give you a snapshot of our journey so far.</p>
          </div>

          <div className="stats-strip">
            {STATS.map((item) => (
              <div key={item.label} className="stats-card">
                <div className="stats-value">{item.value}</div>
                <div className="stats-label">{item.label}</div>
                <div className="stats-detail">{item.detail}</div>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: "2.4rem" }}>
            <div className="section-header-badge">A Day at Indikids</div>
            <h2>What a Typical Day Looks Like</h2>
            <p>
              A calm, predictable routine helps children feel safe and settled –
              while still leaving space for curiosity and play.
            </p>
          </div>

          <div className="timeline-grid">
            {DAY_TIMELINE.map((slot) => (
              <div key={slot.time} className="timeline-card">
                <div className="timeline-time">{slot.time}</div>
                <div className="timeline-title">{slot.title}</div>
                <div className="timeline-desc">{slot.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ACTIVITY CENTRE – ABOUT + 6 ACADEMIES */}
        <section id="activities" className="section-light" data-animate>
          <div className="section-header">
            <div className="section-header-badge">
              About Indikids Activity Centre
            </div>
            <h2>Indikids Activity Centre</h2>
            <p>
              Indikids Activity Centre helps children nurture and hone their
              hidden talents and build an all-round personality through
              structured activities led by reputed mentors.
            </p>
          </div>

          <div className="activity-hero-grid">
            {ACTIVITY_HEROES.map((item) => (
              <article key={item.title} className="activity-hero-card card-3d">
                <div className="activity-hero-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="activity-hero-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="activity-grid">
            {ACTIVITIES.map((item) => (
              <div key={item.title} className="activity-card card-3d">
                {item.image && (
                  <div className="activity-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className="card-tag">{item.tag}</p>
                <a
                  href="tel:7205502915"
                  className="btn btn-outline btn-small"
                  style={{ marginTop: "0.6rem" }}
                >
                  Call us
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* RHYMES */}
        <section id="rhymes" className="section-rhymes" data-animate>
          <div className="section-header section-header-soft">
            <div className="section-header-badge">
              Rhymes · Stories · Songs
            </div>
            <h2>Rhymes &amp; Story Time at Indikids</h2>
            <p>
              Carefully chosen rhymes, songs and stories that support language,
              imagination and emotional expression – not just entertainment.
            </p>
          </div>

          <div className="card-grid rhymes-grid">
            {RHYMES.map((item) => (
              <div key={item.title} className="card card-3d rhymes-card">
                <div className="rhymes-badge" aria-hidden="true">
                  🎵
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className="card-tag">Ideal for: {item.age}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADMISSIONS + AI HELPER */}
        <section
          id="admissions"
          className="section-admissions"
          data-animate
          aria-labelledby="admissions-title"
        >
          <div className="section-header">
            <div className="section-header-badge">Admissions 2025–26</div>
            <h2 id="admissions-title">
              Admissions Open · Preschool &amp; Daycare
            </h2>
            <p>
              Seats fill quickly each academic year. Get in touch to explore the
              right program for your child.
            </p>
          </div>

          <div className="admissions-grid">
            <div className="admissions-card">
              <div className="admissions-chip">Preschool Programs</div>
              <h3 style={{ marginTop: "0.7rem" }}>
                Playgroup · Nursery · KG (2–5 Years)
              </h3>
              <ul>
                <li>Child-centric, activity-based curriculum.</li>
                <li>Focus on school readiness and overall development.</li>
                <li>Parent orientation and settling support.</li>
              </ul>
              <p className="admissions-note" style={{ marginTop: "0.8rem" }}>
                Call us on <strong>7205502915</strong> to know batch timings and
                fee details, or send an enquiry below.
              </p>
            </div>

            <div className="admissions-card">
              <div className="admissions-chip admissions-chip-soft">
                Daycare &amp; Activities
              </div>
              <h3 style={{ marginTop: "0.7rem" }}>
                Daycare &amp; After-School Programs
              </h3>
              <ul>
                {ADMISSIONS_HIGHLIGHTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="admissions-note" style={{ marginTop: "0.8rem" }}>
                Activity classes are held during weekday evenings and weekend
                mornings at the campus.
              </p>
            </div>
          </div>

          <div className="ai-helper-card" data-animate>
            <div className="ai-helper-header">
              <span className="ai-chip">Smart Helper</span>
              <h3 style={{ marginTop: "0.6rem" }}>
                IndiBot – Admissions Helper
              </h3>
              <p style={{ marginTop: "0.4rem" }}>
                Ask a quick question about age, program choice or daycare plus
                activity combinations. IndiBot will suggest a starting point.
              </p>
            </div>

            <form className="ai-helper-form" onSubmit={handleAiSubmit}>
              <label className="ai-label">
                Your question
                <textarea
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Example: My child is 3 years old and I work till evening. Which program is suitable?"
                  required
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={aiIsThinking}
              >
                {aiIsThinking ? "Thinking…" : "Get suggestion"}
              </button>
            </form>

            {aiAnswer && (
              <div className="ai-answer">
                <strong>IndiBot suggests:</strong>
                <p style={{ marginTop: "0.3rem" }}>{aiAnswer}</p>
                <p className="ai-disclaimer">
                  This is a general suggestion. Final program and timings will
                  be confirmed by our admissions team based on your child and
                  availability.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-light" data-animate>
          <div className="section-header">
            <div className="section-header-badge">Parent Voices</div>
            <h2>What Parents Say About Indikids</h2>
            <p>
              Genuine feedback from families who trusted us with their child’s
              early years.
            </p>
          </div>

          <div className="card-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card card-3d">
                <p
                  style={{
                    fontStyle: "italic",
                    marginBottom: "0.7rem",
                    color: "#e5e7eb",
                  }}
                >
                  “{t.quote}”
                </p>
                <p className="card-tag">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section-light" data-animate>
          <div className="section-header">
            <div className="section-header-badge">Gallery</div>
            <h2>Indikids · A Visual Journey</h2>
            <p>
              A growing gallery of happy moments, celebrations, classroom
              activities and everyday magic.
            </p>
          </div>

          {heroImage && (
            <div className="gallery-hero" data-animate>
              <div
                className="gallery-hero-image"
                onClick={() => {
                  setLightboxImg(heroImage.src);
                  setLightboxAlt(heroImage.alt);
                }}
              >
                <img src={heroImage.src} alt={heroImage.alt} />
              </div>
              <div className="gallery-hero-meta">
                <span className="gallery-count-pill">
                  {heroGalleryIndex + 1} / {GALLERY_IMAGES.length}
                </span>
                <h3>Indikids: A Visual Journey</h3>
                <p>
                  Tap through real photos from our classrooms, events and
                  activity sessions. Each image holds a small story from our
                  campus.
                </p>
              </div>
            </div>
          )}

          <div className="gallery-strip" aria-label="Gallery preview strip">
            <div className="gallery-strip-inner">
              {GALLERY_IMAGES.slice(0, 14).map((item, idx) => (
                <button
                  key={item.src}
                  type="button"
                  className={
                    "gallery-strip-thumb " +
                    (heroGalleryIndex === idx
                      ? "gallery-strip-thumb-active"
                      : "")
                  }
                  onClick={() => setHeroGalleryIndex(idx)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid gallery-grid-large">
            {gallerySlice.map((item, idx) => (
              <button
                key={galleryStart + idx}
                type="button"
                className="gallery-thumb"
                onClick={() => {
                  setLightboxImg(item.src);
                  setLightboxAlt(item.alt);
                }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            ))}
          </div>

          <div className="gallery-pager">
            <button
              type="button"
              className="btn btn-outline gallery-page-btn"
              disabled={galleryPage === 0}
              onClick={() => setGalleryPage((p) => Math.max(0, p - 1))}
            >
              ← Previous
            </button>
            <div className="gallery-page-dots">
              {Array.from({ length: totalGalleryPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={
                    "gallery-page-dot " +
                    (idx === galleryPage ? "gallery-page-dot-active" : "")
                  }
                  onClick={() => setGalleryPage(idx)}
                  aria-label={`Go to gallery page ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn-outline gallery-page-btn"
              disabled={galleryPage === totalGalleryPages - 1}
              onClick={() =>
                setGalleryPage((p) => Math.min(totalGalleryPages - 1, p + 1))
              }
            >
              Next →
            </button>
          </div>
        </section>

        {/* LIGHTBOX */}
        {lightboxImg && (
          <div
            className="lightbox"
            onClick={() => {
              setLightboxImg(null);
              setLightboxAlt("");
            }}
          >
            <img src={lightboxImg} alt={lightboxAlt} className="lightbox-img" />
          </div>
        )}

        {/* FAQ */}
        <section className="section" data-animate aria-labelledby="faq-title">
          <div className="section-header">
            <div className="section-header-badge">Questions</div>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>
              A quick FAQ to answer common parent queries. You can always call
              us for more details.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, idx) => {
              const open = openFaqIndex === idx;
              return (
                <div
                  key={item.q}
                  className={"faq-item " + (open ? "faq-item-open" : "")}
                  onClick={() => setOpenFaqIndex(open ? null : idx)}
                >
                  <div className="faq-question">
                    <span>{item.q}</span>
                    <span className="faq-icon">{open ? "−" : "+"}</span>
                  </div>
                  {open && <div className="faq-answer">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" data-animate>
          <div className="section-header">
            <div className="section-header-badge">Contact Us</div>
            <h2>Call, Message or Visit Us</h2>
            <p>
              Reach out for admissions, daycare timings or activity details. We
              are happy to assist.
            </p>
          </div>

          <div className="contact-layout contact-layout-split">
            <div className="contact-card">
              <h3>Connect with Indikids</h3>
              <p>Call or message us for program details and admissions.</p>

              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:7205502915">7205502915</a> /{" "}
                <a href="tel:9899635818">9899635818</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:indikidsbbsr@gmail.com">
                  indikidsbbsr@gmail.com
                </a>
              </p>

              <h3 style={{ marginTop: "1.2rem" }}>
                Indikids Preschool &amp; Daycare
              </h3>
              <p>
                <strong>Branch 1</strong>
                <br />
                GF, Tower-6, Z1 Apartments, Patia, Bhubaneswar 751024
              </p>
              <p>
                <strong>Branch 2</strong>
                <br />
                Triplex-32, Skytech Infinity Villa, Raghunathpur Jalli, Patia,
                Bhubaneswar 751024
              </p>

              <p className="contact-note">
                Activity classes are conducted during evening hours on weekdays
                and morning hours on weekends.
              </p>
              <p className="hours-note">
                <strong>Hours:</strong> 09:00 am – 07:00 pm (Mon–Sat)
              </p>

              <a
                href="https://wa.me/917205502915"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                💬 Message us on WhatsApp
              </a>

              <div className="map-embed">
                <iframe
                  title="Indikids Preschool Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d85.824!3d20.303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
                />
              </div>
            </div>

            <div className="contact-visual">
              <div className="contact-visual-circle">
                <img
                  src="/images/contact/smiling-child.jpg"
                  alt="Happy child at Indikids Preschool"
                />
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <h3>Send an Enquiry</h3>

                <label>
                  Name*
                  <input type="text" required />
                </label>
                <label>
                  Mobile No*
                  <input type="tel" required />
                </label>
                <label>
                  Email*
                  <input type="email" required />
                </label>
                <label>
                  Message*
                  <textarea required />
                </label>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  style={{ marginTop: "0.9rem" }}
                >
                  Send Enquiry
                </button>

                <p className="contact-note">
                  We value your time. Our team will get back to you as soon as
                  possible with relevant details.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section
          className="section section-connect"
          aria-label="Connect on social media"
          data-animate
        >
          <h2 className="connect-title">Connect With Us</h2>
          <p className="connect-subtitle">
            Follow Indikids on social media for photos, updates and parenting
            tips.
          </p>

          <div className="connect-icons">
            <a
              href="https://m.facebook.com/1966791146973772/"
              target="_blank"
              rel="noreferrer"
              className="connect-icon"
              aria-label="Indikids on Facebook"
            >
              <span>f</span>
            </a>
            <a
              href="https://www.instagram.com/indikidsbbsr/"
              target="_blank"
              rel="noreferrer"
              className="connect-icon"
              aria-label="Indikids on Instagram"
            >
              <span>◎</span>
            </a>
            <a
              href="https://x.com/indikidsbbsr"
              target="_blank"
              rel="noreferrer"
              className="connect-icon"
              aria-label="Indikids on X"
            >
              <span>𝕏</span>
            </a>
          </div>
        </section>
      </main>

      {/* MASCOT POPUP */}
      <div className="mascot-popup" aria-hidden="false">
        <div className="mascot-avatar">🦉</div>
        <div className="mascot-content">
          <h4>Inky is here to help</h4>
          <p>Tap below to reach our team for admissions or timings.</p>
          <a href="#contact" className="btn btn-primary btn-small">
            Contact team
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© 2025 Indikids Preschool &amp; Daycare · Bhubaneswar</span>
          <div className="footer-links">
            <a href="#about">Programs</a>
            <a href="#activities">Activities</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* FAQ data – keep at bottom so Home comp is cleaner */

const FAQS = [
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
