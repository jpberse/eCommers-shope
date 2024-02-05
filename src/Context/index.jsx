import { createContext, useState, useEffect } from "react";
import { apiUrl } from '../api'

export const  ShoppingCartContext = createContext();

export function initializeLocalStorage() {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }

}

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

    // My account 
    const [account, setAccount] = useState({})

    // Sign Out

    const [signOut, setSignOut] = useState(false)

    // Product Detail · Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    function toggleProductDetail() {
        setIsProductDetailOpen(!isProductDetailOpen);
        setOpenModal(!openModal)
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
    const [filterTitle, setFilterTitle] = useState(null)

    // Get products by category
    const [filterCategory, setFilterCategory] = useState(null)

    function search(e) {
        setFilterTitle(e.target.value)
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

    function filteredProductsBytitle(products, filterTitle) {
        return products?.filter(product => product.title.toLowerCase().includes(filterTitle.toLowerCase()))
    }
    
    function filteredProductsByCategory(products, filterCategory) {
        return products?.filter(product => product.category.toLowerCase() === filterCategory.toLowerCase());
    }
    
    function filterBy(searchType, products, filterTitle, filterCategory) {
        if (searchType === 'BY_TITLE') {
            return filteredProductsBytitle(products, filterTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
            return filteredProductsByCategory(products, filterCategory)
        }
    
        if (!searchType) {
            return products
        }
    }

    useEffect(() => {
        if (filterTitle && !filterCategory) setFilteredProducts(filterBy('BY_TITLE', products, filterTitle, filterCategory))
        if (!filterTitle && filterCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, filterTitle, filterCategory))
        if (!filterTitle && !filterCategory) setFilteredProducts(filterBy(null, products, filterTitle, filterCategory))
    }, [products, filterTitle, filterCategory])

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            openModal,
            setOpenModal,
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
            filterTitle,
            filterCategory,
            setFilterCategory,
            filteredProducts,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}