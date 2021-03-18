import db from '../../../firebase/firebaseDb'
import firebaseDbFormatter from 'firebasedb-nest-formatter'
import { User } from '../../generated/API'

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
