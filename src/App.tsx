import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home/index";
import { Projects } from "./pages/Projects/index";
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
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
