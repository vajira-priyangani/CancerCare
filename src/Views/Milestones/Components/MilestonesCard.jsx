import React, { useState } from "react";
import { Chip, Card, CardContent, Typography } from "@mui/material";
import { LinearProgressWithLabel } from "./LinearProgressWithLabel";

export default function MilestonesCard(props) {
  // eslint-disable-next-line no-unused-vars
  const { date, milestone, description, marksAllocated, percentage } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const chipStyle = {
   
    background: isHovered
    ? 'linear-gradient(to top right, #00ffff 0%, #ccffcc 100%)'
    : '#f5f5f5', // Change these colors to your desired hover and non-hover colors
  transition: 'background 1s ease',// Change these colors to your desired hover and non-hover colors
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Chip
          label={date}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={chipStyle}
          
        />
        <Typography color={"primary"} gutterBottom variant="h6" component="div">
          {milestone}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          Marks Allocated : {marksAllocated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <LinearProgressWithLabel value={100 - percentage} />
      </CardContent>
    </Card>
  );
}
