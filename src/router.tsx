import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Store from './pages/store';


const router = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Main}></Route>
			<Route exact path="/store" component={Store}></Route>
    </BrowserRouter>
  )
}

export default router;