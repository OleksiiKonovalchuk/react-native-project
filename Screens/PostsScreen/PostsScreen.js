import { createStackNavigator } from '@react-navigation/stack'

import DefaultPostsScreen from './DefaultPostsScreen/DefaultPostsScreen'
import MapScreen from './MapScreen/MapScreen.js'
import CommentsScreen from './CommentsScreen/CommentsScreen'

const NestedScreen = createStackNavigator()

const PostsScreen = () => {
	return (
		<NestedScreen.Navigator>
			<NestedScreen.Screen
				name="Default Screen"
				component={DefaultPostsScreen}
				// options={{ headerShown: false }}
			/>
			<NestedScreen.Screen name="Map Screen" component={MapScreen} />
			<NestedScreen.Screen name="Comments" component={CommentsScreen} />
		</NestedScreen.Navigator>
	)
}
export default PostsScreen
