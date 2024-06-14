import { Grid, Typography } from "@mui/material";
import React from "react";
import MemberCard from "./Components/MemberCard";
import Harinda from "../../assets/images/harinda.jpg";
import Chamal from "../../assets/images/chamal.jpg"; 
import Deshan from "../../assets/images/deshan.png";
import Udith from "../../assets/images/Udith.png"; 
import Wajira from "../../assets/images/wajira.png"; 
const AboutUs = ({ refProps }) => {
  const { AboutUsRef } = refProps;
  return (
    <>
      <Grid
        container
        ref={AboutUsRef}
        sx={{ minHeight: "calc(100vh - 64px)" , 
        padding:"5%", 
        
      }}
        rowGap={2}
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="overline">About Us</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            Meet Our Team !
          </Typography>
        </Grid>

        <Grid item container xs={12} rowGap={2} columnSpacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <MemberCard
             imageUrl={Harinda}
              name={"Harinda Fernando"}
              role={"Supervisor"}
              position={"Assistant Professor"}
              linkedIn={"https://www.linkedin.com/in/nuwan-kodagoda-a4875a4"}
              email={"harinda.f@sliit.lk"}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Chamal}
            name={"Dayarathna D C D"}
            role={"Group Leader"}
            position={"Undergraduate"}
            Department={"Information Technology"}
            linkedIn={"https://www.linkedin.com/in/chamal-dakshana-11348525a/"}
            email={"it20102296@sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Deshan}
            name={"Deshan S N D N"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Information Technology"}
            linkedIn={"https://www.linkedin.com/in/deshan-nadeera-032315243/"}
            email={"it20089054@my.sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Udith}
            name={"Kavisinghe U K"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Software Engineering"}
            linkedIn={"https://www.linkedin.com/in/"}
            email={"it19206660@my.sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Wajira}
            name={"Priyangani K A V"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Information Technology"}
            linkedIn={"https://www.linkedin.com/in/vajira-priyangani-72692b220/"}
            email={"it20107000@my.sliit.lk"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
