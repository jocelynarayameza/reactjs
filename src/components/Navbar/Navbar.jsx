import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'> 
            <h1 className={classes.titulo}>E-commerce Videojuegos</h1>
            </Link>
            <section className={classes.navbar}>
                <NavLink to={`/category/Playstation`} className={classes.buttons}>PS5</NavLink>
                <NavLink to={`/category/Xbox`} className={classes.buttons}>Xbox One</NavLink>
                <NavLink to={`/category/Wii`} className={classes.buttons}>Nintendo Switch</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar