import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useEffect, useState, db } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'


const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesRef)
        .then(snapshot => {
            const categoriesAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setCategories(categoriesAdapted)
        })
    }, [])

    return (
        <nav className='Navbar'>
                <Link to='/'>Ecommerce</Link>
                <img src='/assest/logo' alt='logo' />
                <div className="Categories">
                    {
                        categories.map(cat => {
                            //return <NavLink key={cat.id} to={'/category/${cat.slug}'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                        })
                    }
                </div>
                <CartWidget />
        </nav>
    )
}


export default Navbar