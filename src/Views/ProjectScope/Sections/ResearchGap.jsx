import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ResearchGap = () => {
  return (
  <>
  <Grid container
     sx={{
      paddingLeft:"5%",
     }}
    >
      <Grid item xs={12}>
        <Typography variant="h6">Research Problem</Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={12}>
      <Card sx={{ Width: "50%" }}>
            <CardContent>
              {/* <Typography
                color={"primary"}
                gutterBottom
                variant="h6"
                component="div"
              >
                sdfghjkl;''
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Marks Allocated :
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
  Accurate cancer prediction using imaging data is a critical challenge in medical research due to the subjective interpretation by radiologists, which can lead to inconsistencies and potential misdiagnoses. The complexity and unique characteristics of each cancer type demand specialized approaches, making it difficult to scale and achieve efficiency when relying solely on human expertise for analysis. Therefore, there is an urgent need for an automated and data-driven solution that leverages machine learning and image analysis. Such a solution would enhance accuracy, efficiency, and consistency in cancer prediction, ultimately improving stage detection, diagnosis, and personalized treatment planning.
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    </Grid>
  </>);
};

export default ResearchGap;
