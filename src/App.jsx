import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { products } from './data';

function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      if (itemIndex === -1) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }
      
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + amount } : item
      );
    });
  };

  const applyDiscount = (couponCode) => {
    if (couponCode === "เหมียว") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal - (subtotal * discount) + 100;
    return total.toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">อาหารแมว</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        calculateTotal={calculateTotal}
        applyDiscount={applyDiscount}
      />
    </div>
  );
}

export default App;


