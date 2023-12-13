import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'

const ItemDetail = ({id, name, price, img, stock, category, description}) => {
    return(
        <article>
        <header>
            <h2 className={classes.title}> {name} </h2>  
        </header>
        <picture className={classes.imgContainer}>
            <img className={classes.img} src={img} alt={name} />
        </picture>
        <section className={classes.descriptionContainer}>
            <p className={classes.description}> {description} </p>
            <p className={classes.p}> Category: {category} </p>
            <p className={classes.p}> Price: {price} </p>
        </section>
        <footer>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', {quantity})} />
            </footer>
    </article>

    )


}

export default ItemDetail

