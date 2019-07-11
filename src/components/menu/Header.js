import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import LoginSignup from "../user/LoginSignup";
import { Toolbar, Typography, Hidden } from "@material-ui/core";
import "./Header.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/ActionTypes";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    isDialogOpened: state.dialog.isDialogOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDialog: () => dispatch({ type: actionTypes.CLOSE_DIALOG }),
    openDialog: () => dispatch({ type: actionTypes.OPEN_DIALOG }),
    userLogin: token => dispatch({ type: actionTypes.USER_LOGIN, val: token })
  };
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

class Header extends Component {

  closeDrawer = () => {
    this.setState({ isDrawerOpened: false });
  }

  openDrawer = () => {
    this.setState({ isDrawerOpened: true });
  }

  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden smUp>
            <MenuIcon onClick={this.openDrawer} />
          </Hidden>
            
        <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
          <Hidden xsDown>
            {this.props.token !== undefined ? (
              <h1>Menu</h1>
            ) : (
                <Button 
                  size="small"
                  color="inherit"
                  disableFocusRipple={true}
                  disableRipple={true}
                  disableTouchRipple={true}
                  onClick={this.props.openDialog}
                >
                  Login & Signup
            </Button>
              )}
          </Hidden>          
          <LoginSignup
            open={this.props.isDialogOpened}
            onClose={this.props.closeDialog}
          />
        </Toolbar>
      </AppBar >
      <nav className={classes.drawer} aria-label="Mailbox folders">
      <Hidden smUp>
            <Drawer open={this.state.isDrawerOpened} anchor="left" onClose={this.closeDrawer}  classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
              <h2>icon</h2>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css" className={classes.drawer}>
            <Drawer
              variant="permanent"
              open 
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <h2>permanent</h2>
            </Drawer>
          </Hidden>
          </nav>
          <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        </main>
      </div>
    );
  }
}

export default
withStyles(useStyles)(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header));
