import { Search, TextAlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Header = ({ categories, activeCategory, setActiveCategory }) => {
	const [showMenu, setShowMenu] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const navigate = useNavigate();

	const handleCategoryClick = (category) => {
		setActiveCategory(category);
		navigate("/");
	};
	return (
		<div className="bg-white relative">
			<div className="border-b border-b-[#e3e6eb]">
				<div className="container">
					<div className="py-4">
						<div className="flex items-center justify-between gap-4">
							{/* NewsPortal Logo */}
							<Link
								className="flex items-center gap-2 group"
								to="/"
								onClick={() => setActiveCategory(null)}
							>
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
									<span className="text-white font-bold text-lg sm:text-xl">
										N
									</span>
								</div>
								<div className="">
									<h1 className="text-xl sm:text-2xl font-bold text-(--color-foreground)">
										NewsPortal
									</h1>
									<p className="text-xs text-(--color-muted-foreground) -mt-1">
										Your Trusted News Source
									</p>
								</div>
							</Link>

							{/* Search Box */}
							<form className="hidden md:flex flex-1 max-w-md mx-8">
								<div className="relative w-full">
									<input
										type="text"
										className="flex h-10 w-full rounded-md outline-none px-3 py-2 text-base placeholder:text-[#676e7e]  md:text-sm pr-10 bg-[#f3f4f6]"
										placeholder="Search news..."
									></input>

									<button
										className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
										type="submit"
									>
										<Search />
									</button>
								</div>
							</form>

							{/* Subscribe Now Button */}
							<button className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  transition-colors text-(--color-primary-foreground) h-10 px-4 py-2 hidden md:flex bg-primary hover:bg-primary/90">
								Subscribe
							</button>

							<div className="sm:hidden">
								<button onClick={() => setShowMenu(!showMenu)}>
									{showMenu ? <X /> : <TextAlignJustify />}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Category Buttons */}
			<div
				className={`border-b border-b-[#e3e6eb] bg-white fixed sm:static transition duration-200 ${
					showMenu
						? "top-26.25 opacity-100 visible"
						: "-top-26.25 opacity-0 invisible sm:opacity-100 sm:visible"
				}`}
			>
				<div className="container">
					<div className="py-2 flex flex-wrap gap-1">
						{/* Home Button */}
						<button
							onClick={() => {
								setActiveCategory(null);
								navigate("/");
							}}
							className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
								${
									isHomePage && activeCategory === null
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
										handleCategoryClick(category.nameEn)
									}
									className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
										${
											isHomePage && isActive
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
		</div>
	);
};

export default Header;
