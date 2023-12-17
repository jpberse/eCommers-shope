import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Navbar() {
const { count } = useContext(ShoppingCartContext)
let menuLeft = [
    {
        to:'/',
        text: 'ShopE',
        className: 'font-black text-lg'
    },
    {
        to:'/',
        text: 'All',
        className: ''
    },
    {
        to:'/clothes',
        text: 'Clothes',
        className: ''
    },
    {
        to:'/electronics',
        text: 'Electronics',
        className: ''
    },
    {
        to:'/furnitures',
        text: 'Furnitures',
        className: ''
    },
    {
        to:'/Toys',
        text: 'Toys',
        className: ''
    },
    {
        to:'/others',
        text: 'Others',
        className: ''
    },
]

let menuRigth = [
    {
        to:'/email',
        text: 'fake@email.com',
        className: 'text-black/60'
    },
    {
        to:'/my-orders',
        text: 'My orders',
        className: ''
    },
    {
        to:'/my-account',
        text: 'My account',
        className: ''
    },
    {
        to:'/sign-in',
        text: 'Sign In',
        className: ''
    },
    {
        to:'/shop-car',
        text: `🛒${count}`,
        className: ''
    },
]
const activeStyle = 'underline underline-offset-4'


    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0'>
            <ul className='flex items-center gap-3'>
                {menuLeft.map((item, index) => (
                    <li
                        key={item.text}
                        className={item.className}
                    >
                        <NavLink  
                            to={item.to}
                            className={({ isActive }) => isActive && index !== 0 ? activeStyle:undefined}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))} 
            </ul>

            <ul className='flex items-center gap-3'>
                {menuRigth.map(item => (
                    <li
                        key={item.text}
                        className={item.className}
                    >
                        <NavLink 
                            to={item.to}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))} 
            </ul>
        </nav>
    )
}

export { Navbar };