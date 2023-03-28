import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
	postsScreen: {
		position: 'relative',

		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
		paddingVertical: 32,
		borderTopColor: 'rgba(33, 33, 33, 0.2)',
		borderTopWidth: 1,
	},
	container: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoutBtn: {
		position: 'absolute',
		right: 16,
		top: -25,
	},
	logout: {
		width: 25,
		height: 25,
	},
	avatar: {
		borderRadius: 16,
		marginRight: 8,
		width: 60,
		height: 60,
	},
	user: {
		fontWeight: 'bold',
	},
	email: {
		color: 'rgba(33, 33, 33, 0.8)',
	},
})
export default css
