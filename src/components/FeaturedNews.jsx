const FeaturedNews = () => {
	return (
		<div className="container mx-auto px-4">
			<div className="relative h-105 w-full overflow-hidden rounded-2xl">
				{/* Background Image */}
				<img
					src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
					alt="Infrastructure"
					className="h-full w-full object-cover"
				/>

				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

				{/* Content */}
				<div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-3xl text-white">
					{/* Category */}
					<span className="mb-3 inline-block text-sm font-medium text-white/80">
						National
					</span>

					{/* Title */}
					<h1 className="text-2xl md:text-4xl font-bold leading-tight">
						New Infrastructure Development Project Launches Across
						Major Cities
					</h1>

					{/* Description */}
					<p className="mt-3 text-sm md:text-base text-white/80">
						Government announces ambitious infrastructure
						development plan spanning five major metropolitan areas
						with focus on sustainable transportation.
					</p>

					{/* Meta Info */}
					<div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
						<span>Rahman Ahmed</span>
						<span>•</span>
						<span>5 min read</span>
						<span>•</span>
						<span>Jan 15, 2024</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedNews;
