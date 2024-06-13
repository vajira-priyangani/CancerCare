import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LiteratureSurvey from "./Sections/LiteratureSurvey";
import ResearchGap from "./Sections/ResearchGap";
import ResearchProblemSolution from "./Sections/ResearchProblemSolution";
import ResearchObjectives from "./Sections/ResearchObjectives";
import Technologies from "./Sections/Technologies";
import Methodology from "./Sections/Methodology";

const ProjectScope = ({ refProps }) => {
  const { projectScopeRef } = refProps;
  return (
    <>
      <Grid
        container
        ref={projectScopeRef}
        sx={{ minHeight: "calc(100vh - 64px)", padding: "5%" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="overline">Project Scope</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "50px",
            }}
          >
            {/* <LiteratureSurvey /> */}
            <ResearchGap />
            <ResearchProblemSolution />
            <ResearchObjectives />
            <Methodology />
            <Technologies />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectScope;
