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
  LinearProgress,
  CardContent
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Emoji from "./Emojis";
import classes from "./Question.module.css";
import axios from "axios";
import { gql } from "../../services/hasura-client";

import { useNavigate } from "react-router-dom";

function valuetext(value) {
  return `${value} score`;
}

const Question = (props) => {
  //State to save the index
  const [index, setIndex] = useState(0);

  //State to save the score
  const [score, setScore] = useState(0);

  const history = useNavigate();

  const handleClick = () => {
    history("/lastpage");
  };

  console.log(
    "Question Index...",
    props?.questions?.data?.Questions?.[index]?.data?.Question
  );

  //Next Button Logic
  const handleNext = () => {
    if (index < props?.questions?.data?.Questions?.length - 1) {
      setIndex(index + 1);
    } else if (maxLength) {
      history("/lastpage");
    } else {
      setIndex(index);
    }
  };

  //Previous Button Logic
  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1);
      console.log("Index at handle prev...");
    }
  };

  //Radio Buttons Logic
  const onClickRadioButton = (event) => {
    switch (event.target.value) {
      case "Strongly Disagree":
        setScore(1);
        break;
      case "Disagree":
        setScore(2);
        break;
      case "Neutral":
        setScore(3);
        break;
      case "Agree":
        setScore(4);
        break;
      case "Strongly Agree":
        setScore(5);
        break;
      default:
        setScore(0);
        break;
    }
    console.log("score", score);
  };

  const ADMIN_SECRET = "hasura";

  const BASE_URL =
    "https://8080-egikarakash-skillmatrix-569hj558ywp.ws-eu54.gitpod.io/v1/graphql";

  //Posting score, data and user_d
  const ADD_POST = gql`
    mutation MyMutation($data: json, $score: Int!, $user_id: Int!) {
      insert_User_Answers_one(
        object: { data: $data, score: $score, user_id: $user_id }
        on_conflict: {
          constraint: User_answer_pkey
          update_columns: score
          where: { user_id: { _is_null: false } }
        }
      ) {
        data
        score
        user_id
      }
    }
  `;

  console.log(
    "props",
    parseInt(
      props?.decodeToken["https://hasura.io/jwt/claims"]["x-hasura-user-id"]
    )
  );

  // Submiting Answer while Next button is clicked
  const submitAnswer = () => {
    handleNext();
    axios({
      url: BASE_URL,
      method: "POST",
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET
      },
      data: {
        variables: {
          user_id: parseInt(
            props.decodeToken["https://hasura.io/jwt/claims"][
              "x-hasura-user-id"
            ]
          ),
          score: score,
          data: [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree"
          ]
        },
        query: ADD_POST
      }
    })
      .then((res) => {
        setScore(0);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                            fontSize: 25,
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
                              <Emoji label="grinnig-face" />
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
                {/* Buttons Previous and Next */}

                <Stack spacing={2} direction="row">
                  {maxLength + 1 === index ? (
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
                    Next
                  </Button>
                </Stack>
              </div>
            </Typography>
          </Container>
        </CardContent>
        <Typography
          style={{ display: "flex", justifyContent: "center" }}
          variant="body2"
          gutterBottom
        >
          {index + 1} / {maxLength + 1}
        </Typography>

        <LinearProgress variant="determinate" value={index * 10}>
          {" "}
        </LinearProgress>
      </Card>
    </Box>
  );
};

export default Question;
