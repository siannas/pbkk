import React from 'react';
import ReactDOM from "react-dom";
import jexcel from "jexcel";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

import "../../node_modules/jexcel/dist/jexcel.css";

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

class Content extends React.Component {
  
  constructor(props) {
    super(props);
    this.options = props.options;
    this.myRef = React.createRef();
  }

  componentDidMount = function() {
    this.el = jexcel(this.myRef.current , this.options);
    this.options.setTable(this.el);
  };

  addRow = function() {
    this.el.insertRow();
  };

  render(){
    const { classes } = this.props;
    return (
        <Paper className={classes.paper}>
          <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
            <Toolbar>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  {/* <SearchIcon className={classes.block} color="inherit" /> */}
                </Grid>
                <Grid item xs>
                  {/* <TextField
                    fullWidth
                    placeholder="Search by email address, phone number, or user UID"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.searchInput,
                    }}
                  /> */}
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" className={classes.addUser} onClick={() => this.addRow()}>
                    Add
                  </Button>
                  {/* <Tooltip title="Reload">
                    <IconButton>
                      <RefreshIcon className={classes.block} color="inherit" />
                    </IconButton>
                  </Tooltip> */}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <div className={classes.contentWrapper}>
            <div id="my" ref={this.myRef}/> 
            <Typography color="textSecondary" align="center">
              No users for this project yet
            </Typography>
            
          </div>
        </Paper>
      );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);