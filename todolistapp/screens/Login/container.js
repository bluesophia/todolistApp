import React, { Component } from "react";
import LogInScreen from "./presenter";
import { Alert } from "react-native";

class Container extends Component {
  state = {
    email: "",
    password: "",
    isSubmitting: false,
    submit: true
  };
  render() {
    return <LogInScreen 
      {...this.state}
      changeEmail={this._changeEmail}
      changePassword={this._changePassword}
      submit={this._submit}
    />;
  }
  _changeEmail = email => {
    this.setState({ email })
  }
  
  _changePassword = password => {
    this.setState({ password })
  }
  
  _submit = () => {
    const { email, password, isSubmitting, submit } = this.state;
    if(!submit){
      if( email && password) {
        this.setState({
          isSubmitting: true
        })
      } else {
        Alert.alert("All fields are required");
      }
    }
  }
}



export default Container;
