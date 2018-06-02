import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar,
    KeyboardAvoidingView, 
    TextInput,
    Image,
    Dimensions,
    onSubmitEditing,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { LinearGradient, KeepAwake } from "expo";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

class LogInScreen extends Component {
    constructor(props) {
		super(props);
		this.state = {
			time: moment().format("LTS"),
			date: moment().format("LL")
		};
	}
    render(){
        const {
            isLoggedIn,
            email,
            password,
            logIn,
            logOut,
            changeEmail,
            changePassword,
            submit,
            isSubmitting
        } = this.props; 
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <LinearGradient colors={["#5e5c73","#d27a8a"]} style={styles.gradient}>
                <View style={styles.logocontainer}>
                    <Text style={styles.logotext}>TodoList</Text>
                    <Text style={styles.logotext2}>{this.state.time}</Text>
                    <Text style={styles.logotext3}>{this.state.date}</Text>
                    <KeepAwake />
                </View>  
            <View style={styles.container1}>
                <View style={styles.inputContainer}>
                <Icon name="user" size={25} color="rgba(255, 255, 255, 0.7)" />
                <TextInput 
                style={styles.input}
                value={this.props.email}
                placeholder="email"
                returnKeyType="next"
                onChangeText={this.props.changeEmail}
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                />
                </View>
                <View style={styles.inputContainer}>
                <Icon name="lock" size={25} color="rgba(255, 255, 255, 0.7)" />
                <TextInput 
                style={styles.input}
                placeholder="password"
                secureTextEntry
                returnKeyType="send"
                onChangeText={this.props.changePassword}
                value={this.props.password}
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                ref={(input) => this.passwordInput = input}
                //onEndEditing={submit}
                />
                </View>
                <TouchableOpacity 
                style={styles.buttonContainer}
                onPressOut={this.props.submit}
                >
                    <View style={styles.button}>
                    {this.props.isSubmitting ? (
                        <ActivityIndicator size="large" color="white" />
                    ) : (
                        <Image 
                        resizeMode={'stretch'}
                        style={styles.loginbtn}
                        source={require("../images/login.png")}
                    />
                    )}
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonContainer}>   
                    <Text style={styles.forgotText}>Forgot your password?</Text>
                </TouchableOpacity> 
                </View> 
                </LinearGradient> 
            </KeyboardAvoidingView>
        )
    }
}
        
 LogInScreen.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
   };

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
    },
    container1: {
        padding: 50,
        marginBottom: 100
    },
    inputContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    input: {
        height: 40,
        width: 220,
        marginBottom: 10,
        color: "white",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor:"#fff"
    },
    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    forgotText:{
        fontSize:12,
        color: "rgba(255, 255, 255, 0.7)",
        marginTop:10
    },
    loginicon: {
        resizeMode: 'stretch',
        width: 25,
        height:25,
    },
    loginbtn: {
        width: 35,
        height:30,
        marginTop:20   
    }
})

export default LogInScreen;