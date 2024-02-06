import { useRoutes } from 'react-router-dom'
import { ShoppingCartContext} from '../Context'
import { useContext } from 'react'
import { Home } from '../Pages/Home'
import { MyAccount } from '../Pages/MyAccount'
import { MyOrder } from '../Pages/MyOrder'
import { MyOrders } from '../Pages/MyOrders'
import { SignIn } from '../Pages/SignIn'
import { NotFound } from '../Pages/NotFound'

function AppRoutes() {
    const { signOut } = useContext(ShoppingCartContext)

    let routes = useRoutes([
        { path:'/', element: <Home /> },
        { path:'/mens-clothing', element: <Home /> },
        { path:'/womens-clothing', element: <Home /> },
        { path:'/electronics', element: <Home /> },
        { path:'/jewelery', element: <Home /> },
        { path:'my-account', element: signOut ? <SignIn /> : <MyAccount /> },
        { path:'my-order', element: signOut ? <SignIn /> : <MyOrder /> },
        { path:'my-orders', element: signOut ? <SignIn /> : <MyOrders /> },
        { path:'my-orders/last', element: signOut ? <SignIn /> : <MyOrder /> },
        { path:'my-orders/:orderId', element: signOut ? <SignIn /> : <MyOrder /> },
        { path:'sign-in', element: <SignIn /> },
        { path:'/*', element: <NotFound /> }
    ])

    return routes
}

export { AppRoutes };