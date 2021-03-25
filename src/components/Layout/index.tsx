import React, { Fragment } from "react";

import { Header } from "../Header";
import { Page } from "../../styles/elements";

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Fragment>
      <Header />
      <Page>{props.children}</Page>
    </Fragment>
  );
};
