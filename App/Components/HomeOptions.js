import React,{Component} from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import styles from './Styles/HomeStyle';
import lstyles from './Styles/LoginStyle';
import { StackNavigator } from 'react-navigation';

export default class HomeOptions extends Component{

	constructor(props){
		super(props)
	}

	_onPress = () => {


	}


	render(){
		return(
				
				<View style={styles.Actions}>

					<View style={styles.ActionImage}>
						<Image 
							style={{height:25,width:25}}
							source={require('../Images/glyphicons-80-signal.png')}
						/>
					</View>

					<View style={styles.ActionTextContainer}>
						<TouchableOpacity>
							<Text style={styles.ActionText}>{this.props.optionName}</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.Arrow}>
						<Image 
							source={require('../Images/glyphicons-224-chevron-right.png')}
						/>
					</View>
					

				</View>
		);
	}
}