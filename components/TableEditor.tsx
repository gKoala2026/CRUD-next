import { Button, Input, Stack, TableCell, TableRow } from '@mui/material'
import { NextPage } from 'next'
import * as React from 'react'
import { UserContext } from '../contexts/userContext'

import AddIcon from '@mui/icons-material/Add';

const TableEditor = () => {

    const userContext = React.useContext(UserContext)
    const inputName:any = React.useRef()
    const inputEmail:any = React.useRef()
    const inputAdress:any = React.useRef()

    const ariaLabel = { 'aria-label': 'description' }

    return (
        <TableRow>
            <TableCell><Input inputRef={inputName} placeholder="Name" inputProps={ariaLabel} /></TableCell>
            <TableCell><Input inputRef={inputEmail} placeholder="Email" inputProps={ariaLabel} /></TableCell>
            <TableCell><Input inputRef={inputAdress} placeholder="Adress" inputProps={ariaLabel} /></TableCell>
            <TableCell>
                <Stack direction="row" spacing={2}>
                    <Button 
                    variant="outlined" 
                    onClick={() => userContext.add({name: inputName.current.value, email: inputEmail.current.value, adress: inputAdress.current.value })} 
                    startIcon={<AddIcon />}>
                        Add New
                    </Button>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default TableEditor