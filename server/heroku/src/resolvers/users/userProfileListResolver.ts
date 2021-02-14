import db from '../../services/firebaseDb'

export async function getListUserProfile() {
    try {

        const usersData = await db.ref('users/').once('value')
        const users = usersData.val()
    
        const arrayUsers: any = []
    
        // TODO: Fix this absolute piece of garbage
        Object.entries(users).forEach(user => {
          const userBody = user[1] as { notebooks }
          //console.log({ id: user[0], ...userBody })
    
          const tempUser = { id: user[0], ...userBody, notebooks: <any>[] }
          const tempNotebooks: any = []
          let tempNotes: any = []
          let tempNotebook = {id:'', notes: []}
    
          Object.entries(userBody.notebooks).forEach(notebook => {
            const notebookBody = notebook[1] as { notes }
            //console.log({ id: notebook[0], ...notebookBody })
            tempNotebooks.push({ id: notebook[0], ...notebookBody })
            tempNotebook = { id: notebook[0], ...notebookBody }
    
            Object.entries(notebookBody.notes).forEach(note => {
              const noteBody = Object.assign({}, note[1])
              //console.log('{ id: note[0], ...noteBody })
              tempNotes.push({ id: note[0], ...noteBody })
            })
    
            tempNotebook.notes = tempNotes
            tempUser.notebooks.push(tempNotebook)
            tempNotebook = {id:'', notes: []}
            tempNotes = []
    
          })
           
          arrayUsers.push(tempUser)
        })

        return arrayUsers
    } catch (e) {
        throw new Error(e.message)
    }
}
