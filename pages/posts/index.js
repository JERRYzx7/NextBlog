import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All my post</title>
        <meta
          name="description"
          content="Every project I have done or I am working on"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
