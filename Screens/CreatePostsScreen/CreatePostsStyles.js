import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
	createPostsScreen: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
		paddingVertical: 32,
		borderTopColor: 'rgba(33, 33, 33, 0.2)',
		borderTopWidth: 1,
	},
	container: { width: '100%' },
	addPhoto: {
		position: 'relative',
		width: '100%',
		height: 240,
		backgroundColor: '#F6F6F6',
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 8,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10,
	},
	photo: {
		width: 60,
		height: 60,
	},
	photoLabel: { fontSize: 16, color: 'rgba(33, 33, 33, 0.4)', marginTop: 11, marginBottom: 32 },
	titleInput: {
		fontSize: 16,
		marginBottom: 16,
		paddingVertical: 16,
		borderBottomColor: 'rgba(33, 33, 33, 0.2)',
		borderBottomWidth: 1,
	},
	locationInput: {
		fontSize: 16,
		marginBottom: 32,
		paddingHorizontal: 32,
		paddingVertical: 16,
		borderBottomColor: 'rgba(33, 33, 33, 0.2)',
		borderBottomWidth: 1,
	},
	publishButton: { paddingVertical: 16 },
	publishBtnTitle: { textAlign: 'center', color: 'rgba(33, 33, 33, 0.2)' },
	deleteBtn: {
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
	},
	trashBin: {
		width: 70,
		height: 40,
	},
})
export default css
