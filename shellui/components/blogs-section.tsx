import { cn } from "@/lib/utils";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { GridFiller } from "@/components/ui/grid-filler";

type BlogType = {
	title: string;
	date: string;
	description: string;
	category: string;
	author: string;
	href: string;
};

const blogs: BlogType[] = [
	{
		title: "The New Design Principles for Modern Web Apps",
		date: "May 20 2025",
		category: "Design",
		author: "Sarah Chen",
		description:
			"We dive deep into modern UI/UX fundamentals and explore how small changes can make a massive impact on user retention.",
		href: "#",
	},
	{
		title: "Letter Club: An Ode to the Slow Web",
		date: "Aug 14 2025",
		category: "Design",
		author: "Mike Allyn",
		description:
			"In a world of instant gratification, we explore the beauty of thoughtful, long-form content and meaningful connections over time.",
		href: "#",
	},
	{
		title: "Carve Out Space for Opportunity and Coffee",
		date: "Sep 19 2025",
		category: "Productivity",
		author: "Jessica Doi",
		description:
			"Taking a break is work. Learn how simple rituals like a morning coffee can boost your creativity and productivity.",
		href: "#",
	},
	{
		title: "Building Modern Applications with Shadcn UI Components",
		date: "Oct 12 2025",
		category: "Design",
		author: "Tom Cook",
		description:
			"A comprehensive guide to leveraging Shadcn UI to build accessible, customizable, and beautiful user interfaces with incredible speed.",
		href: "#",
	},
	{
		title: "Fesgin: Bridging The Gap Between Design and Code",
		date: "Nov 23 2025",
		category: "Design",
		author: "David Park",
		description:
			"How designers and developers can collaborate more effectively to bridge the gap between creative vision and technical implementation.",
		href: "#",
	},
	{
		title: "The Art of Simplicity in User Interface Design",
		date: "Dec 05 2025",
		category: "Minimalism",
		author: "Emma Wilson",
		description:
			"Discover how minimalism in design leads to clearer communication and a more intuitive user experience, focusing on what matters.",
		href: "#",
	},
	{
		title: "Why Web Performance Matters For Your Business Growth",
		date: "Jan 18 2026",
		category: "Engineering",
		author: "Chris Martin",
		description:
			"We discuss techniques for improving web performance, from lazy loading to code splitting, ensuring your application runs smoothly.",
		href: "#",
	},
	{
		title: "Practicing Digital Well-being in an Always-On World",
		date: "Feb 02 2026",
		category: "Lifestyle",
		author: "Olivia Kim",
		description:
			"Strategies for maintaining a healthy relationship with digital tools, setting boundaries, and ensuring technology serves us rather than consumes us.",
		href: "#",
	},
];

export function BlogsSection() {
	return (
		<div className="mx-auto w-full max-w-5xl py-4 lg:border-x">
			<div className="space-y-2 px-4 py-8 md:py-12">
				<h1 className="font-semibold text-2xl tracking-wide md:text-4xl">
					Latest Blogs
				</h1>
				<p className="text-muted-foreground text-sm">
					Discover the latest trends and insights in the world of design and
					technology.
				</p>
			</div>
			<FullWidthDivider contained={true} />
			<div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
				{blogs.map((blog) => (
					<BlogCard {...blog} key={blog.title} />
				))}
				<GridFiller
					className="bg-background"
					mdColumns={3}
					smColumns={4}
					totalItems={blogs.length}
				/>
			</div>
			<FullWidthDivider contained={true} />
		</div>
	);
}

function BlogCard({
	title,
	date,
	description,
	category,
	author,
	className,
	...props
}: React.ComponentProps<"a"> & BlogType) {
	return (
		<a
			className={cn(
				"group w-full bg-background px-6 py-12 text-muted-foreground hover:cursor-pointer hover:text-foreground active:bg-accent md:px-8 active:dark:bg-accent/50",
				className
			)}
			{...props}
		>
			<h3 className="mb-3 line-clamp-2 font-medium text-foreground text-lg md:text-xl">
				{title}
			</h3>
			<div className="mb-3 flex items-center gap-2">
				<span className="text-muted-foreground text-xs group-hover:text-foreground">
					{category}
				</span>
				<div className="inline-flex size-1 rounded-full bg-muted-foreground" />
				<span className="text-muted-foreground text-xs group-hover:text-foreground">
					{date}
				</span>
			</div>
			<p className="mb-8 line-clamp-3 text-muted-foreground text-sm tracking-wide group-hover:text-foreground">
				{description}
			</p>
			<div className="flex items-center gap-1.5">
				by
				<span className="font-medium font-mono text-foreground/80 text-xs group-hover:text-foreground md:text-sm">
					{author}
				</span>
			</div>
		</a>
	);
}
