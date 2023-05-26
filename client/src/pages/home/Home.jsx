import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import YourChoice from "../../components/YourChoice/YourChoice";
import ToyGallery from "../../components/ToyGallery/ToyGallery";
import Testimonial from "../../components/testimonial/Testimonial";
import Faq from "../../components/faq/Faq";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ToyGallery />
      <YourChoice />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
