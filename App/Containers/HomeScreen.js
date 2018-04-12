import React, {Component} from 'react';
import {View} from 'react-native';
import Home from 'OSv3/App/Components/Home';

export default class HomeScreen extends Component{

	static navigationOptions = {
		title: 'Home',
	};

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Home />
		);
	}
}