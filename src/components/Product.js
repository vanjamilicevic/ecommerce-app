
import "../css/product.css"
import { useState } from "react"
import ItemAddedModal from "./ItemAddedModal"

const itemIsInCart = (id) => {
  const cart = window.localStorage.getItem("cart")
  if (cart !== "") {

    const itemsInCart = JSON.parse(window.localStorage.getItem("cart"))
    for(let i = 0; i < itemsInCart.length; i++) {

      if (itemsInCart[i].id === id)
        return true
    }

    return false
  }
}

const Product = (props) => {

  const [itemIsActive, setActivity] = useState(!itemIsInCart(props.id))
  const [addedToCartModal, setAddedToCartModal] = useState(false)
  const updateScreenAndProduct = () => {

    props.updateScreen(props.screen)
    props.updateProduct(props.id)
  }

  const updateCartItems = () => {

    if(!itemIsActive)
      return

    const newElement = {
      id: props.id,
      price: props.price,
      title: props.title,
      image: props.image,
      amount: 1
    }

    const currentCart = window.localStorage.getItem("cart")
    let newCart = undefined
    if (currentCart === "") 
      newCart = [newElement]
    else {
      newCart = JSON.parse(currentCart)
      newCart.push(newElement)
    }

    window.localStorage.setItem("cart", JSON.stringify(newCart))
    props.updateCartItems(JSON.parse(window.localStorage.getItem("cart")).length)

    setActivity(false)
    setAddedToCartModal(true)
  }

  return (
    <section className="item-container" >
      <section className="title-container">
        <h1 className="item-title" onClick={updateScreenAndProduct}>
          {props.title}
        </h1>
      </section>
      <section className="image-container" onClick={updateScreenAndProduct}>
        <img className="item-image" src={props.image} alt="Item"/>
      </section>
      <section className="price-container">
        <p className="item-price">
          {props.price}$
        </p>
      </section>
      <section className="add-to-cart-container" onClick={updateCartItems}>
        {
          itemIsActive ? "Add to cart" : "Product is in your cart"
        }
      </section>
      {
        addedToCartModal ? 
        <ItemAddedModal title={props.title} closeModal={setAddedToCartModal} updateScreen={props.updateScreen}/>
        : null
      }
    </section>
  )
}
  
export default Product