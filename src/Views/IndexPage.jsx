import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ProjectScope from "./ProjectScope/ProjectScope";
import Milestones from "./Milestones/Milestones";
import Downloads from "./Downloads/Downloads";
import AboutUs from "./AboutUs/AboutUs";
import { useMainLayoutProperties } from "../Layouts/MainLayout";
import { Container } from "@mui/material";

const IndexPage = () => {
  const refProps = useMainLayoutProperties();
  return (
    <>
      <HeroSection refProps={refProps} />
      <ProjectScope refProps={refProps} />
      <Milestones refProps={refProps} />
      <Downloads refProps={refProps} />
      <AboutUs refProps={refProps} />
    </>
  );
};

export default IndexPage;
