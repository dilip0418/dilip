// About Section Component
import Section from '../ui/Section';
import Container from '../layout/Container';
import Bio from './Bio';
import SkillsGrid from './SkillsGrid';
import TechStack from './TechStack';

const AboutSection = () => {
    return (
        <Section id="about">
            <Container>
                <div className="space-y-12">
                    <Bio />
                    <SkillsGrid />
                    <TechStack />
                </div>
            </Container>
        </Section>
    );
};

export default AboutSection;