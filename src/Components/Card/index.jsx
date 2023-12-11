function Card() {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.2'>Electronics</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Watch'/>
                <button className='absolute top-0 right-0 flex justify-center items-center bg-white/95 w-5 h-5 rounded-full m-2 p-3 font-medium'>+</button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Watch</span>
                <span className='text-md font-medium'>$3000</span>
            </p>
        </div>
    )
}

export { Card };