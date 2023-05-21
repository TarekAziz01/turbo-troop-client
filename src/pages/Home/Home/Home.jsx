import About from "../About/About";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import TabSection from "../TabSection/TabSection";


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <TabSection></TabSection>
        <GallerySection></GallerySection>
        <About></About>
      </div>
    );
};

export default Home;