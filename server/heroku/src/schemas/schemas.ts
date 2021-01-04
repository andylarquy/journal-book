import {importSchema} from 'graphql-import';
import { buildSchema } from "graphql"

const schema = buildSchema(importSchema('**/schemas/*.graphql'))

export default schema