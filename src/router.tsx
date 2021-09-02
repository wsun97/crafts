import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Store from './pages/store';
import Participants from './pages/participants';
import Contact from './pages/contact';
import WorkProcess from './pages/work-process';
import BuyPage from './components/store-components/BuyPage';

const router = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Main}></Route>
			<Route exact path="/store" component={Store}></Route>
			<Route exact path="/work-process" component={WorkProcess}></Route>
			<Route exact path="/participants" component={Participants}></Route>
			<Route exact path="/contact" component={Contact}></Route>
			<Route exact path="/buy/:id/:name" component={BuyPage}></Route>
    </BrowserRouter>
  )
}

export default router;