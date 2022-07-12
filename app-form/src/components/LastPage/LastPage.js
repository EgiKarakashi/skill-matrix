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
        Welcome to the skills survey!
      </Typography>
      <Typography variant="string" paragraph component="div" gutterBottom>
        This is a simple app that allows you to fill out a survey about your
        skills.
      </Typography>
      <Typography variant="string" paragraph component="div" gutterBottom>
        You can interrupt the survey at any time and pick up later within 7
        days.
      </Typography>
      <Typography variant="string" paragraph component="div" gutterBottom>
        To get started, click the button below.
      </Typography>
      
    </div>
  );
};

export default LastPage;
