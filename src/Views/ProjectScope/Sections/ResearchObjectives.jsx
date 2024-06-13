import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ResearchObjectives = () => {
  return (
    <>
      <Grid
        container
        sx={{
          paddingLeft: "5%",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Research Objectives</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              {/* <Typography color={"primary"} gutterBottom variant="h6" component="div">
      
        </Typography> */}
              <Typography gutterBottom variant="subtitle1" component="div">
                Main Research Objective
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Develop an automated and accurate cancer prediction system utilizing imaging data for blood, breast, lung, and thyroid cancers. The system aims to improve cancer stages detection, treatment planning, and patient care by implementing preprocessing techniques, feature extraction algorithms, and predictive models specific to each cancer type. By leveraging machine learning and image analysis, the research seeks to enhance the efficiency and accuracy of cancer prediction, ultimately aiding in timely interventions and personalized treatment strategies
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default ResearchObjectives;
