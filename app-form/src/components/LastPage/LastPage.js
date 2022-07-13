import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./LastPage.module.css";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "../../services/hasura-client";
import {
  Container,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  Slider,
  Card,
  CardMedia,
  LinearProgress,
  CircularProgress,
  CardActions,
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
          <Typography gutterBottom variant="h5" component="div">
           Congratulations
          </Typography>
          <Typography variant="body2" color="text.secondary">
           You finished the form successfully!
          </Typography>
        </CardContent>
        
      </Card>
    );
  }

export default LastPage;
