export class AppConstants {
	// Personal Information
	static appName: string = "Nazmul Haque";
	static email: string = "nazmulhaque@gmail.com";
	static phone: string = "+880 1708-766953";
	static shortAddress: string = "Dhaka, Bangladesh";

	// Content
	static heroTitle: string =
		"Innovating Structural Design with Engineering Precision";
	static heroSubtitle: string =
		"Creating sustainable and innovative architectural solutions that shape the future of our built environment.";
	static aboutBioLine1: string =
		"With over 15 years of experience in architectural engineering, I specialize in creating innovative structures that seamlessly blend form, function, and sustainability. My work spans residential developments, commercial high-rises, and public infrastructure projects.";
	static aboutBioLine2: string =
		"I earned my Master's degree in Architectural Engineering from MIT and have since been dedicated to pushing the boundaries of what's possible in structural design. My background combines technical expertise with a passion for aesthetics, allowing me to create buildings that are not only structurally sound but also visually stunning.";
	static aboutBioLine3: string =
		"Throughout my career, I've collaborated with leading architectural firms and construction companies across North America, contributing to award-winning projects that have transformed urban landscapes.";
	static footerBio: string =
		"Architectural Engineer specializing in innovative structural design and sustainable architecture.";

	// Image URLs
	static images = {
		hero: "/images/hero-7.jpg",
	};

	// App Routes
	static routes = {
		home: "/",
		about: "/about",
		portfolio: "/portfolio",
		contact: "/contact",
	};

	// Social Media Links
	static socialMedia = {
		linkedin: "https://linkedin.com/in/nazmulhaque",
		twitter: "https://twitter.com/nazmulhaque",
		instagram: "https://instagram.com/nazmulhaque",
	};

	// Portfolio Categories
	static portfolioCategories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Urban Planning', 'Sustainable'];

	// Portfolio Items
	static portfolioItems = [
		{
			id: 1,
			title: "Modern Office Complex",
			category: "Commercial",
			location: "New York, NY",
			year: "2023",
			image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
			description: "A sustainable office complex featuring innovative structural solutions and energy-efficient design."
		},
		{
			id: 2,
			title: "Eco-Friendly Residence",
			category: "Residential",
			location: "San Francisco, CA",
			year: "2023",
			image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
			description: "Net-zero energy home with integrated solar systems and sustainable materials."
		},
		{
			id: 3,
			title: "Urban Bridge Design",
			category: "Infrastructure",
			location: "Chicago, IL",
			year: "2022",
			image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
			description: "Innovative pedestrian bridge connecting urban districts with minimal environmental impact."
		},
		{
			id: 4,
			title: "City Center Revitalization",
			category: "Urban Planning",
			location: "Boston, MA",
			year: "2022",
			image: "https://images.unsplash.com/photo-1486744328743-c1a306cf6322?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
			description: "Mixed-use development project focusing on community integration and sustainable urban living."
		},
		{
			id: 5,
			title: "Green Energy Campus",
			category: "Sustainable",
			location: "Seattle, WA",
			year: "2023",
			image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
			description: "Educational facility designed with renewable energy systems and biophilic principles."
		},
		{
			id: 6,
			title: "Historic Building Renovation",
			category: "Commercial",
			location: "Philadelphia, PA",
			year: "2022",
			image: "https://images.unsplash.com/photo-1486744328743-c1a306cf6322?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
			description: "Adaptive reuse project preserving historical architecture while modernizing functionality."
		}
	]
}
