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
		fontWeight: 500,
		fontSize: 30,
		lineHeight: 35,
		alignSelf: 'center',
		marginBottom: 32,

		color: '#212121',
	},
	headerWrapper: {
		position: 'relative',
	},
	imageBox: {
		position: 'absolute',
		zIndex: 100,
		width: 120,
		height: 120,
		top: -150,
		left: '50%',
		transform: [{ translateX: -60 }],
		backgroundColor: '#F6F6F6',
		borderRadius: 16,
	},
	addImage: {
		position: 'absolute',
		bottom: 14,
		right: -12.5,
		zIndex: 105,

		width: 25,
		height: 25,
	},
	form: {
		backgroundColor: '#FFFFFF',
		paddingTop: 92,
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

		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,

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
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
	},
	login: {
		marginTop: 16,
		textAlign: 'center',
		color: '#1B4371',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
	},
})
export default css
