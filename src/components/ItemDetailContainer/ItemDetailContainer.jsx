import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'products', itemId)
        
        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })
    }, [itemId]  )
    
    if(loading){
        return <h1>Cargando producto</h1>
    }
   
    return (
        <div>
            <ItemDetail {...product} />
            </div>           
    )
}

export default ItemDetailContainer