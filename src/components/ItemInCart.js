
import "../css/itemInCart.css"

const ItemInCart = (props) => {

  const increaseAmount = () => {

    const id = props.id
    const allItems = JSON.parse(window.localStorage.getItem("cart"))

    for (let i = 0; i < allItems.length; i ++) {

      if (allItems[i].id === id) {

        allItems[i].amount = allItems[i].amount + 1
        window.localStorage.setItem("cart", JSON.stringify(allItems))
        props.setItems(JSON.parse(window.localStorage.getItem("cart")))
        props.setTotal(props.inTotal)
      }
    }
  }

  const decreaseAmount = () => {

    const id = props.id
    const allItems = JSON.parse(window.localStorage.getItem("cart"))

    for (let i = 0; i < allItems.length; i ++) {
      
      if (allItems[i].id === id) {

        if(allItems[i].amount === 1)
          return 

        allItems[i].amount = allItems[i].amount - 1
        window.localStorage.setItem("cart", JSON.stringify(allItems))
        props.setItems(JSON.parse(window.localStorage.getItem("cart")))
        props.setTotal(props.inTotal)
      }
    }
  }
 
  const removeFromCart = () => {
    
    const allItems = JSON.parse(window.localStorage.getItem("cart"))
    const filteredItems = allItems.filter( (item) => item.id !== props.id)
    window.localStorage.setItem("cart", JSON.stringify(filteredItems))
    props.setItems(filteredItems)
    props.setTotal(props.inTotal)
    props.setCartItems(filteredItems.length)
  }

  return (
    <section className="item-in-cart-container">
      <img className="image-in-cart" src={props.image} alt="Item"/>
      <p className="item-in-cart-title">
        {props.title}
      </p>
      <section className="price-and-amount">
        <section className="plus-amount-minus">
          <section className="plus-minus">
            <i className="fas fa-plus" onClick={increaseAmount}></i>
            <i className="fas fa-minus" onClick={decreaseAmount}></i>
          </section>
          <p className="quantity">Quantity:</p>
          <p className="item-in-cart-amount">{props.amount}x</p>
          
        </section>
      
        <p className="item-in-cart-price">
          Price: {props.price}$
        </p>

        <i className="fas fa-trash-alt" onClick={removeFromCart}></i>

      </section>

      
    </section>
  )
}

export default ItemInCart