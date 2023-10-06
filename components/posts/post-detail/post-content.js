import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with Nextjs",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-10",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      Content
    </article>
  );
};

export default PostContent;
