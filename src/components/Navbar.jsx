import { Link } from "react-router-dom";
import { links } from "./../data";
import Logo from "./Logo";
import { MdOutlineWbSunny } from "react-icons/md";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="navbar">
				<div className="navbar--divider"></div>
				<div className="navbar--container">
					<div className="logo">
						<Logo />
					</div>
					<div className="links-container">
						<nav>
							{links.map((link, index) => {
								const { href, text, special } = link;
								console.log(special);

								return special ? (
									<button key={index} className="nav-link--special">
										{text}
									</button>
								) : (
									<Link to={href} key={index} className="nav-link">
										{text}
									</Link>
								);
							})}
						</nav>
					</div>
					<div className="dark-mode">
						<MdOutlineWbSunny className="dark-mode--icon" />
					</div>
				</div>
				<div className="navbar--divider"></div>
			</div>
		</Wrapper>
	);
};
export default Navbar;
