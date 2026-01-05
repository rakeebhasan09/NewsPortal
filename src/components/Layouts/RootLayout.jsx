import React, { useEffect, useState } from "react";
import TopHeader from "../../pages/home/TopHeader/TopHeader";
import Header from "../../pages/home/Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("/newsCategory.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<>
			<div className="sticky top-0 z-10">
				<TopHeader />
				<Header />
			</div>
			<Outlet />
			<Footer categories={categories} />
		</>
	);
};

export default RootLayout;
