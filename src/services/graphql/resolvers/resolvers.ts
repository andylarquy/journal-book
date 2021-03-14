import dummyNotes from "../../../dummyData/dummyNotes"
import dummyNotebooks from "../../../dummyData/dummyNotebooks"
import userResolvers from "./users/userResolver"
import { User } from "domain/User"

const resolvers = {
    Query: {
        notes: () => {
            return dummyNotes
        },
        notebooks: () => {
            return dummyNotebooks
        },
        getListUserProfile: async (): Promise<any[]> => {
            return await userResolvers.getListUserProfile()
        },
        getNotebooksOfUser: async ({ userId }) => {
            return await userResolvers.getNotebooksOfUser(userId)
        }
    },

    Mutation: {
        createUser: async (_, { userInput }): Promise<User> => await userResolvers.createUser(userInput)
    }
}

export default resolvers
