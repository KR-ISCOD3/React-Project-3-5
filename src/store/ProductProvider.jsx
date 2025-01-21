import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fetch products from API
  const FetchAPI = async () => {
    try {
      const res = await axios.get(
        "https://product-server-json.onrender.com/products"
      );
      setProduct(res.data);
      console.table(res.data);
    } catch (e) {
      console.error("Error fetching products:", e);
    }
  };

  useEffect(() => {
    FetchAPI();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (productId) => {
    const productToAdd = product.find((item) => item.id === productId);
    if (productToAdd) {
      setCart((prevCart) => {
        const isProductInCart = prevCart.some((item) => item.id === productId);
        if (isProductInCart) {
          // Update quantity if product is already in cart
          return prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        // Add new product to cart
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      });
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ product, cart, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
