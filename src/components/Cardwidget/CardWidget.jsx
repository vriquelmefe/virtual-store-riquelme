import React from 'react'
import './carditem.css'
import { FaCartArrowDown } from 'react-icons/fa';
// import Cart from '../Cart/Cart'

const CardItem = ({callShow}) => {
    // const [productos, setProductos] = useState([])
    
    return (
        <div className="icon-cart mt-1">
            <FaCartArrowDown  size="30px" onClick={callShow}/>
        </div>
    )
}

export default CardItem
