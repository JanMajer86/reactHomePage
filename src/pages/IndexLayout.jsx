import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IndexLayout = () => {
	return (
		<div className="page">
			<div className="page-container">
				<Navbar />
				<main className="section-main">
					<section className="page">
						<Outlet />
					</section>
				</main>
				<Footer />
			</div>
		</div>
	);
};
export default IndexLayout;
