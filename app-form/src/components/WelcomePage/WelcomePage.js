import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./WelcomePage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { getDefaultState } from "react-query/types/core/mutation";

const WelcomePage = (props) => {
  const [openUntil, setOpenUntil] = useState("");

  const history = useNavigate();

  const handleClick = () => {
    history("/fill");
  };

  useEffect(() => {
    axios
      .get(
        "https://8080-egikarakash-skillmatrix-486iduh3y8n.ws-eu51.gitpod.io/api/rest/survey-openuntil"
      )
      .then((res) => {
        console.log("res-data", res.data.Survey[0]["open_until"]);
        setOpenUntil(res.data.Survey[0]["open_until"]);
      });
  }, []);
  console.log(openUntil);
  //console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(openUntil));

  const date = new Date(openUntil);

  return (
    <div className={classes.welcome}>
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
      {/* <Typography variant="string" paragraph component="div" gutterBottom>
                {openUntil}
            </Typography> */}
      {"You have access to the survey until: " +
        date.getDate() +
        "th of " +
        date.toLocaleString("default", { month: "long" }) + "  " +
        date.toLocaleTimeString("default", { hour: "numeric", minute: "numeric"}) + "."}
      <Typography variant="string" paragraph component="div" gutterBottom>
        To get started, click the button below.
      </Typography>
      <div className={classes.btn}>
        <Button onClick={handleClick} variant="contained">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
