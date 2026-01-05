import React, { useEffect, useState } from "react";
import TopHeader from "../../pages/home/TopHeader/TopHeader";
import Header from "../../pages/home/Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);

	useEffect(() => {
		fetch("/newsCategory.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<>
			<div className="sticky top-0 z-10">
				<TopHeader />
				<Header
					categories={categories}
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>
			</div>
			<Outlet context={{ categories, activeCategory }} />
			<Footer categories={categories} />
		</>
	);
};

export default RootLayout;
