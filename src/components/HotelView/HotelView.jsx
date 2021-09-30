import Gallery from "../Gallery/Gallery"
import HotelDetails from "../HotelDetails/HotelDetails"
import "./hotel-view.scss"

const HotelView = () => {
  return (
    <div className="hotel-view">
      <Gallery />
      <HotelDetails />
    </div>
  )
}

export default HotelView
