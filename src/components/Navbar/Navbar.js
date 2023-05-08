import './Navbar.css'
import CartWidget from '../../CartWidget/CartWidget'
import { useEffect, useState } from 'react'
import { getCategories } from '../../asyncMock'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(response => {
                setCategories(response)
            })
    }, [])

    return (
        <nav className='Navbar'>
            <div>
                <Link to='/'>Ecommerce</Link>
                <img src='/assest/logo' alt='logo' />
            </div>
            <div className='Button'>
                {
                    categories.map(cat => {
                        return (
                            <Link key={cat.id} to={'/category/${cat.slug}'} >{cat.description}</Link>
                        )
                    })                  
                }
            </div>
            <div className="cart">
                <CartWidget />
            </div>
        </nav>
    )
}


export default Navbar