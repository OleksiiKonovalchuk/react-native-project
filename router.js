import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RegistrationScreen from './Screens/Register/RegistrationScreen'
import LoginScreen from './Screens/Login/LoginScreen'
import PostsScreen from './Screens/PostsScreen/PostsScreen'
import CreatePostsScreen from './Screens/CreatePostsScreen/CreatePostsScreen'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'

const post = require('./img/grid.png')
const newPost = require('./img/new.png')
const user = require('./img/user.png')

const AuthStack = createStackNavigator()
const MainTab = createBottomTabNavigator()

const useRoute = (isAuth) => {
	if (!isAuth) {
		return (
			<AuthStack.Navigator initialRouteName="Login">
				<AuthStack.Screen
					options={{ headerShown: false }}
					name="Registration"
					component={RegistrationScreen}
				/>
				<AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
			</AuthStack.Navigator>
		)
	}
	return (
		<MainTab.Navigator initialRouteName="Posts" backBehavior="history" sceneContainerStyle={{}}>
			<MainTab.Screen
				name="Posts"
				component={PostsScreen}
				options={{
					headerStyle: {
						height: 100,
					},
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, color, size }) => {
						return <Image source={post} />
					},
				}}
			/>
			<MainTab.Screen
				name="CreatePost"
				component={CreatePostsScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, color, size }) => {
						return <Image source={newPost} />
					},
				}}
			/>
			<MainTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, color, size }) => {
						return <Image source={user} />
					},
				}}
			/>
		</MainTab.Navigator>
	)
}
export default useRoute