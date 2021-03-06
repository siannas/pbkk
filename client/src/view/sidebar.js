import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import{ Box , 
		List,
		ListItem,
		ListItemText,
		Typography,
		Divider
	} from '@material-ui/core';
import { Route, MemoryRouter } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';
import {Link as RouterLink} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const Styles = makeStyles(theme => ({
    root:{
        display:'block',
        overflowY: 'auto',
        position:'fixed',
        height: '100vh',
        width: '240px',
        margin: 0,
        [theme.breakpoints.down('sm')]:{
            display:"none",
        },
        // [theme.breakpoints.up('md')]:{
        //     width: '500px',
        // }
	},
	title:{
		minHeight:'64px',
		paddingLeft:'16px',
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
    },
    SidebarWrap:{
        marginRight: '240px'
    }
}));

function ListItemLink(props) {
	const { text, to } = props;
  
	const renderLink = React.useMemo(
	  () => React.forwardRef((props, ref) => <RouterLink href={to} ref={ref} {...props} />),
	  [to],
	);
  
	return (
	  <li>
		<ListItem button component={renderLink}>
		  <ListItemText primary={text} />
		</ListItem>
	  </li>
	);
}

ListItemLink.propTypes = {
	text: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

const mydatakonkin=[
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

function DropDownListItemLink(props){
  const { text, data } = props;
  const [opened, setOpened] = React.useState(false);

  // render () {
  //   const {
  //     props: {
  //       text,
  //       data
  //     },
  //     state: {
  //       opened
  //     }
  // } = this

  return(
    <li>
      <ListItem button {...{onClick: () => { setOpened(!opened) }}}>
        <ListItemText primary={text} />
        {opened ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={opened} timeout="auto" >
        <List aria-label="sidebar menu">
          {data.map((item)=>(
            <ListItemLink to={`/konkin/${item}`} text={item}  />
          ))}
        </List>
      </Collapse>
	  </li>
  )
}


export default function Sidebar(props){
    const classes = Styles();

    return(
		<MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
			<Box component="nav" className={classes.SidebarWrap}>
                <div className={classes.root}>
                    <Box className={classes.title}>
                        <Typography variant="h6" style={{fontWeight:400}}>Databaseku</Typography>
                    </Box>
                    <Divider/>
                    <List aria-label="sidebar menu">
                        <ListItemLink to="/dosen" text="Dosen"  />
                        <ListItemLink to="/abmas" text="Abmas" />
                        <ListItemLink to="/penelitian" text="Penelitian" />
                        <ListItemLink to="/publikasi" text="Publikasi" />
                        <DropDownListItemLink text="KonKin" data={mydatakonkin}/>
                        {/* <Collapse in={true} timeout="auto" unmountOnExit>
                          <List aria-label="sidebar menu">
                            <ListItemLink to="/dosen" text="Dosen"  />
                            <ListItemLink to="/abmas" text="Abmas" />
                            <ListItemLink to="/penelitian" text="Penelitian" />
                            <ListItemLink to="/publikasi" text="Publikasi" />
                          </List>
                        </Collapse> */}
                    </List>
                </div>
            </Box>
		</MemoryRouter>
    );
}