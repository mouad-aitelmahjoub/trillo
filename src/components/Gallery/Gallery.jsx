import "./gallery.scss"
import Hotel1 from "../../img/hotel-1.jpg"
import Hotel2 from "../../img/hotel-2.jpg"
import Hotel3 from "../../img/hotel-3.jpg"

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery-item">
        <img src={Hotel1} alt="hotel1" className="gallery-photo" />
      </figure>
      <figure className="gallery-item">
        <img src={Hotel2} alt="hotel1" className="gallery-photo" />
      </figure>
      <figure className="gallery-item">
        <img src={Hotel3} alt="hotel1" className="gallery-photo" />
      </figure>
    </div>
  )
}

export default Gallery
