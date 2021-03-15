import { UserInput } from '../../generated/API'
import { User } from '../../../../domain/User'
import db from '../../../firebase/firebaseDb'

// TODO: Define the UserInput type
export async function createUser(userInput: UserInput): Promise<User> {
    User.validateUserInput(userInput)

    // TODO: Wrap this to all the project using generics
    const dbResponse = db.ref().child('users').push({ ...userInput })
    const newUserEntry = (await (await dbResponse).get()).val()
    const newUserId = (await dbResponse).key

    return User.createFrom({id: newUserId, ...newUserEntry})
}
