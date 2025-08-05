import Hero from "~/component/home/page";

export function meta() {
	return [
		{ title: "ArenoX Learning Platform" },
		{
			name: "description",
			content: "Welcome to ArenoX Learning Platform!",
		},
	];
}

export default function Home() {
	return (
		
		<div className="relative">
			<Hero/>
		</div>
	);
}
