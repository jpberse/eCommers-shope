import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context"
import { OrdersCard } from "../../Components/OrdersCard";

function MyOrders() {
    const { order } = useContext(ShoppingCartContext)

    return(
        <div>
            <header className='flex justify-center items-center relative w-80 '>
                <h1>My Orders</h1>
            </header>
            {
                order.map((order, index) => {
                    <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrdersCard {...order}/>
                    </Link>
                })
            }
        </div>
    )
}

export { MyOrders };