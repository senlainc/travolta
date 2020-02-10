import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AppLayout from './layouts/App';
import SearchPage from './pages/Search';
import HotelsPage from './pages/Hotels';
import MainMenu from './MainMenu';


function App() {
  return (
    <Router>
      <AppLayout title="TRAVOLTA" menu={<MainMenu />}>
        <Switch>
          <Route path="/search" >
            <SearchPage />
          </Route>
          <Route path="/hotels">
            <HotelsPage />
          </Route>
          <Redirect exact from="/" to="search" />
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
