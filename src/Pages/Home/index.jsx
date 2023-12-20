import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { apiUrl } from "../../api";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`)
                const data = await response.json()
                setProducts(data);
            } catch (error) {
                console.error(`ups, ocurrio un error ${error}`);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    if (loading || !products) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            Home
            <ProductDetail />
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                products?.map((product) => (
                <Card key={product.id} data={product} {...product}/>
                    ))
            }
            </section>
        </div>
    )
}

export { Home };