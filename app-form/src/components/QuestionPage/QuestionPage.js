import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "../Question/Question";

const QuestionPage = (props) => {
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({});
  const [value, setValue] = React.useState(true);

  

  useEffect(() => {
    axios
      .get(
        "https://8080-egikarakash-skillmatrix-486iduh3y8n.ws-eu51.gitpod.io/api/rest/answers"
      )
      .then((res) => {
        //console.log("res-data", res.data.Answers[0].data);
        setAnswers(res.data.Answers);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://8080-egikarakash-skillmatrix-486iduh3y8n.ws-eu51.gitpod.io/api/rest/get-question"
      )
      .then((res) => {
        console.log("res-dataQ", res.data.Questions);
        setQuestions(res.data.Questions);
      });
  }, []);

  const questionAndAnswers = { answers, questions} 
  console.log(questionAndAnswers);

  return (
    <div>
      {Object.values(questions).map((key, index) => (

        <div key={index}>
          {console.log("bbla ", key.data.Question)}

          
                <Question 
                  question={key.data.Question}

                 />
            
        </div>
        
      ))}
      {Object.values(answers).map((key, index) => (

          <div key={index}>
            {console.log("bbla ", key.data.Answer)}
  
            
                  <Question 
                    

                   />
              
          </div>
          
        ))
      }
    </div>
  );
};

export default QuestionPage;
