export type Partner = {
  id: string;
  name: string;
  logo: string;
  /* Optional role, shown only for current-event partners */
  role?: string;
};

export type UpcomingEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  /* Extra detail surfaced by the "Saznaj više" modal, not on the card itself */
  details: {
    time: string;
    dressCode: string;
    capacity: string;
    price: string;
    highlights: string[];
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
};

export const currentEvent = {
  title: "Pozlaćena večer",
  description:
    "Intimno gala okupljanje u stilu black-tie povodom desete godišnjice nezaboravnih večeri, u obnovljenom staklenom atriju Meridian Hall-a.",
  date: "2026-09-19T19:00:00",
  dateLabel: "19. rujna 2026.",
  time: "19:00",
  location: "Meridian Hall, Zagreb",
  image:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2400&auto=format&fit=crop",
};

/* Partners taking part in the current event */
export const currentEventPartners: Partner[] = [
  {
    id: "cp-1",
    name: "Meridian Hall",
    logo: "/partners/meridian-hall.svg",
    role: "",
  },
  {
    id: "cp-2",
    name: "Vinum Adriatic",
    logo: "/partners/vinum-adriatic.svg",
    role: "",
  },
  {
    id: "cp-3",
    name: "Lumen Catering",
    logo: "/partners/lumen-catering.svg",
    role: "Catering",
  },
  {
    id: "cp-4",
    name: "Orbis Audio",
    logo: "/partners/orbis-audio.svg",
    role: "Tehnika",
  },
];

/* Everyone we have worked with, shown in the closing section */
export const allPartners: Partner[] = [
  { id: "p-1", name: "Meridian Hall", logo: "/partners/meridian-hall.svg" },
  { id: "p-2", name: "Villa Dorena", logo: "/partners/villa-dorena.svg" },
  { id: "p-3", name: "Atelier Nord", logo: "/partners/atelier-nord.svg" },
  { id: "p-4", name: "Vinum Adriatic", logo: "/partners/vinum-adriatic.svg" },
  { id: "p-5", name: "Lumen Catering", logo: "/partners/lumen-catering.svg" },
  { id: "p-6", name: "Orbis Audio", logo: "/partners/orbis-audio.svg" },
  { id: "p-7", name: "Stelara Floral", logo: "/partners/stelara-floral.svg" },
  { id: "p-8", name: "Kontura Studio", logo: "/partners/kontura-studio.svg" },
  { id: "p-9", name: "Vinarija Belje", logo: "/partners/meridian-hall.svg" },
];

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
    details: {
      time: "19:00 – 02:00",
      dressCode: "Black tie",
      capacity: "220 mjesta",
      price: "od 180 € po osobi",
      highlights: [
        "Koktel dobrodošlice u staklenom atriju",
        "Petoslijedna večera potpisana od Lumen Cateringa",
        "Živi gudački kvartet i DJ program do 2 sata",
      ],
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
    details: {
      time: "18:00 – 23:00",
      dressCode: "Smart casual",
      capacity: "60 mjesta",
      price: "od 95 € po osobi",
      highlights: [
        "Degustacija šest dalmatinskih vinarija",
        "Večera na terasi s pogledom na more",
        "Razgovor s vinarima uz svaki slijed",
      ],
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
    details: {
      time: "17:00 – 23:00",
      dressCode: "Kreativno poslovno",
      capacity: "200 mjesta",
      price: "Ulaz uz pozivnicu",
      highlights: [
        "Izložba dvanaest regionalnih dizajnera",
        "Koktel bar u prostoru stare ljevaonice",
        "Vođeni obilazak postava u 18:30 i 20:30",
      ],
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
    details: {
      time: "21:00 – 04:00",
      dressCode: "Svečano",
      capacity: "150 mjesta",
      price: "od 140 € po osobi",
      highlights: [
        "Ponoćni pogled na vatromet nad gradom",
        "Otvoreni bar kroz cijelu večer",
        "Topli doručak za goste u 3 sata",
      ],
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
  },
];
