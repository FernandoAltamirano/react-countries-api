import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../globals.css";

import Layout from "./Layout";
import PrincipalPage from "../pages/PrincipalPage";
import DescriptionPage from "../pages/DescriptionPage";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PrincipalPage} />
          <Route exact path="/:id" component={DescriptionPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
