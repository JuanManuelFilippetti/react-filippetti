import { getProducts, getProductsByCategory } from "../../asyncMock" 
import { useState, useEffect } from 'react'

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            }) 
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
    return <h1>Cargando...</h1>
    }
    return (
        <div>
            <h1>Saludo</h1> 
            <div>
                {
                    products.map(prod => {
                        return (
                            <div>
                                <h2>{products.name}</h2>
                                <img src={prod.img} alt={prod.name} style={{ width: 100}} />
                                <button>Ver detalle</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

    console.log(productsComponents)

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer