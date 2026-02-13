import { useEffect, useRef, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false)

    function handleClick() {
        setLoad(true)
    }

    useEffect(() => {
        console.info("fetching data")
        if (load) {
            fetch("/products.json")
                .then((response) => response.json())
                    .then((data) => setProducts(data))
        }

        return () => {
        console. log("ProductList component unmounted");
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