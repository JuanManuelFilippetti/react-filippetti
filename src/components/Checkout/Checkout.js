import { useCart } from '../../context/CartContext'

const Checkout = () => {

    const { cart, total } = useCart()
    
    const createOrder = (userData) => {
        const objOrder = {
            buyer: {
                name: 'Juan Manuel Filippetti',
                phone: '12345678',
                email: 'email@email.com'
            },
            items: cart,
            total
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            {/* <Button onClick={createOrder}>Crear orden</Button> */}
        </div>
    )
}

export default Checkout