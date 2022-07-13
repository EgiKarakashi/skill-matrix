import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./LastPage.module.css";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "../../services/hasura-client";

const  LastPage = (props) => {
  


  return (
    <div className={classes.lastpage}>
      <Typography variant="h3" component="div" gutterBottom>
        Thank you for filling up the survey!
      </Typography>
    </div>
  );
};

export default LastPage;
