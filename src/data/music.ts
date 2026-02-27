export interface Album {
  id: string;
  artist: string;
  albumName: string;
  year: number;
}

export const albums: Album[] = [
  {
    id: "album-1",
    artist: "Radiohead",
    albumName: "In Rainbows",
    year: 2007,
  },
  {
    id: "album-2",
    artist: "Rosalía",
    albumName: "Motomami",
    year: 2022,
  },
  {
    id: "album-3",
    artist: "Tame Impala",
    albumName: "Currents",
    year: 2015,
  },
  {
    id: "album-4",
    artist: "Benee",
    albumName: "Hey u x",
    year: 2020,
  },
];
