import React, { useState } from "react";
import {
  Chip,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ClearIcon from '@mui/icons-material/Clear';
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DownloadsCard(props) {
  const { title, icon, date, group, individual } = props;
  const[open,setOpen]=useState(false);
const onchangeHandler =()=>{
  if (open) {
    setOpen(false)
  } else {
    setOpen(true)
  }
}
const onChangeDownlord =(link) => {
  console.log("🚀 ~ file: DownloadsCard.jsx:30 ~ onChangeDownlord ~ link:", link)
  window.location.href = `${link}`;

  
}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" gap={1}>
          {icon === "pptx" ? (
            <SlideshowIcon color="warning" />
          ) : icon === "image" ? (
            <ImageIcon color="info" />
          ) : (
            <PictureAsPdfIcon color="error" />
          )}
          <Typography color={"primary"} variant="body1">
            {title}
          </Typography>
        </Stack>
        <Typography gutterBottom variant="subtitle1" component="div">
          {date}
        </Typography>
      </CardContent>
      {open ?(<CardActions sx={{ justifyContent: "space-between" }}>
        <Box></Box>
          <Button startIcon={<ClearIcon/>} size="small" onClick={()=>onchangeHandler()}>
          </Button>
      </CardActions>):
      (<CardActions sx={{ justifyContent: "space-between" }}>
        <Box></Box>
          <Button startIcon={<KeyboardArrowDownIcon/>} size="small"onClick={()=>onchangeHandler()}>
          </Button>
      </CardActions>)}
    { open &&
    <>
     {individual.isIndividual && (
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Chip label={"Individual"} />
          <Button startIcon={<FileDownloadIcon />} size="small" onClick={()=>onChangeDownlord(individual.link)} >
            Download
          </Button>
        </CardActions>
      )}
      {group.isGroup && (
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Chip label={"Group"} />
          <Button startIcon={<FileDownloadIcon />} size="small" onClick={()=>onChangeDownlord(individual.link)}>
            Download
          </Button>
        </CardActions>
      )}
    </>
      }
      
    </Card>
  );
}
