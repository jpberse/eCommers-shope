import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Card( { id, price, title, image, category, data} ) {

    const { count, setCount, toggleProductDetail, setProductToShow, carProducts, setCartProducts, openCheckoutMenu } = useContext(ShoppingCartContext)

    function showProduct(productDetail) {
        toggleProductDetail()
        setProductToShow(productDetail)
    }

    function addProductsToCart(e, productData) {
        e.stopPropagation();
        setCartProducts([...carProducts, productData])
        openCheckoutMenu();
    }

    function renderIcon(id){
        const isInCart = carProducts.some(product => product.id === id)

        if (isInCart) {
            return (
                <button className='absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1' onClick={(e) => e.stopPropagation()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9953 6.96425C21.387 6.57492 21.3889 5.94176 20.9996 5.55005C20.6102 5.15834 19.9771 5.15642 19.5854 5.54575L8.97661 16.0903L4.41377 11.5573C4.02196 11.1681 3.3888 11.1702 2.99956 11.562C2.61032 11.9538 2.6124 12.5869 3.0042 12.9762L8.27201 18.2095C8.66206 18.597 9.29179 18.5969 9.68175 18.2093L20.9953 6.96425Z" fill="black"/>
                    </svg>
                </button>
            )
        } else {
            return (
                <button className='absolute top-0 right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full m-2 p-1' onClick={(e) => {addProductsToCart(e, data);}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" className='' xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0019 20C11.0019 20.5523 11.4497 21 12.0019 21C12.5542 21 13.0019 20.5523 13.0019 20L13.0019 12.9999L20.0019 12.9999C20.5542 12.9999 21.0019 12.5522 21.0019 11.9999C21.0019 11.4476 20.5542 10.9999 20.0019 10.9999H13.0019L13.0019 4C13.0019 3.44772 12.5542 3 12.0019 3C11.4497 3 11.0019 3.44772 11.0019 4V10.9999H4.00195C3.44967 10.9999 3.00195 11.4476 3.00195 11.9999C3.00195 12.5522 3.44967 12.9999 4.00195 12.9999H11.0019V20Z" fill="black"/>
                        </svg>
                </button>
            )
        }

    }

    return (
        <div onClick={() => showProduct(data)} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.2'>{category}</span>
                <img className='w-full h-full object-contain rounded-lg' src={image} alt={title} />
                {renderIcon(id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light truncate'>{title}</span>
                <span className='text-md font-medium'>${price}</span>
            </p>
        </div>
    )
}

export { Card };