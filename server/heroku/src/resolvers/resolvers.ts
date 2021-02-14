import dummyNotes from "../dummyData/dummyNotes"
import dummyNotebooks from "../dummyData/dummyNotebooks"
import userResolvers from "./users/userResolver"

const root = {
    notes: () => {
        return dummyNotes
    },
    notebooks: () => {
        return dummyNotebooks
    },
    getListUserProfile: async (): Promise<any[]> => {
        return await userResolvers.getListUserProfile()
    }
}

export default root
