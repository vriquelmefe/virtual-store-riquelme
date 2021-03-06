import React from 'react'
import './ItemList.css'

import ItemProducto from '../ItemProducto/ItemProducto'


const ItemList = ({ listproducto }) => {
  return (
    
    <div className="row d-flex justify-content-around  flex-wrap h-100">
      {
      listproducto.map(producto => 
        <ItemProducto key={producto.id} producto={producto}/>
      )
      }

    </div>

  )
}

export default ItemList
