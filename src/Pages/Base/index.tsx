import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Steam } from "./Steam";
import { Theme } from "./Themes";
import "./index.scss";

interface Props {
  children: ReactNode
}

const Base = (props : Props) => {
  return <div className="background">
    <h1 className="title"><Link className="link" to="/">DoodleBobBuffPants</Link></h1>
    <div className="body">
      <Steam />
      { props.children }
      <Theme />
    </div>
  </div>
}

export { Base };
