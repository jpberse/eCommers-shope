function OrdersCard({ date, totalProducts, totalPrice }) {

    return (
        <div className='flex justify-between items-center mb-3 border border-black'>
                <p className=''>
                    <span>{date}</span>
                    <span>{totalProducts}</span>
                    <span>{totalPrice}</span>
                </p>
        </div>
    )
}

export { OrdersCard }