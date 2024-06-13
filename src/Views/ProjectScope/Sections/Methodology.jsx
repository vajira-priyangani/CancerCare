import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import SystemDirgram from "../../../assets/images/systemDirgram.png";


const Methodology = () => {
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
          <Typography  variant="h6" >Methodology</Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            alt="amLogo"
            src={SystemDirgram}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ width: "100%" }}>
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
                This project aims to contribute to the creation of an accurate and reliable cancer prediction model employing imaging data, particularly for breast cancer, by leveraging a comprehensive approach that combines advanced machine learning techniques and diverse imaging modalities. The project intends to achieve this by utilizing a broad collection of breast cancer imaging data from mammograms, ultrasounds, MRIs, and other pertinent modalities gathered from publicly accessible databases such as CBIS-DDSM, INbreast, and private medical institutes. The dataset will be meticulously cleaned by eliminating noise, standardizing formats, and filling in missing information. To maintain consistency in picture sizes and intensity levels, image scaling and normalization will be performed along with noise reduction techniques to enhance image quality. This multi-modal data will then be processed using hybrid models, explainable AI, and transfer learning methods to address robustness and generalization challenges, ultimately creating a precise and trustworthy model for early breast cancer diagnosis and prediction.
                <br/><br/>

The project's methodologies also include innovative techniques for the detection and staging of other cancers, such as blood and lung cancers, employing convolutional neural networks (CNNs) and advanced data augmentation strategies. For blood cancer detection, the EfficientNetB3 architecture will be utilized to analyze Peripheral Blood Smear (PBS) images, ensuring ease of use and secure storage of patient data. In the case of lung cancer, the project will focus on classifying cancer stages using the IQ-OTHNCCD Lung Cancer Dataset, with images divided into training and validation subsets. Data augmentation techniques, such as random rotations, shifts, flips, shearing, and zooming, will be applied to prevent overfitting and enhance model robustness. A pre-trained DenseNet121 network will serve as the base for feature extraction, with a custom classification head added to adapt it for lung cancer classification. This approach involves fine-tuning the DenseNet121 base model while preserving pre-trained ImageNet weights, ensuring a robust and generalizable model. Through these methodologies, the project aims to enhance the efficiency and accuracy of cancer prediction across multiple types, facilitating timely interventions and personalized treatment strategies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Methodology;
