import { Star, Room } from "@material-ui/icons"
import "./hotel-details.scss"

const HotelDetails = () => {
  return (
    <div className="hotel-details">
      <h1 className="hotel-details__heading">Hotel Las Palmas</h1>
      <div className="hotel-details__stars">
        <Star className="hotel-details__icon-star" />
        <Star className="hotel-details__icon-star" />
        <Star className="hotel-details__icon-star" />
        <Star className="hotel-details__icon-star" />
        <Star className="hotel-details__icon-star" />
      </div>
      <div className="hotel-details__location">
        <Room className="hotel-details__icon-location" />
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>
      <div className="hotel-details__rating">
        <div className="hotel-details__rating-average">8.6</div>
        <div className="hotel-details__rating-count">785 Votes</div>
      </div>
    </div>
  )
}

export default HotelDetails
