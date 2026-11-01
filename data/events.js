// Church events. Add new events here (or later from an admin system).
// date: ISO date "YYYY-MM-DD" — used to split upcoming from past events automatically.
// image: optional path under /public. Only events with verified: true are shown.
const events = [
  {
    id: "pcmf-castle-forest-hike-2026",
    title: "PCMF Castle Forest Hike",
    date: "2026-08-01",
    time: "6:00 AM – 6:00 PM",
    location: "Castle Forest",
    description: "A Presbyterian Church Men's Fellowship hike to Castle Forest.",
    ministry: "PCMF",
    image: null,
    verified: true,
  },
  // TODO(verify): recurring gatherings carried over from the previous site; confirm before enabling.
  {
    id: "bible-study-fellowship",
    title: "Bible Study Fellowship",
    date: null,
    recurrence: "Every Wednesday",
    time: "7:00 PM",
    location: "Church Hall",
    description: "A time to study scripture, grow spiritually, and connect with one another.",
    image: null,
    verified: false,
  },
  {
    id: "youth-fellowship",
    title: "Youth Fellowship",
    date: null,
    recurrence: "Thursdays",
    time: "6:30 PM",
    location: "PCEA Nyari Church",
    description: "A gathering for young people to worship, learn, and build meaningful friendships.",
    image: null,
    verified: false,
  },
];

export default events;
