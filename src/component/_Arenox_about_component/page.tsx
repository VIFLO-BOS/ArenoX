"use client";
import React from "react";
import About_hero_section from "./about_hero_section";
import About_story_section from "./about_story_section";
import About_team_section from "./about_team_section";
import About_award_sections from "./about_award_sections";

/* @ about-page : main about page component with hero, story, team, and awards sections */

export default function About_page() {
  return (
    <div className=" mt-20">
      <About_hero_section />
      <About_story_section />
      <About_team_section />
      <About_award_sections />
    </div>
  );
}

