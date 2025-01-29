import Wrapper from "../assets/wrappers/Home";

const Home = () => {
	return (
		<Wrapper>
			<div className="home">
				<div className="card"> </div>
				<div className="card card--main">
					<div className="card--header">
						<h3 className="subheading">Hi, How Are You?</h3>
						<h1>
							<span>I'm</span>{" "}
							<em>
								<i>Jan</i>
							</em>
						</h1>
						<h3>FullStack Web Developer</h3>
					</div>
					<p>
						Building handcrafted website experiences, that actually also work
					</p>
					<button className="btn btn--secondary">download cv</button>
				</div>
				<div className="card"> </div>
			</div>
		</Wrapper>
	);
};
export default Home;
