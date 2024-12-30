import Container from './Container';
import SocialHandles from '../ui/SocialHandles';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-12 mt-auto">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Dilip Kumar B K. All rights reserved.
                        </p>
                    </div>
                    <SocialHandles />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;