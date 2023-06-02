import {v4 as uuidv4} from 'uuid'
export class User {
    id: string
    name: string

    constructor(id: string | null, name: string) {
        this.id = id ?? uuidv4()
        this.name = name
    }
}