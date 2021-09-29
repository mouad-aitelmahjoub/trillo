import Logo from "../../img/logo.png"
import UserImage from "../../img/user.jpg"
import { Bookmark, Forum, Search } from "@material-ui/icons"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Trillo Logo" className="logo" />
      <form action="#" className="search">
        <input className="search__input" type="text" placeholder="Search Hotels" />
        <button className="search__button">
          <Search className="search__icon" />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <Bookmark className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <Forum className="user-nav__icon" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={UserImage} alt="Profil" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Mouad</span>
        </div>
      </nav>
    </div>
  )
}

export default Header
