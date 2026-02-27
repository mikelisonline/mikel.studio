export interface Album {
  id: string;
  artist: string;
  albumName: string;
  year: number;
  role: string;
  href: string;
}

export const albums: Album[] = [
  {
    id: "saturn-parliament",
    artist: "Saturn Parliament",
    albumName: "Saturn Parliament",
    year: 2025,
    role: "Composition, Mix & Mastering",
    href: "https://currentliaison.bandcamp.com/album/saturn-parliament",
  },
  {
    id: "patio-chum-fata-morgana",
    artist: "Patio Chum",
    albumName: "She Is Not Fata Morgana",
    year: 2022,
    role: "Vocals, Electronics & Mix",
    href: "https://currentliaison.bandcamp.com/track/she-is-not-fata-morgana",
  },
  {
    id: "m-steep-tempelhof",
    artist: "M Steep",
    albumName: "Tempelhof (Friday)",
    year: 2022,
    role: "Solo — Recording, Mix & Master",
    href: "https://currentliaison.bandcamp.com/track/tempelhof-friday",
  },
  {
    id: "patio-chum-so-soft",
    artist: "Patio Chum",
    albumName: "So Soft (Daniella)",
    year: 2022,
    role: "Vocals, Electronics, Mix & Master",
    href: "https://currentliaison.bandcamp.com/album/so-soft-daniella",
  },
  {
    id: "patio-chum-ep",
    artist: "Patio Chum",
    albumName: "Stuck Between Black and Blue EP",
    year: 2021,
    role: "Vocals & Electronics",
    href: "https://currentliaison.bandcamp.com/album/stuck-between-black-and-blue-ep",
  },
  {
    id: "guardian-alfred",
    artist: "Guardian Alfred",
    albumName: "L'homme Vase",
    year: 2021,
    role: "Mix & Mastering",
    href: "https://currentliaison.bandcamp.com/track/lhomme-vase",
  },
];
