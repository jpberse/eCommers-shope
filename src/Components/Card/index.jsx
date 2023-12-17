import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Card({ price, title, images, category: {name}}) {

    const {count, setCount} = useContext(ShoppingCartContext)

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.2'>{name}</span>
                <img className='w-full h-full object-contain rounded-lg' src={images[0]} alt={title} />
                <button onClick={() => setCount(count + 1)} className='absolute top-0 right-0 flex justify-center items-center bg-white/95 w-5 h-5 rounded-full m-2 p-3 font-medium'>+</button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light truncate'>{title}</span>
                <span className='text-md font-medium'>{`$${price}`}</span>
            </p>
        </div>
    )
}

export { Card };