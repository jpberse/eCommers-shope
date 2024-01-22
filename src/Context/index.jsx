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
    const [filterTitle, setFilterTitle] = useState('')

    // Get products by category
    const [filterCategory, setFilterCategory] = useState('')

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
        return products?.filter(product => product.category.toLowerCase().includes(filterCategory.toLowerCase()))
    }
    
    function filterBy(searchType, products, filterTitle, filterCategory) {
        if (searchType === 'BY_TITLE') {
            return filteredProductsBytitle(products, filterTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
            return filteredProductsByCategory(products, filterCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredProductsByCategory(products, filterCategory).filter(product => product.title.toLowerCase().includes(filterTitle.toLowerCase()))
        }
    
        if (!searchType) {
            return products
        }
    }

    useEffect(() => {
        if (filterTitle && filterCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, filterTitle, filterCategory))
        if (filterTitle && !filterCategory) setFilteredProducts(filterBy('BY_TITLE', products, filterTitle, filterCategory))
        if (!filterTitle && filterCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, filterTitle, filterCategory))
        if (!filterTitle && !filterCategory) setFilteredProducts(filterBy(null, products, filterTitle, filterCategory))
    }, [products, filterTitle, filterCategory])

    console.log(filterCategory);

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
            filterTitle,
            filterCategory,
            setFilterCategory,
            filteredProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}