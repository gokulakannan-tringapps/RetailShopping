import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import { Table, TableBody, TableCell, TableRow, TableHead, TableFooter } from '@mui/material'
import {useSelector} from 'react-redux'

export default function Content(props){
  
        return(
            <Box sx={{borderStyle:"solid",borderColor:"#313331",bgcolor:"#c2bebc",}}>
        <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight:600,color:"#8a3d16"}} align="left">Product Id</TableCell>
            <TableCell sx={{fontWeight:600,color:"#8a3d16"}} align="left">Product Name</TableCell>
            <TableCell sx={{fontWeight:600,color:"#8a3d16"}} align="left">Product Price</TableCell>
            <TableCell sx={{fontWeight:600,color:"#8a3d16"}} align="left">Product Quantity</TableCell>
            <TableCell sx={{fontWeight:600,color:"#8a3d16"}} align="left">Product Total</TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
            {props.display.map( (item) => (  <TableRow key="item.name">
                                <TableCell sx={{color:"#012e7a",fontWeight:800}} align="left">{item.id}</TableCell>
                                <TableCell sx={{color:"#012e7a",fontWeight:800}} align="left">{item.name}</TableCell>
                                <TableCell sx={{color:"#012e7a",fontWeight:800}} align="left">{item.price}</TableCell>
                                <TableCell sx={{color:"#012e7a",fontWeight:800}} align="left">{item.quantity}</TableCell>
                                <TableCell sx={{color:"#046902", fontWeight:800, fontSize:"20px"}} align="left">Rs.{item.total}</TableCell>
                            </TableRow>  )) }
            </TableBody>
        </Table>
        <Typography sx={{color:"#8a3d16",textAlign:"center",fontSize:20,fontWeight:"400"}}>Total : Rs.{props.total} </Typography>
            </Box>
        )
}