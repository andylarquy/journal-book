import { UserInput } from '../../generated/API'
import { createOnFirebaseDB } from '../../../firebase/firebaseDbUtils'
import { User } from '../../../../domain/User'
import db from '../../../firebase/firebaseDb'

// TODO: Define the UserInput type
export async function createUser(userInput: UserInput): Promise<User> {
    User.validateUserInput(userInput)
    return createOnFirebaseDB<User>('users', userInput, User)
}
