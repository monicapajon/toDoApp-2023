import {User} from '../../types'

// const getUsers = () => {

// }

// const addUser = (payload: any) => {


// }

// const getUser = (id: string) => {

// } 

// const updateUser = (id:string, payload: any) => {

// }

// const removeUser = (id: string) => {
    
// }
const getAll = () => {

}
const get = (id: string) => {

}

type Payload = Omit<User, "id">

const add = (user: Payload) => {

    
};

 export const usersService = { getAll, get, add}
