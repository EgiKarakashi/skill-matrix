import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import Mysurvey from "../../components/surveyTypes/surveytypeone";



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
    <Page withPadding title={"Form App"} actions={<Logout />}>
      {isSuccess
        ? `Computer says: ${new Date(data.ping.timestamp)}`
        : "loading time..."}
        <Mysurvey />
    </Page>
  );
};