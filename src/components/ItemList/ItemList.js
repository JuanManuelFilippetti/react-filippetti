const ItemList = ({ products }) => {
    return (
            <div>
                {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>{products.name}</h2>
                            <img src={product.img} alt={product.name} style={{ width: 100}} />
                            <p>Precio: ${product.price}</p>
                            <button>Ver detalle</button>
                        </div>
                    )
                })}
            </div>

    )
}

export default ItemList