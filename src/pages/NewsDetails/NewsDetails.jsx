import {
	ArrowLeft,
	Bookmark,
	Calendar,
	Clock,
	Facebook,
	Share2,
	Twitter,
	User,
} from "lucide-react";
import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import NewaCard from "../../components/cards/NewaCard";

const NewsDetails = () => {
	const { id } = useParams();
	const data = useLoaderData();
	const news = data.find((n) => n.id === id);
	const relatedNews = data.filter(
		(rn) => rn.category == news.category && rn.title !== news.title
	);

	const navigate = useNavigate();
	return (
		<div className="container inter">
			<div className="pt-8">
				{/* Back Button */}
				<button
					onClick={() => navigate(-1)}
					className="btn btn-primary btn-outline inline-flex items-center gap-2 text-(--color-muted-foreground) hover:text-white mb-6 transition-colors"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to News
				</button>
				<div className="max-w-4xl mx-auto">
					{/* Category Badge */}
					<span className={`mb-4 inline-block capitalize`}>
						{news?.category}
					</span>
					{/* Title */}
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
						{news.title}
					</h1>
					{/* Meta Info */}
					<div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-6 border-b border-b-[#E2E4E9]">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
								<User className="h-5 w-5 text-primary" />
							</div>
							<div>
								<p className="font-medium">{news.author}</p>
								<p className="text-sm text-(--color-muted-foreground)">
									Author
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2 text-(--color-muted-foreground)">
							<Calendar className="h-4 w-4" />
							<span className="text-sm">
								{new Date(news.publishedAt).toLocaleDateString(
									"en-US",
									{
										weekday: "long",
										year: "numeric",
										month: "long",
										day: "numeric",
									}
								)}
							</span>
						</div>
						<div className="flex items-center gap-2 text-(--color-muted-foreground)">
							<Clock className="h-4 w-4" />
							<span className="text-sm">
								{news.readTime} min read
							</span>
						</div>
					</div>

					{/* Featured Image */}
					<div className="relative mb-8 rounded-xl overflow-hidden">
						<img
							src={news.image}
							alt={news.title}
							className="w-full h-75 md:h-100 lg:h-125 object-cover"
						/>
					</div>

					{/* Description */}
					<p className="text-lg md:text-xl text-(--color-muted-foreground) leading-relaxed mb-8 font-medium">
						{news.description}
					</p>

					{/* Content */}
					<div className="max-w-none">
						{news.content.split("\n\n").map((paragraph, index) => {
							if (paragraph.startsWith("- ")) {
								const items = paragraph
									.split("\n")
									.filter((line) => line.startsWith("- "));
								return (
									<ul key={index} className="my-6 space-y-2">
										{items.map((item, i) => (
											<li
												key={i}
												className="flex items-start gap-2"
											>
												<span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
												<span className="text-(--color-foreground)">
													{item.replace("- ", "")}
												</span>
											</li>
										))}
									</ul>
								);
							}
							return (
								<p
									key={index}
									className="text-(--color-foreground) leading-relaxed mb-4"
								>
									{paragraph}
								</p>
							);
						})}
					</div>

					{/* Share Section */}
					<div className="mt-10 pt-6 border-t border-t-[#E2E4E9]">
						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex items-center gap-3">
								<span className="text-sm font-medium text-(--color-muted-foreground)">
									Share:
								</span>
								<div className="flex items-center gap-2">
									<button
										size="icon"
										className="h-9 w-9 border border-[#E2E4E9] rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
									>
										<Facebook className="h-4 w-4" />
									</button>
									<button
										variant="outline"
										size="icon"
										className="h-9 w-9 border border-[#E2E4E9] rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
									>
										<Twitter className="h-4 w-4" />
									</button>
									<button
										variant="outline"
										size="icon"
										className="h-9 w-9 border border-[#E2E4E9] rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
									>
										<Share2 className="h-4 w-4" />
									</button>
								</div>
							</div>
							<button className="gap-2 btn btn-outline border border-[#E2E4E9] rounded flex justify-between items-center">
								<Bookmark className="h-4 w-4" />
								Save Article
							</button>
						</div>
					</div>
				</div>

				{/* Related News */}
				<section className="mt-16">
					<div className="container">
						<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
							<span className="w-1 h-6 bg-primary rounded-full"></span>
							Related Articles
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{relatedNews.map((singleNews) => (
								<NewaCard
									key={singleNews.id}
									singleNews={singleNews}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default NewsDetails;
