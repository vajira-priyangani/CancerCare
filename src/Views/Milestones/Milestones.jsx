import { Grid, Typography } from "@mui/material";
import React from "react";
import MilestonesCard from "./Components/MilestonesCard";
import { milestoneDetails } from "../../data/data";
import { LinearProgressWithLabel } from "./Components/LinearProgressWithLabel";

const Milestones = ({ refProps }) => {
  const { milestonesRef } = refProps;
  return (
    <>
      <Grid
        container
        ref={milestonesRef}
        sx={{ minHeight: "calc(100vh - 64px)", padding:"5%" ,
        // background:'linear-gradient(to right, #ccffff 0%, #ffffff 100%)',
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      }}
        rowGap={2}
      >
        <Grid item xs={12}>
          <Typography variant="overline">Milestones</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            Timeline in Brief
          </Typography>
        </Grid>
        {milestoneDetails.map((milestone) => (
          <>
           <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
           </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <MilestonesCard
              date={milestone.date}
              milestone={milestone.milestone}
              description={milestone.description}
              marksAllocated={milestone.marksAllocated}
              percentage={milestone.percentage}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
           </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Milestones;
