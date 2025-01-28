// import { default as links } from "../data";
import { Link } from "react-router-dom";
import { links } from "./../data";
import Logo from "./Logo";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<Logo />
			</div>
			<div className="links-container">
				<nav>
					{links.map((link, index) => {
						const { href, text } = link;
						return (
							<Link to={href} key={index} className="nav-link">
								{text}
							</Link>
						);
					})}
				</nav>
			</div>
			<div className="dark-mode">DARK-MODE ICON</div>
		</div>
	);
};
export default Navbar;
