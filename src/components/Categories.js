
import "../css/categories.css"
import Category from "./Category"
 
const Categories = (props) => {
  return (
    <section className="categories-container">
      <Category
        image={process.env.PUBLIC_URL + "/assets/all_products.png"}
        imageDescription="All products"
        categoryTitle="All Items"
        updateScreen={props.updateScreen}
      />
      <Category
        image={process.env.PUBLIC_URL + "/assets/electronics.png"}
        imageDescription="Electronics products"
        categoryTitle="Electronics"
        updateScreen={props.updateScreen}
      />
      <Category
        image={process.env.PUBLIC_URL + "/assets/clothing-women.png"}
        imageDescription="Women Clothing products"
        categoryTitle="Women's Clothing"
        updateScreen={props.updateScreen}
      />
      <Category
        image={process.env.PUBLIC_URL + "/assets/clothing-men.jpg"}
        imageDescription="Men Clothing products"
        categoryTitle="Men's Clothing"
        updateScreen={props.updateScreen}
      />
      <Category
        image={process.env.PUBLIC_URL + "/assets/jewelry.png"}
        imageDescription="Jewelry products"
        categoryTitle="Jewelry"
        updateScreen={props.updateScreen}
      />
    </section>
  )
}

export default Categories