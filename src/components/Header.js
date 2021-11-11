
import "../css/header.css"

const Header = (props) => {

  const updateScreen = () => {

    props.updateScreen("landing")
  }

  const updateScreenCart = () => {

    props.updateScreen("Cart")
  }
  return (
    <header className="header-container">
      <section className="logo-container" onClick={updateScreen}>
        <img className="logo" src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Shopping logo"/>
        <section className="website-title">
          Online Marketplace
        </section>
      </section>
      <section className="cart-container" onClick={updateScreenCart}>
        <i className="cart-image fas fa-shopping-cart"></i>
        <p className="cart-items">
          {props.cartItems}
        </p>
      </section>
    </header>
  )
}
 
export default Header
