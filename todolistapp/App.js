import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import LogInScreen from './screens/Login/presenter';
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/es/integration/react";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";

const { persistor, store } = configureStore();


class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssertsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
       <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />    
        </PersistGate> 
       </Provider>
    );
  }

  _loadAssertsAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([require("./assets/images/logo_sm.png")]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

export default App;
