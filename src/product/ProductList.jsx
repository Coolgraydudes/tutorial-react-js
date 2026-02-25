import { useEffect, useRef, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false)

    function handleClick() {
        setLoad(true)
    }

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch("/products.json")
            const data = await response.json()
            setProducts(data)
        }

        console.log("Load Product")
        if (load) {
            fetchProduct()
        }

    },[load]);


    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Prudocts</button>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </>
    )
}