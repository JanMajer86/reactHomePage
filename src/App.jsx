import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useGlobalContext } from "./context";
import IndexLayout from "./pages/IndexLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <Error />,
			},
			{
				path: "/About",
				element: <About />,
				errorElement: <Error />,
			},
			{ path: "/Projects", element: <Projects />, errorElement: <Error /> },
		],
	},
]);

function App() {
	const { isModalOpen } = useGlobalContext();

	console.log(isModalOpen);

	return <RouterProvider router={router} />;
}

export default App;
