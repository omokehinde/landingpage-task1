import '../styles/navbar.css';
import dananz from "../images/dananz.png";


function Navbar() {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <a className="navbar-brand" href="#"><img src={dananz} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-bold" href="#">Our Teams</a>
      </li>
    </ul>
    <button className='btn-block'>Contact Us</button>
  </div>
</nav>
	);
}

export default Navbar;
