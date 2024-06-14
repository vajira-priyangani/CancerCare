import React from "react";
import {
  Chip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MemberCard(props) {
  // eslint-disable-next-line no-unused-vars
  const { imageUrl, name, role, position, linkedIn, email ,Department} = props;
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia sx={{ height: 300 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography color={"primary"} gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Chip label={role} />
        <Typography gutterBottom variant="subtitle1" component="div">
          {position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SLIIT | Sri Lanka Institute of Information Technology
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          Department
        </Typography>
          <Typography variant="body2" color="text.secondary">
            {Department}
          </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
      </CardActions>
    </Card>
  );
}
