import './Navbar.css'
import logo from './assets/cart.svg'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Ecommerce</h1>
            <div>
                <button>Juguetes de Madera</button>
                <button>Didacticos</button>
                <button>Laberintos</button>
            </div>
        </nav>
    )
}

export default Navbar