import "../css/Shop.css";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$59",
      image: "https://picsum.photos/200?1"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$99",
      image: "https://picsum.photos/200?2"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$35",
      image: "https://picsum.photos/200?3"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "$49",
      image: "https://picsum.photos/200?4"
    }
  ];

  const addToCart = (product) => {
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="shop-container">
      <h1>🛒 My Shop</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;