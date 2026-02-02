import './Cart.css';
const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log("cart", cart);
  return (
    <div>
      <h3>add to cart:{cart.length}</h3>
      <div className="cart-container">
        {cart.map((item, index) => {
          return (
            <div className="cart" key={`${item.id}-${index}`}>
              <p>{item.name}</p>
              <img src={item.img} alt="" />
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
