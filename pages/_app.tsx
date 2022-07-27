import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../styles/theme'
import { UserContext, IUser, UserContextDefaultValues } from '../contexts/userContext'
import { getTable, addUser, delUser, updateUser } from '../service/table'

function MyApp({ Component, pageProps }: AppProps) {

  const [users, setUsers] = React.useState<Array<IUser>>(UserContextDefaultValues.list);
  const [eUser, setEUser] = React.useState<IUser>(UserContextDefaultValues.editUser);

  const addNew = (newUser: IUser) => {
    addUser((res:any) => {
      if(res) setUsers(res)
    }, newUser)
  };

  const update = ( nUser: IUser ) => {
    updateUser((res:any) => {
      if(res) setUsers(res)
    }, nUser)
  };

  const del = ( email: String ) => {
    delUser((res:any) => {
      if(res) setUsers(res)
    }, email)
  };
  const edit = ( user: IUser ) => {
      if(user) setEUser(user)
  };



  React.useEffect(() => {
    getTable((res:any) => {
      if(res) setUsers(res)
      else setUsers(UserContextDefaultValues.list)
    })
  }, [])

  return (
    <UserContext.Provider value={{ list:users, editUser: eUser, add: addNew, update: update, delete: del, editable: edit}}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
    )
}

export default MyApp
