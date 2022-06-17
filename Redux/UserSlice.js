import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../Components/ProductsData'

const userSlice = createSlice({
    name:'walmart',
    initialState:{
        electronicsList:[ProductData.electronics],
        clothingsList:[ProductData.clothings],
        aquariumList:[ProductData.aquarium],
        cartList1:[],
        cartList2:[],
        cartList3:[],
        electronicsTotal:0,
        aquariumTotal:0,
        clothingsTotal:0,
    },
    reducers:{
       
         removeItems(state,action){
            
            const type=action.payload.type    
            switch(type){
                case "electronics":
                                  state.electronicsList[0] = [{id:action.payload.item.id,pname:action.payload.item.name,pprice:action.payload.item.price},...state.electronicsList[0]]
                                  state.cartList1=state.cartList1.filter(item => item.id !== action.payload.item.id)
                                  state.electronicsTotal=0
                                  state.cartList1.map( item => state.electronicsTotal+=item.total)  
                                   break;
                case "clothings":state.clothingsList[0] = [{id:action.payload.item.id,pname:action.payload.item.name,pprice:action.payload.item.price},...state.clothingsList[0]]
                                 state.cartList2=state.cartList2.filter(item => item.id !== action.payload.item.id)
                                 state.clothingsTotal=0
                                 state.cartList2.map( item => state.clothingsTotal+=item.total)
                                    break;
                case "aquarium":state.aquariumList[0] = [{id:action.payload.item.id,pname:action.payload.item.name,pprice:action.payload.item.price},...state.aquariumList[0]]
                                state.cartList3=state.cartList3.filter(item => item.id !== action.payload.item.id)
                                state.aquariumTotal=0
                                state.cartList3.map( item => state.aquariumTotal+=item.total)
                                      break;
                default:alert("Happy or Sad ?")
            }
         },
         addItems(state, action){
            const newItem = action.payload
            state.electronicsList[0] = state.electronicsList[0].filter( item=> item.id!== newItem.productId)
            state.clothingsList[0] = state.clothingsList[0].filter( item=> item.id!== newItem.productId)
            state.aquariumList[0] = state.aquariumList[0].filter( item=> item.id!== newItem.productId)
            switch(newItem.type){
            case "electronics":state.cartList1.push({
                                id:newItem.productId,
                                name:newItem.productname,
                                price:newItem.productprice,
                                quantity:newItem.productquantity,
                                total:newItem.producttotal,
                                flag:newItem.flag
                                })
                                state.cartList1.map( item => state.electronicsTotal+=item.total)
                                break;
            case "clothings":state.cartList2.push({
                                id:newItem.productId,
                                name:newItem.productname,
                                price:newItem.productprice,
                                quantity:newItem.productquantity,
                                total:newItem.producttotal,
                                flag:newItem.flag
                                })
                                state.cartList2.map( item => state.clothingsTotal+=item.total)
                                break;
            case "aquarium":state.cartList3.push({
                                id:newItem.productId,
                                name:newItem.productname,
                                price:newItem.productprice,
                                quantity:newItem.productquantity,
                                total:newItem.producttotal,
                                flag:newItem.flag
                                })
                                state.cartList3.map( item => state.aquariumTotal+=item.total)
                                break;
            default:alert("Happy or Sad ?")
            
        }
         },
    }
     
})

export const cartActions = userSlice.actions;
export default userSlice;