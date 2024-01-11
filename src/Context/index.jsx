import { createContext, useState, useEffect } from "react";
import { apiUrl } from '../api'

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

    // Get products
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    // Get products by title
    const [searchBytitleBar, setSearchBytitleBar] = useState('')

    function search(e) {
        setSearchBytitleBar(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`)
                const data = await response.json()
                setProducts(data);
            } catch (error) {
                console.error(`ups, ocurrio un error ${error}`);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    function filteredItemsBytitle(products, searchBytitleBar) {
        return products?.filter(product => product.title.toLowerCase().includes(searchBytitleBar.toLowerCase()))
    }

    useEffect(() => {
        if(searchBytitleBar) setFilteredProducts(filteredItemsBytitle(products, searchBytitleBar))
    }, [products, searchBytitleBar])

    console.log(filteredProducts);

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
            setOrder,
            products,
            search,
            searchBytitleBar,
            filteredProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}