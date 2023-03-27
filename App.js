import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import useRoute from './router'

export default function App() {
	const routing = useRoute(true)
	return <NavigationContainer>{routing}</NavigationContainer>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
