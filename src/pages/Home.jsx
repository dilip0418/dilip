// src/pages/Home.jsx
import AboutSection from '../components/About/AboutSection';
import Hero from '../components/home/Hero';
import TimelineSection from '../components/Journey/TimelineSection';
import ProjectsSection from '../components/projects/ProjectSection';
import ContactSection from '../components/Contact/ContactSection';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection id="about" />
            <TimelineSection id="journey" />
            <ProjectsSection id="projects" />
            <ContactSection id="contact" />
            {/* Other sections will go here */}
        </>
    );
};

export default Home;