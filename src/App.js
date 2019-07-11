import React, { Component } from "react";
import "./App.css";
import Header from "./components/menu/Header";
import Routes from "./routes/Routes";
import { withCookies } from "react-cookie";
import { getCookie, setCookie } from "./cookies/Cookie";
import { connect } from "react-redux";
import * as actionTypes from "./store/ActionTypes";

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDialog: () => dispatch({ type: actionTypes.CLOSE_DIALOG }),
    openDialog: () => dispatch({ type: actionTypes.OPEN_DIALOG }),
    userLogin: token => dispatch({ type: actionTypes.USER_LOGIN, val: token })
  };
};

class App extends Component {
  componentWillMount() {
    //setCookie(this.props.cookies, 10);
    var token = getCookie(this.props.cookies);
    if (token !== undefined) {
      this.props.userLogin(token);
      setCookie(this.props.cookies, token);
    }
  }

  render() {
    return (
      <div className="App" style={{padding:'5px'}}>
        <Header />                
      <Routes /> 
      </div>
    );
  }
}

export default withCookies(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
