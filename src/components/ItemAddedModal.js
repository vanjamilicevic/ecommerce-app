
import "../css/itemAddedModal.css"
import { useState } from "react"
import Button from "react-bootstrap/Button"

const ItemAddedModal = (props) => {

  const closeModal = () => {
    props.closeModal(false)
  }

  const toCheckout = () => {
    props.updateScreen("Cart")
  }

  return (
    <section className="item-added-modal-container">
      <section className="item-added-modal-content">
        <p>
          {props.title} added to your cart!
        </p>
        <section className="button-container">
          <Button variant="outline-success" onClick={toCheckout}>Go to Checkout</Button>
          <Button variant="outline-danger" onClick={closeModal}>Close</Button>
        </section>
      </section>
    </section>
  )
}

export default ItemAddedModal