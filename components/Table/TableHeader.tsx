import { TableCell, TableHead, TableRow } from "@mui/material"
import TableEditor from "./TableEditor"


const TableHeader = () => {
    return (
        <TableHead>
        <TableEditor />
        <TableRow>
          <TableCell sx={{display:'none'}} >_id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Adress</TableCell>
          <TableCell>action</TableCell>
        </TableRow>
      </TableHead>
    )
}

export default TableHeader