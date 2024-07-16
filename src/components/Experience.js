import FACTImage from 'C:/Users/pratt/Documents/React/src/FACTextended.png'; // Import local image

export default function Experience() {
    const experiences = [
        {
            company: "FACT-Amrita",
            role: "Core Member",
            description: "Worked as a core member in the core committee, led teams for tech fests in the college.",
            link: "https://www.linkedin.com/company/fact-amrita/",
            imgSrc: FACTImage, // Use imported image
        },
        {
            company: "Swiftsafe",
            role: "Cyber Security Analyst and Lead for Machine Learning Team",
            description: "Specialized in OSINT, and VAPT.Specialized in training machine learning models for cyber security,",
            link: "https://www.linkedin.com/company/swiftsafe/",
            imgSrc: "https://res.cloudinary.com/swiftsafe/image/upload/f_auto,q_auto/logo1_jz82az.png", // Placeholder image URL
        },
    ];

    return (
        <section id="experience" className="my-20 w-full flex flex-col gap-5 items-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center">
                My Experience
            </h2>
            {experiences.map((exp, index) => (
                <div key={index} className={`p-10 bg-red-200 flex flex-col justify-center items-center
                                              gap-5 lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} 
                                              max-w-5xl mx-auto shadow transition 
                                              hover:shadow-xl hover:scale-[102%] w-full`}>
                    <div className="w-80 rounded">
                        <a href={exp.link} className="w-full h-full">
                            <img src={exp.imgSrc} alt={exp.company} className="w-full h-full bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col justify-center mx-4 md:mx-8 lg:mx-0 gap-4">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:underline" href={exp.link}>
                                {exp.role} at {exp.company}
                            </a>
                        </h2>
                        <p className="text-center">
                            {exp.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
