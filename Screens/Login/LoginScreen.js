import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
	ImageBackground,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from 'react-native'

import css from './LoginStyles'

const bg = require('../../img/bg.jpg')

export default function LoginScreen() {
	const [emailFocused, setEmailFocused] = useState(false)
	const [passwordFocused, setPasswordFocused] = useState(false)
	const [keyboardShown, setkeyboardShown] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState({})
	const keyboardHide = () => {
		Keyboard.dismiss()
		setkeyboardShown(false)
	}
	return (
		<TouchableWithoutFeedback onPress={keyboardHide}>
			<KeyboardAvoidingView
				style={css.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<ImageBackground style={css.bg} source={bg}>
					<View
						style={{
							...css.form,
							marginBottom: keyboardShown ? -200 : 0,
							paddingBottom: keyboardShown ? 170 : 144,
						}}
					>
						<Text style={css.header}>Login</Text>
						<View style={css.inputWrapper}>
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
									textContentType="password"
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
								setUser({ email, password })
								console.log({ email, password })
							}}
						>
							<Text style={css.buttonText}>Login</Text>
						</TouchableOpacity>
						<Text style={css.login}>Don't have an account? Register</Text>
						<StatusBar style="auto" />
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}
