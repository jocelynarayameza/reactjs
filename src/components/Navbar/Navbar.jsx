import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <h1 className={classes.titulo}>E-commerce Videojuegos</h1>
            <section className={classes.navbar}>
                <button className={classes.buttons}>PS5</button>
                <button className={classes.buttons}>Xbox One</button>
                <button className={classes.buttons}>Nintendo Switch</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar