import React from 'react';

// Mock data for past orders
const mockOrders = [
    { id: 'ORD-123', date: '2025-08-10', total: 15.99, status: 'Delivered', items: ['Chicken Sandwich', 'Coke'] },
    { id: 'ORD-124', date: '2025-08-12', total: 8.50, status: 'Delivered', items: ['Vegetable Wrap'] },
    { id: 'ORD-125', date: '2025-08-14', total: 22.75, status: 'Processing', items: ['Pizza Slice', 'Fries', 'Milkshake'] },
];

const OrderHistory = () => {
    return (
        <div className="order-history-card">
            <h2>Order History</h2>
            {mockOrders.length === 0 ? (
                <p>You haven't placed any orders yet.</p>
            ) : (
                <div className="order-list">
                    {mockOrders.map(order => (
                        <div key={order.id} className="order-item">
                            <div className="order-summary">
                                <div>
                                    <h4>Order #{order.id}</h4>
                                    <p>Date: {order.date}</p>
                                </div>
                                <div>
                                    <p>Total: ${order.total.toFixed(2)}</p>
                                    <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                                </div>
                            </div>
                            <div className="order-details">
                                <p><strong>Items:</strong> {order.items.join(', ')}</p>
                                <button className="reorder-btn">Re-Order</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistory;