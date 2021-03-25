import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
