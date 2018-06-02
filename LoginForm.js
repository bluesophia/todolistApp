import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Image,
    Dimensions,
    onSubmitEditing,
    TouchableOpacity
 } from "react-native";
import { LinearGradient } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
// import PropTypes from "prop-types";



const { width, height} = Dimensions.get('window');

const LoginForm = props => {
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                <Icon name="user" size={25} color="rgba(255, 255, 255, 0.7)" />
                <TextInput 
                style={styles.input}
                value={props.email}
                placeholder="email"
                returnKeyType="next"
                onChangeText={props.changeEmail}
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
                // value={this.state.password}
                //onChange={this.password.bind(this)}
                placeholder="password"
                secureTextEntry
                returnKeyType={"send"}
                value={props.password}
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                ref={(input) => this.passwordInput = input}
                onEndEditing={props.submit}
                />
                </View>
                <TouchableOpacity 
                style={styles.buttonContainer}
                onPressOUt={props.submit}
                >
                    <Image 
                        resizeMode={'stretch'}
                        style={styles.loginbtn}
                        source={require("../images/login.png")}
                    />
                    {props.isSubmitting ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={styles.btnText}>Log In</Text>
                    )}
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonContainer}>   
                    <Text style={styles.forgotText}>Forgot your password?</Text>
                </TouchableOpacity> 
            </View>
}

// LogInScreen.propTypes = {
//     isSubmitting: PropTypes.bool.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     changeEmail: PropTypes.func.isRequired,
//     changePassword: PropTypes.func.isRequired,
//     submit: PropTypes.func.isRequired
//   };

const styles = StyleSheet.create({
    container: {
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
export default LoginForm;