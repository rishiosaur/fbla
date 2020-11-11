import {
	ChakraProvider,
	ColorModeProvider,
	Container,
	cookieStorageManager,
	extendTheme,
	localStorageManager,
} from '@chakra-ui/core'
import nookies from 'nookies'
import AuthProvider from '../src/auth/context'

const App = ({ Component, pageProps }) => (
	<ChakraProvider colorModeManager={localStorageManager}>
		<ColorModeProvider
			options={{
				initialColorMode: 'light',
			}}>
			<AuthProvider>
				<Container>
					<Component {...pageProps} />
				</Container>
			</AuthProvider>
		</ColorModeProvider>
	</ChakraProvider>
)

export default App
