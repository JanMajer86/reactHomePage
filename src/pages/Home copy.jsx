import Wrapper from "../assets/wrappers/Home";
import { techStack } from "../data";

const Home = () => {
	return (
		<Wrapper>
			<div className="home">
				<div className="card card--secondary">
					<div className="card--secondary-header">
						<p>
							Try-hard photo booth glossier jean shorts chicharrones pinterest
							subway tile heirloom.
						</p>
						<p>
							Ennui gluten-free quinoa adaptogen, cronut butcher street art
							letterpress.
						</p>
					</div>
					<div className="card--secondary-info">
						<ul>
							{techStack.map((item, index) => {
								const { name, icon, info } = item;
								return (
									<li key={index}>
										{icon}
										<span>{name}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="card card--main">
					<div className="card--header">
						<h3 className="subheading">
							<span>Hi, How Are You?</span>
						</h3>
						<h1>
							<span>
								I'm{" "}
								<em>
									<i>Jan</i>
								</em>
							</span>
						</h1>
						<h3>
							<span>FullStack Web Developer</span>
						</h3>
					</div>
					<div className="card--info">
						<div>
							<p>
								Building handcrafted, human-coded, custom made website
								experiences with impact.
							</p>
						</div>
						<div className="card--button-container">
							<button className="btn btn--primary">download cv</button>
						</div>
					</div>
				</div>
				<div className="card"> </div>
			</div>
		</Wrapper>
	);
};
export default Home;
