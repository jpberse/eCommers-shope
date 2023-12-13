import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { apiUrl } from "../../api";

function Home() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`)
                const data = await response.json()
                setProducts(data);
            } catch (error) {
                console.error(`ups, ocurrio un error ${error}`);
            }
        }
        fetchData()
    }, [])

    return(
        <div>
            Home
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                products?.map((product) => (
                <Card key={product.id} {...product}/>
                    ))
            }
            </section>
        </div>
    )
}

export { Home };