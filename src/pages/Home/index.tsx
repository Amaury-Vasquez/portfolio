import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { Greet } from "../../components/Greet";

export const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title> Home - Amaury Vasquez </title>
      </Helmet>
      <Greet />
    </Fragment>
  );
};
