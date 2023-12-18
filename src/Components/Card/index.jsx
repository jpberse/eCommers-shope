import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Card({ price, title, images, category: {name}}) {

    const {count, setCount} = useContext(ShoppingCartContext)

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.2'>{name}</span>
                <img className='w-full h-full object-contain rounded-lg' src={images[0]} alt={title} />
                <button className='absolute top-0 right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full m-2 p-1' onClick={() => setCount(count + 1)} >
                    <svg width="24" height="24" viewBox="0 0 24 24" className='' xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0019 20C11.0019 20.5523 11.4497 21 12.0019 21C12.5542 21 13.0019 20.5523 13.0019 20L13.0019 12.9999L20.0019 12.9999C20.5542 12.9999 21.0019 12.5522 21.0019 11.9999C21.0019 11.4476 20.5542 10.9999 20.0019 10.9999H13.0019L13.0019 4C13.0019 3.44772 12.5542 3 12.0019 3C11.4497 3 11.0019 3.44772 11.0019 4V10.9999H4.00195C3.44967 10.9999 3.00195 11.4476 3.00195 11.9999C3.00195 12.5522 3.44967 12.9999 4.00195 12.9999H11.0019V20Z" fill="black"/>
                    </svg>
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light truncate'>{title}</span>
                <span className='text-md font-medium'>{`$${price}`}</span>
            </p>
        </div>
    )
}

export { Card };