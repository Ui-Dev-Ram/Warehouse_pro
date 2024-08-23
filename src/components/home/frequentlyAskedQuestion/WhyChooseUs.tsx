import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
	return (
		<div className="max-w-5xl mx-auto px-5">
			<HoverEffect items={projects} />
		</div>
	);
}
export const projects = [
	{
		title: "Safe Packing",
		description: "We employ the best techniques for safe packing and handling of cargo!",
		link: "https://stripe.com",
	},
	{
		title: "Right Time Delivery",
		description: "Products are delivered at the right time. We add speed to your deliveries!",
		link: "https://netflix.com",
	},
	{
		title: "Ship anywhere & everywhere",
		description: "With Warehouzez, you can ship and transportation services anywhere in the country.",
		link: "https://google.com",
	},
	{
		title: "Fastest Shipping",
		description: "You can totally depend on our shipping service. We are always on time.",
		link: "https://meta.com",
	}
];
