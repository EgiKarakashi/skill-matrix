import {
  Button,
  Container,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  Stack,
  Slider,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Emoji from "./Emojis";
import classes from "./Question.module.css";
import axios from 'axios';
import {gql} from "../../services/hasura-client"


function valuetext(value) {
  return `${value} score`;
}

const Question = (props) => {
  const [index, setIndex] = useState(0);
  //Score ....

  const [score, setScore] = useState(null);

  console.log(
    "Question Index...",
    props?.questions?.data?.Questions?.[index]?.data?.Question
  );

  const handleNext = () => {
    if (index < props?.questions?.data?.Questions?.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index);
    }
  };

  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1);
      console.log("Index at handle prev...");
    }
  };

  const onClickRadioButton = (event) => {
    if (event.target.value === "Strongly Disagree") {
      setScore(1);
    } else if (event.target.value === "Disagree") {
      setScore(2);
    } else if (event.target.value === "Neutral") {
      setScore(3);
    } else if (event.target.value === "Agree") {
      setScore(4);
    } else {
      setScore(5);
    }
  };

  const ADMIN_SECRET = "hasura";

  const BASE_URL = "https://8080-egikarakash-skillmatrix-8xncu9r7ou6.ws-eu53.gitpod.io/v1/graphql";

  const ADD_POST = gql`
  mutation MyMutation($data: json, $question_etag: timestamptz, $question_id: Int!, $score: Int!, $survey_id: Int!, $board_id: Int!, $user_id: Int!) {
    insert_Answers_one(object: {data: $data, question_etag: $question_etag, question_id: $question_id, score: $score, survey_id: $survey_id, board_id: $board_id, user_id: $user_id}) {
      data
      question_etag
      question_id
      score
      survey_id
      board_id
      user_id
    }
  }`;

  
  const submitAnswer = () => {
    handleNext();
    axios({
      url: BASE_URL,
      method: "POST",
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET,
      },
      data: {
        variables: {
          question_id: index + 1,
          survey_id: 1,
          question_etag: "2022-07-11T10:07:44.869819+00:00",
          score: score,
          data:"test",
          board_id: 1,
          user_id: 1
        },
        query: ADD_POST,
      },
    })
    .then(res => console.log(res.data))
    .catch((err)=>{
      console.log(err);
    });
  }

  console.log("length", props?.questions?.data?.Answers?.[index]?.data?.length);

  const maxLength = props?.questions?.data?.Questions?.length - 1;

  return (
    <Box width={"400px"}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="100"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />

        <CardContent>
          <Container>
            <Typography gutterBottom variant="h5" component="div">
              {props?.questions?.isSuccess ? (
                <div>
                  <FormControl style={{ display: "flex" }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
                        sx={{ mt: 0 }}
                      >
                        <h1
                          style={{
                            color: "black",
                            textAlign: "center",
                            paddingBottom: 45
                          }}
                        >
                          {
                            props?.questions?.data?.Questions?.[index]?.data
                              ?.Question
                          }
                        </h1>
                      </Box>
                    </FormLabel>

                    <div>
                      {(() => {
                        if (
                          props?.questions?.data?.Questions?.[index].type ===
                          "type-a"
                        ) {
                          return (
                            <div>
                              <Box
                                style={{
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                                sx={{ "& > legend": { mt: 2 } }}
                              >
                                <Typography component="legend"></Typography>
                                <Slider
                                  getAriaLabel={() => "Range"}
                                  score={score}
                                  onChange={(e) => setScore(e.target.value)}
                                  valueLabelDisplay="auto"
                                  aria-labelledby="input-slider"
                                  getAriaValueText={valuetext}
                                  step={1}
                                  marks
                                  min={1}
                                  max={5}
                                />
                              </Box>
                            </div>
                          );
                        } else if (
                          props?.questions?.data?.Questions?.[index].type ===
                          "type-b"
                        ) {
                          return (
                            <div>
                              <RadioGroup
                                style={{
                                  display: "flex",
                                  alignContent: "center",
                                  alignItems: "flex-start",
                                  justifyContent: "center"
                                }}
                                onClick={onClickRadioButton}
                              >
                                <FormControlLabel
                                  value={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[0]
                                  }
                                  control={<Radio />}
                                  label={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[0]
                                  }
                                />
                                <FormControlLabel
                                  value={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[1]
                                  }
                                  control={<Radio />}
                                  label={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[1]
                                  }
                                />
                                <FormControlLabel
                                  value={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[2]
                                  }
                                  control={<Radio />}
                                  label={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[2]
                                  }
                                />
                                <FormControlLabel
                                  value={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[3]
                                  }
                                  control={<Radio />}
                                  label={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[3]
                                  }
                                />
                                <FormControlLabel
                                  value={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[4]
                                  }
                                  control={<Radio />}
                                  label={
                                    props?.questions?.data?.Answers?.[index]
                                      ?.data[4]
                                  }
                                />
                              </RadioGroup>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              style={{
                                display: "flex",
                                alignContent: "center",
                                alignItems: "flex-start",
                                justifyContent: "center"
                              }}
                              onChange={(e) => setScore(e.target.value)}
                             
                            >
                              <Emoji symbol="🙁" label="grinnig-face" />
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </FormControl>
                </div>
              ) : (
                "loading time ..."
              )}
              <div
                className="flex-btn"
                style={{
                  paddingTop: 45,
                  display: "flex",
                  justifyContent: "space-evenly"
                }}
              >
                <Stack spacing={2} direction="row">
                  {maxLength === index ? (
                    ""
                  ) : (
                    <Button
                      variant="contained"
                      disabled={index === 0}
                      onClick={handlePrevious}
                      disableRipple
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext && submitAnswer}
                    disableRipple
                  >
                    {maxLength === index ? "Submit" : "Next"}
                  </Button>
                </Stack>
              </div>
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Question;
