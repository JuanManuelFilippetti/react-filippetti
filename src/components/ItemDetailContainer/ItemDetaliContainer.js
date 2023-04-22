import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductsById('2')
            .then(response => {
                setProduct(response)
            })
    }, [])

    return (
        <div>
            <h1>Detalle de producto</h1>
            <div>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} />
            </div>
        </div>
    )
}

export default ItemDetailContainer