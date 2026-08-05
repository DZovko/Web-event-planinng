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
  title: "Pozlaćena večer",
  description:
    "Intimno gala okupljanje u stilu black-tie povodom desete godišnjice nezaboravnih večeri, u obnovljenom staklenom atriju Meridian Hall-a.",
  date: "2026-09-19T19:00:00",
  time: "19:00",
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
    title: "Pozlaćena večer",
    date: "19. ruj 2026.",
    location: "Meridian Hall, Zagreb",
    description:
      "Black-tie gala povodom godišnjice ispod obnovljenog staklenog atrija.",
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
    title: "Vinarski stol",
    date: "04. lis 2026.",
    location: "Villa Dorena, Split",
    description: "Sjedeća berbenska večera uz šest vinarija s obale.",
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
    title: "Zimski atelje",
    date: "12. pro 2026.",
    location: "Stara ljevaonica, Osijek",
    description: "Kuratorirana izložba dizajna i koktel večer za 200 gostiju.",
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
    title: "Nova godina, iznova",
    date: "31. pro 2026.",
    location: "Rooftop Solene, Zagreb",
    description: "Ponoćna proslava s pogledom na siluetu grada.",
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
    title: "Ponoć u Marakešu",
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
    title: "Vjenčanje u voćnjaku",
    year: "2025",
    guests: 120,
    category: "Vjenčanje",
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
    title: "Samit osnivača",
    year: "2024",
    guests: 340,
    category: "Korporativno",
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
    title: "Solsticij na krovu",
    year: "2024",
    guests: 90,
    category: "Privatno",
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
    title: "Baršunasta soba",
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
    title: "Berba i vinova loza",
    year: "2023",
    guests: 75,
    category: "Privatno",
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
