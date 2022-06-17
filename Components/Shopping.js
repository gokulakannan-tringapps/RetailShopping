import React from 'react'
import { useSelector } from "react-redux"
import {Box,Dialog,DialogContent, DialogTitle,Button,DialogActions,Typography} from '@mui/material'
import ProductCart from './ProductCart'
import Details from './Details'
import Content from "./Content"

export default function Shopping(props){
    console.log(props)
    const [total,setTotal]=React.useState(0)
    const [purchased,setPurchased]=React.useState([])
    
    function BuyProducts() {
        setPurchased(props.display)
        let t=0 
        props.display.map( (item) => (t+=item.total))
        setTotal(t)
    }

    return(
        <Box sx={{bgcolor:"#c9d42c", display:"flex",flexDirection:"column"}}>
            <Typography sx={{textAlign:"center",p:1,fontSize:30,fontWeight:"700"}}>{props.name} </Typography>
            <Content display={purchased} total={total}/>
            <Dialog  open={props.Status} onClose={props.Close}>
            <DialogTitle>Products</DialogTitle>
            <DialogContent >
                    <Details cartItems={props.cartItems} type={props.name}/>
                    <ProductCart display={props.display} type={props.name}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={BuyProducts}>Buy</Button>
                <Button onClick={props.Close}>Close</Button>
            </DialogActions>
            </Dialog>
            
        </Box>
    )
}