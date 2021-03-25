import React, { Fragment } from "react";

import { Info } from "./styles";
import { ProjectsTable } from "../../components/ProjectsTable";

export const Projects = () => {
  return (
    <Fragment>
      <Info>
        <h2> Projects overview </h2>
      </Info>
      <ProjectsTable></ProjectsTable>
    </Fragment>
  );
};
