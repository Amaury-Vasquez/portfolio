import React, { Fragment } from "react";

import { Info } from "./styles";
import { ProjectsTable } from "../../components/ProjectsTable";

export const Projects = () => {
  return (
    <Fragment>
      <Info>{"Projects overview"}</Info>
      <ProjectsTable></ProjectsTable>
    </Fragment>
  );
};
