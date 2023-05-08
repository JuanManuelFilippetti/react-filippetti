import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useSearchParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => { 
        setLoading(true)
        
        const productsRef = doc(db, 'products', itemId)
        
        getDoc(productsRef)
            .then(snapshot => {
                const productsAdapted = { id: snapshot.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
            )
        }    

    return (
        <div className='ItemDetailContainer'>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer