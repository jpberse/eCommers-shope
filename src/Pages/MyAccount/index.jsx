import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
    const { setAccount } = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const getAccount = localStorage.getItem('account')
    const parsedAccount = JSON.parse(getAccount)
    const form = useRef(null)

    function editAccount() {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        // Update Account
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        setAccount(data)
    }

    function renderUserInfo() {
        return (
            <section className='flex flex-col w-80'>
                <p>
                    <span className='font-light text-sm'>Name: </span>
                    <span>{parsedAccount?.name}</span>
                </p>
                <p>
                    <span className='font-light text-sm'>Email: </span>
                    <span>{parsedAccount?.email}</span>
                </p>
                <button 
                    className='shadow-md rounded-lg mt-6 py-3'
                    onClick={() => setView('edit-user-info')}
                >
                    Edit
                </button>
            </section>
        )
    }

    function renderEditUserInfo(){
        return (
            <form ref={form} className='flex flex-col gap-4 w-80'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className='font-light text-sm'>Your name: </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        defaultValue={parsedAccount.name}
                        placeholder='Peter'
                        className='rounded-lg shadow-md placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder-transparent py-2 px-4'
                />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className='font-light text-sm'>Your email: </label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        defaultValue={parsedAccount.email}
                        placeholder='hello@email.com'
                        className='rounded-lg shadow-md placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder-transparent py-2 px-4'
                />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='password' className='font-light text-sm'>Your password: </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        defaultValue={parsedAccount.password}
                        placeholder='*******'
                        className='rounded-lg shadow-md placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder-transparent py-2 px-4'
                />
                </div>
                <button
                    className='bg-black text-white w-full rounded-lg py-3 shadow-md'
                    onClick={() => {setView('user-info'), editAccount()}}
                >Edit</button>
            </form>
        )
    }


    return(
        <>
            <h1 className='font-medium text-xl text-center mb-6 w-80'>MyAccount</h1>
            {view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()}
        </>
    )
}

export { MyAccount };