import {
	FaBluesky,
	FaFacebook,
	FaSquareInstagram,
	FaLinkedin,
} from "react-icons/fa6";
import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
	return (
		<Wrapper>
			<footer className="footer">
				<div className="footer--divider"></div>
				<div className="footer--container">
					<div className="copyleft">&copy; 2025 Jan Majer</div>
					<div className="footer--social-icons">
						<a href="#" className="link-social">
							<FaLinkedin />
						</a>
						<a href="#" className="link-social">
							<FaBluesky />
						</a>
						<a href="#" className="link-social">
							<FaFacebook />
						</a>
						<a href="#" className="link-social">
							<FaSquareInstagram />
						</a>
					</div>
				</div>
				<div className="footer--divider"></div>
			</footer>
		</Wrapper>
	);
};
export default Footer;
