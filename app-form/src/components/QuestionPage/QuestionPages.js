import { useQuery, gql } from "../../services/hasura-client";
import {
  Button,
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QUESTION_ACTION_QUERY = gql`
  query MyQuery {
    questions: Questions {
      questiondata: data
      question_id
      answers: Answers {
        answer_id
        data
      }
    }
  }
`;

const QuestionPages = (props) => {
  const { isSuccess, data } = useQuery("QuestionAction", QUESTION_ACTION_QUERY);
  console.log(data?.questions);

  const [questions, setQuestions] = useState();
  const [indexValue, setIndexValue] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    // if (isSuccess) {
    setQuestions(data?.question);
    setIndexValue(data?.questions?.length);
    // }
  }, []);

  const handleNext = () => {
    // console.log({indexValue});
    // if (indexValue < data?.questions?.length) {
    //   setIndexValue(indexValue + 1);
    //   setQuestions(data?.questions[indexValue]);
    //   console.log("Next");
    // }
  };

  const handlePrevious = () => {
    // if (indexValue > 0) {
    //   setIndexValue(indexValue - 1);
    //   setQuestions(data?.questions[indexValue]);
    //   console.log("Previous");
    // } else if (indexValue === 0) {
    //   navigate("/")
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      {isSuccess ? (
        <div>
          <Box>
            <Typography variant="h5">
              {questions?.questiondata?.question}
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {questions &&
                  Object.keys(questions).map(function (key, index) {
                    console.log("index: ", questions.answers[0].data);

                    return (
                      <FormControlLabel
                        key={key}
                        // value={Object.values(questions.answers[1].data)}
                        control={<Radio />}
                        label={key}
                      />
                    );
                  })}
              </RadioGroup>
            </FormControl>
          </Box>
        </div>
      ) : (
        "loading time..."
      )}

      <Box>
        <Button
          style={{ marginLeft: "5px" }}
          variant="contained"
          onClick={handlePrevious}
        >
          Previous Question
        </Button>
        <Button
          style={{ marginRight: "5px" }}
          variant="contained"
          onClick={handleNext}
        >
          Next Question
        </Button>
      </Box>
    </div>
  );
};

export default QuestionPages;
