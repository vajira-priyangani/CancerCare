import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bannerWelcome from "../../assets/images/HeroSection.png";
import heroImage from "../../assets/images/heroImage.png";
const HeroSection = ({ refProps }) => {
  const { heroSectionsRef, projectScopeRef } = refProps;
  const handleLearnMoreClick = () => {
    const targetPosition = projectScopeRef.current.offsetTop - 64;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Grid
        ref={heroSectionsRef}
        container
        sx={{
          // backgroundImage: `url(${bannerWelcome})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          background: "linear-gradient(to top right, #ccffff 0%, #ffffff 100%)",
          height: "calc(100vh - 90px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          padding: "2%",
        }}
      >
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" component="h1">
              Welcome to Cancer Care
            </Typography>
            <Typography variant="h5" component="h2" sx={{ color: "#888" }}>
              Personalized Web Patient Guidance System for Detection
              and Management of Thyroid, Blood, Lung and Breast Cancers
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" onClick={handleLearnMoreClick}>
              Learn More
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          spacing={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box>
            <img
              alt="amLogo"
              src={heroImage}
              style={{ 
                width: "650px",
                height: "500px", 
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
