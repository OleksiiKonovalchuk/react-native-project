import { NavigationContainer } from '@react-navigation/native'
import { useState, useEffect, useCallback } from 'react'

import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

import useRoute from './router'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [isReady, setIsReady] = useState(false)
	const routing = useRoute(true)

	useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
					'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
				})
			} catch (e) {
				console.warn(e)
			} finally {
				setIsReady(true)
			}
		}
		loadFonts()
	}, [])

	const onLayoutReady = useCallback(async () => {
		if (isReady) {
			await SplashScreen.hideAsync()
		}
	}, [isReady])
	if (!isReady) {
		return null
	}
	return <NavigationContainer onReady={onLayoutReady}>{routing}</NavigationContainer>
}
