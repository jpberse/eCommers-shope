import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext)
    const { orderId } = useParams();
    const currentOrder = order.find((orderItem) => orderItem.id === orderId);

    return(
        <div>
            <header className='flex justify-center items-center relative w-80 mb-2'>
                <Link to={'/my-orders'} className='absolute left-0 cursor-pointer'>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4637 5.4593L8.923 12L15.4637 18.5408C15.5126 18.5896 15.5553 18.6422 15.5919 18.6976C15.8482 19.0858 15.8054 19.6133 15.4637 19.955C15.0732 20.3455 14.4401 20.3455 14.0495 19.955L6.80168 12.7071C6.61415 12.5196 6.50879 12.2653 6.50879 12C6.50879 11.7348 6.61415 11.4805 6.80168 11.2929L14.0495 4.04509C14.4401 3.65457 15.0732 3.65457 15.4637 4.04509C15.8543 4.43561 15.8543 5.06878 15.4637 5.4593Z" fill="black"/>
                        </svg>
                    </button>
                </Link>
                <h1 className='font-medium text-xl'>My Order</h1>
            </header>
            <div className='flex flex-col w-80'>
            {currentOrder? currentOrder.products.map((product) => <OrderCard key={product.id} {...product} />) : order?.slice(-1)[0].products.map((product) => <OrderCard key={product.id} {...product} />)}
            </div>
        </div>
    )
}

export { MyOrder };