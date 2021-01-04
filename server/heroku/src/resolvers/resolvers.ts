import dummyNotes from "../dummyData/dummyNotes"
import dummyNotebooks from "../dummyData/dummyNotebooks"
import dummyUsers from "../dummyData/dummyUsers"

const root = {
    notes: () => {
        return dummyNotes
    },
    notebooks: () => {
        return dummyNotebooks
    },
    users: () => {
        return dummyUsers
    }
}

export default root
