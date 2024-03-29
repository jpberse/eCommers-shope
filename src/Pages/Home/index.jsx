import { useContext } from "react"; 
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ProductModal } from "../../Components/ProductModal";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context";


function Home() {
    const { search, filteredProducts, openModal, filterTitle} = useContext(ShoppingCartContext)

/*     if (!products) {
        return <div>Loading...</div>;
    } */

    function renderView() {

        if(filteredProducts?.length > 0) {
            return filteredProducts.map(product => (
                <Card key={product.id} data={product} {...product}/>
            ));
        } else {
            return <p>No Results Found</p>
        }
    }

    return(
        <div>
            <header className='flex items-center justify-center relative w-full mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </header> 
            <input className='rounded-lg shadow-md w-full p-4 mb-6 focus:outline-none focus:placeholder-transparent' 
            type='text' placeholder='Search a product' 
            value={filterTitle}
            onChange={search}/> 
            <CheckoutSideMenu />
            { openModal && (
                <ProductModal>
                    <ProductDetail />
                </ProductModal>
            )}
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
            </section>
        </div>
    )
}

export { Home };