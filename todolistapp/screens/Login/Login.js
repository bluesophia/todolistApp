import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar,
    KeyboardAvoidingView 
} from "react-native";
import { LinearGradient } from "expo";
import moment from "moment";
import KeepAwake from "react-native-keep-awake"
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: moment().format("LTS"),
            date: moment().format("LL")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <LinearGradient colors={["#5e5c73","#d27a8a"]} style={styles.gradient}>
                <View style={styles.logocontainer}>
                    <Text style={styles.logotext}>TodoList</Text>
                    <Text style={styles.logotext2}>{this.state.time}</Text>
                    <Text style={styles.logotext3}>{this.state.date}</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </LinearGradient>    
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    gradient: {
        flex: 1
    },
    logocontainer: {
        alignItems: 'center',
        flexGrow:1,
        justifyContent: 'center'
    },
    logotext: {
        color: "#fff",
        fontSize: 35,
        marginBottom: 15,
    },
    logotext2: {
        color: "#fff",
        fontSize: 30,
        marginBottom: 5,
        shadowColor: '#fff',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 50,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    logotext3: {
        color: "#fff",
        fontSize: 12,
        shadowColor: '#fff',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 50,
        shadowOffset: {
            width: 0,
            height: 4
        }
    }

})
export default Login;