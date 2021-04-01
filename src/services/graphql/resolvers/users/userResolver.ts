import { User } from "../../../../domain/User"
import { createOnFirebaseDB } from "../../../../services/firebase/firebaseDbUtils"
import { UserInput } from "../../../../services/graphql/generated/API"
import { Auth } from "../resolvers"

// TODO: Define the UserInput type
export async function createUser(userInput: UserInput, context: Auth): Promise<User> {
    User.validateUserInput(userInput)
    return createOnFirebaseDB<User>('users', userInput, User, context)
}

/*
export async function getListUserProfile(): Promise<User[]> {
  try {
    const usersData = await db.ref('users/').once('value')
    return firebaseDbFormatter(usersData.val())
  } catch (e) {
    throw new Error(e.message)
  }
}

export async function getNotebooksOfUser(userId: string) {
  try {
    const usersData = await db.ref(`users/${userId}`).once('value')
    const users = usersData.val()
    console.log(users)
  } catch (e) {
    throw Error(e.message)
  }
  return 4
}
*/

export default {
    //  getListUserProfile,
    //getNotebooksOfUser,
    createUser
}
