import java from "./2022-05-02-Logging-in-Java-9+.md";
import react from "./2022-10-05-React-+-GitHub-Pages_404s-with-React-Router.md";

const posts = [
  { filename: "2022-05-02-Logging-in-Java-9+.md", component: java },
  { filename: "2022-10-05-React-+-GitHub-Pages_404s-with-React-Router.md", component: react },
];

const getPosts = () =>
  posts.map(post => {
    const match = post.filename.match("(\\d+)-(\\d+)-(\\d+)-(.+).md")!;
    return {
      ...post,
      route: `${match[1]}/${match[2]}/${match[3]}/${match[4]}`,
      title: match[4].replaceAll("-", " ").replaceAll("_", " - "),
    };
  });

export { getPosts };
