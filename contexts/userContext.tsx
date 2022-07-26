import * as React from 'react'

export interface IUser {
    name: String,
    email: String,
    adress: String
}

export type UserContextType = {
    list: Array<IUser>,
    add: ( user: IUser ) => void,
    delete: ( email: String ) => void,
    update: ( user: IUser ) => void
}

export const UserContextDefaultValues: UserContextType = {
    list: [],
    add: ( user: IUser ) => {},
    delete: ( email: String ) => {},
    update: ( user: IUser ) => {},
}

export const UserContext = React.createContext<UserContextType>(UserContextDefaultValues)