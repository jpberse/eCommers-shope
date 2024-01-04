import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext)
    console.log(order?.slice(-1)[0]);

    return(
        <div>
            MyOrder
            <div className='flex flex-col w-80'>
                {
                    order?.slice(-1)[0].products.map(product => (
                        <OrderCard {...product} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}

export { MyOrder };