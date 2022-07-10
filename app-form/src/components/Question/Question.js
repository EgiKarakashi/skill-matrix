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
import React, { useState } from "react";

function valuetext(value) {
  return `${value} score`;
}

const Question = (props) => {
  const [index, setIndex] = useState(0);
  //Score ....
  const [value, setValue] = useState(2);
  //Selected Button ...
  const [selectedValue, setSelectedValue] = useState([]);
  console.log([selectedValue]);
  console.log("Question Index...", props?.questions?.data?.Questions?.length);

  const handleNext = () => {
    if (index < props?.questions?.data?.Questions?.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(
      typeof value === "String" || value === "Int" ? value.split(",") : value
    );
  };

  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1);
      console.log("Index at handle prev...");
    }
  };

  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "45vw"
  };

  return (
    <Box width={"400px"}>
      <Card style={cardStyle}>
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
                              ?.question
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
                                  getAriaLabel={() => "Temperature range"}
                                  value={value}
                                  onChange={handleChange}
                                  valueLabelDisplay="auto"
                                  getAriaValueText={valuetext}
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
                                onChange={handleChange}
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
                                justifyContent: "center"
                              }}
                            >
                              loading...
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
                  <Button
                    variant="contained"
                    disabled={index === 0}
                    onClick={handlePrevious}
                    disableRipple
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disableRipple
                  >
                    Next
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
