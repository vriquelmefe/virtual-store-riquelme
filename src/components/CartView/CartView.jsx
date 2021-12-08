import React, { useContext }  from 'react'
// import './carditem.css'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'
import { NavLink } from 'react-router-dom'

const CardView = () => {
    const {vaciarCarrito, cart} = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="container my-5">
                    <h2>No agregaste items al carrito aún</h2>
                    <hr/>
                    <NavLink to="/" className="btn btn-primary">Volver</NavLink>
                </div>
    }

    
    return (
            <div>
                <h3>Carrito de Compras</h3>
                <hr />
                <div className="container">
                    {
                        cart.map(item => <Cart key={item.id} {...item}/>)
                    }
                </div>
                 <hr/>
            <div className="container">
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                <button className="btn btn-success mx-2">Terminar mi compra</button>
            </div>
            </div>
    )
}

export default CardView