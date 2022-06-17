import React from 'react'
import { MenuItem } from '@mui/material'
import { FormControl, InputLabel, Select, Typography } from '@mui/material'
import {Box,Button, TextField} from '@mui/material'
import {useDispatch} from 'react-redux'
import { cartActions } from '../Redux/UserSlice'

export default function Details(props){

    const type=props.type
    console.log(props)
    const [productname,setProductName] = React.useState()
    const [productId, setProductId] = React.useState(0)
    const [productquantity, setProductQuantity]= React.useState(1)
    const [productprice, setProductPrice]= React.useState("NA")
    const [producttotal, setProductTotal]=React.useState("NA")
    
    const [status,setStatus]=React.useState(true)
    const [qstatus,setQStatus]= React.useState(true)

    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch( cartActions.addItems({
              type,              
              productId,
              productname,
              productquantity,
              productprice,
              producttotal,
        }),
        )
        setProductPrice("NA")
        setProductTotal("NA")
        setProductQuantity(1)
        setStatus(true)
        setQStatus(true)
    }

    const handleProducts = (e) => {
        setProductName(e.target.value.pname)
        setProductId(e.target.value.id)
        setProductPrice(e.target.value.pprice)
        setProductTotal(e.target.value.pprice)
        setStatus(false)
    }

    const handleQuantity = (e) => {
        setProductQuantity(e.target.value)
        setProductTotal(e.target.value*productprice)
        setQStatus(false)
    }
    return(
        <Box sx={{display:"flex",mt:2}}>
            <FormControl sx={{width:170}}>
                <InputLabel id="products">Products</InputLabel>
                <Select labelId="products" value={productname} onChange={handleProducts} label="Products">
                    {props.cartItems[0].map( (item) => <MenuItem key={item.id} value={item}>{item.pname}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl disabled={status} sx={{ml:2,width:170}}>
                <InputLabel id="quantity">Quantity</InputLabel>
                <Select labelId="quantity" value={productquantity} onChange={handleQuantity} label="Quantity">
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>  
            <TextField disabled={status} sx={{ml:2, width:120 }} label="Price ($)" value={productprice} InputProps={{readOnly: true,}}/>
            <TextField disabled={qstatus}sx={{ml:2, width:120 }} label="Total (=)" value={producttotal} InputProps={{readOnly: true,}}/>
            <Button disabled={status} variant="contained" sx={{fontWeight:700,fontSize:10,ml:2}} onClick={addToCart}>Add To Cart</Button>
        </Box>
    )
}