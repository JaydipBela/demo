
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <img src="img/logo.png" className='navlogo navbar-brand' alt="" />
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbarnav">
            <li className="nav-item navitem">
              <NavLink className= {({isActive})=>`nav-link ${isActive ? "activelink" : "color" }`} to="/">HOME</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={({isActive})=>`nav-link ${isActive ? "activelink" : "color" }`} to="about">ABOUT US</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={({isActive})=>`nav-link ${isActive ? "activelink" : "color" }`} to="menu">OUR MENU</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={({isActive})=>`nav-link ${isActive ? "activelink" : "color" }`}to="contact">CONTACT</NavLink>
            </li>
            <li className="nav-item navitem">
              <NavLink className={({isActive})=>`nav-link ${isActive ? "activelink" : "color" }`} to="blog">BLOG</NavLink>
            </li>
          </ul>
          {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbarnav">
            <li className="nav-item navitem">
              <Link className="nav-link activelink" to="/">HOME</Link>
            </li>
            <li className="nav-item navitem">
              <Link className="nav-link" to="about">ABOUT US</Link>
            </li>
            <li className="nav-item navitem">
              <Link className="nav-link" to="menu">OUR MENU</Link>
            </li>
            <li className="nav-item navitem">
              <Link className="nav-link" to="contact">CONTACT</Link>
            </li>
            <li className="nav-item navitem">
              <Link className="nav-link" to="blog">BLOG</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
