"use client";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";

const SteamAchievements = () => {
  const [achievements, setAchievements] = useState<Element>();

  useEffect(() => {
    !achievements && updateAchievements(setAchievements);
  }, [achievements]);

  return achievements ? <Card className="rounded-3xl mx-8 p-8" elevation={5} ref={ref => ref?.append(achievements)} /> : <></>;
};

const updateAchievements = (setAchievements: (achievements?: Element) => void) => {
  fetch("https://api.allorigins.win/get?url=https://steamcommunity.com/id/MyCharIsHard/")
    .then(result => result.json())
    .then(json => setAchievements(getAchievementsFromHtml(json.contents)))
    .catch(error => console.error(error));
};

const getAchievementsFromHtml = (html: string) => {
  const customizations = new DOMParser().parseFromString(html, "text/html").getElementsByClassName("profile_customization");
  for (let i = 0; i < customizations.length; i++) {
    const customization = customizations.item(i)!;
    const header = customization.getElementsByClassName("profile_customization_header");
    if (header.item(0)?.textContent === "Rarest Achievement Showcase") return customization;
  }
  console.error("Unable to find steam achievements");
};

export default SteamAchievements;
