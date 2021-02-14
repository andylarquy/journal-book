import express from "express"
import { graphqlHTTP } from "express-graphql"
import schema from "./schemas/schemas"
import root from "./resolvers/resolvers"
import dotenv from "dotenv"
dotenv.config()

import firebaseConfigFile from '../firebase.sdk.config'

// Firebase Core Service
import firebase from 'firebase/app'

//Firebase Services
import 'firebase/auth'
import 'firebase/database'


const app = express()
const port = process.env.PORT

const firebaseConfig = firebaseConfigFile

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.get('/debug', async (req, res) => {
  try {
    const db = firebase.database()

    const usersData = await db.ref('users/').once('value')
    const users = usersData.val()

    const arrayUsers: any = []

    // TODO: Fix this absolute piece of garbage
    Object.entries(users).forEach(user => {
      const userBody = user[1] as { notebooks }
      //console.log({ id: user[0], ...userBody })

      const tempUser = { id: user[0], ...userBody, notebooks: <any>[] }
      const tempNotebooks: any = []
      let tempNotes: any = []
      let tempNotebook = {id:'', notes: []}

      Object.entries(userBody.notebooks).forEach(notebook => {
        const notebookBody = notebook[1] as { notes }
        //console.log({ id: notebook[0], ...notebookBody })
        tempNotebooks.push({ id: notebook[0], ...notebookBody })
        tempNotebook = { id: notebook[0], ...notebookBody }

        Object.entries(notebookBody.notes).forEach(note => {
          const noteBody = Object.assign({}, note[1])
          //console.log('{ id: note[0], ...noteBody })
          tempNotes.push({ id: note[0], ...noteBody })
        })

        tempNotebook.notes = tempNotes
        tempUser.notebooks.push(tempNotebook)
        tempNotebook = {id:'', notes: []}
        tempNotes = []

      })
       
      arrayUsers.push(tempUser)
    })

    res.json(arrayUsers)
  } catch (e) {
    res.status(400)
    res.json({ message: e.message })
  }
})


app.listen(port || 8080, () => {
  console.log(`server started on port ${port || 8080}`)
})
