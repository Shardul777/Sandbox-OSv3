import React,{ Component } from 'react';
import {Text,View,Image,TextInput,Button, TouchableOpacity} from 'react-native';
import styles from '../Components/Styles/LoginStyle';
import {connect} from 'react-redux';
import LoginActions from '../Redux/LoginRedux';


class LoginScreen extends Component{
	constructor(props){
		super(props)
		this.state = {
			email :'',
			password : '',
			status : false,
		}
	}

	componentDidMount() {
		console.tron.log(this.props.status)
	    if (this.props.status == true) {
	      const { navigate } = this.props.navigation;
	      navigate('HomeScreen');
	    }
    }

	handleChangeEmail = (text) => {

		this.setState({email:text});
	}

	handleChangePassword = (text) => {

	this.setState({password:text});

	}


	handlePress = () => {
		
		const {email,password} = this.state;
		this.props.doLogin(email,password);
	}


	render() {
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
						 	autoFocus={false}
							label="username"
							placeholder="Username..."
							onChangeText={this.handleChangeEmail}
						/>

					</View>

					<View style={styles.PasswordSection}>
						<TextInput style={styles.TextInput}
							autoFocus={false}
							secureTextEntry
							label="password"
							placeholder="Password..."
							onChangeText={this.handleChangePassword}
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


const mapStateToProps = (state) => ({
	 status:state.login.status
})		


const mapDispatchToProps = (dispatch) => ({

    doLogin: (email, password) => dispatch(LoginActions.loginRequest(email, password)),

})

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
