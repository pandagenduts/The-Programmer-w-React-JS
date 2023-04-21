import Logo from "../../assets/TheProgrammer-site-logo.png"
import ButtonArrow from "../buttons/ButtonArrow"

function Header() {
  
  return (
    <header>
      <div className="site-logo">
        <img src={Logo} alt="The Programmer site logo"/>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#">HOW IT WORKS?</a>
          </li>
          <li>
            <a href="#">DEVELOP</a>
          </li>
          <li>
            <a href="#">FEATURES</a>
          </li>
          <li>
            <a href="#">DOCS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
        </ul>
      </div>
      <div className="sign-up">
        <ButtonArrow buttonText="SIGN UP" />
      </div>
      <div className="hamburger">
        <span class="material-symbols-outlined menu-button">menu</span>
      </div>
      <div className="mobile-menu">
        <ul>
            <li>
              <a href="#">HOW IT WORKS?</a>
            </li>
            <li>
              <a href="#">DEVELOP</a>
            </li>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">DOCS</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <ButtonArrow buttonText="SIGN UP" />
            </li>
          </ul>

          <span class="material-symbols-outlined close-button menu-button">close</span>
      </div>
    </header>
  )
}

export default Header