import { Link } from "react-router-dom"
import classes from './Item.module.css'

const Item = ({id, name, price, stock, img }) => {
    return (
        <article className={classes.itemContainer}>
            <header>
                <h2 className={classes.name}>
                    {name}
                </h2>

            </header>
        <picture className={classes.imgContainer}>
            <img className={classes.img} src={img} alt={name} />
        </picture>
        <section>
            <p className={classes.p}>Precio: {price} </p>
            <p className={classes.p}>Stock disponible: {stock} </p>
        </section>
        <footer className={classes.detail}> 
            <Link to={`/item/${id}`} >Ver detalles</Link>
        </footer>
        </article>

    )
}

export default Item