import Banner from "../Home/Banner";
import ExploreProjects from "../Home/ExploreProjects";
import Faq from "../Home/Faq";
import Slider from "../Home/Slider";
import TopCategories from "../Home/TopCategories";
import WhyChoose from "../Home/WhyChoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <TopCategories></TopCategories>
            <ExploreProjects></ExploreProjects>
            <WhyChoose></WhyChoose>
            <Faq></Faq>
        </div>
    );
};

export default Home;