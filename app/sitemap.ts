import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "https://doodlebobbuffpants.github.io",
    lastModified: new Date(),
  },
  {
    url: "https://doodlebobbuffpants.github.io/book-list",
    lastModified: new Date(),
  },
  {
    url: "https://doodlebobbuffpants.github.io/2022/05/02/Logging-in-Java-9+",
    lastModified: new Date(),
  },
  {
    url: "https://doodlebobbuffpants.github.io/2022/10/05/React-+-GitHub-Pages_404s-with-React-Router",
    lastModified: new Date(),
  },
];

// noinspection JSUnusedGlobalSymbols
export default sitemap;
