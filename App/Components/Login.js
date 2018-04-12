import React,{ Component } from 'react';
import {Text,View,Image,TextInput,Button, TouchableOpacity} from 'react-native';
import styles from './Styles/LoginStyle';
import { StackNavigator } from 'react-navigation';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'react';
import HomeScreen from '../Containers/HomeScreen'

export default class Login extends Component{



	constructor(props){
		super(props)
	}


	handlePress = () =>{
		console.log("performing login");
	}


	render(){

		return(

				<View style={styles.Container}>	
					<View style={styles.UpperSection}>
						
						<View style={styles.CompanyLogoSection}>
							<Image style={styles.CompanyLogo}
							  source={require('../Images/CompanyLogo.png')}	
							/>
						</View>

						<View style={styles.AppLogoSection}>
							<Image style={styles.AppLogo}
							source={require('../Images/AppLogo.png')} 
							/>
						</View>

						<View style={styles.AppNameSection}>
							<Text style={styles.AppName}> NxJ Logistics </Text>
						</View>

					</View>

					<View style={styles.LowerSection}>
							
						<View style={styles.UsernameSection}>
							<TextInput style={styles.TextInput}
								label="username"
								placeholder="Username..."
							/>

						</View>

						<View style={styles.PasswordSection}>
							<TextInput style={styles.TextInput}
								secureTextEntry
								label="password"
								placeholder="Password..."
							/>
						</View>

						<View style={styles.LoginButtonSection}>
							<TouchableOpacity 
								onPress={this.handlePress}
								style={styles.LoginButtonStyle}>
								<Text style={styles.ButtonTextStyle}> Login </Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
		);
	}
}
