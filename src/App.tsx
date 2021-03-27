import { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home/index";
import { Contact } from "./pages/Contact";
import { Loader } from "./components/Loader";
import { Layout } from "./components/Layout";
import { Projects } from "./pages/Projects/index";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={Loader}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
