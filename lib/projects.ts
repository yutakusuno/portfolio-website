import image from "../public/logo20230402.svg";

type Project = {
  imagePath: string;
  title: string;
  summary: string;
  projectUrl: string;
  githubUrl: string;
};

export const projects: Array<Project> = [
  {
    imagePath: image.src,
    title: "My project",
    summary: "Summary",
    projectUrl: "https://yutakusuno.com",
    githubUrl: "https://github.com/yutakusuno/portfolio-website",
  },
  {
    imagePath: image.src,
    title: "My project",
    summary: "Summary",
    projectUrl: "https://yutakusuno.com",
    githubUrl: "https://github.com/yutakusuno/portfolio-website",
  },
];
