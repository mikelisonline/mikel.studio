export interface Album {
  id: string;
  artist: string;
  albumName: string;
  year: number;
  role: string;
  href: string;
  cover: string;
  embedType: "album" | "track";
  embedId: string;
}

export const albums: Album[] = [
  {
    id: "saturn-parliament",
    artist: "Saturn Parliament",
    albumName: "Saturn Parliament",
    year: 2025,
    role: "Composition, Mix & Mastering",
    href: "https://currentliaison.bandcamp.com/album/saturn-parliament",
    cover: "/music/saturn-parliament.jpg",
    embedType: "album",
    embedId: "2678109956",
  },
  {
    id: "patio-chum-fata-morgana",
    artist: "Patio Chum",
    albumName: "She Is Not Fata Morgana",
    year: 2022,
    role: "Written & Recorded by Patio Chum",
    href: "https://currentliaison.bandcamp.com/track/she-is-not-fata-morgana",
    cover: "/music/she-is-not-fata-morgana.jpg",
    embedType: "track",
    embedId: "472170807",
  },
  {
    id: "m-steep-tempelhof",
    artist: "M Steep",
    albumName: "Tempelhof (Friday)",
    year: 2022,
    role: "Solo — Recording, Mix & Master",
    href: "https://currentliaison.bandcamp.com/album/tempelhof-friday-single",
    cover: "/music/tempelhof-friday.jpg",
    embedType: "album",
    embedId: "4071118766",
  },
  {
    id: "patio-chum-so-soft",
    artist: "Patio Chum",
    albumName: "So Soft (Daniella)",
    year: 2022,
    role: "Written & Recorded by Patio Chum",
    href: "https://currentliaison.bandcamp.com/album/so-soft-daniella",
    cover: "/music/so-soft-daniella.jpg",
    embedType: "album",
    embedId: "4070680065",
  },
  {
    id: "patio-chum-ep",
    artist: "Patio Chum",
    albumName: "Stuck Between Black and Blue EP",
    year: 2021,
    role: "Written & Recorded by Patio Chum",
    href: "https://currentliaison.bandcamp.com/album/stuck-between-black-and-blue-ep",
    cover: "/music/stuck-between-black-and-blue.jpg",
    embedType: "album",
    embedId: "4284143021",
  },
  {
    id: "guardian-alfred",
    artist: "Guardian Alfred",
    albumName: "L'homme Vase",
    year: 2021,
    role: "Mix & Mastering",
    href: "https://currentliaison.bandcamp.com/track/lhomme-vase",
    cover: "/music/lhomme-vase.jpg",
    embedType: "track",
    embedId: "389007597",
  },
];
