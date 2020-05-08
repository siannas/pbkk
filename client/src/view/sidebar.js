import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Styles = makeStyles(theme => ({
    root:{
        display:'flex',
        backgroundColor: theme.palette.secondary.light,
        height: '100%',
        width: '240px',
        margin: 0,
        [theme.breakpoints.down('sm')]:{
            display:"none",
        },
        // [theme.breakpoints.up('md')]:{
        //     width: '500px',
        // }
    }
}));

export default function Sidebar(props){
    const classes = Styles();

    return(
        <Container component="nav" className={classes.root}>
            <h1>Tes</h1>
        </Container>
    );
}