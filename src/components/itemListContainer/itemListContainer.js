import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if(loading) {
        return (
            <div>
                <h2>Cargando...</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer