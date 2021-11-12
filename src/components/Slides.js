
import SimpleImageSlider from "react-simple-image-slider"
import "../css/slides.css"

const images = [
  {url: "/assets/jewelry_1.jpg"},
  {url: "/assets/electronics_1.jpg"},
  {url: "/assets/clothing_1.jpg"},
  {url: "/assets/electronics_2.jpg"},
  {url: "/assets/clothing_2.jpg"},
  {url: "/assets/jewelry_2.jpg"},
  {url: "/assets/electronics_3.png"}
]
const Slides = () => {

  return (
    <section className="slider-container">
      <SimpleImageSlider
        width={"90%"}
        height={450}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        slideDuration={3}
      />
    </section>
  )
}

export default Slides