import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './WelcomePage.module.css';
import { useNavigate  } from "react-router-dom";


const WelcomePage = (props) => {
    const history = useNavigate();


    const handleClick = () => {
        history('/fill');
    }


    return (
        <div className={classes.welcome}>
            <Typography variant="h3" component="div" gutterBottom>
                Welcome to the skills survey!
            </Typography>
            <Typography variant="string" paragraph component="div" gutterBottom>
                This is a simple app that allows you to fill out a survey about your skills.
            </Typography>
            <Typography variant="string" paragraph component="div" gutterBottom>
                You can interrupt the survey at any time and pick up later within 7 days.
            </Typography>
            <Typography variant="string" paragraph component="div" gutterBottom>
                To get started, click the button below.
            </Typography>
            <div className={classes.btn}>
                <Button onClick={handleClick} variant="contained">Get Started</Button>
            </div>
        </div>
    );
}

export default WelcomePage;