import './Navbar.css'
//import logo from './assets/cart.svg'
import CartWidget from '../../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <div className="Navbar">
                <h1>Ecommerce</h1>
                <button>Juguetes de Madera</button>
                <button>Didacticos</button>
                <button>Laberintos</button>
            </div>
            <div className="cart">
            <CartWidget />
            </div>
        </nav>
    )
}


export default Navbar