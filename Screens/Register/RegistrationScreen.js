import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
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

import css from './RegisterStyles'

const bg = require('../../img/bg.jpg')
const add = require('../../img/add.svg')

export default function RegistrationScreen() {
	const [login, setLogin] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState({})

	const [keyboardShown, setkeyboardShown] = useState(false)
	const [loginFocused, setLoginFocused] = useState(false)
	const [emailFocused, setEmailFocused] = useState(false)
	const [passwordFocused, setPasswordFocused] = useState(false)

	const keyboardHide = () => {
		Keyboard.dismiss()
		setkeyboardShown(false)
	}
	return (
		<KeyboardAvoidingView
			style={css.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ImageBackground style={css.bg} source={bg}>
				<TouchableWithoutFeedback onPress={keyboardHide}>
					<View
						style={{
							...css.form,
							paddingBottom: keyboardShown ? 0 : 78,
							marginBottom: keyboardShown ? -105 : 0,
						}}
					>
						<View style={css.headerWrapper}>
							<View style={css.imageBox}>
								<Image style={css.addImage} source={add} />
							</View>
							<Text style={css.header}>Register</Text>
						</View>
						<View style={css.inputWrapper}>
							<TextInput
								value={login}
								style={{ ...css.input, borderColor: loginFocused ? '#FF6C00' : '#E8E8E8' }}
								placeholder="Login"
								placeholderTextColor="#BDBDBD"
								onChangeText={(text) => setLogin(text)}
								onFocus={() => {
									setkeyboardShown(true)
									setLoginFocused(true)
								}}
								onBlur={() => setLoginFocused(false)}
							/>
							<TextInput
								value={email}
								keyboardType="email-address"
								inputMode="email"
								style={{ ...css.input, borderColor: emailFocused ? '#FF6C00' : '#E8E8E8' }}
								placeholder="Email"
								placeholderTextColor="#BDBDBD"
								onChangeText={(text) => setEmail(text)}
								onFocus={() => {
									setkeyboardShown(true)
									setEmailFocused(true)
								}}
								onBlur={() => setEmailFocused(false)}
							/>
							<View style={css.passwordWrapper}>
								<Text style={css.showPassword}>Show</Text>
								<TextInput
									value={password}
									secureTextEntry={true}
									textContentType="newPassword"
									style={{ ...css.input, borderColor: passwordFocused ? '#FF6C00' : '#E8E8E8' }}
									placeholder="Password"
									placeholderTextColor="#BDBDBD"
									onChangeText={(text) => setPassword(text)}
									onFocus={() => {
										setkeyboardShown(true)
										setPasswordFocused(true)
									}}
									onBlur={() => setPasswordFocused(false)}
								/>
							</View>
						</View>
						<TouchableOpacity
							style={css.button}
							activeOpacity={0.8}
							onPress={() => {
								keyboardHide()
								setUser({ login, email, password })
								console.log({ login, email, password })
							}}
						>
							<Text style={css.buttonText}>Register Now</Text>
						</TouchableOpacity>
						<Text style={css.login}>Already have an account? Login</Text>
						<StatusBar style="auto" />
					</View>
				</TouchableWithoutFeedback>
			</ImageBackground>
		</KeyboardAvoidingView>
	)
}
