import { Box,Table, TableBody, TableCell, TableRow, TableHead, Button } from '@mui/material'
import React from 'react'
import {useDispatch} from 'react-redux'
import { cartActions } from '../Redux/UserSlice'

export default function ProductCart(props){
    
    const dispatch = useDispatch();
    const removeFromCart = (item, type) => {
      dispatch( cartActions.removeItems({
          type,
          item     
      }),
      )}
    return(
      <Box >
        <Table >
        <TableHead>
          <TableRow >
            <TableCell sx={{color:"red"}}>Product Id</TableCell>
            <TableCell sx={{color:"red"}} align="left">Product Name</TableCell>
            <TableCell sx={{color:"red"}} align="left">Product Price</TableCell>
            <TableCell sx={{color:"red"}} align="left">Product Quantity</TableCell>
            <TableCell sx={{color:"red"}} align="left">Product Total</TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
                {props.display.map( (item) => ( <TableRow key="item.name">
                                <TableCell align="left">{item.id}</TableCell>
                                <TableCell align="left">{item.name}</TableCell>
                                <TableCell align="left">{item.price}</TableCell>
                                <TableCell align="left">{item.quantity}</TableCell>
                                <TableCell align="left">{item.total}</TableCell>
                                <TableCell><Button onClick={() => removeFromCart(item,props.type) }>Remove</Button></TableCell> 
                            </TableRow>
                            
                            )) }
                  
            </TableBody>
        </Table>
        </Box>
    )
}