import "./hotel-info.scss"
import { ChevronRight } from "@material-ui/icons"
import User1Image from "../../img/user-3.jpg"
import User2Image from "../../img/user-4.jpg"
import User3Image from "../../img/user-5.jpg"
import User4Image from "../../img/user-6.jpg"
import User5Image from "../../img/user-1.jpg"
import User6Image from "../../img/user-2.jpg"

const HotelInfo = () => {
  return (
    <div className="hotel-info">
      <div className="description">
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.</p>
        <p className="paragraph"> Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.</p>
        <ul className="list">
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Closeto the Beach
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Breakfast included
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Free airport shuttle
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Free WIFI in all rooms
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Air conditioning and heating
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Pets Allowed{" "}
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            We Speak all languages
          </li>
          <li className="list__item">
            <ChevronRight className="list__chevron" />
            Perfect for famillies
          </li>
        </ul>
        <div className="recommand">
          <p className="recommand__count">Lucy and 3 other friends recommand this hotel.</p>
          <div className="recommand__friends">
            <img src={User1Image} alt="User1" className="recommand__photo" />
            <img src={User2Image} alt="User2" className="recommand__photo" />
            <img src={User3Image} alt="User3" className="recommand__photo" />
            <img src={User4Image} alt="User4" className="recommand__photo" />
          </div>
        </div>
      </div>
      <div className="reviews">
        <figure className="review">
          <blockquote className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.</blockquote>
          <figcaption className="review__user">
            <img src={User5Image} alt="Reviewer" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Nick Smith</p>
              <p className="review__user-date">Feb 23rd, 2021</p>
            </div>
            <div className="review__rating">7.8</div>
          </figcaption>
        </figure>
        <figure className="review">
          <blockquote className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.</blockquote>
          <figcaption className="review__user">
            <img src={User6Image} alt="Reviewer" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Mary Thomas</p>
              <p className="review__user-date">Mars 18th, 2019</p>
            </div>
            <div className="review__rating">9.1</div>
          </figcaption>
        </figure>
        <button className="btn-review">
          Show all <span className="btn-review__icon"> &rarr; </span>
        </button>
      </div>
    </div>
  )
}

export default HotelInfo
