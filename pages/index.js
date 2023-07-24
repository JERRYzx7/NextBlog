import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>YoC's Blog</title>
        <meta
          name="description"
          content="The website I create to put my side-project & some of the material I learned from somewhere else"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
