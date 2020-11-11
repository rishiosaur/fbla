import { Box, Button, Text } from '@chakra-ui/core'
import { NextPage } from 'next'
import Head from 'next/head'
import firebase from '../src/firebase/client'
import useAuth from '../src/auth/hooks/index'

const Home: NextPage = () => {
	const auth = useAuth()
	return (
		<Box>
			<Button
				onClick={() =>
					firebase
						.auth()
						.signInWithPopup(new firebase.auth.GoogleAuthProvider())
				}>
				Hello!
			</Button>
			{auth.user && (
				<Button onClick={() => firebase.auth().signOut()}>Logout</Button>
			)}
		</Box>
	)
}

export default Home
