import { useEffect, useState } from "react";
import FeaturedNews from "../../components/FeaturedNews";
import LeftSide from "../../components/LeftSide";

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState("Home");
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch("/newsCategory.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	useEffect(() => {
		fetch("/newsData.json")
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);
	return (
		<div className="inter min-h-screen">
			{/* Category Buttons */}
			<div className="border-b border-b-[#e3e6eb] bg-white fixed w-full z-10 top-26 md:top-29.25">
				<div className="container">
					<div className="py-2 flex flex-wrap gap-1">
						{/* Home Button */}
						<button
							onClick={() => setActiveCategory("Home")}
							className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
								${
									activeCategory === "Home"
										? "bg-primary text-(--color-primary-foreground)"
										: "text-(--color-foreground) hover:bg-primary/10"
								}
							`}
						>
							Home
						</button>

						{/* Dynamic Categories */}
						{categories.map((category) => {
							const isActive = activeCategory === category.nameEn;

							return (
								<button
									key={category.nameEn}
									onClick={() =>
										setActiveCategory(category.nameEn)
									}
									className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
										${
											isActive
												? "bg-primary text-(--color-primary-foreground)"
												: "text-(--color-foreground) hover:bg-primary/10"
										}
									`}
								>
									{category.nameEn}
								</button>
							);
						})}
					</div>
				</div>
			</div>

			{/* News Sections */}
			<section className="py-8 pt-40 sm:pt-24">
				<FeaturedNews />
			</section>

			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<LeftSide news={news} />
					</div>
					<div className="space-y-6"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
