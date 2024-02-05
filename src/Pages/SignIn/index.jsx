import { useContext, useState, useRef } from 'react'; 
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';

function SignIn() {
    const { account, setSignOut, setAccount } = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)

    //Account
    const signAccount = localStorage.getItem('account')
    const parsedAccount = JSON.parse(signAccount)

    // Has an account 
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    function handleSignIn() {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        setSignOut(false)
        return <Navigate replace to={'/'} />
    }

    function createAnAccount() {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password') 
        }
        
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        setAccount(data)

        handleSignIn()
    }

    function renderLogIn() {
        return (
        <div className='flex flex-col w-80'>
            <p>
                <span className='font-ligth text-sm'>Email: </span>
                <span>{parsedAccount?.email}</span>
            </p>
            <p>
                <span className='font-ligth text-sm'>Password: </span>
                <span>{parsedAccount?.password}</span>
            </p>
            <Link
                to='/'>
                    <button 
                        className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2'
                        onClick={() => handleSignIn()}
                        disabled={!hasUserAnAccount}
                        >
                        Log in
                    </button>
            </Link>
            <div className='text-center'>
                <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
            </div>
            <button 
            className='shadow-lg disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
            onClick={() => setView('create-user-info')}
            disabled={hasUserAnAccount}
            >Sign up</button>
        </div>
        )
    }

    function renderCreateUserInfo() {

        return(
            <form ref={form} className='flex flex-col gap-4 w-80'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className='font-ligth text-sm'>Your name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        defaultValue={parsedAccount?.name}
                        placeholder='Nicole'
                        className='rounded-lg shadow-md placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder-transparent py-2 px-4'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className='font-light text-sm'>Your Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        defaultValue={parsedAccount?.email}
                        placeholder='hi@email.com'
                        className='rounded-lg shadow-md placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder-transparent py-2 px-4'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='password' className='font-ligth text-sm'>Your password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        defaultValue={parsedAccount?.password}
                        placeholder='*******'
                        className='rounded-lg shadow-md placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder-transparent py-2 px-4'
                    />
                </div>
                <Link to='/'>
                    <button 
                        className='bg-black text-white w-full rounded-lg py-3'
                        onClick={() => createAnAccount()}    
                    >
                        Create
                    </button>
                </Link>
            </form>
        )
    }

    function renderView() {
        return view === 'create-user-info' ?   renderCreateUserInfo() :  renderLogIn()
    }

    return(
        <div>
            <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome</h1>
            {renderView()}
        </div>
    )
}

export { SignIn };