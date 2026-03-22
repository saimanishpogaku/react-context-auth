import { useState, useEffect } from "react";
import "../css/SearchBox.css"

export default function SearchBox({ setProducts }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debouncing logic
  useEffect(() => {
    const timer = setTimeout(() => {
        searchProducts(query);
    }, 500); // delay

    return () => clearTimeout(timer);
  }, [query]);

  // API call (or console log)
    async function searchProducts(q){
        try {
            let products = await fetch(`https://dummyjson.com/products/search?q=${q}`)
            products = await products.json();
            // console.log(products)
            setProducts(prevproducts?.products)
        } catch (error) {
            console.log("ERROR in getAllProducts() :",error)
        }
    }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}