import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'
import './assets/logo.svg'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))

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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" >
      <a class="navbar-brand" href="http://localhost:3000">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <div className="Categories" to='/logo'>
            {
              categories.map(cat => {
                return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
              })
            }
              
          </div>
          
        </ul>
      </div>
    </div>
    <CartWidget />
    </nav>

  )
}

export default NavBar