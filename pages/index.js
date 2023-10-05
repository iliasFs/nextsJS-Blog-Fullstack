import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero.js";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
