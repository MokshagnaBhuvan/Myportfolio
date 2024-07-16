// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-red-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/MokshagnaBhuvan/ref2paper/tree/main"
                        className="w-full h-full">
                        <img src=
"https://th.bing.com/th/id/OIP.sT6EIiTniQenwcxg0mWuzAAAAA?rs=1&pid=ImgDetMain"
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
"https://github.com/MokshagnaBhuvan/ref2paper/tree/main">
                            Ref2paper - a telegram bot
                        </a>
                    </h2>
                    <p>
                        This telegram bot helps us to fetch references for paper publications with user specified !
                    </p>
                </div>
            </div>
            <div className="p-10 bg-red-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/Anshitha-27/React_project"
                       className="w-full h-full">
                        <img src=
"https://sectigostore.com/blog/wp-content/uploads/2020/09/malware-analysis-feature.jpg" 
                             alt ="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://github.com/Anshitha-27/React_project">
                            Andriod Malware Detection Using Active learning!
                        </a>
                    </h2>
                    <p>
                       This project is a android malware detection system using active learning!
                    </p>
                </div>
            </div>
        </section>
    );
}