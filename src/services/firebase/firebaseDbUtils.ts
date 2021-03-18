import db from "./firebaseDb"

//TODO: Maybe this overall solution can be improved, but it does its job
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createOnFirebaseDB<T>(table: string, input: any, castClass: any): Promise<T> {
    const dbResponse = db.ref().child(table).push({ ...input })
    const newUserEntry = (await (await dbResponse).get()).val()
    const newUserId = (await dbResponse).key
    return castClass.createFrom({ id: newUserId, ...newUserEntry })
}
