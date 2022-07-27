import * as React from 'react'

export interface IUser {
    name: String,
    email: String,
    adress: String,
}


export type UserContextType = {
    list: Array<IUser>,
    editUser: IUser,
    add: ( user: IUser ) => void,
    delete: ( email: String ) => void,
    update: ( user: IUser ) => void,
    editable: ( user: IUser ) => void
}

export const UserContextDefaultValues: UserContextType = {
    list: [],
    editUser: {} as IUser,
    add: ( user: IUser ) => {},
    delete: ( email: String ) => {},
    update: ( user: IUser ) => {},
    editable: ( user: IUser ) => {}
}

export const UserContext = React.createContext<UserContextType>(UserContextDefaultValues)