import firebaseAdmin from 'firebase-admin'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert(
			JSON.parse(process.env.adminSecret)
		),
		databaseURL: 'https://tfss-fbla.firebaseio.com',
	})
}

export default firebaseAdmin
