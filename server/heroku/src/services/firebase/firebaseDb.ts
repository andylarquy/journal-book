import dotenv from "dotenv"
dotenv.config()

// Firebase Core Service
import firebase from 'firebase/app'
import 'firebase/database'

import firebaseConfigFile from '../../../firebase.sdk.config'

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfigFile) : firebase.app()

export default firebase.database()
