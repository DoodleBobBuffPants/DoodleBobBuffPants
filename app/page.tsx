"use client";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import useBasePath from "./hooks/useBasePath";
import LinkedIn from "./icons/LinkedIn";
import projects from "./projects";
import { getPosts } from "./posts";

const Home = () => (
  <>
    <div className="flex justify-around">
      <Image src={useBasePath("/assets/avatar.jpg")} width="300" height="300" alt="avatar" className="rounded-full" />

      <ul className="m-auto max-w-[40%]">
        <li className="list-disc list-outside">Projects</li>
        <ul className="ml-5 mb-5">
          {projects.map(project => (
            <li className="list-disc list-outside hover:underline" key={project.name}>
              <a href={`https://github.com/DoodleBobBuffPants/${project.url}`} target="_blank">
                {project.name}
              </a>
            </li>
          ))}
        </ul>

        <li className="list-disc list-outside">Posts</li>
        <ul className="ml-5 mb-5">
          {getPosts().map(post => (
            <li className="list-disc list-outside hover:underline" key={post.title}>
              <Link href={`./posts/${post.route}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <li className="list-disc list-outside hover:underline">
          <Link href="./book-list">Books I have read</Link>
        </li>
      </ul>
    </div>

    <IconButton href="https://www.linkedin.com/in/ajay-ahir-924581172/" target="_blank" className="flex w-20 h-20 mt-16 mx-auto fill-current" aria-label="linkedin">
      <LinkedIn />
    </IconButton>
  </>
);

export default Home;
