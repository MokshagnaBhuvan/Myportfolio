// Contact.js
export default function Contact() {
	return (
		<section id="contact"
				className="my-40 align-center max-w-5xl mx-auto p-3">
			<h2 className="text-5xl font-bold text-red-500 text-center">
				Contact
			</h2>
			<div className="flex gap-5 justify-center 
						my-10">
				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href=
"https://mail.google.com/mail/u/0/?login#inbox">
					Email:
					<span className="font-bold">
						anshithapr@gmail.com
					</span>
				</a>





				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href=
"https://x.com/BhuvanJust">
					Twitter:
					<span className="font-bold">
						@BhuvanJust
					</span>
				</a>
			</div>
		</section>
	);
}
