import { AirplanemodeActive, DirectionsCar as Car, Home, Map } from "@material-ui/icons"
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <Home className="side-nav__icon" />
            <span className="side-nav__text">Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <AirplanemodeActive className="side-nav__icon" />
            <span className="side-nav__text">Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <Car className="side-nav__icon" />
            <span className="side-nav__text">Car Rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <Map className="side-nav__icon" />
            <span className="side-nav__text">Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2021 Made with by Mouad. All rights reserved</div>
    </div>
  )
}

export default Sidebar
