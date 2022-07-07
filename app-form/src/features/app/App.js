import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from 'react-router-dom'; 
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import Question from "../../components/Question/Question";



const PING_ACTION_QUERY = gql`
  query {
    ping: ping_action {
      timestamp
    }
  }
`;

export const App = () => {
  const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);

  return (
    <Routes>
      <Route path="/" element={<Page withPadding title={"Form App"} actions={<Logout />}>
      {isSuccess
        ? <WelcomePage />
        : "loading time..."}
    </Page>} />
      <Route path="/fill" element={<Page withPadding title={"Form App"} actions={<Logout />}>
      {isSuccess
        ? <Question />
        : "loading time..."}
    </Page>} />
    </Routes>
  );
};