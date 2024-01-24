import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
    const { isProductDetailOpen, toggleProductDetail, productToShow  } = useContext(ShoppingCartContext)
    const { image, title, price, description } = {...productToShow}

    return(
        <div className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed top-[68px] border bg-white shadow-xl rounded-lg w-[360px] h-[calc(100vh-68px)] m-2`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <button className='m-2' onClick={() => toggleProductDetail()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z" fill="black"/>
                    </svg>
                </button>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={image} alt={title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${price}</span>
                <span className='font-medium text-md mb-2'>{title}</span>
                <span className='font-light text-md'>{description}</span>
            </p>
        </div>
    )
}

export { ProductDetail };