import { ReactNode } from "react";

const getPosts = () => {
  const posts = import.meta.glob("./*.md", { eager: true });
  return Object.keys(posts)
    .map(k => ({ filename: k, content: Object.values(posts[k] as {})[0] as () => ReactNode }))
    .map(post => {
      const match = post.filename.match("(\\d+)-(\\d+)-(\\d+)-(.+).md")!;
      return {
        ...post,
        route: `${match[1]}/${match[2]}/${match[3]}/${match[4]}`,
        title: match[4].replaceAll("-", " ").replaceAll("_", " - "),
      };
    });
};

export { getPosts };
