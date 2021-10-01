import Gallery from "../Gallery/Gallery"
import HotelDetails from "../HotelDetails/HotelDetails"
import HotelInfo from "../HotelInfo/HotelInfo"
import "./hotel-view.scss"

const HotelView = () => {
  return (
    <div className="hotel-view">
      <Gallery />
      <HotelDetails />
      <HotelInfo />
    </div>
  )
}

export default HotelView
