import { useState, useEffect } from "react";
import "../css/Products.css"
import Pagination from "./Pagination";

export function ProductCard({ product }){

    return (
        <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt="thumbnail"></img>
            <span>{product.title}</span>
            <span>{product.price}</span>
        </div>
    )
}

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadProducts() {
            const data = await getAllProducts();
            console.log("products", data); // Now actual data
            setProducts(data?.products);
        }
    
        loadProducts();
    }, []);

    async function getAllProducts(){
        try {
            let products = await fetch('https://dummyjson.com/products?limit=500')
            products = await products.json();
            // console.log(products)
            return products;
        } catch (error) {
            console.log("ERROR in getAllProducts() :",error)
        }
    }

    const PAGE_SIZE = 10;
    let totalPages = Math.ceil(products.length/PAGE_SIZE);
    let start = (currentPage - 1)*PAGE_SIZE;
    let end = start+PAGE_SIZE;

    return (
        <>
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <div className="product-container">
                {products.length ? products.slice(start,end).map((product) => <ProductCard key={product.id} product={product}/>): "No products found!"}
            </div>
        </>
    )
}