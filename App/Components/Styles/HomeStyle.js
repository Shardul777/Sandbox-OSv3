import { StyleSheet } from 'react-native';

export default StyleSheet.create({

	Container:{
		flex:1
	},
	Header:{
		flex:1,
		backgroundColor:'white',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		borderBottomColor:'grey',
		borderBottomWidth:1,
	},
	Body:{
		flex:16,

	},
	Carrier:{
		flex:1
	},
	HeaderText:{
		fontSize:20,
		fontWeight:'600'
	},
	ActionSection:{
		flex:1,
		backgroundColor:'orange',

	},
	FooterSection:{
		flex:1,
	},
	Actions:{
		flex:1,	
		borderBottomColor:'grey',
		borderBottomWidth:1,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	ActionText:{
		fontSize:18,
		fontWeight:'600',
		color:'white'
	}
})
