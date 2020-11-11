import nookies from 'nookies'
import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/client'

type UserOr = firebase.User | null

export const AuthContext = React.createContext<{
	user: UserOr
	loggedIn: boolean
	signInWithGoogle: () => Promise<firebase.auth.UserCredential>
	signOut: () => Promise<void>
}>(null)

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<UserOr>(null)

	useEffect(
		() =>
			firebase.auth().onIdTokenChanged(async (user) => {
				console.log('👤 New Login')

				if (!user) {
					console.log('❌ NO USER')
					setUser(null)

					nookies.set(undefined, 'token', '', {})
					return
				}

				console.log('✅ USER')
				const token = await user.getIdToken()
				setUser(user)
				nookies.set(undefined, 'token', token, {})
			}),
		[]
	)

	return (
		<AuthContext.Provider
			value={{
				user,
				loggedIn: !!user,
				signInWithGoogle: () =>
					firebase
						.auth()
						.signInWithPopup(new firebase.auth.GoogleAuthProvider()),
				signOut: async () => {
					await firebase.auth().signOut()
					window.location.href = '/'
				},
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
