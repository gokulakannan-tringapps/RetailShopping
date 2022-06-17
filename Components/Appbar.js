import React from 'react'
import { useSelector } from 'react-redux';
import { Typography,AppBar, Box, Toolbar, Avatar, Button } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import SetMealRoundedIcon from '@mui/icons-material/SetMealRounded';

import Shopping from './Shopping'

export default function Appbar(){

    const display1 = useSelector ((state) => state.waltmart.cartList1)
    const display2 = useSelector ((state) => state.waltmart.cartList2)
    const display3 = useSelector ((state) => state.waltmart.cartList3)

    const cartItems1 = useSelector ((state) => state.waltmart.electronicsList)
    const cartItems2 = useSelector ((state) => state.waltmart.clothingsList)
    const cartItems3 = useSelector ((state) => state.waltmart.aquariumList)

    const [open1, setOpen1]=React.useState(false)
    const [open2, setOpen2]=React.useState(false)
    const [open3, setOpen3]=React.useState(false)

    const handleOpenElectronics = () =>{
        setOpen1(true)
    }
    
    const handleOpenClothings = () =>{
        setOpen2(true)
    }

    const handleOpenAquarium = () =>{
        setOpen3(true)
    }

    const handleClose =()=>{
        setOpen1(false)
        setOpen2(false)
        setOpen3(false)
    }

    return(
        <Box sx={{width:"100%"}}>
            <AppBar position="static" sx={{p:3,bgcolor:"#313331", color:"#4aed1c", }}  >
            <Toolbar >
                    <Avatar sx={{p:1,fontSize:58,bgcolor:"white", color:"#313331", fontWeight:"700" }}>W</Avatar>
                    <Typography sx={{ml:2,fontWeight:"600", fontSize:45}} variant="h4" >WalMart Retail Store</Typography>
                    <Button variant="contained" onClick={handleOpenElectronics} sx={{color:"#313331",bgcolor:"#4aed1c",ml:15,fontSize:18,fontWeight:700}}><ElectricBoltIcon/>Electronics</Button>
                    <Button variant="contained" onClick={handleOpenClothings} sx={{color:"#313331",bgcolor:"#4aed1c",ml:2,fontSize:18,fontWeight:700}}><CheckroomRoundedIcon/>Clothings</Button>
                    <Button variant="contained" onClick={handleOpenAquarium} sx={{color:"#313331",bgcolor:"#4aed1c",ml:2,fontSize:18,fontWeight:700}}><SetMealRoundedIcon/>Aquarium</Button>
                </Toolbar>
            </AppBar>
            <Box sx={{display:"flex"}}>
            <Shopping name="electronics" cartItems={cartItems1} display={display1} Status={open1} Close={handleClose}/>
            <Shopping name="clothings" cartItems={cartItems2} display={display2} Status={open2} Close={handleClose}/>
            <Shopping name="aquarium" cartItems={cartItems3} display={display3} Status={open3} Close={handleClose}/>
            </Box>
        </Box>
    )

}