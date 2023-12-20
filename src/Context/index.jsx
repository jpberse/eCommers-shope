import { createContext, useState } from "react";

export const  ShoppingCartContext = createContext();

export function ShoppingCartProvider ({ children }){
    //Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // shopping Cart · Add products to cart
    const [carProducts, setCartProducts] = useState([])

    // Product Detail · Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    function toggleProductDetail() {
        setIsProductDetailOpen(!isProductDetailOpen);
    }

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})


    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            carProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}