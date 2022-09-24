import React from "react";
import { Link } from "react-router-dom";
import { LinkedIn } from "Icons/LinkedIn";
import { Base } from "Pages/Base";
import * as posts from "Pages/Post/Posts";
import { projects } from "./projects";
import "./index.scss";

const Home = () => {
  return <Base>
    <div className="home">
      <img src="https://avatars2.githubusercontent.com/u/17652619?v=4&s=300" className="profile-picture" alt="profile-picture" />

      <ul className="m-auto">
        <li>Projects</li>
        <ul>
          {
            projects.map(project =>
              <li className="link" key={project.name}><a href={`https://github.com/DoodleBobBuffPants/${project.url}`} target="_blank">{project.name}</a></li>
            )
          }
        </ul>

        <li>Posts</li>
        <ul>
          {
            getPostNames().map(post => {
              const match = post.match("posts/(\\d+)-(\\d+)-(\\d+)-(.+).md")!;
              const path = `/${match[1]}/${match[2]}/${match[3]}/${match[4]}`
              return <li key={post}><Link className="link" to={path}>{match[4].replaceAll("-", " ")}</Link></li>
            })
          }
        </ul>

        <li><Link className="link" to="/book-list">Books I have read</Link></li>
      </ul>
    </div>

    <LinkedIn className="socials" link="https://www.linkedin.com/in/ajay-ahir-924581172/"/>
  </Base>
}

const getPostNames = () : string[] => {
  type Key = keyof typeof posts;
  return Object.keys(posts).map(k => posts[k as Key]);
}

export { Home, getPostNames };
