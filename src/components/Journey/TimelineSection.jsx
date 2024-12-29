import Section from "../ui/Section";
import TimelineItem from "./TimelineItem";

const TimelineSection = () => {
    // Restructured data grouped by type
    const timelineData = {
        work: [
            {
                type: 'work',
                duration: '2023 - 2024',
                title: 'Associate Software Engineer',
                organization: 'FortRise Business Solutions Pvt. Ltd. FKA (TEG Global Infrastucture Pvt. Ltd.)',
                description: 'As an Associate Software Engineer, I worked alongside with an external engineer on developing and maintaining the flagship product of the company (CRM). Worked on automation tools like Power Automate.',
                highlights: [
                    'Developed and maintained the CRM product',
                    'Automated manual tasks using Power Automate',
                    'Collaborated with external engineers to deliver projects on time'
                ]
            }
        ],
        education: [
            {
                type: 'education',
                duration: '2019 - 2023',
                title: 'Bachelor of Engineering in Computer Science',
                organization: 'Ballari Institute of Technology and Management',
                description: 'Learnt various subjects like Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, and many more. Which helped me to build a strong foundation in Computer Science and Software Development.',
                highlights: [
                    'Graduated with Distinction (8.51 GPA)',
                    'Published research paper on NLP application at IEEE Conference',
                    'Led my final year project team to develop a Plagiarism Detection System'
                ]
            },
            {
                type: 'education',
                duration: '2017 - 2019',
                title: 'Pre-University PCMB',
                organization: 'Basavarajeshwari PU College',
                description: 'Although my course is related to Biology, Later after 12th I decided to pursue Computer Science.',
                highlights: [
                    'Scrored 80% in final exams',
                ]
            },
            {
                type: 'education',
                duration: '2016 - 2017',
                title: 'SSLC - 10th Grade',
                organization: 'Shanthinikethan English Medium High School',
                description: 'I was the SPL of the school and participated in sports (Chess) and cultural activities(Annual Days).',
                highlights: [
                    'Scored 85% in final exams',
                    'Elected as School Pupil Leader (SPL) for the academic year'
                ]
            }
        ],
        achievement: [
            {
                type: 'achievement',
                duration: '2023',
                title: 'Best Paper Award',
                organization: 'IEEE Conference',
                description: `Awarded for research paper on NLP based application that proposes an innovative approach to Detect Plagiarism in text based content. {<a href="https://ieeexplore.ieee.org/document/10150442" target="_blank" rel="noopener noreferrer">Read more</a>}`,
                highlights: [
                    'Selected among 500+ global nominations',
                    'Featured in Tech Monthly magazine'
                ]
            }
        ]
    };

    const categoryTitles = {
        work: 'Professional Experience',
        education: 'Education',
        achievement: 'Achievements'
    };

    return (
        <Section id="journey">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Professional Journey
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A chronicle of my professional experience, educational background, and notable achievements.
                    </p>
                </div>

                {Object.entries(timelineData).map(([category, items]) => (
                    <div key={category} className="mb-16 last:mb-0">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            {categoryTitles[category]}
                        </h3>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-[11px] top-2 h-full w-0.5 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800" />

                            {items.map((item, index) => (
                                <TimelineItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TimelineSection;