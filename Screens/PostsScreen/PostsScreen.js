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
import css from './PostsStyles'
const avatar = require('../../img/avatar.png')
const logout = require('../../img/log-out.png')

const PostsScreen = () => {
	return (
		<View style={css.postsScreen}>
			<View style={css.container}>
				<TouchableOpacity style={css.logoutBtn}>
					<Image style={css.logout} source={logout} />
				</TouchableOpacity>
				<Image style={css.avatar} source={avatar} />
				<View>
					<Text style={css.user}>Natali Romanova</Text>
					<Text style={css.email}>email@example.com</Text>
				</View>
			</View>
		</View>
	)
}
export default PostsScreen
