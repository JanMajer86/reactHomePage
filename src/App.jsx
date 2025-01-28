import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { useGlobalContext } from "./context";
import IndexLayout from "./pages/IndexLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/About",
				element: <About />,
			},
			{ path: "Projects", element: <Projects /> },
		],
	},
]);

function App() {
	const { isModalOpen } = useGlobalContext();

	console.log(isModalOpen);

	return <RouterProvider router={router} />;
}

export default App;
