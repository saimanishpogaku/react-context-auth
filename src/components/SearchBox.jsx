import { useState, useEffect, useSelector } from "react";
import "../css/SearchBox.css"
import { useDispatch } from "react-redux";
import { setAllProducts } from "../slices/productsSlice";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const dispatch = useDispatch()

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
            if(!query) return;
            let products = await fetch(`https://dummyjson.com/products/search?q=${q}&limit=500`)
            products = await products.json();
            // console.log(products)
            dispatch(setAllProducts(products?.products))
        } catch (error) {
            console.log("ERROR in searchProducts() :",error)
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