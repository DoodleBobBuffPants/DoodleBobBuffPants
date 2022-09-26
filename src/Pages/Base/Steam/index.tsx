import React, { useEffect, useState } from "react";
import "./index.scss";

let cachedAchievements : Element;

const Steam = () => {
  const [achievements, setAchievements] = useState<Element>(cachedAchievements);
  useEffect(() => updateAchievements(setAchievements), []);
  return achievements ? <div className="steam" ref={ ref => ref?.append(achievements)}/> : <div />
}

const updateAchievements = (setAchievements : (achievements: Element) => void) => {
  if (cachedAchievements) return;
  fetch("https://api.allorigins.win/get?url=https://steamcommunity.com/id/MyCharIsHard/")
    .then(result => result.json())
    .then(json => setAchievements(getAchievementsFromHtml(json.contents)))
    .catch(error => console.error(error));
}

const getAchievementsFromHtml = (html : string) => {
  const customizations = new DOMParser().parseFromString(html, 'text/html').getElementsByClassName("profile_customization");
  for (let i = 0; i < customizations.length; i++) {
    const customization = customizations.item(i)!;
    const header = customization.getElementsByClassName("profile_customization_header");
    if (header.item(0)?.textContent === "Rarest Achievement Showcase") cachedAchievements = customization;
  }
  if (!cachedAchievements) console.error("Unable to find achievements");
  return cachedAchievements;
}

export { Steam };
