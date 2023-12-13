import { useState } from "react"
import classes from './ItemCount.module.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div>
            <div className={classes.divCount}>
                <button className={classes.button} onClick={decrement}>-</button>
                <h2> {quantity} </h2>
                <button className={classes.button} onClick={increment}>+</button>
            </div>
            <div className={classes.count}>
                <button className={classes.carritoBtn} onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito  </button>
            </div>
        </div>
    )
     
}


export default ItemCount