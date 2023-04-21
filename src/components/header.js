import Logo from "../assets/TheProgrammer-site-logo.png"

function Header(props) {
  
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
        <a href="#">SIGN UP</a>
      </div>
    </header>
  )
}

export default Header