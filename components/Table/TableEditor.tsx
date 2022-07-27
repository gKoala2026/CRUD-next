import { Button, Input, Stack, TableCell, TableRow } from '@mui/material'
import * as React from 'react'
import { UserContext, IUser, UserContextDefaultValues } from '../../contexts/userContext'

import AddIcon from '@mui/icons-material/Add';

const TableEditor = () => {

    const userContext = React.useContext(UserContext)
    const inputName:any = React.useRef()
    const inputEmail:any = React.useRef()
    const inputAdress:any = React.useRef()
    const ariaLabel = { 'aria-label': 'description' }
    
    function addNewUser(user:IUser) {
        userContext.add(user)
    }
    function updateUser(user:IUser) {
        userContext.update(user)
    }


    return (
        <TableRow>
            <TableCell><Input inputRef={inputName} placeholder="Name" inputProps={ariaLabel} value={userContext.editUser.name || ''} onChange={e => userContext.editable({...userContext.editUser, name:e.target.value})} /></TableCell>
            <TableCell><Input inputRef={inputEmail} placeholder="Email" inputProps={ariaLabel} value={userContext.editUser.email || ''} onChange={e => userContext.editable({...userContext.editUser, email:e.target.value})} /></TableCell>
            <TableCell><Input inputRef={inputAdress} placeholder="Adress" inputProps={ariaLabel} value={userContext.editUser.adress || ''} onChange={e => userContext.editable({...userContext.editUser, adress:e.target.value})} /></TableCell>
            <TableCell>
                <Stack direction="row" spacing={2}>
                    <Button 
                    variant="outlined" 
                    onClick={
                        userContext.editUser==UserContextDefaultValues.editUser?
                        () => addNewUser({name: inputName.current.value, email: inputEmail.current.value, adress: inputAdress.current.value }):
                        () => updateUser({name: inputName.current.value, email: inputEmail.current.value, adress: inputAdress.current.value })
                    } 
                    startIcon={<AddIcon />}>
                        {userContext.editUser==UserContextDefaultValues.editUser?"Add New":"Update"}
                    </Button>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default TableEditor