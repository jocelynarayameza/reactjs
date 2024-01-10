import classes from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, total, removeItem } = useContext(CartContext);
  

  return (
    <>
      <h1 className={classes.carrito}>Carrito de compras</h1>
      <div>
        {cart.map((prod) => {
          return (
            <div className={classes.detail} key={prod.id}>
              <h2>{prod.name}</h2>
              <h3>Cantidad: {prod.quantity}</h3>
              <h3>Precio unidad: ${prod.price}</h3>
              <h3>Subtotal: ${prod.quantity * prod.price}</h3>
              <button onClick={() => removeItem(prod.id)}>Eliminar del carrito</button>
            </div>
          );
        })}
      </div>
      <div className={classes.total}>
      <h2>Total: ${total}</h2>
      <div className={classes.checkout}>
      <button onClick={() => clearCart()} className={classes.clear}>Limpiar carrito</button>
      <Link to="/checkout">Checkout</Link>
      </div>
      </div>
    </>
  );
};

export default Cart
