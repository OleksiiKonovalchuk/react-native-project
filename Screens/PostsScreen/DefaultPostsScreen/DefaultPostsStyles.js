import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
	postsScreen: {
		position: 'relative',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
		paddingVertical: 15,
		borderTopColor: 'rgba(33, 33, 33, 0.2)',
		borderTopWidth: 1,
		marginBottom: 40,
	},
	container: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	userWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
	logoutBtn: {
		position: 'absolute',
		right: 0,
		top: 0,
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
	flatlistItem: {
		width: 350,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	cardInfoWrapper: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	postImage: {
		width: '100%',
		height: 240,
		marginBottom: 8,
		borderRadius: 8,
	},
	postTitle: {
		marginRight: 'auto',
		fontFamily: 'Roboto-Medium',
		marginBottom: 8,
		fontSize: 16,
	},
	commentsWrap: {
		marginRight: 24,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},

	comments: {
		fontFamily: 'Roboto-Medium',
		fontSize: 16,
	},
	location: {
		fontSize: 16,
		fontFamily: 'Roboto-Medium',
		textDecorationLine: 'underline',
	},
	locationWrap: {
		marginLeft: 'auto',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	icon: {
		marginRight: 6,
		width: 25,
		height: 25,
	},
})
export default css
