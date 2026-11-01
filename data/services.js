// What visitors can expect during Sunday worship.
export const worshipElements = [
  {
    title: "Worship & Praise",
    text: "Hymns, choruses, and choir ministry as we lift our voices together.",
    icon: "music",
  },
  {
    title: "The Word",
    text: "Bible reading and preaching that applies Scripture to everyday life.",
    icon: "book",
  },
  {
    title: "Prayer",
    text: "Time to pray together for our church, families, and community.",
    icon: "cross",
  },
  {
    title: "Fellowship",
    text: "Warm greetings and a chance to meet the church family after service.",
    icon: "users",
  },
];

// Other regular gatherings. Only entries with verified: true are shown on the site.
// TODO(verify): confirm the days/times below before setting verified: true.
export const otherGatherings = [
  {
    title: "Mid-week Service",
    time: null,
    description: "A mid-week service of worship and teaching.",
    verified: true,
  },
  {
    title: "Wednesday Bible Study",
    time: "7:00 PM - 8:30 PM",
    description: "Midweek Bible study and prayer gathering.",
    verified: false,
  },
  {
    title: "Friday Prayer Meeting",
    time: "7:00 PM - 8:00 PM",
    description: "Corporate prayer for our church and community.",
    verified: false,
  },
];
