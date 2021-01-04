import express from "express"
import { graphqlHTTP } from  "express-graphql"
import schema from "./schemas/schemas"
import root from "./resolvers/resolvers"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.PORT // default port to listen

app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }))

app.listen( port || 8080, () => {
    console.log( `server started on port ${ port || 8080 }` )
} )
