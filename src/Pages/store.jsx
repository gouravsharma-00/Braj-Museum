import React, { useState } from 'react';
import '../styles/store.css';

const items = [
    { id: 1, name: 'Peda', price: 500, image: '/store/Prasad/peda.jpg', description: 'A delicious Indian sweet made from milk and sugar.' },
    { id: 2, name: 'Ladu', price: 500, image: '/store/Prasad/ladu.jpg', description: 'A popular Indian sweet made from flour, ghee, and sugar.' },
    { id: 3, name: 'Bondi', price: 500, image: '/store/Prasad/Bondi.jpg', description: 'A traditional Indian sweet made from tiny fried gram flour balls soaked in sugar syrup.' },
];

const Store = () => {
    const [cart, setCart] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleBuyClick = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="store-container">
            <h1>Prasad Store</h1>
            <div className="items">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>₹{item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                {item.name} - ₹{item.price}
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="total">
                Total: ₹{total}
            </div>
            <button className="buy-button" onClick={handleBuyClick}>Buy</button>
            {isDialogOpen && (
                <div className="dialog">
                    <div className="dialog-content">
                        <p>Function not accessible yet</p>
                        <button onClick={closeDialog}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Store;