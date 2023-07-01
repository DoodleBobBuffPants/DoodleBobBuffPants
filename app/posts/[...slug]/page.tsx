import { getPosts } from "../";

const getPost = (slug: string[]) => {
  const route = slug.map(segment => decodeURIComponent(segment)).join("/");
  return getPosts().find(p => p.route === route);
};

// noinspection JSUnusedGlobalSymbols
const generateMetadata = async ({ params: { slug } }: { params: { slug: string[] } }) => {
  const post = getPost(slug);
  return { title: post?.title ?? document.title };
};

// noinspection JSUnusedGlobalSymbols
const generateStaticParams = () => getPosts().map(p => ({ slug: p.route.split("/") }));

const Post = ({ params: { slug } }: { params: { slug: string[] } }) => {
  const post = getPost(slug);
  return post ? (
    <div className="markdown">
      <post.component />
    </div>
  ) : (
    <p>Nothing to see here...</p>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Post;
export { generateMetadata, generateStaticParams };
