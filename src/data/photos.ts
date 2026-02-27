export interface Photo {
  id: string;
  title: string;
  location: string;
  year: number;
  src: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    id: "sisters-porto",
    title: "Sisters in Porto",
    location: "Porto",
    year: 2022,
    src: "https://everyday-eye.com/wp-content/uploads/2022/12/tumblr_80aef00bc2100ab6a92f57dc791f11d7_60be00d5_1280.jpg",
    alt: "Sisters in Porto",
  },
  {
    id: "street-seller-porto",
    title: "Street seller",
    location: "Porto",
    year: 2022,
    src: "https://everyday-eye.com/wp-content/uploads/2022/11/IMG_3966.jpg",
    alt: "Street seller in Porto",
  },
  {
    id: "woman-positano",
    title: "Woman on the phone",
    location: "Positano",
    year: 2022,
    src: "https://everyday-eye.com/wp-content/uploads/2021/09/IMG_3170.jpg",
    alt: "Woman on the phone in Positano",
  },
  {
    id: "mario-positano",
    title: "Mario of Positano",
    location: "Positano",
    year: 2021,
    src: "https://everyday-eye.com/wp-content/uploads/2021/09/IMG_3200.jpg",
    alt: "Mario of Positano",
  },
  {
    id: "napoli-bw",
    title: "View of Napoli",
    location: "Napoli",
    year: 2021,
    src: "https://everyday-eye.com/wp-content/uploads/2021/09/tumblr_50ab8cf5d0e912c29fa5ca3f5c06c616_4f1081f9_2048.jpg",
    alt: "Black and white view of Napoli",
  },
  {
    id: "berlin-ruins",
    title: "Ruins",
    location: "Berlin",
    year: 2021,
    src: "https://everyday-eye.com/wp-content/uploads/2020/11/fef313071c200c439e6cf08e2db1337fa3127d54.jpg",
    alt: "Ruins in Berlin",
  },
];

export const photographyLink = "https://everyday-eye.com";
