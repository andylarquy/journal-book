import express, { json } from "express"
import { graphqlHTTP } from "express-graphql"
import schema from "./services/graphql/schemas/schemas"
import dotenv from "dotenv"

//Firebase Admin - Required to user authentication
import admin from 'firebase-admin'

import { altairExpress } from 'altair-express-middleware'

dotenv.config()


const app = express()
const port = process.env.PORT || 8080

const getAuthTokenHeader = (req: any) => req.headers.authorization.split(' ')[1]

const userAuthentication = async (req, res, next) => {
  try {
    const idToken = getAuthTokenHeader(req)
    const user = await admin.auth().verifyIdToken(idToken)
    res.locals.uid = user.uid
    //TODO: Fix this shit
    res.locals.provider = Object.keys(user.firebase.identities)[0].split('.com')[0]

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message })
  }
}

app.use('/altair', altairExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:8080/graphql`,
  initialQuery: `{getNotebooksOfUser(userId: "id"){
    id
    title
    notes{
      id
      title
    }
  }
}`,
}))

app.use(userAuthentication)

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))


app.get('/debug', async (req, res) => {

})


app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
