import { ChakraProvider } from '@chakra-ui/core'
import AuthProvider from '../src/auth/context'

const App = ({ Component, pageProps }) => (
	<ChakraProvider>
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	</ChakraProvider>
)

export default App
