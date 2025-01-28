import { IoHardwareChip } from "react-icons/io5";
import Wrapper from "../assets/wrappers/Logo";

const Logo = () => {
	return (
		<Wrapper>
			{/* <IoHardwareChip className="logo--icon" />
			<h4 className="logo--text">m//86</h4> */}
			<div class="logo-box">
				<h3 class="header-main">
					<span class="top">m</span>
					<span class="slash">//</span>
					<span class="bottom">86</span>
				</h3>
			</div>
		</Wrapper>
	);
};
export default Logo;
