import Wrapper from "../assets/wrappers/Home";
import Card from "../components/Card";
import { techStack } from "../data";

const Home = () => {
	return (
		<Wrapper>
			<div className="home">
				<Card />
				<Card />
				<Card />
			</div>
		</Wrapper>
	);
};
export default Home;
