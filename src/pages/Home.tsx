import Hero from '../sections/Hero';
import Tagline from '../sections/Tagline';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import ContactCTA from '../sections/ContactCTA';

interface HomeProps {
    onOpenContact: () => void;
}

const Home = ({ onOpenContact }: HomeProps) => {
    return (
        <main className="relative">
            <Hero />
            <Tagline />
            <About />
            <Experience />
            <Projects />
            <ContactCTA onOpenContact={onOpenContact} />
        </main>
    );
};

export default Home;
