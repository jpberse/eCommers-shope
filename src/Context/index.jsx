import { createContext, useState } from "react";

export const  ShoppingCartContext = createContext();

export function ShoppingCartProvider ({ children }){
    //Shopping Cart . Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail . open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    function toggleProductDetail() {
        setIsProductDetailOpen(!isProductDetailOpen);
    }

    // Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}