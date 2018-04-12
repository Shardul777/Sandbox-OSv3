import React, { Component} from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import HomeOptions from 'OSv3/App/Components/HomeOptions';
import styles from './Styles/HomeStyle';
import lstyles from './Styles/LoginStyle';
import { StackNavigator } from 'react-navigation';


export default class Home extends Component{

	render(){

		return(

			<View style={styles.Container}>
				<View style={styles.Body}>
					<HomeOptions optionName='Order' />	
					<View style={styles.FooterSection}>
						<View style={lstyles.CompanyLogoSection}>
							<Image style={lstyles.CompanyLogo}
							  source={require('../Images/CompanyLogo.png')}	
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}