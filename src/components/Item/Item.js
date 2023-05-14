import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

    return (
        <article className="CartIdem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer clasName='ItemFooter'>
                <Link to='/item' clasName='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item
