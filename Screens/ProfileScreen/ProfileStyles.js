import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
	bg: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		paddingTop: 100,
	},
	container: {
		position: 'relative',
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 92,
		paddingHorizontal: 16,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	header: {
		fontWeight: 'bold',
		fontSize: 30,
		lineHeight: 35,
		alignSelf: 'center',
		marginBottom: 32,

		color: '#212121',
	},
	headerWrapper: {
		position: 'relative',
	},

	logoutBtn: { position: 'absolute', right: 16, top: 22 },
	logout: { width: 25, height: 25 },
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
	removeImage: {
		position: 'absolute',
		bottom: 14,
		right: -12.5,
		zIndex: 105,

		width: 25,
		height: 25,
	},
	avatar: {
		width: 120,
		height: 120,
	},
	postImage: {
		width: '100%',
		height: 240,
		marginBottom: 8,
		borderRadius: 8,
	},
	postTitle: {
		marginBottom: 8,
		fontSize: 16,
		fontWeight: 'bold',
	},
	statsWrap: {
		display: 'flex',
		flexDirection: 'row',
	},
	commentsWrap: {
		marginRight: 24,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},

	comments: {
		fontSize: 16,
		fontWeight: '400',
	},
	likes: {
		fontSize: 16,
		fontWeight: '400',
	},
	location: {
		fontSize: 16,
		fontWeight: '400',
		textDecorationLine: 'underline',
	},
	likesWrap: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	locationWrap: {
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
