import { TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RightSide = () => {
	const [allNews, setAllNews] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("/newsData.json")
			.then((res) => res.json())
			.then((data) => setAllNews(data));
	}, []);

	useEffect(() => {
		fetch("/newsCategory.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	const trandingNews = allNews.filter((news) => news.isTrending === true);
	return (
		<div className="space-y-6">
			{/* Tranding Now */}
			<div className="bg-(--color-card) rounded-xl border border-[#D2D4D9] p-5">
				<div className="flex items-center gap-2 mb-5">
					<TrendingUp className="text-primary" />
					<h2 className="text-lg font-bold">
						Trending Now {trandingNews.length}
					</h2>
				</div>
				<div className="space-y-1">
					{trandingNews.map((tranding, index) => (
						<Link
							to={`/news/${tranding.id}`}
							key={index}
							className="flex p-3 gap-3 group hover:bg-[#F9F9FA] rounded-lg"
						>
							<div className="text-[#E9B8B9] text-[24px] font-bold">
								{index < 10 ? `0${index + 1}` : index}
							</div>
							<div>
								<span className="mb-1 inline-block text-[10px]">
									{tranding.category}
								</span>
								<h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
									{tranding.title}
								</h3>
								<span className="text-xs text-(--color-muted-foreground) mt-1 block">
									{new Date(
										tranding.publishedAt
									).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
									})}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Categories */}
			<div className="bg-(--color-card) rounded-xl border border-[#D2D4D9] p-5">
				<h3 className="font-bold mb-4">Categories</h3>
				<div className="flex flex-wrap gap-2">
					{categories.map((categorie, index) => (
						<span
							key={index}
							className="hover:opacity-80 transition-opacity text-xs py-0.5 px-2.5"
						>
							{categorie.nameEn}
						</span>
					))}
				</div>
			</div>

			<div className="bg-primary rounded-xl p-5 text-(--color-primary-foreground)">
				<h3 className="font-bold mb-2">Stay Updated</h3>
				<p className="text-sm opacity-90 mb-4">
					Subscribe to our newsletter for daily news updates.
				</p>
				<div className="flex flex-wrap gap-2">
					<input
						type="email"
						placeholder="Your email"
						className="flex-1 px-3 py-2 rounded-md outline-none text-(--color-foreground) text-sm bg-(--color-background) placeholder:text-(--color-muted-foreground)"
					/>
					<button className="px-4 py-2 bg-(--color-background) text-primary font-medium rounded-md hover:bg-(--color-background)/90 transition-colors text-sm">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default RightSide;
