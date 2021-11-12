
import { useEffect, useState } from "react";
import ItemAddedModal from "./ItemAddedModal";
import "../css/singleProduct.css"

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

const SingleProduct = (props) => {

  const [itemIsActive, setActivity] = useState(!itemIsInCart(props.id))
  const [apiResponse, setApiResponse] = useState([])
  const [addedToCartModal, setAddedToCartModal] = useState(false)

  const callRestApi = async (endpoint) => {

      const response = await fetch(endpoint);
      const jsonResponse = await response.json();
      return jsonResponse
  }
    
  useEffect(() => {

    let endpoint = `https://fakestoreapi.com/products/${props.id}`

    callRestApi(endpoint).then(
      result => {
        setApiResponse(result)
      }
    )
  }, [props.id])

  const updateCartItems = () => {

    if(!itemIsActive)
      return

    const newElement = {
      id: apiResponse.id,
      price: apiResponse.price,
      title: apiResponse.title,
      image: apiResponse.image,
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
    <section className="single-item-container">
        <h1 className="single-item-title">
            {apiResponse.title}
        </h1>
        <img className="single-item-image" src={apiResponse.image} alt={apiResponse.description}></img>
        <section className="price-and-cart">
            <section className="price">
                {apiResponse.price}$
            </section>
            <section className="add-to-cart" onClick={updateCartItems}>
            {
              itemIsActive ? "Add to cart" : "Product is in your cart"
            }
            </section>
        </section>
        <p className="single-item-description">
            {apiResponse.description}
        </p>
        <p className="rating">
          Rating: {apiResponse.rating && apiResponse.rating.rate} / {apiResponse.rating && apiResponse.rating.count}
        </p>
        {
          addedToCartModal ? 
          <ItemAddedModal title={apiResponse.title} closeModal={setAddedToCartModal} updateScreen={props.updateScreen}/>
          : null
        }
    </section>
  )
}

export default SingleProduct