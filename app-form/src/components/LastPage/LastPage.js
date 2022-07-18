import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, CardContent } from "@mui/material";
import { gql, useQuery } from "../../services/hasura-client";

const SCORE_ACTION_QUERY = gql`
  query MyQuery($_eq: Int!) {
    User_Answers(where: { user_id: { _eq: $_eq } }) {
      score
      user_id
    }
  }
`;

const CALCULATE_TOTAL_SCORE_ACTION = gql`
  query MyQuery($_eq: Int!) {
    User_Answers_aggregate(where: { user_id: { _eq: $_eq } }) {
      aggregate {
        sum {
          score
        }
      }
    }
  }
`;
let totalScore = 0;

const LastPage = (props) => {
  //Getting the score from Hasura whith user_id based on the token

  const [datas, setDatas] = useState([]);

  const { isLoading, data } = useQuery("ScoreAction", SCORE_ACTION_QUERY, {
    variables: {
      _eq: parseInt(
        props?.decodeToken["https://hasura.io/jwt/claims"]["x-hasura-user-id"]
      )
    }
  });

  useEffect(() => {
    setDatas(data?.User_Answers);
  }, [isLoading]);

  console.log("something", datas);

  {datas?.map((eachData) => (

          totalScore = totalScore + eachData.score
        ))}

  return (
    <Card  sx={{ minHeight: 500 , minWidth: 500}}>
      <Typography gutterBottom variant="h5" component="div" align="center" marginTop={20}>
        You have: {totalScore} points 
      </Typography>


      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Congratulations!!!
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          You finished the form successfully!
        </Typography>
      </CardContent>
    </Card>
  );
};



export default LastPage;
