import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../styles/theme'
import { UserContext, IUser, UserContextDefaultValues } from '../contexts/userContext'
import { getTable, addUser, delUser, updateUser } from '../service/table'

function MyApp({ Component, pageProps }: AppProps) {

  const [users, setUsers] = React.useState<Array<IUser>>(UserContextDefaultValues.list);

  const addNew = (newUser: IUser) => {
    addUser((res:any) => {
      if(res) setUsers(res)
    }, newUser)
    // setUsers([...users, newUser]);
  };

  const update = ( newUser: IUser ) => {

    updateUser((res:any) => {
      if(res) setUsers(res)
    })
  };

  const del = ( email: String ) => {
    delUser((res:any) => {
      if(res) setUsers(res)
      console.log('--------',res)
    }, email)
  };


  React.useEffect(() => {
    getTable((res:any) => {
      if(res) setUsers(res)
      else setUsers(UserContextDefaultValues.list)
    })
  }, [])

  return (
    <UserContext.Provider value={{ list:users, add: addNew, update: update, delete: del}}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
    )
}

export default MyApp
