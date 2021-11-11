import { useEffect, useState } from "react"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Product from "./Product"
import "../css/products.css"

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const sortResults = (sortBy, sortOrder) => {
  
  return function(first, second) {

    if (isNumeric(first[sortBy])) {
      first[sortBy] = Number(first[sortBy])
      second[sortBy] = Number(second[sortBy])
    }
  
    if(sortOrder === "ascending") {

      if (first[sortBy] < second[sortBy]) 
        return -1
      else if (first[sortBy] > second[sortBy]) 
        return 1
      return 0
    }
    else if (sortOrder === "descending") {

      if (first[sortBy] > second[sortBy]) 
      return -1
    else if (first[sortBy] < second[sortBy]) 
      return 1
    return 0
    } 
  }
}

const Products = (props) => {

  const callRestApi = async (endpoint) => {

    const response = await fetch(endpoint);
    const jsonResponse = await response.json()
    return jsonResponse
  }
 
  const [apiResponse, setApiResponse] = useState([])
  const [sortButtonTitle, setSortButtonTitle] = useState("Sort Results")

  useEffect(() => {

      let endpoint = undefined
      switch (props.category) {
        case "all":
          endpoint = "https://fakestoreapi.com/products"
          break
        case "Women's Clothing":
          endpoint = "https://fakestoreapi.com/products/category/women's%20clothing"
          break
        case "Men's Clothing":
          endpoint = "https://fakestoreapi.com/products/category/men's%20clothing"
          break
        case "jewelry":
          endpoint = "https://fakestoreapi.com/products/category/jewelery"
          break
        case "electronics":
          endpoint = "https://fakestoreapi.com/products/category/electronics"
          break
        default:
          break
      }

    callRestApi(endpoint).then(
      result => {
        
        const resultArray = []
        result.forEach(element => {
          resultArray.push(element)
        })

        setApiResponse(resultArray)
      }
    )
  }, [props.category])

  const sortItems = (eventKey, event) =>{

    let currentOrder = apiResponse.slice()
    switch (eventKey) {
      case "name-ascending":
        currentOrder.sort(sortResults("title","ascending"))
        setSortButtonTitle("Sorted by title ↑")
        break
      case "name-descending":
        currentOrder.sort(sortResults("title","descending"))
        setSortButtonTitle("Sorted by title ↓")
        break
      case "price-ascending":
        currentOrder.sort(sortResults("price","ascending"))
        setSortButtonTitle("Sorted by price ↑")
        break
      case "price-descending":
        currentOrder.sort(sortResults("price","descending"))
        setSortButtonTitle("Sorted by price ↓")
        break
      default:
        break
    }

    setApiResponse(currentOrder)
  }

  return (
    
    <section>
      <DropdownButton id="dropdown-basic-button" title={sortButtonTitle} variant="secondary" onSelect={sortItems}>
        <Dropdown.Item eventKey="name-ascending">Sort by name ↑</Dropdown.Item>
        <Dropdown.Item eventKey="name-descending">Sort by name ↓</Dropdown.Item>
        <Dropdown.Item eventKey="price-ascending">Sort by price ↑</Dropdown.Item>
        <Dropdown.Item eventKey="price-descending">Sort by price ↓</Dropdown.Item>
      </DropdownButton>
      <section className="products-container">
        {
          apiResponse.map(element => {

            return (
              <Product 
                updateCartItems={props.updateCartItems}
                updateProduct={props.updateProduct}
                key={element.id}
                id={element.id}
                image={element.image}
                price={element.price}
                title={element.title}
                screen="Single product"
                updateScreen={props.updateScreen}
              />
            )
          })
        }
      </section>
    </section>
    
  )
}

export default Products