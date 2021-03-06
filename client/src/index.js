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

import { loadUserFromToken } from './actions/authActions';

import LoginForm from './view/LoginForm';

const List=[
  "Aktuaria",
    "Arsitektur",
    "Biologi",
    "DesainInterior",
    "DesainKomunikasiVisual",
    "DesainProduk",
    "Fisika",
    "Kimia",
    "ManajemenBisnis",
    "ManajemenTeknologi",
    "Matematika",
    "PerencanaanWilayahKota",
    "SistemInformasi",
    "StatistikaBisnis",
    "Statistika",
    "StudiPembangunan",
    "TeknikBiomedik",
    "TeknikElektroOtomasi",
    "TeknikElektro",
    "TeknikFisika",
    "TeknikGeofisika",
    "TeknikGeomatika",
    "TeknikInformatika",
    "TeknikInfrastrukturSipil",
    "TeknikInstrumentasi",
    "TeknikKelautan",
    "TeknikKimiaIndustri",
    "TeknikKimia",
    "TeknikKomputer",
    "TeknikLingkungan",
    "TeknikMaterialMetalurgi",
    "TeknikMesinIndustri",
    "TeknikMesin",
    "TeknikPerkapalan",
    "TeknikSipil",
    "TeknikSistemIndustri",
    "TeknikSistemPerkapalan",
    "TeknikTransportasiLaut",
    "TeknologiInformasi",
    "Civplan",
    "Creabiz",
    "Electics",
    "Indsys",
    "Martech",
    "Scientics",
    "Vocation"
]

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };

    this.SetLogin = this.SetLogin.bind(this);
  }
  

  SetLogin = function(auth) {
    this.setState({authenticated: auth});

    console.log(this.state.authenticated);
  }

	async componentDidMount() {
    // loadUserFromToken();
    await loadUserFromToken(this.SetLogin);
  }

  render() {
    return (
      <div {...this.props}>
        {!this.state.authenticated ? <LoginForm /> : ""}
        {this.props.children}
        {/* {React.cloneElement(this.props.children, { authenticated: this.state.authenticated })} */}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Sidebar/>
      <MainContainer 
      style={{width:"calc(100% - 240px)"}}
      >
        <Header  onDrawerToggle={()=>{}}/>
        <Switch>
            <Route exact path="/dosen" render={props => ( <TablePivot uri={`/api/dosen/read`}/> )}/>
            <Route exact path="/penelitian" render={props => ( <TablePivot uri={`/api/penelitian/read`}/> )}/>
            <Route exact path="/publikasi" render={props => ( <TablePivot uri={`/api/publikasi/read`}/> )}/>
            <Route exact path="/abmas" render={props => ( <TablePivot uri={`/api/abmas/read`}/> )}/>
            <Route exact path="/konkin" render={props => ( <TableKonkin uri={`/api/konkin/read/Aktuaria`}/> )}/>
            {List.map((item) => (
              <Route exact path={`/konkin/${item}`} render={props => ( <TableKonkin uri={`/api/konkin/read/${item}`}/> )}/>
            ))}
            {/* {
              List.forEach(element => (<Route exact path={`/konkin/${element}`} render={props => ( <TablePivot uri={`/api/konkin/read/${element}`}/> )}/>))
            } */}
            <Route exact path="/kategoriunit" render={props => ( <Layout options={options_KategoriUnit}  />)}/>
            <Route exact path="/unit" render={props => ( <Layout options={options_Unit}  />)}/>
            <Route exact path="/datadasar" render={props => ( <Layout options={options_DataDasar}  />)}/>
            <Route exact path="/aspek" render={props => ( <Layout options={options_Aspek}  />)}/>
            <Route exact path="/masterindikator" render={props => ( <Layout options={options_MasterIndikator}  />)}/>
            <Route exact path="/jenissatker" render={props => ( <Layout options={options_JenisSatKer}  />)}/>
            <Route exact path="/satuankerja" render={props => ( <Layout options={options_SatuanKerja}  />)}/>
        </Switch>
      </MainContainer>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
