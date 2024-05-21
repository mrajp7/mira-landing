import AIReception from "../components/aiReception";
import CarouselSection from "../components/carouselSection";
import ConversationSec from "../components/conversationSec";
import ExperienceSection from "../components/experience";
import FAQSection from "../components/faq";
import Features from "../components/features";
import Footer from "../components/footer";
import Integrations from "../components/integrations";
import MainSection from "../components/landingSection";
import TransformSection from "../components/transformSection";

const Home = () => {
    return (
        <>
    <MainSection/>
    <TransformSection/>
    <ExperienceSection/>
    <CarouselSection/>
    <ConversationSec/>
    <AIReception/>
    <Features/>
    <Integrations/>
    <FAQSection/>
    <Footer/>
        </>

    )
};

export default Home;