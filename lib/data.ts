export type UpcomingEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  music: {
    track: string;
    artist: string;
    albumArt: string;
  };
};

export type PastEvent = {
  id: string;
  title: string;
  year: string;
  guests: number;
  category: string;
  image: string;
  gallery: string[];
  music: {
    track: string;
    artist: string;
    albumArt: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  photo: string;
};

export const currentEvent = {
  title: "The Gilded Evening",
  description:
    "An intimate black-tie gathering celebrating a decade of unforgettable evenings, held under the restored glass atrium of the Meridian Hall.",
  date: "2026-09-19T19:00:00",
  time: "7:00 PM",
  location: "Meridian Hall, Zagreb",
  image:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2400&auto=format&fit=crop",
  music: {
    track: "Velvet Hour",
    artist: "Nocturne Quartet",
    albumArt:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
  },
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "ue-1",
    title: "The Gilded Evening",
    date: "Sep 19, 2026",
    location: "Meridian Hall, Zagreb",
    description:
      "A black-tie anniversary gala beneath a restored glass atrium.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop",
    music: {
      track: "Velvet Hour",
      artist: "Nocturne Quartet",
      albumArt:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "ue-2",
    title: "Vintner's Table",
    date: "Oct 04, 2026",
    location: "Villa Dorena, Split",
    description: "A seated harvest dinner paired with six coastal vineyards.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    music: {
      track: "Coastal Table",
      artist: "Marin Ivić Trio",
      albumArt:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "ue-3",
    title: "Winter Atelier",
    date: "Dec 12, 2026",
    location: "The Old Foundry, Osijek",
    description:
      "A curated design showcase and cocktail evening for 200 guests.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1400&auto=format&fit=crop",
    music: {
      track: "Foundry Lights",
      artist: "Ambient Works",
      albumArt:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "ue-4",
    title: "New Year, Reimagined",
    date: "Dec 31, 2026",
    location: "Rooftop Solene, Zagreb",
    description: "A midnight celebration overlooking the city skyline.",
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1400&auto=format&fit=crop",
    music: {
      track: "Skyline Midnight",
      artist: "Rooftop Session",
      albumArt:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=400&auto=format&fit=crop",
    },
  },
];

export const pastEvents: PastEvent[] = [
  {
    id: "pe-1",
    title: "Midnight in Marrakech",
    year: "2025",
    guests: 180,
    category: "Gala",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
    ],
    music: {
      track: "Desert Wind",
      artist: "Kasbah Ensemble",
      albumArt:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "pe-2",
    title: "The Orchard Wedding",
    year: "2025",
    guests: 120,
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1400&auto=format&fit=crop",
    ],
    music: {
      track: "First Dance",
      artist: "Lior & Strings",
      albumArt:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "pe-3",
    title: "Founders Summit",
    year: "2024",
    guests: 340,
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1400&auto=format&fit=crop",
    ],
    music: {
      track: "Momentum",
      artist: "Analog Circuit",
      albumArt:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "pe-4",
    title: "Solstice Rooftop",
    year: "2024",
    guests: 90,
    category: "Private",
    image:
      "https://images.unsplash.com/photo-1493707553966-283afac8c358?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1493707553966-283afac8c358?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop",
    ],
    music: {
      track: "Warm Static",
      artist: "Rooftop Session",
      albumArt:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "pe-5",
    title: "The Velvet Room",
    year: "2024",
    guests: 150,
    category: "Gala",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1400&auto=format&fit=crop",
    ],
    music: {
      track: "Velvet Hour",
      artist: "Nocturne Quartet",
      albumArt:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
    },
  },
  {
    id: "pe-6",
    title: "Harvest & Vine",
    year: "2023",
    guests: 75,
    category: "Private",
    image:
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop",
    ],
    music: {
      track: "Harvest Moon",
      artist: "Marin Ivić Trio",
      albumArt:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=400&auto=format&fit=crop",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Petrović",
    role: "Bride, The Orchard Wedding",
    rating: 5,
    review:
      "Every detail felt considered, from the seating chart to the last song of the night. Our guests are still talking about it.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Marko Babić",
    role: "CEO, Founders Summit",
    rating: 5,
    review:
      "They ran a 340-guest conference like clockwork. Zero surprises, exceptional taste, and a team that anticipated problems before we saw them.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Ana Kovačević",
    role: "Host, Solstice Rooftop",
    rating: 5,
    review:
      "Understated, elegant, and precisely on brand. I've worked with three other planners before, none came close.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];
