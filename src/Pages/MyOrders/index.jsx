import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context"
import { OrdersCard } from "../../Components/OrdersCard";

function MyOrders() {
    const { order } = useContext(ShoppingCartContext)

    return(
        <div>
            <header className='flex justify-center items-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </header>
            {
                order.map((order) => {
                    return(
                        <Link key={order.id} to={`/my-orders/${order.id}`}>
                            <OrdersCard {...order} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export { MyOrders };