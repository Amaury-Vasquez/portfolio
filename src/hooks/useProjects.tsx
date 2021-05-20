import { ProjectData } from "../interfaces/index";

export const useProjects = () => {
  const projects: ProjectData[] = [
    {
      imgUrl: "https://i.imgur.com/1etL6MF.png",
      link: "https://github.com/Amaury-Vasquez/pizzal-chat-bot",
      name: "chat bot (repositorie)",
    },
    {
      imgUrl: "https://i.imgur.com/8Qfas7S.png",
      link: "https://amvasgamestation.netlify.app/",
      name: "game-station (web-site)",
    },
    {
      imgUrl: "https://i.imgur.com/gI5qP3s.png",
      link: "https://amauryvasquezblog.netlify.app/",
      name: "blog (on development)",
    },
  ];
  return { projects };
};
