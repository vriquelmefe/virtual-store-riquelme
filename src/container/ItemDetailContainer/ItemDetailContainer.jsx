import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading'

const ItemDetailContainer = ({ todosLosProductosLista }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false);

  const getItem = (id) => {

    return new Promise((resolve, reject) => {

      setTimeout(() =>
        resolve(todosLosProductosLista.find(item => item.id === id)), 2000)
    });
  }

  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getItem(2)
      .then(data => setItems(data))
      .catch(err => err)
      .finally(() => {
        setLoading(false)
      })
    // setLoading(false)

  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">

      <ItemDetail props={items} />
    </div>
  )
}

export default ItemDetailContainer
