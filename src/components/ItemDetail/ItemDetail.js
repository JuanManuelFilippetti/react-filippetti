import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, img, price, stock }) => {

    const handleOnAdd = (quantity) => {
        
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <h3>Precio: ${price}</h3>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail