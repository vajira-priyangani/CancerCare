import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import pythonLogo from "../../../assets/images/python.png";
import tensorflowLogo from "../../../assets/images/tensorflow.png";
import firebaseLogo from "../../../assets/images/firebase.png";
import reactLogo from "../../../assets/images/react.png";
const Technologies = () => {
  // const navLinkStyles = {
  //   color: "f5f5f5",
  //   cursor: "pointer",
  //   transition: "color 0.3s", // Add transition for smooth color change
  //   "&:hover": {
  //     color: 'linear-gradient(to top right, #00ffff 0%, #ccffcc 100%)', // Change color on hover
  //   },
  // }
  return (
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center"
    rowSpacing={4}
     sx={{
      paddingLeft:"5%"
     }}
    >
      <Grid item xs={12}>
        <Typography variant="h6">Technologies</Typography>
      </Grid>
      <Grid item xs={3}>
        <Box
          style={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "150px",
              height: "150px",
              padding: "10px 0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "264px",
              border: "1px solid rgba(211, 211, 211, 0.33)",
              boxShadow: "1px 4px 8px 0px rgba(0, 0, 0, 0.50)",
            }}
            
          >
            <Box
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: " 1 0 0",
                alignSelf: "stretch",
              }}
            >
              <img
                alt="amLogo"
                src={pythonLogo}
                style={{
                  width: "86px",
                  height: "84px",
                }}
              />
            </Box>
          </Box>
          <Typography>Python</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          style={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "150px",
              height: "150px",
              padding: "10px 0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "264px",
              border: "1px solid rgba(211, 211, 211, 0.33)",
              boxShadow: "1px 4px 8px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            <Box
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: " 1 0 0",
                alignSelf: "stretch",
              }}
            >
              <img
                alt="amLogo"
                src={reactLogo}
                style={{
                  width: "86px",
                  height: "84px",
                }}
              />
            </Box>
          </Box>
          <Typography>React</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          style={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "150px",
              height: "150px",
              padding: "10px 0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "264px",
              border: "1px solid rgba(211, 211, 211, 0.33)",
              boxShadow: "1px 4px 8px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            <Box
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: " 1 0 0",
                alignSelf: "stretch",
              }}
            >
              <img
                alt="amLogo"
                src={tensorflowLogo}
                style={{
                  width: "86px",
                  height: "84px",
                }}
              />
            </Box>
          </Box>
          <Typography>Tensorflow</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          style={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "150px",
              height: "150px",
              padding: "10px 0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "264px",
              border: "1px solid rgba(211, 211, 211, 0.33)",
              boxShadow: "1px 4px 8px 0px rgba(0, 0, 0, 0.50)",
            }}
          >
            <Box
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: " 1 0 0",
                alignSelf: "stretch",
              }}
            >
              <img
                alt="amLogo"
                src={firebaseLogo}
                style={{
                  width: "86px",
                  height: "84px",
                }}
              />
            </Box>
          </Box>
          <Typography>Firebase</Typography>
        </Box>
      </Grid>
     
      
    </Grid>
  );
};

export default Technologies;
