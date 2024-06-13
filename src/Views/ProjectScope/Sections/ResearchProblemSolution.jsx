import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import conceptualDiagram from "../../../assets/images/conceptualDiagram.png";

const ResearchProblemSolution = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={4}
        sx={{
          paddingLeft: "5%",
          
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Research Problem Solution</Typography>
        </Grid>
        <Grid item xs={6}>
        <img
                alt="amLogo"
                src={conceptualDiagram}
                style={{
                  width: "75%",
                  height: "75%",
                }}/>
        </Grid>
        <Grid item xs={6}>
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
                Solution aims to develop an automated and data-driven system for accurate cancer prediction using imaging data for blood cancer, breast cancer, lungcancer, and thyroid cancer. This solution will leverage advanced technologies such as machine learning, image analysis, and data processing algorithms to enhance the accuracy, efficiency, and consistency of cancer predictions.
                The conceptual diagram illustrates the key components of the solution. The image data repository stores a vast collection of imaging data for each cancer type, serving as the foundation for training and validation processes. The preprocessing module applies noise reduction, image enhancement, and artifact removal techniques to ensure high-quality data. The feature extraction module employs computer vision techniques to extract relevant features, capturing tumor morphology, size, texture, and other characteristics. The machine learning model training module uses annotated datasets to train predictive models specific to each cancer type, employing algorithms like deep learning. The prediction module applies the trained models to generate predictions, which are evaluated using performance metrics.

Collaboration with domain experts, including radiologists, hematologists, and oncologists, ensures reliability and validation of the solution. Their expertise and feedback validate the system's performance on diverse clinical cases, providing insights for improvements.

Overall, this solution automates and optimizes cancer prediction using imaging data, improving early detection, treatment planning, and patient care. By harnessing advanced technologies and collaborating with domain experts, it has the potential to revolutionize cancer diagnosis and contribute to better patient outcomes.

              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ResearchProblemSolution;
