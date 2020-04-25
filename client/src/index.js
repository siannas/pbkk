import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  useLocation
} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './view/header';
import Layout from './view/layout';

import options_KategoriUnit from './actions/KategoriUnitActions';
import options_Unit from './actions/UnitActions';
import options_DataDasar from './actions/DataDasarAction';
import options_Aspek from './actions/AspekAction';
import options_MasterIndikator from './actions/MasterIndikatorAction';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header  onDrawerToggle={()=>{}}/>
      <Switch>
        <Route exact path="/" render={props => ( <Layout options={options_KategoriUnit}  />)}/>
        <Route exact path="/unit" render={props => ( <Layout options={options_Unit}  />)}/>
        <Route exact path="/datadasar" render={props => ( <Layout options={options_DataDasar}  />)}/>
        <Route exact path="/aspek" render={props => ( <Layout options={options_Aspek}  />)}/>
        <Route exact path="/masterindikator" render={props => ( <Layout options={options_MasterIndikator}  />)}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
