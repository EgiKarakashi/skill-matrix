import { useState } from "react";
import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from 'react-router-dom'; 
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import LastPage from "../../components/LastPage/LastPage";
import Question from '../../components/Question/Question';
import jwt from "jwt-decode";



const PING_ACTION_QUERY = gql`
  query {
    ping: ping_action {
      timestamp
    }
  }
`;

const QUESTION_ACTION_QUERY = gql`
  query MyQuery {
    Questions {
      data
      type
      question_id
    }
    Answers {
      data
      answer_id
      board_id
      created_at
      score
      survey_id
      user_id
    }
  }
`;

const token = localStorage.getItem("at");

export const App = () => {
  const [decodeToken ,setDecodeToken] = useState(jwt(token))
  const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);

  const question = useQuery("QuestionAction", QUESTION_ACTION_QUERY);

  console.log("decode", decodeToken);

  return (
    <Routes>
      <Route path="/" element={<Page withPadding title={"Survey App"} actions={<Logout />}>
      {isSuccess
        ? <WelcomePage sx={{mb: 50}} />
        : "loading time..."}
    </Page>} />
      <Route path="/fill" element={<Question decodeToken={decodeToken} questions={question} />} />
      <Route path="/lastpage" element={<LastPage decodeToken={decodeToken}  />} />
    </Routes>
  );
};
