import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import json from '../surveys/questionsone';

const Mysurvey = () => {
    return(
        <Survey.Survey
        json = {json}
        />
    )
}
export default Mysurvey;