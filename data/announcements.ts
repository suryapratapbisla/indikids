export type Announcement = {
  date: string;
  title: string;
  desc: string;
  image: string;
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    date: "01 Jan",
    title: "New Year Welcome Day",
    desc: "Gratitude circle, wish trees and resolution crafts to start the year bright.",
    image: "/images/events/new-year.jpg",
  },
  {
    date: "12 Jan",
    title: "National Youth Day",
    desc: "Inspiring stories of great leaders and values through role-play.",
    image: "/images/events/youth-day.jpg",
  },
  {
    date: "14 Jan",
    title: "Makar Sankranti · Kite Day",
    desc: "Kite crafts, sky-colour painting and gentle harvest stories.",
    image: "/images/events/makar-sankranti.jpg",
  },
  {
    date: "26 Jan",
    title: "Republic Day Celebration",
    desc: "Mini parade walk, tricolour art and simple stories about the constitution.",
    image: "/images/events/republic-day.jpg",
  }
];
