import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const IndexLayout = () => {
	return (
		<>
			<Navbar />
			<main className="section-main">pages will be displayed here</main>
			<section className="page">
				<Outlet />
			</section>
		</>
	);
};
export default IndexLayout;
