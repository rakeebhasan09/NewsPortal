import { useEffect, useState } from "react";
import FeaturedNews from "../../components/FeaturedNews";
import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";
import { useOutletContext } from "react-router";

const Home = () => {
	const { activeCategory } = useOutletContext();
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch("/newsData.json")
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);

	const filteredNews =
		activeCategory === null
			? news
			: news.filter(
					(nws) =>
						nws.category?.toLowerCase() ===
						activeCategory.toLowerCase()
			  );
	return (
		<div className="inter ">
			{/* News Sections */}
			<section className={`py-8 ${activeCategory !== null && "pt-0"}`}>
				{activeCategory === null && <FeaturedNews />}
			</section>

			{/* All News */}
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<LeftSide
							activeCategory={activeCategory}
							filteredNews={filteredNews}
						/>
					</div>
					<div className="space-y-6">
						<RightSide />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
