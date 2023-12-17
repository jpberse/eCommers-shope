function ProductDetail() {
    return(
        <aside className='flex flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <button>X</button>
            </div>
        </aside>
    )
}

export { ProductDetail };