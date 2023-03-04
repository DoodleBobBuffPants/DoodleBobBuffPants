import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Base } from "Pages/Base";
import "./index.scss";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const originalTitle = document.title;
    document.title = params.title!;
    updatePost(params, setPost);
    return () => { document.title = originalTitle; }
  }, []);

  return <Base>
    <div className="markdown">
      <ReactMarkdown children={post} linkTarget="_blank" components={{
        code({ node, inline, className, children, ...props }) {
          const match = className?.match("language-(.+)") || '';
          return !inline && match
          ?
            <SyntaxHighlighter children={String(children).trimEnd()} language={match[1]}
              // @ts-ignore
              style={dark}
              {...props}
            />
          :
            <code className={className} {...props}>{children}</code>
        }
      }}/>
    </div>
  </Base>
}

const updatePost = (params : Params<string>, setPost : (post: string) => void) => {
  const base = import.meta.env.DEV ? "Pages/Post/Posts" : "posts";
  fetch(`/${base}/${params.year}-${params.month}-${params.day}-${params.title}.md`)
    .then(result => result.text())
    .then(text => setPost(text))
    .catch(error => console.error(error));
}

export { Post };
