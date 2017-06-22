import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, hashHistory } from 'react-router-dom';

import App from './components/App';
import Header from './components/Header';
import Starter from './components/Starter';

// Style
import './style/main.sass'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Header/>
      <Route path='/' component={App} />
      <Route path="/starter" component={Starter} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
