function OrdersCard({ date, totalProducts, totalPrice }) {

    return (
        <div className='flex justify-between items-center border shadow-lg rounded-lg mb-4 p-4 w-80'>
                <p className='flex justify-between w-full'>
                    <div className='flex flex-col'>
                        <span className='font-light flex items-center gap-1 mb-1'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 5.89543 2.89543 5 4 5H6.25V3.75C6.25 3.33579 6.58579 3 7 3C7.41421 3 7.75 3.33579 7.75 3.75V5H16.25V3.75C16.25 3.33579 16.5858 3 17 3C17.4142 3 17.75 3.33579 17.75 3.75V5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V7ZM16.5 9.5C16.7929 9.79289 16.7929 10.2678 16.5 10.5607L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L8 13.0607C7.7071 12.7678 7.7071 12.2929 8 12C8.29289 11.7071 8.76776 11.7071 9.06066 12L11 13.9393L15.4393 9.5C15.7322 9.2071 16.2071 9.2071 16.5 9.5Z" fill="black"/>
                            </svg>
                            {date}
                        </span>
                        <span className='font-light flex items-center gap-1'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9C3 7.89543 3.89543 7 5 7H7ZM12 2.5C13.933 2.5 15.5 4.067 15.5 6V7H8.5V6C8.5 4.067 10.067 2.5 12 2.5ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z" fill="black"/>
                            </svg>
                            articles: {totalProducts}
                        </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-medium text-2xl'>${totalPrice}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.54778 18.5408L15.0885 12L8.54778 5.4593C8.49896 5.41049 8.45625 5.35788 8.41964 5.30243C8.18883 4.95287 8.20053 4.49031 8.45472 4.1522C8.48279 4.11487 8.5138 4.07906 8.54778 4.04509C8.65218 3.94069 8.77392 3.8642 8.90373 3.81562C9.0774 3.75062 9.26552 3.73558 9.44588 3.7705C9.63497 3.80711 9.81554 3.89864 9.96199 4.04509L17.2098 11.2929C17.3974 11.4805 17.5027 11.7348 17.5027 12C17.5027 12.2653 17.3974 12.5196 17.2098 12.7072L9.96199 19.955C9.57146 20.3455 8.9383 20.3455 8.54778 19.955C8.49896 19.9062 8.45625 19.8536 8.41964 19.7981C8.16335 19.41 8.20607 18.8825 8.54778 18.5408Z" fill="black"/>
                        </svg>
                    </div>
                </p>
        </div>
    )
}

export { OrdersCard }