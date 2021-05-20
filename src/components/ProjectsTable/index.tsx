import React from "react";

import { Table, TextBox } from "./styles";
import { ProjectCard } from "../ProjectCard";
import { ProjectData } from "../../interfaces/index";

export const ProjectsTable = (props: { projects: ProjectData[] }) => {
  const { projects } = props;
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
      <TextBox>
        <h3> {"There are more to come..."} </h3>
      </TextBox>
    </Table>
  );
};
