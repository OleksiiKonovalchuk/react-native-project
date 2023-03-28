import {
	ImageBackground,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from 'react-native'
import css from './ProfileStyles'

const bg = require('../../img/bg.jpg')
const remove = require('../../img/delete.png')
const avatar = require('../../img/avatarBig.png')
const post1 = require('../../img/post1.png')
const comments = require('../../img/commentsIcon.png')
const like = require('../../img/thumbs-up.png')
const geo = require('../../img/map-pin.png')
const logout = require('../../img/log-out.png')

const ProfileScreen = () => {
	return (
		<ImageBackground style={css.bg} source={bg}>
			<View style={css.container}>
				<TouchableOpacity style={css.logoutBtn}>
					<Image style={css.logout} source={logout} />
				</TouchableOpacity>
				<View style={css.headerWrapper}>
					<View style={css.imageBox}>
						<Image source={avatar} style={css.avatar} />
						<Image style={css.removeImage} source={remove} />
					</View>
					<Text style={css.header}>Natali Romanova</Text>
				</View>
				<View>
					<View style={css.post}>
						<Image style={css.postImage} source={post1} />
						<Text style={css.postTitle}>Forest</Text>
						<View style={css.statsWrap}>
							<View style={css.commentsWrap}>
								<Image style={css.icon} source={comments} />
								<Text style={css.comments}>8</Text>
							</View>
							<View style={css.likesWrap}>
								<Image style={css.icon} source={like} />
								<Text style={css.likes}>153</Text>
							</View>
							<View style={css.locationWrap}>
								<Image style={css.icon} source={geo} />
								<Text style={css.location}>Ukraine</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ImageBackground>
	)
}
export default ProfileScreen
