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
        getListUserProfile: async () => {
            //  return await userResolvers.getListUserProfile()
        },
        getNotebooksOfUser: async ({ userId }) => {
            //return await userResolvers.getNotebooksOfUser(userId)
        }
    },

    Mutation: {
        createUser: async (_: unknown, { userInput }: { userInput: UserInput }, context): Promise<User> => (
            await userResolvers.createUser(userInput, { uid: context.res.locals.uid, provider: context.res.locals.provider }))
    }
}

// Types
export type Auth = {
    uid: string,
    provider: string
}

export default resolvers
