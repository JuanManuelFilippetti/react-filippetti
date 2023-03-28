import './Navbar.css'
//import logo from './assets/cart.svg'
import CartWidget from '../../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <h1>Ecommerce</h1>
                <img src='logo' alt='logo' />
            </div>
            <div className='Button'>
                <button label="Juguetes Madera" />
                <button label="Didacticos" />
                <button label="Laberintos" />
            </div>
            <div className="cart">
                <CartWidget />
            </div>
        </nav>
    )
}


export default Navbar