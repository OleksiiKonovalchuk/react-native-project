import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'

import css from './MapStyles'

const initialRegion = { location: { latitude: 50.5163339, longitude: 25.602185 }, title: 'Home' }
const MapScreen = ({ route }) => {
	if (!route.params) {
		return <Text>Loading...</Text>
	}
	const [state, setState] = useState(initialRegion)
	const { location, title } = state
	const { longitude, latitude } = location
	useEffect(() => {
		setState(route.params)
	}, [route.params])
	return (
		<View style={css.mapContainer}>
			<MapView
				style={css.mapView}
				initialRegion={{
					latitude,
					longitude,
					latitudeDelta: 1,
					longitudeDelta: 1,
				}}
			>
				<Marker title={title} coordinate={{ latitude, longitude }} />
			</MapView>
		</View>
	)
}
export default MapScreen
