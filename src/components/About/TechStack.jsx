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
                    description: "Laid a strong foundation in structured programming and memory management.",
                },
            ],
        },
        {
            year: "2021",
            technologies: [
                {
                    name: "C++",
                    icon: <SiCplusplus />,
                    description: "Enhanced problem-solving skills with object-oriented programming.",
                },
                {
                    name: "Python",
                    icon: <FaPython />,
                    description: "Dived into versatile scripting and data analysis.",
                },
                {
                    name: "SQL",
                    icon: "𝓢𝓠𝓛",
                    description: "Mastered querying, data manipulation, and relational database design.",
                },
            ],
        },
        {
            year: "2022",
            technologies: [
                {
                    name: "Java",
                    icon: <FaJava />,
                    description: "Built scalable and robust backend applications.",
                },
                {
                    name: "Git",
                    icon: <FaGit />,
                    description: "Implemented version control and collaborative workflows.",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-yellow-500" />,
                    description: "Developed interactive and dynamic web applications.",
                },
            ],
        },
        {
            year: "2023",
            technologies: [
                {
                    name: "Spring",
                    icon: <img src={spring} width={20} height={20} />,
                    description: "Streamlined enterprise application development with microservices.",
                },
                {
                    name: "SpringBoot",
                    icon: <img src={springboot} width={30} height={30} />,
                    description: "Streamlined enterprise application development with microservices.",
                },
            ],
        },
        {
            year: "2024",
            technologies: [
                {
                    name: "C#",
                    icon: <img src={csharp} width={20} height={20} />,
                    description: "Crafted powerful applications for Windows environments.",
                },
                {
                    name: ".Net Core",
                    icon: <img src={netCore} width={20} height={20} />,
                    description: "Developed high-performance, cross-platform applications.",
                },
                {
                    name: "React",
                    icon: <FaReact className="text-blue-500" />,
                    description: "Built modular, component-based front-end architectures.",
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {entry.technologies.map((tech) => (
                                <div key={tech.name} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 shadow-md dark:text-white">
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
