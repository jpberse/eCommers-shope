import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Navbar() {
const { carProducts } = useContext(ShoppingCartContext)
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
        text: (
            <div className='flex items-center'>
                <svg className='mr-1' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2H3.67703C4.08593 2 4.45364 2.24895 4.6055 2.62861L5.15407 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H8.21106L6.87255 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.63088 18 4.29178 17.7967 4.1179 17.4711C3.94402 17.1455 3.96365 16.7506 4.16895 16.4438L6.55276 12.8819L3 4H1C0.447715 4 0 3.55228 0 3ZM8.35407 12H17.6459L20.0459 6H5.95407L8.35407 12Z" fill="black"/>
                    <path d="M7.5 21.25C7.5 22.2165 6.7165 23 5.75 23C4.7835 23 4 22.2165 4 21.25C4 20.2835 4.7835 19.5 5.75 19.5C6.7165 19.5 7.5 20.2835 7.5 21.25Z" fill="black"/>
                    <path d="M18.25 23C19.2165 23 20 22.2165 20 21.25C20 20.2835 19.2165 19.5 18.25 19.5C17.2835 19.5 16.5 20.2835 16.5 21.25C16.5 22.2165 17.2835 23 18.25 23Z" fill="black"/>
                </svg>
                {carProducts.length}
            </div>
        ),
        className: ''
    },
]
const activeStyle = 'underline underline-offset-4'


    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0 bg-white'>
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