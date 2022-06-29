

import { StateProvider } from "./StateProvider";

export const initialState = {
    basket: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case 'ADD_TO_BASKET':
            return {...state,basket: [...state.basket, {...action.item, qty:1}]
        }
        case 'REMOVE_FROM_CART':
            let newcart = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >=0){
                newcart.splice(index,1)
            }else{
                console.log("Errors when removing product from cart")
            }
            return {...state, basket: newcart
            };
            case 'INCREASE':
            let newBasket = [...state.basket];
            let item = newBasket.find(i => i.id === action.id);
            item.qty++;
            return {...state, basket: newBasket};
        
            case 'DECREASE':
                let newCart = [...state.basket];
                let prod = newCart.find(i => i.id === action.id);
                prod.qty--;
                return {...state, basket: newCart};
                
            default:
                return state;
    }
    
}

export default reducer;