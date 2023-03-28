import {
	ImageBackground,
	Text,
	Image,
	View,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from 'react-native'
import css from './CreatePostsStyles'
const photo = require('../../img/photo.png')
const trash = require('../../img/trash.png')

const CreatePostsScreen = () => {
	return (
		<View style={css.createPostsScreen}>
			<View style={css.container}>
				<View style={css.addPhoto}>
					<Image style={css.photo} source={photo} />
				</View>
				<Text style={css.photoLabel}>Load a photo</Text>
				<TextInput style={css.titleInput} placeholder="Title..." />
				<TextInput style={css.locationInput} placeholder="Location..." />
				<TouchableOpacity style={css.publishButton}>
					<Text style={css.publishBtnTitle}>Publish</Text>
				</TouchableOpacity>
				<TouchableOpacity style={css.deleteBtn}>
					<Image source={trash} style={css.trashBin} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
export default CreatePostsScreen
