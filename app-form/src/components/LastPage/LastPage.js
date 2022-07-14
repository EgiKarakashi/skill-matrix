import React from "react";
import Typography from "@mui/material/Typography";

import {
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

const  LastPage = (props) => {
  
 
    return (
      <Card sx={{ maxWidth: 800}} >
        <CardMedia
          component="img"
          height="450"
          width="800"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
           Congratulations!!!
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
           You finished the form successfully!
          </Typography>
        </CardContent>
        
      </Card>
    );
  }

export default LastPage;
