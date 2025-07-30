import React, { useContext } from 'react';
import { UserDataContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const navigate = useNavigate();
  const { studentCode, cart, setCart } = useContext(UserDataContext);

  // Remove item from cart
  const removeItem = async (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    await axios.post('http://localhost:2007/update-cart', { studentCode, cart: updatedCart });
  };

  // Increase quantity
  const increaseQty = async (index) => {
    const updatedCart = cart.map((item, i) => i === index ? { ...item, quantity: item.quantity + 1 } : item);
    setCart(updatedCart);
    await axios.post('http://localhost:2007/update-cart', { studentCode, cart: updatedCart });
  };

  // Decrease quantity
  const decreaseQty = async (index) => {
    const updatedCart = cart.map((item, i) => i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
    setCart(updatedCart);
    await axios.post('http://localhost:2007/update-cart', { studentCode, cart: updatedCart });
  };

  // Proceed to checkout
  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item, idx) => (
              <li key={idx} className="flex items-center py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.type} | {item.description}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => decreaseQty(idx)} className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                    <span className="px-3">{item.quantity}</span>
                    <button onClick={() => increaseQty(idx)} className="px-2 py-1 bg-gray-200 rounded-r">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-indigo-600">₹{item.price * item.quantity}</span>
                  <button onClick={() => removeItem(idx)} className="mt-2 text-red-500 hover:underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold text-lg">Total: ₹{total}</span>
            <button onClick={proceedToCheckout} className="bg-indigo-600 text-white px-6 py-2 rounded-full">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
