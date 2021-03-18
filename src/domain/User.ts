import { Notebook } from './Notebook'
import { plainToClass } from 'class-transformer'

export class User {
    id: string
    name: string
    notebooks: Notebook[]
    
    static validateUserInput(userInput: any): void{
        if(!userInput.name) throw new Error('Attempting to create a user without Name')
    }

    static validateUser(user: any): void{
        if(!user.id) throw new Error('Attempting to create a user without ID')
        if(!user.name) throw new Error('Attempting to create a user without Name')
    }

    static createFrom(user: any){
        this.validateUser(user)
        return plainToClass(User, user)
    }
}
