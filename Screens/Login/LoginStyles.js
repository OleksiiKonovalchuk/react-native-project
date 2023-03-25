import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	bg: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		resizeMode: 'cover',
	},
	header: {
		fontWeight: 'bold',
		fontSize: 30,
		lineHeight: 35,
		alignSelf: 'center',
		marginBottom: 32,

		color: '#212121',
	},
	form: {
		backgroundColor: '#FFFFFF',
		paddingTop: 32,
		paddingBottom: 144,
		paddingHorizontal: 16,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	input: {
		backgroundColor: '#F6F6F6',
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#E8E8E8',
		padding: 16,
		paddingVertical: 16,
		fontSize: 16,
		lineHeight: 19,
	},
	inputWrapper: {
		flexDirection: 'column',
		rowGap: 16,
	},
	passwordWrapper: {
		position: 'relative',
	},
	showPassword: {
		position: 'absolute',
		right: 16,
		top: '50%',
		transform: [{ translateY: -8.5 }],

		fontSize: 16,
		lineHeight: 19,
		zIndex: 1,

		color: '#1B4371',
	},
	button: {
		marginTop: 43,
		backgroundColor: '#FF6C00',
		borderRadius: 100,
		padding: 16,
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		lineHeight: 19,
	},
	login: {
		marginTop: 16,
		textAlign: 'center',
		color: '#1B4371',
		fontSize: 16,
		lineHeight: 19,
	},
})
export default css
