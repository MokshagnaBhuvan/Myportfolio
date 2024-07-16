// About.js
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-red-200 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
					alt="About"
					className="w-full h-full bg-cover"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-red-500
								text-5xl font-bold">
						About Us :
					</h2>
				</div>
				<p>
					Hello c0ders,This is Mokshagna Bhuvan and Anshitha Prattipati.We are cybersecurity students and part-time developers.
					
				</p>
				<p>
					We are passionate self taught developers
					(which is quite a subjective thing as i learnt from
					teachers on youtube so does that really counts?
					idk). we are having an experience of about 2 years
					and had a deep understanding of creating web products.
				</p>
			</div>
		</section>
	);
}
