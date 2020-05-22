import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme, } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { loginUser } from '../actions/authActions'

const useStyles = theme => ({
  root:{
    position: "fixed",
    zIndex: 9999,
    backgroundColor: "rgba(255,255,255,0.9)",
    width: "100%",
    left: 0,
    height: "100%",
  },
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const theme = createMuiTheme({
  palette: {
      primary: green,
      secondary: green
  },
});

class Login extends React.Component {
  constructor() {
      super();
      this.state = {
          email: "",
          password: "",
          errors: {},
      };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password,
        };
    loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render(){
    // const classes = useStyles();
    const { classes } = this.props;
  return (
    <Box  className={classes.root}> 
      <Container component="main" maxWidth="xs">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div 
          className={classes.paper}
          >
            <Avatar 
            className={classes.avatar}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>
            <form 
            className={classes.form} 
            noValidate
            action="/" 
            method="POST" 
            onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.onChange}
                value={this.state.password}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                sign in
              </Button>
            </form>
          </div>
        </ThemeProvider>
      </Container>
    </Box>
  );
  }
}

export default withStyles(useStyles)(Login);