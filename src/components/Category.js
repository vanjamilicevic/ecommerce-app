
import "../css/category.css"

const Category = (props) => {
 
  const updateScreen = () => {

    props.updateScreen(props.categoryTitle)
  }
  return (
    <section className="category-container" onClick={updateScreen}>
      <img className="category-image" src={props.image} alt={props.imageDescription} />
      <p className="category-title">
        {props.categoryTitle}
      </p>
    </section>
  )
}

export default Category