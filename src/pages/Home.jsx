import Wrapper from "../assets/wrappers/Home";

const Home = () => {
	return (
		<Wrapper>
			<div className="home">
				<div className="card"> </div>
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
								Building handcrafted, human-coded website experiences, that
								actually also work. No page builders or WordPress.
							</p>
						</div>
						<div className="card--button-container">
							<button className="btn btn--secondary">download cv</button>
						</div>
					</div>
				</div>
				<div className="card"> </div>
			</div>
		</Wrapper>
	);
};
export default Home;
