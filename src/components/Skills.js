export default function Skills() {
	const skills = [
		{ name: "Python", url: "https://www.udemy.com/certificate/UC-57bac91d-6ac4-4315-9a97-13c81b3f7d16/" },
		{ name: "Linux", url: "https://www.linkedin.com/in/mokshagna-bhuvan/?originalSubdomain=in" },
		{ name: "MySql", url: "https://www.linkedin.com/in/mokshagna-bhuvan/?originalSubdomain=in" },
		{ name: "JavaScript", url: "https://www.linkedin.com/in/mokshagna-bhuvan/?originalSubdomain=in" },
		{ name: "React", url: "https://www.linkedin.com/in/mokshagna-bhuvan/?originalSubdomain=in" },
		{ name: "Bash", url: "https://www.linkedin.com/in/mokshagna-bhuvan/?originalSubdomain=in" },
	];

	return (
		<section id="skills"
			className="px-10 w-full my-40 max-w-5xl mx-auto">
			<h2 className="text-center text-6xl text-red-500 font-bold">
				My Skills...
			</h2>
			<div className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl">
				{skills.map((skill, index) => {
					return (
						<a key={index} href={skill.url} target="_blank" rel="noopener noreferrer"
							className="cursor-pointer px-12 py-10 
										rounded bg-red-200 text-lg 
										flex items-center justify-center 
										font-bold hover:shadow-xl">
							{skill.name}
						</a>
					)})}
			</div>
		</section>
	)
}
