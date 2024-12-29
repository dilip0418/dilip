import { FaReact, FaPython, FaJava, FaGit } from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript } from "react-icons/si";
import csharp from '../../assets/csharp.png';
import spring from '../../assets/spring.png';
import springboot from '../../assets/springboot.png';
import netCore from '../../assets/Net_core.png';
import Carousel from "../ui/Carousel";


const TechStack = () => {
    const technologies = [
        {
            year: "2020",
            technologies: [
                {
                    name: "C",
                    icon: <SiC />,
                    description: "Since my background was Bio, C language was the first step to my programming journey. It laid a strong foundation for my knowledge in Programming.",
                },
            ],
        },
        {
            year: "2021",
            technologies: [
                {
                    name: "C++",
                    icon: <SiCplusplus />,
                    description: "Enhanced problem-solving skills. Also initially I used C++ solely for DSA.",
                },
                {
                    name: "Python",
                    icon: <FaPython />,
                    description: "I was introduced to python as an academic subject. Due to its simplicity and readability, I started using it for my projects and assignments. I used it for desktop app development, web scraping,  automation and web app development. I actually built my final year project using FastAPI.",
                },
                {
                    name: "SQL",
                    icon: "𝓢𝓠𝓛",
                    description: "I was wondering how data is stored efficently and then got to know about SQL (storing data in a structred, maintainable way. Mastered querying, data manipulation, and relational database design.",
                },
            ],
        },
        {
            year: "2022",
            technologies: [
                {
                    name: "Java",
                    icon: <FaJava />,
                    description: "Initailly I felt Java was a bit complex but later I realised that it is a powerful language. I used it for DSA, web app development and Android app development.",
                },
                {
                    name: "Git",
                    icon: <FaGit />,
                    description: "One day I was thinking how multiple people work on same projects and how application versioning is implemented in real world projects. And then I got to know about Git/GitHub a version control and collaborative space for building and maintaining applications.",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-yellow-500" />,
                    description: "This language actually is as powerful as tough it looks, Learnt how to build interactive and dynamic web applications.",
                },
            ],
        },
        {
            year: "2023",
            technologies: [
                {
                    name: "Spring",
                    icon: <img src={spring} width={20} height={20} />,
                    description: "After college learning programming languages wasn't enough to land jobs. Due to my interest in Java I kind of wanted to learn something in the same. So I started learning Spring Framework. It is a powerful framework for building enterprise applications.",
                },
                {
                    name: "SpringBoot",
                    icon: <img src={springboot} width={30} height={30} />,
                    description: "Spring Boot is a powerful tool to build stand-alone, production-grade Spring-based Applications. It is a powerful framework for building enterprise applications. This was the reason that made me to build my interest in to backend development.",
                },
            ],
        },
        {
            year: "2024",
            technologies: [
                {
                    name: "C#",
                    icon: <img src={csharp} width={20} height={20} />,
                    description: "This language taught me a lesson, that whatever we learn might not be the same in the real world. I was introduced to C# in my first job. I was told to learn C# due to the requirement for the project. This language is actually so similar to Java. So it was easy for me to learn.",
                },
                {
                    name: ".Net Core",
                    icon: <img src={netCore} width={20} height={20} />,
                    description: "Learning C# was not enough. I had to learn .Net Core to be able to understand how to build web applications. .Net Core is a cross-platform, high-performance framework for building modern, cloud-based, Internet-connected applications.",
                },
                {
                    name: "React",
                    icon: <FaReact className="text-blue-500" />,
                    description: "As I was using Vanila JS for my projects before I was not able to do things that most of the modern websites now have. Started learning ReactJS and it's a powerful JS library.",
                },
            ],
        },
    ];

    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <Carousel
                items={technologies}
                interval={5000}
                cardHeading="My Technical Journey"
                className="relative"
                renderItem={(entry) => (
                    <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
                            {entry.year}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {entry.technologies.map((tech) => (
                                <div key={tech.name} className="flex items-center space-x-4">
                                    <div className="min-w-12 min-h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 shadow-md dark:text-white">
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-md font-medium text-gray-800 dark:text-gray-200">
                                            {tech.name}
                                        </h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {tech.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default TechStack;
