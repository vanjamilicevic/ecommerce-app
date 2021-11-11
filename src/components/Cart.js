import "../css/cart.css"
import ItemInCart from "./ItemInCart"
import { useState } from "react"

const Cart = (props) => {

  const inTotal = () => {

    let allItems = JSON.parse(window.localStorage.getItem("cart"))
    let bill = 0
    for(let i = 0; i < allItems.length; i ++) {
      bill += parseFloat(allItems[i].amount) * parseFloat(allItems[i].price)
    }
    return bill.toFixed(2)
  }

  const [items, setItems] = useState(JSON.parse(window.localStorage.getItem("cart")))
  const [total, setTotal] = useState(inTotal)
  return (
    <section className="cart-holder">
{
      items.map(element => {
        return (
          <ItemInCart 

            key={element.id}
            id={element.id}
            image={element.image}
            price={element.price}
            title={element.title}
            amount={element.amount}
            setItems={setItems}
            setTotal={setTotal}
            inTotal={inTotal}
            setCartItems={props.setCartItems}
          />
      )

})
}
      <section className="total-bill-container">
        <p className="total-bill-title">Total:</p>
        <p className="total-bill">{total} $</p>
      </section>

    </section>
  )
}

export default Cart