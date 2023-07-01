import { useParams } from "react-router-dom";
import { getPosts } from "./";
import useTitle from "../hooks/useTitle";

const getPost = (slug: string[]) => {
  const route = slug.map(segment => decodeURIComponent(segment)).join("/");
  return getPosts().find(p => p.route === route);
};

const Post = () => {
  const params = useParams();
  const post = getPost([params.year!, params.month!, params.day!, params.title!]);

  useTitle(post?.title);

  return post ? (
    <div className="markdown">
      <post.content />
    </div>
  ) : (
    <p>Nothing to see here...</p>
  );
};

export default Post;
