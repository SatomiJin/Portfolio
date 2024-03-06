// import { CloseCircleOutlined } from "@ant-design/icons";
import "./Header.scss";
function Header() {
  return (
    <div className="header-content grid wide">
      <div className="row">
        <div className="logo col l-3 m-4 m-o-1 c-4">Satomi Jin</div>
        <div className="nav__pc col l-5 l-o-4 m-6 c-0">
          <ul className="list-nav">
            <li>
              <a className="item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="item" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="item" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <label htmlFor="nav__mobile-input" className="nav__bar-btn col l-0 m-0 c-2 c-o-6">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
          </svg>
        </label>
        <input hidden type="checkbox" className="nav__input" id="nav__mobile-input" />
        <label htmlFor="nav__mobile-input" className="nav__overlay"></label>
        <div className="nav__mobile">
          <div className="nav__mobile-header">
            <div className="nav__mobile-title">Menu</div>
            <label htmlFor="nav__mobile-input" className="nav__mobile-close">
              &#x2715;
            </label>
          </div>
          <div className="nav__mobile-menu">
            <div className="btn-container">
              <a href="#home">
                <button className="btn nav__mobile-btn">Home</button>
              </a>
              <a href="#about">
                <button className="btn nav__mobile-btn">About</button>
              </a>
              <a href="#project">
                <button className="btn nav__mobile-btn">Project</button>
              </a>
              <a href="#contact">
                <button className="btn nav__mobile-btn">Contact</button>
              </a>
            </div>
            <div className="logo-satomi"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
