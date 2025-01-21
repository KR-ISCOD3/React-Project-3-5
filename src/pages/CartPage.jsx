import React, { useContext } from 'react'
import ProductContext from '../store/ProductProvider'

function CartPage() {
  const {cart,removeFromCart} = useContext(ProductContext)
  return (
    <div className='py-5'>
        {
          cart.map((e,i)=>{
            return(
              <li>{e.id} - {e.name} - {e.quantity} <button onClick={()=>removeFromCart(e.id)}>Remove</button></li>
              
            )
          })
        }
    </div>
  )
}

export default CartPage
