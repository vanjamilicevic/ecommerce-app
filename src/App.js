
import "./css/app.css"
import { useState } from "react"
import Header from "./components/Header"
import Slides from "./components/Slides"
import Categories from "./components/Categories"
import Products from "./components/Products"
import Footer from "./components/Footer"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"

const App = () => {

  if(!window.localStorage.getItem("cart")) 
    window.localStorage.setItem("cart", "")

  const [activeScreen, setActiveScreen] = useState("landing")
  const [activeProduct, setActiveProduct] = useState("")
  const [cartItems, setCartItems] = useState(
      window.localStorage.getItem("cart") === "" ?
      0 :
      JSON.parse(window.localStorage.getItem("cart")).length
  )
  
  return (
    <div className="ecommerce-app">
      <Header updateScreen={setActiveScreen} cartItems={cartItems}/>
      <main>
        {
          activeScreen === "landing" ? 
          [ 
            <Slides key="slides" />,
            <Categories key="categories" 
              updateScreen={setActiveScreen}
            />
          ]
          : null
        }
        {
          activeScreen === "All Items" ?
          <Products 
            category="all" 
            updateScreen={setActiveScreen} 
            updateProduct={setActiveProduct} 
            updateCartItems={setCartItems}
          />
          : null
        }
        {
          activeScreen === "Electronics" ?
          <Products 
            category="electronics" 
            updateScreen={setActiveScreen} 
            updateProduct={setActiveProduct} 
            updateCartItems={setCartItems}
          />
          : null
        }
        {
          activeScreen === "Jewelry" ?
          <Products 
            category="jewelry" 
            updateScreen={setActiveScreen} 
            updateProduct={setActiveProduct} 
            updateCartItems={setCartItems}
          />
          : null
        }
        {
          activeScreen === "Women's Clothing" ?
          <Products 
            category="Women's Clothing" 
            updateScreen={setActiveScreen} 
            updateProduct={setActiveProduct} 
            updateCartItems={setCartItems}
          />
          : null
        }
        {
          activeScreen === "Men's Clothing" ?
          <Products 
            category="Men's Clothing" 
            updateScreen={setActiveScreen} 
            updateProduct={setActiveProduct} 
            updateCartItems={setCartItems}
          />
          : null
        }
        {
          activeScreen === "Single product" ?
          <SingleProduct 
            id={activeProduct}
            updateCartItems={setCartItems}
            updateScreen={setActiveScreen}
          />
          : null
        }
        {
          activeScreen === "Cart" ?
          <Cart 
            setCartItems={setCartItems}
          />
          : null
        }
      </main>
      <Footer />
    </div>
  )
}

export default App
