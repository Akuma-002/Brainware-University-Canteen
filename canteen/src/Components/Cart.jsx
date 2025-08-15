import React from 'react';
import { Link } from 'react-router-dom'; 
// Mock data for popular items
const popularItems = [
    { id: 'prod1', name: 'Spicy Chicken Burger', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'prod4', name: 'Vegetable Spring Rolls', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'prod5', name: 'Chocolate Milkshake', imageUrl: 'https://via.placeholder.com/150' },
];

const Cart = () => {
    return (
        <div className="empty-cart-container">
            <div className="empty-cart-content">
                <div className="empty-cart-icon">🛒</div>
                <h1 className="empty-cart-title">Your Cart is Currently Empty</h1>
                <p className="empty-cart-subtitle">
                    Before you can checkout, you must add some delicious items to your cart.
                </p>
                <Link to="/menu" className="browse-menu-btn">
                    Browse Menu
                </Link>
            </div>
        </div>
    );
};

export default Cart;