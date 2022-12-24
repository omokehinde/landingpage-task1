import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/navbar.css';
import dananz from "../images/dananz.png";
import Home from "../pages/Home";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
            <a href="/">
            <img src={dananz} />
            </a>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Services</a>
				<a id="b" href="/#">Our Teams</a>
                <button className="btn-block">Contact US</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button id="hideBars" className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
