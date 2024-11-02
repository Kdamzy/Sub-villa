import React, { createContext, useState, useEffect} from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [CartItems, setCartItems] = useState(getDefaultCart());
   
    const addToCart = (itemid) =>{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
    }

    const removeFromCart = (itemid) =>{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    useEffect(() => {
        console.log(CartItems);
    }, [CartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * CartItems[item];
            }
        }
        return totalAmount
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                totalItem+= CartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue = { all_product, CartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
