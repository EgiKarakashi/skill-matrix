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
  Rating,
  Slider
} from "@mui/material";
import React, { useState } from "react";

function valuetext(value) {
  return `${value} score`;
}

const Question = (props) => {
  const [index, setIndex] = useState(0);
  console.log("Question Index...", props?.questions?.data?.Questions?.length);

  const handleNext = () => {
    if (index < props?.questions?.data?.Questions?.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1);
      console.log("Index at handle prev...");
    }
  };

  //Rating....
  const [value, setValue] = useState(2);

  //Radio image...
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Container>
      {props?.questions?.isSuccess ? (
        <div>
          <FormControl style={{ display: "flex" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              <Box
                style={{ display: "flex", justifyContent: "center" }}
                sx={{ mt: 30 }}
              >
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    paddingBottom: 45
                  }}
                >
                  {props?.questions?.data?.Questions?.[index]?.data?.question}
                </h1>
              </Box>
            </FormLabel>

            <div>
              {(() => {
                if (
                  props?.questions?.data?.Questions?.[index].type === "type-a"
                ) {
                  return (
                    <div>
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
                        sx={{ "& > legend": { mt: 2 } }}
                      >
                        <Typography component="legend"></Typography>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                          />
                      </Box>
                    </div>
                  );
                } else if (
                  props?.questions?.data?.Questions?.[index].type === "type-b"
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
                      >
                        <FormControlLabel
                          value={
                            props?.questions?.data?.Answers?.[index]?.data[0]
                          }
                          control={<Radio />}
                          label={
                            props?.questions?.data?.Answers?.[index]?.data[0]
                          }
                        />
                        <FormControlLabel
                          value={
                            props?.questions?.data?.Answers?.[index]?.data[1]
                          }
                          control={<Radio />}
                          label={
                            props?.questions?.data?.Answers?.[index]?.data[1]
                          }
                        />
                        <FormControlLabel
                          value={
                            props?.questions?.data?.Answers?.[index]?.data[2]
                          }
                          control={<Radio />}
                          label={
                            props?.questions?.data?.Answers?.[index]?.data[2]
                          }
                        />
                        <FormControlLabel
                          value={
                            props?.questions?.data?.Answers?.[index]?.data[3]
                          }
                          control={<Radio />}
                          label={
                            props?.questions?.data?.Answers?.[index]?.data[3]
                          }
                        />
                        <FormControlLabel
                          value={
                            props?.questions?.data?.Answers?.[index]?.data[4]
                          }
                          control={<Radio />}
                          label={
                            props?.questions?.data?.Answers?.[index]?.data[4]
                          }
                        />
                      </RadioGroup>
                    </div>
                  );
                } else {
                  return <div style={{display: "flex", justifyContent: "center"}}>loading...</div>;
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
        <Button
          variant="contained"
          disabled={index === 0}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Question;
