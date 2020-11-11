import { Box, Button, Text } from '@chakra-ui/core'
import { NextPage } from 'next'
import firebase from '../src/firebase/client'
import useAuth from '../src/auth/hooks/index'

const Home: NextPage = () => {
	const { loggedIn, user, signInWithGoogle, signOut } = useAuth()
	return (
		<Box>
			{loggedIn ? <Text>Hello, {user.displayName}</Text> : <Text>awefo</Text>}
			<Button onClick={loggedIn ? signOut : signInWithGoogle} />
		</Box>
	)
}

export default Home
