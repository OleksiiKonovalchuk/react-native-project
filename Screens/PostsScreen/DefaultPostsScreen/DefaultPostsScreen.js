import {
	ImageBackground,
	Text,
	Image,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
} from 'react-native'
import { useEffect, useState } from 'react'

import css from './DefaultPostsStyles'

const comments = require('../../../img/commentsIcon.png')
const mapPin = require('../../../img/map-pin.png')
const avatar = require('../../../img/avatar.png')
const logout = require('../../../img/log-out.png')

const DefaultPostsScreen = ({ route, navigation }) => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		if (route.params) {
			setPosts((prevState) => [...prevState, route.params])
		}
	}, [route.params])
	return (
		<View style={css.postsScreen}>
			<View style={css.container}>
				<TouchableOpacity style={css.logoutBtn}>
					<Image style={css.logout} source={logout} />
				</TouchableOpacity>
				<View style={css.userWrapper}>
					<Image style={css.avatar} source={avatar} />
					<View>
						<Text style={css.user}>Natali Romanova</Text>
						<Text style={css.email}>email@example.com</Text>
					</View>
				</View>
			</View>
			<FlatList
				data={posts}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => {
					const { myLocation, picture, title, location } = item
					return (
						<View style={css.flatlistItem}>
							<Image source={{ uri: picture }} style={css.postImage} />
							<Text style={css.postTitle}>{title}</Text>
							<View style={css.cardInfoWrapper}>
								<TouchableOpacity
									style={css.commentsWrap}
									onPress={() => {
										navigation.navigate('Comments')
									}}
								>
									<Image style={css.icon} source={comments} />
									<Text style={css.comments}>0</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={css.locationWrap}
									onPress={() => {
										navigation.navigate('Map Screen', { location, title })
									}}
								>
									<Image style={css.icon} source={mapPin} />
									<Text style={css.location}>{myLocation}</Text>
								</TouchableOpacity>
							</View>
						</View>
					)
				}}
			/>
		</View>
	)
}
export default DefaultPostsScreen
