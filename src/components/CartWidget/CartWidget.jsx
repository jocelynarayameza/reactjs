import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Context'
import cart from './assets/cart.svg'
import classes from './CartWidget.module.css'
import { useContext } from 'react'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to= '/cart'>
        <div className={classes.button}>
            <button className='btn btn-info padding-xs-horizontal'>
            <img src={cart} alt="cart widget" width={"30px"}/>
            {totalQuantity}
            </button> 
        </div>
        </Link>
    )
}

export default CartWidget