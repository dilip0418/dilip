// Bio Component

import Card from "../ui/Card";
import MyPic from '../../assets/MyPic.jpeg';
import Badge from "../ui/Badge";

const Bio = () => {
    return (
        <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl">
                    <img
                        src={MyPic}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Hi, I&apos;m Dilip. I&apos;m a software engineer with a passion for building innovative solutions to complex problems. I specialize in web development, with expertise in both front-end and back-end technologies. I&apos;m always eager to learn new things and take on new challenges. I love working with a team to create amazing products that make a difference in people&apos;s lives.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="blue">Problem Solver</Badge>
                        <Badge variant="green">Team Player</Badge>
                        <Badge>Creative Thinker</Badge>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Bio;