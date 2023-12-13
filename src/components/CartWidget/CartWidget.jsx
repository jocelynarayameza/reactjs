import cart from './assets/cart.svg'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div className={classes.button}>
            <button className='btn btn-info padding-xs-horizontal'>
            <img src={cart} alt="cart widget" width={"30px"}/>
            </button> 0
        </div>
    )
}

export default CartWidget