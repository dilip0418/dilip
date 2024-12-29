// Skills Grid Component
import { motion } from 'framer-motion';
import { Brain, Code, Database, SquareCode } from "lucide-react";
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const SkillsGrid = () => {
    const skills = [
        {
            icon: <SquareCode className="w-6 h-6" />,
            title: "Programming Languages",
            description: "Same Concept Different Languages",
            technologies: ["Java", "C#", "C++", "Python"]
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Backend Development",
            description: "Building robust and scalable server-side applications.",
            technologies: ["SpringBoot", ".Net Core Web API"]
        },
        {
            icon: <Database className='w-6 h-6' />,
            title: "Databases",
            description: "Designing and managing relational databases.",
            technologies: ["MySql", " MSSQL", "Postgre"]

        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Frontend Development",
            description: "Crafting responsive and intuitive user interfaces with modern frameworks.",
            technologies: ["HTML5", "CSS3", "BootStrap", "React", "JavaScript", "Tailwind CSS"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card hover className="h-full p-6">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            {skill.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {skill.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default SkillsGrid;