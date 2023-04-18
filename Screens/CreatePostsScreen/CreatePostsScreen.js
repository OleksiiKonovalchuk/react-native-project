import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'
import { Camera } from 'expo-camera'
import { useEffect, useState } from 'react'

import css from './CreatePostsStyles'
const photo = require('../../img/photo.png')
const trash = require('../../img/trash.png')

const CreatePostsScreen = ({ navigation }) => {
	const [camera, setCamera] = useState(null)
	const [picture, setPicture] = useState(null)
	const [title, setTitle] = useState('')
	const [myLocation, setMyLocation] = useState('')
	const [permission, requestPermission] = Camera.useCameraPermissions()
	const [location, setLocation] = useState(null)

	const sumbit = () => {
		const data = {
			picture,
			title,
			myLocation,
			location,
		}
		navigation.navigate('Default Screen', data)
		setPicture()
		setLocation()
		setMyLocation()
		setTitle()
	}
	const takePicture = async () => {
		const picture = await camera.takePictureAsync()
		const location = await Location.getCurrentPositionAsync()
		setLocation(location.coords)
		setPicture(picture.uri)
	}
	useEffect(() => {
		requestPermission()
		Location.requestForegroundPermissionsAsync()
		// ;async () => {
		// 	let { status } =
		// 	if (status !== 'granted') {
		// 		setErrorMsg('Permission to access location was denied')
		// 		return
		// 	}

		// 	let location = await Location.getCurrentPositionAsync({})
		// 	setLocation(location)
		// }
	}, [])

	return (
		<View style={css.createPostsScreen}>
			<View style={css.container}>
				<View style={css.addPhoto}>
					{picture && (
						<View style={css.pictureTaken}>
							<TouchableOpacity style={css.delete} onPress={() => setPicture(null)}>
								<Text style={css.deleteText}>X</Text>
							</TouchableOpacity>
							<Image source={{ uri: picture }} style={css.ourPicture} />
						</View>
					)}
					<Camera style={css.camera} ref={setCamera}></Camera>
					<TouchableOpacity onPress={takePicture} style={css.makePhoto}>
						<Image style={css.photo} source={photo} />
					</TouchableOpacity>
				</View>
				<Text style={css.photoLabel}>Load a photo</Text>
				<TextInput
					style={css.titleInput}
					value={title}
					placeholder="Title..."
					onChangeText={(text) => {
						setTitle(text)
					}}
				/>
				<TextInput
					style={css.locationInput}
					value={myLocation}
					placeholder="Location..."
					onChangeText={(text) => {
						setMyLocation(text)
					}}
				/>
				<TouchableOpacity style={css.publishButton} onPress={sumbit}>
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
