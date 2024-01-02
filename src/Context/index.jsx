import { createContext, useState } from "react";

export const  ShoppingCartContext = createContext();

export function ShoppingCartProvider ({ children }){
    //Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // shopping Cart · Add products to cart
    const [carProducts, setCartProducts] = useState([])
    function onAdd(product){
        const productExists = cartProducts.some(that => that.id === product.id);

        if(productExists) {
            const productcart = carProducts.find(that => that.id === product.id);
            productcart.quantity += 1;
        } else {
            product.quantity += 1;
            setCartProducts([...carProducts, product])
        }
    }

    // shopping Cart · Order
    const [order, setOrder] = useState([])

    // Product Detail · Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    function toggleProductDetail() {
        setIsProductDetailOpen(!isProductDetailOpen);
    }
    
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})
    
    // Checkout Side Menu · Open/close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    function openCheckoutMenu() {
        setIsCheckoutSideMenu(true);
    }
    function closeCheckoutMenu() {
        setIsCheckoutSideMenu(false);
    }

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            carProducts,
            setCartProducts,
            isCheckoutSideMenu,
            openCheckoutMenu,
            closeCheckoutMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}