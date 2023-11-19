import classes from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    return (
        <h1 className={classes.letterType}>{greeting}</h1>
    )   
}

export default ItemListContainer