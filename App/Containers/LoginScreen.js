import React, {Component} from 'react';
import {View} from 'react-native';
import Login from '../Components/Login.js';

export default class LoginScreen extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Login navigation={this.props.navigation} />
		);
	}
}