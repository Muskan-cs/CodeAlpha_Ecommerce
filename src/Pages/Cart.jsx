import React, { useState } from 'react'
import CartItems from '../Components/CartItems/CartItems'

const Cart = () => {
    const [showCheckout, setShowCheckout] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
    }

    return (
        <div>
            <CartItems setShowCheckout={setShowCheckout} />

            {showCheckout && (
                <div style={modalOverlayStyle}>
                    <div style={modalStyle}>
                        {!orderPlaced ? (
                            <form onSubmit={handlePlaceOrder}>
                                <h2 style={{ marginBottom: '15px' }}>Checkout & Order Processing</h2>
                                <p style={{ marginBottom: '10px' }}>Enter Delivery Details:</p>
                                <input type="text" placeholder="Full Name" required style={inputStyle} />
                                <input type="text" placeholder="Shipping Address" required style={inputStyle} />
                                <input type="text" placeholder="Phone Number" required style={inputStyle} />
                                <button type="submit" style={btnStyle}>Place Order</button>
                                <button type="button" onClick={() => setShowCheckout(false)} style={cancelBtnStyle}>Cancel</button>
                            </form>
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ color: '#28a745', marginBottom: '10px' }}>🎉 Order Placed Successfully!</h2>
                                <p style={{ color: '#555', marginBottom: '20px' }}>Thank you for your order. Order ID: #{Math.floor(100000 + Math.random() * 900000)}</p>
                                <button onClick={() => { setShowCheckout(false); setOrderPlaced(false); }} style={btnStyle}>Close</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
}

const modalStyle = {
    background: '#fff', padding: '30px', borderRadius: '10px', width: '400px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
}

const inputStyle = {
    width: '100%', padding: '10px', margin: '8px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc'
}

const btnStyle = {
    width: '100%', padding: '12px', background: '#ff4141', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold'
}

const cancelBtnStyle = {
    width: '100%', padding: '10px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '8px'
}

export default Cart