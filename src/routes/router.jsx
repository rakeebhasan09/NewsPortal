import { createBrowserRouter } from "react-router";
import RootLayout from "../components/Layouts/RootLayout";
import Home from "../pages/home/home";
export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
]);
