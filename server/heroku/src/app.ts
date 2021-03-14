import firebaseDbFormatter from 'firebasedb-nest-formatter'
import express, { json } from "express"
import { graphqlHTTP } from "express-graphql"
import schema from "./services/graphql/schemas/schemas"
import dotenv from "dotenv"

import firebaseConfigFile from '../firebase.sdk.config'

// Firebase Core Service
import firebase from 'firebase/app'

//Firebase Services
import 'firebase/auth'
import 'firebase/database'

dotenv.config()

const app = express()
const port = process.env.PORT

const firebaseConfig = firebaseConfigFile

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.get('/debug', async (req, res) => {
  try {
    const db = firebase.database()
    const usersData = await db.ref(`users/-JiGh_31GA20JabpZBfa`).once('value')
    res.json(firebaseDbFormatter(usersData.val()))    
  } catch (e) {
    throw Error(e.message)
  }
  return 4
})


app.listen(port || 8080, () => {
  console.log(`server started on port ${port || 8080}`)
})
