import { Grid, Typography } from "@mui/material";
import React from "react";
import { documents, presentations } from "../../data/data";
import DownloadsCard from "./Components/DownloadsCard";

const Downloads = ({ refProps }) => {
  const { downloadsRef } = refProps;
  return (
    <>
      <Grid
        container
        ref={downloadsRef}
        sx={{ 
        minHeight: "calc(100vh - 64px)" , 
        padding:"5%",
        // background:'linear-gradient(to right, #ccffff 0%, #ffffff 100%)',
        // boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      }}
        rowGap={2}
        paddingY={4}
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="overline">Downloads</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            Documents
          </Typography>
          <Typography variant="subtitle1">
            Please find all documents related to this project below.
          </Typography>
        </Grid>
        {documents.map((doc) => (
          <Grid item xs={12} sm={4} md={3}>
            <DownloadsCard
              title={doc.title}
              icon={doc.icon}
              date={doc.date}
              group={doc.group}
              individual={doc.individual}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            Presentations
          </Typography>
          <Typography variant="subtitle1">
            Please find all presentations related this project below.
          </Typography>
        </Grid>
        {presentations.map((doc) => (
          <Grid item xs={12} sm={4} md={3}>
            <DownloadsCard
              title={doc.title}
              icon={doc.icon}
              date={doc.date}
              group={doc.group}
              individual={doc.individual}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Downloads;
