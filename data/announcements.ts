export type Announcement = {
  date: string;
  title: string;
  desc: string;
  image: string;
  highlight?: string;   // optional future use
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    date: "01 Jan",
    title: "New Year · Wish Tree Day",
    desc:
      "A warm start to the year with gratitude circles, wish-tree ribbons, mindful moments and joyful classroom resolutions.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.57 AM.jpeg",
    highlight: "Fresh beginnings · Gratitude · Joy"
  },

  {
    date: "12 Jan",
    title: "National Youth Day",
    desc:
      "Children explore inspiring stories of leaders, values and kindness through picture books, role-play and simple reflection games.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.57 .jpeg",
    highlight: "Inspiration · Values · Story-based learning"
  },

  {
    date: "14 Jan",
    title: "Makar Sankranti · Kite Festival",
    desc:
      "Sky-blue painting, colourful kite crafts and gentle stories about harvest traditions — celebrating light, colour and gratitude.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.56 A.jpeg",
    highlight: "Festival learning · Creativity"
  },

  {
    date: "26 Jan",
    title: "Republic Day Celebration",
    desc:
      "A child-friendly mini parade, tricolour art, patriotic music and simple stories on unity and the idea of India.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.55 AM.jpeg",
    highlight: "Patriotism · Art · Community"
  },

  {
    date: "14 Feb",
    title: "Kindness Week",
    desc:
      "Compliment cards, buddy games, helping hands wall and ‘little acts of kindness’ challenges throughout the week.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.56 AM.jpeg",
    highlight: "Empathy · Social skills"
  },

  {
    date: "22 Mar",
    title: "World Water Day",
    desc:
      "Water-cycle demos, blue-themed dress-up, save-water pledges and fun sensory play activities.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.55 .jpeg",
    highlight: "Awareness · Science play"
  },

  {
    date: "05 Jun",
    title: "Environment Day · Little Earth Heroes",
    desc:
      "Planting saplings, leaf rubbings, eco-crafts and simple conversations about caring for nature.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.5.jpeg",
    highlight: "Nature · Responsibility"
  },

  {
    date: "21 Jun",
    title: "International Yoga Day",
    desc:
      "Kid-friendly asanas, breathing games, balance challenges and calm-music relaxation time.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.54 AM.jpeg",
    highlight: "Mindfulness · Fitness"
  },

  {
    date: "15 Aug",
    title: "Independence Day",
    desc:
      "Flag hoisting, patriotic rhymes, tricolour snacks and festive dress-up to celebrate the spirit of freedom.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.54 A.jpeg",
    highlight: "Patriotism · Culture"
  },

  {
    date: "05 Sep",
    title: "Teachers’ Day",
    desc:
      "Little performances, thank-you notes, and fun role-reversal activities where children ‘become the teacher’.",
    image: "/images/events/WhatsApp Image 2025-12-13 at 12.56.53 AM.jpeg",
    highlight: "Gratitude · Joy"
  },

  {
    date: "14 Nov",
    title: "Children’s Day Carnival",
    desc:
      "Games, music, treats and stage-time for every child — a festival of smiles and celebration.",
    image: "/images/events/k.jpeg",
    highlight: "Joy · Celebration"
  },

  {
    date: "25 Dec",
    title: "Christmas Joy Party",
    desc:
      "Secret Santa gifts, cosy storytelling, red-green dress-up and a ‘Kindness Tree’ filled by children.",
    image: "/images/events/christmas.jpeg",
    highlight: "Festive · Creative"
  }
];
