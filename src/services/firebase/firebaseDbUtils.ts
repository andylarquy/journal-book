import getAuthenticatedDbClient from "./firebaseDb"
import {Auth} from "../graphql/resolvers/resolvers"

//TODO: Maybe this overall solution can be improved, but it does its job

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createOnFirebaseDB<T>(table: string, input: any, castClass: any, credentials: Auth): Promise<typeof castClass> {
    const { uid } = credentials
    const db = getAuthenticatedDbClient(credentials)
    await db.ref().child(table).child(uid).set({ ...input })

    return castClass.createFrom({ id: uid, ...input })
}
