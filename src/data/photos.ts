export interface PhotoSeries {
  id: string;
  title: string;
  location: string;
  year: number;
  cover: string;
  alt: string;
  images: string[];
}

export const photoSeries: PhotoSeries[] = [
  {
    id: "porto",
    title: "Porto over the years",
    location: "Porto",
    year: 2022,
    cover: "/photos/porto/01.jpg",
    alt: "Sisters walking in Porto",
    images: [
      "/photos/porto/01.jpg",
      "/photos/porto/02.jpg",
      "/photos/porto/03.jpg",
      "/photos/porto/04.jpg",
      "/photos/porto/05.jpg",
      "/photos/porto/06.jpg",
    ],
  },
  {
    id: "positano",
    title: "An afternoon in Positano",
    location: "Positano",
    year: 2021,
    cover: "/photos/positano/02.jpg",
    alt: "Woman on the phone in Positano",
    images: [
      "/photos/positano/01.jpg",
      "/photos/positano/02.jpg",
      "/photos/positano/03.jpg",
      "/photos/positano/04.jpg",
      "/photos/positano/05.jpg",
    ],
  },
  {
    id: "napoli",
    title: "Napoli in b&w",
    location: "Napoli",
    year: 2021,
    cover: "/photos/napoli/04.jpg",
    alt: "View of Napoli in black and white",
    images: [
      "/photos/napoli/01.jpg",
      "/photos/napoli/02.jpg",
      "/photos/napoli/03.jpg",
      "/photos/napoli/04.jpg",
      "/photos/napoli/05.jpg",
      "/photos/napoli/06.jpg",
    ],
  },
  {
    id: "iparralde",
    title: "A day in Iparralde",
    location: "Iparralde",
    year: 2022,
    cover: "/photos/iparralde/01.jpg",
    alt: "Scene from Iparralde",
    images: [
      "/photos/iparralde/01.jpg",
      "/photos/iparralde/02.jpg",
      "/photos/iparralde/03.jpg",
      "/photos/iparralde/04.jpg",
      "/photos/iparralde/05.jpg",
    ],
  },
  {
    id: "mallorca",
    title: "A day in Mallorca",
    location: "Mallorca",
    year: 2022,
    cover: "/photos/mallorca/01.jpg",
    alt: "Mallorca countryside",
    images: [
      "/photos/mallorca/01.jpg",
      "/photos/mallorca/02.jpg",
      "/photos/mallorca/03.jpg",
      "/photos/mallorca/04.jpg",
      "/photos/mallorca/05.jpg",
    ],
  },
  {
    id: "berlin",
    title: "A night in Berlin",
    location: "Berlin",
    year: 2018,
    cover: "/photos/berlin/01.jpg",
    alt: "Night scene in Berlin",
    images: [
      "/photos/berlin/01.jpg",
      "/photos/berlin/02.jpg",
      "/photos/berlin/03.jpg",
    ],
  },
];

export const photographyLink = "https://everyday-eye.com";
