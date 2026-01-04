import { createBrowserRouter } from "react-router";
import Home from "../pages/home/home";
export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
]);
