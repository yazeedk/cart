import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './cart.css'; // Importing the CSS file

const Cart = ({ items, onRemoveItem }) => {
  // Calculate the total cost of all items in the cart
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <header className="cart-header">Shopping Cart</header>
      <input type="text" className="search-bar" placeholder="Search products..." />

      <table className="product-table">
        <thead className="product-table-header">
          <tr>
            <th className="header-item">Product</th>
            <th className="header-item">Price</th>
            <th className="header-item">Quantity</th>
            <th className="header-item">Total</th>
            <th className="header-item">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="product-row">
              <td className="product-cell">{item.name}</td>
              <td className="product-cell">${item.price.toFixed(2)}</td>
              <td className="product-cell">
                <input
                  type="number"
                  className="quantity-input"
                  value={item.quantity}
                  readOnly
                />
              </td>
              <td className="product-cell">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="product-cell">
                <button
                  className="remove-button"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grand-total">
        <span>Total:</span>
        <span>${calculateTotal().toFixed(2)}</span>
      </div>
    </div>
  );
};

// PropTypes for prop validation
Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
