import classes from './ItemListContainer.module.css'
import { getProducts, getProductsByCategory } from '../../asynMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(response =>{
            setProducts(response)
        })
    }, [categoryId]  )
    
   
    return (
        <div>
            <h1 className={classes.letterType}>{greeting}</h1>
            <ItemList className={classes.itemContainer} products={products} />
            </div>
            
    )
}

export default ItemListContainer