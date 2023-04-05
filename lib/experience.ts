import image from "../public/logo20230402.svg";

type Experience = {
  imagePath: string;
  title: string;
  summary: string;
  duration: string;
  description: string;
  companyUrl: string;
};

export const experiences: Array<Experience> = [
  {
    imagePath: image.src,
    title: "DennoKotsu,Inc",
    summary: "Delivering a cloud call/dispatch system to taxi companies.",
    duration: "April 2000 - April 2023",
    description: "About description",
    companyUrl: "https://cybertransporters.com",
  },
  {
    imagePath: image.src,
    title: "DennoKotsu,Inc",
    summary: "Delivering a cloud call/dispatch system to taxi companies.",
    duration: "April 2020 - April 2023",
    description: "About description",
    companyUrl: "https://cybertransporters.com",
  },
];
