import { useEffect } from "react";
import FAQsSection from "../../FAQsSection/FAQsSection";
import About from "../About/About";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import TabSection from "../TabSection/TabSection";
import Aos from "aos";
import "aos/dist/aos.css"


const Home = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
    document.title = "Turbo Troop";
    return (
      <div>
        <div data-aos="flip-up">
          <Banner></Banner>
        </div>
        <div
          data-aos="zoom-out
"
        >
          <TabSection></TabSection>
        </div>
        <div data-aos="slide-up">
          <GallerySection></GallerySection>
        </div>
        <div data-aos="fade-right">
          <FAQsSection></FAQsSection>
        </div>
        <div data-aos="fade-left">
          <About></About>
        </div>
      </div>
    );
};

export default Home;