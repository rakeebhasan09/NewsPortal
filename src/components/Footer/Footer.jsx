import React from "react";
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from "lucide-react";
import { Link } from "react-router";

const Footer = ({ categories }) => {
	return (
		<footer>
			<div className="bg-(--color-foreground) text-(--color-background) mt-12">
				<div className="container">
					<div className="py-12">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{/* Brand */}
							<div className="space-y-4">
								<Link
									to="/"
									className="flex items-center gap-2"
								>
									<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
										<span className="text-primary-foreground font-bold text-lg">
											N
										</span>
									</div>
									<span className="text-xl font-bold">
										NewsPortal
									</span>
								</Link>
								<p className="text-background/70 text-sm">
									Your trusted source for the latest news,
									in-depth analysis, and comprehensive
									coverage of events that matter.
								</p>
								<div className="flex items-center gap-3">
									<Link
										to="#"
										className="p-2 bg-(--color-background)/10 rounded-full hover:bg-primary transition-colors"
									>
										<Facebook className="h-4 w-4" />
									</Link>
									<Link
										to="#"
										className="p-2 bg-(--color-background)/10 rounded-full hover:bg-primary transition-colors"
									>
										<Twitter className="h-4 w-4" />
									</Link>
									<Link
										to="#"
										className="p-2 bg-(--color-background)/10 rounded-full hover:bg-primary transition-colors"
									>
										<Instagram className="h-4 w-4" />
									</Link>
									<Link
										to="#"
										className="p-2 bg-(--color-background)/10 rounded-full hover:bg-primary transition-colors"
									>
										<Youtube className="h-4 w-4" />
									</Link>
								</div>
							</div>

							{/* Categories */}
							<div>
								<h3 className="font-semibold mb-4">
									Categories
								</h3>
								<ul className="space-y-2">
									{categories.map((category) => (
										<li key={category.id}>
											<Link
												to="/"
												className="text-(--color-background)/70 hover:text-primary transition-colors text-sm"
											>
												{category.nameEn}
											</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Quick Links */}
							<div>
								<h3 className="font-semibold mb-4">
									Quick Links
								</h3>
								<ul className="space-y-2">
									<li>
										<Link
											to="#"
											className="text-(--color-background)/70 hover:text-primary transition-colors text-sm"
										>
											About Us
										</Link>
									</li>
									<li>
										<Link
											to="#"
											className="text-(--color-background)/70 hover:text-primary transition-colors text-sm"
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											to="#"
											className="text-(--color-background)/70 hover:text-primary transition-colors text-sm"
										>
											Advertise
										</Link>
									</li>
									<li>
										<Link
											to="#"
											className="text-(--color-background)/70 hover:text-primary transition-colors text-sm"
										>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											to="#"
											className="text-(--color-background)/70 hover:text-primary transition-colors text-sm"
										>
											Terms of Service
										</Link>
									</li>
								</ul>
							</div>

							{/* Contact */}
							<div>
								<h3 className="font-semibold mb-4">
									Contact Us
								</h3>
								<ul className="space-y-3">
									<li className="flex items-center gap-2 text-(--color-background)/70 text-sm">
										<MapPin className="h-4 w-4 shrink-0" />
										<span>123 News Street, Media City</span>
									</li>
									<li className="flex items-center gap-2 text-(--color-background)/70 text-sm">
										<Phone className="h-4 w-4 shrink-0" />
										<span>+1 (555) 123-4567</span>
									</li>
									<li className="flex items-center gap-2 text-(--color-background)/70 text-sm">
										<Mail className="h-4 w-4 shrink-0" />
										<span>contact@newsportal.com</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
