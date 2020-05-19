import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  useLocation
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './view/header';
import Layout from './view/layout';

import options_KategoriUnit from './actions/KategoriUnitActions';
import options_Unit from './actions/UnitActions';
import options_DataDasar from './actions/DataDasarAction';
import options_Aspek from './actions/AspekAction';
import options_JenisSatKer from './actions/JenisSatKerAction';
import options_SatuanKerja from './actions/SatuanKerjaAction';

import options_MasterIndikator from './actions/MasterIndikatorAction';
import Sidebar from './view/sidebar';
import TablePivot from './view/table pivot';
import TableKonkin from './view/tableKonkin';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Sidebar/>
      <div 
      style={{width:"calc(100% - 240px)"}}
      >
        <Header  onDrawerToggle={()=>{}}/>
        <Switch>
            <Route exact path="/dosen" render={props => ( <TablePivot uri={`/api/dosen/read`}/> )}/>
            <Route exact path="/penelitian" render={props => ( <TablePivot uri={`/api/penelitian/read`}/> )}/>
            <Route exact path="/publikasi" render={props => ( <TablePivot uri={`/api/publikasi/read`}/> )}/>
            <Route exact path="/abmas" render={props => ( <TablePivot uri={`/api/abmas/read`}/> )}/>
            <Route exact path="/konkin" render={props => ( <TablePivot uri={`/api/konkin/read`}/> )}/>
            
            {/* <Route exact path="/" render={props => ( <Layout options={options_KategoriUnit}  />)}/>
            <Route exact path="/unit" render={props => ( <Layout options={options_Unit}  />)}/>
            <Route exact path="/datadasar" render={props => ( <Layout options={options_DataDasar}  />)}/>
            <Route exact path="/aspek" render={props => ( <Layout options={options_Aspek}  />)}/>
            <Route exact path="/masterindikator" render={props => ( <Layout options={options_MasterIndikator}  />)}/>
            <Route exact path="/jenissatker" render={props => ( <Layout options={options_JenisSatKer}  />)}/>
            <Route exact path="/satuankerja" render={props => ( <Layout options={options_SatuanKerja}  />)}/> */}
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
