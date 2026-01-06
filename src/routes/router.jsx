import { createBrowserRouter } from "react-router";
import RootLayout from "../components/Layouts/RootLayout";
import Home from "../pages/home/home";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "news/:id",
				loader: () => fetch("/newsData.json"),
				element: <NewsDetails />,
			},
		],
	},
]);
