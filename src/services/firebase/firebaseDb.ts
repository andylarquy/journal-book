import dotenv from "dotenv"
dotenv.config()

// Firebase Core Service
import admin, { database } from 'firebase-admin'
import 'firebase/database'
import { Auth } from "services/graphql/resolvers/resolvers"
import firebaseAdminConfig from '../../../firebase.sdk.config'

// Initialize Firebase
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(firebaseAdminConfig.credential),
        databaseURL: firebaseAdminConfig.databaseURL,
        databaseAuthVariableOverride: null
    })
}

export default function (auth: Auth): database.Database {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(firebaseAdminConfig.credential),
            databaseURL: firebaseAdminConfig.databaseURL,
            databaseAuthVariableOverride: auth
        })
    } else {
        admin.app().delete()
        admin.initializeApp({
            credential: admin.credential.cert(firebaseAdminConfig.credential),
            databaseURL: firebaseAdminConfig.databaseURL,
            databaseAuthVariableOverride: auth
        })
    }
    return admin.database()
}


