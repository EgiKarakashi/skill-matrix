import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from 'react-router-dom'; 
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import Question from '../../components/Question/Question';



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

export const App = () => {
  const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);

  const question = useQuery("QuestionAction", QUESTION_ACTION_QUERY);

  return (
    <Routes>
      <Route path="/" element={<Page withPadding title={"Survey App"} actions={<Logout />}>
      {isSuccess
        ? <WelcomePage sx={{mb: 50}} />
        : "loading time..."}
    </Page>} />
      <Route path="/fill" element={<Question questions={question} />} />
    </Routes>
  );
};