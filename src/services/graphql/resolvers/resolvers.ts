import dummyNotes from "../../../dummyData/dummyNotes"
import dummyNotebooks from "../../../dummyData/dummyNotebooks"
import userResolvers from "./users/userResolver" 
import { User, UserInput } from '../generated/API'

const resolvers = {
    Query: {
        notes: () => {
            return dummyNotes
        },
        notebooks: () => {
            return dummyNotebooks
        },
        getListUserProfile: async (): Promise<User[]> => {
            return await userResolvers.getListUserProfile()
        },
        getNotebooksOfUser: async ({ userId }) => {
            return await userResolvers.getNotebooksOfUser(userId)
        }
    },

    Mutation: {
        createUser: async (_: unknown, userInput: UserInput): Promise<User> => await userResolvers.createUser(userInput)
    }
}

export default resolvers
