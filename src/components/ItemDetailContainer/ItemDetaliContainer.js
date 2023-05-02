import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
//import { getProductsById } from "../../asyncMock"
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
                console.log(snapshot)

                const productsAdapted = { id: snapshot.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        //  getProductsById('2')
    //        .then(response => {
    //            setProduct(response)
    //        })
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
           
            {/* <div>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} />
                <h3>Precio: ${product.price}</h3>
                <ItemDetail stock={product.stock} initial={1} />
            </div> */}
        </div>
    )
}

export default ItemDetailContainer