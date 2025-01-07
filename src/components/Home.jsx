import { Helmet } from "react-helmet-async";
import Banner from "../Home/Banner";
import ExploreProjects from "../Home/ExploreProjects";
import Faq from "../Home/Faq";
import Slider from "../Home/Slider";
import TopCategories from "../Home/TopCategories";
import WhyChoose from "../Home/WhyChoose";
import Contact from "../Home/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Crowdcube || Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <TopCategories></TopCategories>
      <ExploreProjects></ExploreProjects>
      <WhyChoose></WhyChoose>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
