import React from "react";

import { Table } from "./styles";
import { ProjectCard } from "../ProjectCard";

export const ProjectsTable = () => {
  const projects = [
    {
      imgUrl: "https://i.imgur.com/1etL6MF.png",
      link: "https://github.com/Amaury-Vasquez/pizzal-chat-bot",
      name: "chat bot",
    },
    {
      imgUrl: "https://i.imgur.com/MfCafDP.png",
      link: "https://pokerama.netlify.app/",
      name: "pokerama",
    },
    {
      imgUrl: "https://i.imgur.com/z2dTHy7.png",
      link: "https://tscheckers.netlify.app/",
      name: "checkers",
    },
    {
      imgUrl: "https://i.imgur.com/9urSYHg.png",
      link: "https://amaury-vasquez.github.io/rock-paper-scissors/",
      name: "rock, paper & scissors",
    },

    {
      imgUrl: "https://i.imgur.com/gI5qP3s.png",
      link: "https://amauryvasquezblog.netlify.app/",
      name: "blog",
    },
  ];
  return (
    <Table>
      {projects.map((item, i) => (
        <ProjectCard
          imgUrl={item.imgUrl}
          link={item.link}
          name={item.name}
          key={i + item.name}
        />
      ))}
    </Table>
  );
};
