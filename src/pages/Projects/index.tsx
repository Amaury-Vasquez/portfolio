import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { Info } from "./styles";
import { ProjectsTable } from "../../components/ProjectsTable";
import { useProjects } from "../../hooks/useProjects";

export const Projects = () => {
  const { projects } = useProjects();

  return (
    <Fragment>
      <Helmet>
        <title> Projects - Amaury Vasquez </title>
        {projects.map((item, i) => (
          <link
            key={item.name + i}
            rel="preload"
            as="image"
            href={item.imgUrl}
          />
        ))}
      </Helmet>
      <Info>{"Projects overview"}</Info>
      <ProjectsTable projects={projects}></ProjectsTable>
    </Fragment>
  );
};
