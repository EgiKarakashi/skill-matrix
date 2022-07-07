import React, { useEffect, useState } from 'react';
import { useQuery, gql } from "../../services/hasura-client";
import classes from './Question.module.css';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";
import axios from 'axios';





const Question = (props) => {
    const [questions, setQuestions] = useState({});
    const [answers, setAnswers] = useState({});
    const [value, setValue] = React.useState(true);

  
    const history = useNavigate();

    useEffect(() => {
        axios.get('https://8080-egikarakash-skillmatrix-486iduh3y8n.ws-eu51.gitpod.io/api/rest/answers')
        .then(res => {
            //console.log("res-data", res.data.Answers[0].data);
            setAnswers(res.data.Answers[0].data);
        });
    }, []);




    useEffect(() => {
        axios.get('https://8080-egikarakash-skillmatrix-486iduh3y8n.ws-eu51.gitpod.io/api/rest/get-question')
        .then(res => {
            console.log("res-dataQ", res.data.Questions[0].data);
            setQuestions(res.data.Questions[0].data);
        });
    }, []);


    const handleClick = () => {
        history('/');
    }
            

    const handleChange = (event) => {
        setValue(event.target.value);
      };

        

    return (
        <div className={classes.question}>
           <Typography variant="h6" component="div" gutterBottom>
                {questions.Question}
            </Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {Object.keys(answers).map(function(key, index) {
                        // console.log("key:", key, "-", Object.values(answers)[index]);
                        // console.log("index: ",  (index + 1));
                        return <FormControlLabel key={key} value={Object.values(answers)[index]} control={<Radio />} label={key} />
                    })}

                </RadioGroup>
            </FormControl>
            <div style={{marginTop: "20px"}}>
                <Button onClick={handleClick} variant="contained">Next Question</Button>
            </div>
        </div>
    )
}

export default Question;