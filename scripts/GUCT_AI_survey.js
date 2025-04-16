var GerlichUseandCriticalThinking_survey_AI = {
  data: {
    trial_id: "GerlichUseandCriticalThinking_survey_AI",
},
  type: jsPsychSurveyLikert,
  preamble: "<p style='font-size: 2.2vw; line-height: 1.25em;'><b>Please take a moment to answer the following questions about your habits when searching for and evaluating information provided by AI tools.</b></p>",
  questions:  [
      {prompt: "<b>1. How often do you use AI tools (e.g., virtual assistants, recommendation algorithms) to find information or solve problems? </b>", name: 'GUCT_AI_use', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
      {prompt: "<b>2. To what extent do you rely on AI tools for decision-making?</b>", name: 'GUCT_AI_decisionmaking', labels: ["Not at all", "Slightly", "Somewhat", "Often", "Very Often", "Completely"], required: true},
      {prompt: "<b>3. I find AI tools help me save time when searching for information.</b>", name: 'GUCT_AI_timeefficacy', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>4. I trust the recommendations provided by AI tools.</b>", name: 'GUCT_AI_trust', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>5. I often cross-check information provided by AI tools with other sources.</b>", name: 'GUCT_AI_sourcecheck', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>6. How often do you question the motives behind the information shared by AI tools?</b>", name: 'GUCT_AI_motivescheck', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
      {prompt: "<b>7. I analyse the credibility of the author when reading news or information provided by AI tools.</b>", name: 'GUCT_AI_credibility', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>8. I compare multiple sources of information before forming an opinion based on AI recommendations.</b>", name: 'GUCT_AI_formingopinion', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>9. I question the assumptions underlying the information provided by AI tools.</b>", name: 'GUCT_AI_assumptionscheck', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
    ],
    scale_width: 1300,
    on_finish: function(data) {
      for (const key in data.response) {
        // console.log(`${key}: ${data.response[key]}`);
    
    /**** For "GUCT_AI_use" question ****/
    /*If the question is "GUCT_AI_use" and participant answers "Never"*/
    if (`${key}` == "GUCT_AI_use" && `${data.response[key]}` == 0) {
      GUCT_AI_use_categorical_answer = "Never"
    }
    /*If the question is "GUCT_AI_use" and participant answers "Rarely"*/
    if (`${key}` == "GUCT_AI_use" && `${data.response[key]}` == 1) {
      GUCT_AI_use_categorical_answer = "Rarely"
    }
    /*If the question is "GUCT_AI_use" and participant answers "Sometimes"*/
    if (`${key}` == "GUCT_AI_use" && `${data.response[key]}` == 2) {
      GUCT_AI_use_categorical_answer = "Sometimes"
    }
    /*If the question is "GUCT_AI_use" and participant answers "Often"*/
    if (`${key}` == "GUCT_AI_use" && `${data.response[key]}` == 3) {
      GUCT_AI_use_categorical_answer = "Often"
    }
    /*If the question is "GUCT_AI_use" and participant answers "Very Often"*/
    if (`${key}` == "GUCT_AI_use" && `${data.response[key]}` == 4) {
      GUCT_AI_use_categorical_answer = "Very Often"
    }
    /*If the question is "GUCT_AI_use" and participant answers "Always"*/
    if (`${key}` == "GUCT_AI_use" && `${data.response[key]}` == 5) {
      GUCT_AI_use_categorical_answer = "Always"
    }

    /*Store numerical answer for "GUCT_AI_use" question*/
    if (`${key}` == "GUCT_AI_use") {
      GUCT_AI_use_numerical_answer = `${data.response[key]}`
    }



    /**** For "GUCT_AI_decisionmaking" question ****/
    /*If the question is "GUCT_AI_decisionmaking" and participant answers "Not at all"*/
    if (`${key}` == "GUCT_AI_decisionmaking" && `${data.response[key]}` == 0) {
      GUCT_AI_decisionmaking_categorical_answer = "Not at all"
    }
    /*If the question is "GUCT_AI_decisionmaking" and participant answers "Slightly"*/
    if (`${key}` == "GUCT_AI_decisionmaking" && `${data.response[key]}` == 1) {
      GUCT_AI_decisionmaking_categorical_answer = "Slightly"
    }
    /*If the question is "GUCT_AI_decisionmaking" and participant answers "Somewhat"*/
    if (`${key}` == "GUCT_AI_decisionmaking" && `${data.response[key]}` == 2) {
      GUCT_AI_decisionmaking_categorical_answer = "Somewhat"
    }
    /*If the question is "GUCT_AI_decisionmaking" and participant answers "Often"*/
    if (`${key}` == "GUCT_AI_decisionmaking" && `${data.response[key]}` == 3) {
      GUCT_AI_decisionmaking_categorical_answer = "Often"
    }
    /*If the question is "GUCT_AI_decisionmaking" and participant answers "Very Often"*/
    if (`${key}` == "GUCT_AI_decisionmaking" && `${data.response[key]}` == 4) {
      GUCT_AI_decisionmaking_categorical_answer = "Very Often"
    }
    /*If the question is "GUCT_AI_decisionmaking" and participant answers "Completely"*/
    if (`${key}` == "GUCT_AI_decisionmaking" && `${data.response[key]}` == 5) {
      GUCT_AI_decisionmaking_categorical_answer = "Completely"
    }

    /*Store numerical answer for "GUCT_AI_decisionmaking" question*/
    if (`${key}` == "GUCT_AI_decisionmaking") {
      GUCT_AI_decisionmaking_numerical_answer = `${data.response[key]}`
    }



    /**** For "GUCT_AI_timeefficacy" question ****/
    /*If the question is "GUCT_AI_timeefficacy" and participant answers "Strongly Disagree"*/
    if (`${key}` == "GUCT_AI_timeefficacy" && `${data.response[key]}` == 0) {
      GUCT_AI_timeefficacy_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "GUCT_AI_timeefficacy" and participant answers "Disagree"*/
    if (`${key}` == "GUCT_AI_timeefficacy" && `${data.response[key]}` == 1) {
      GUCT_AI_timeefficacy_categorical_answer = "Disagree"
    }
    /*If the question is "GUCT_AI_timeefficacy" and participant answers "Somewhat Disagree"*/
    if (`${key}` == "GUCT_AI_timeefficacy" && `${data.response[key]}` == 2) {
      GUCT_AI_timeefficacy_categorical_answer = "Somewhat Disagree"
    }
    /*If the question is "GUCT_AI_timeefficacy" and participant answers "Somewhat Agree"*/
    if (`${key}` == "GUCT_AI_timeefficacy" && `${data.response[key]}` == 3) {
      GUCT_AI_timeefficacy_categorical_answer = "Somewhat Agree"
    }
    /*If the question is "GUCT_AI_timeefficacy" and participant answers "Agree"*/
    if (`${key}` == "GUCT_AI_timeefficacy" && `${data.response[key]}` == 4) {
      GUCT_AI_timeefficacy_categorical_answer = "Agree"
    }
    /*If the question is "GUCT_AI_timeefficacy" and participant answers "Strongly Agree"*/
    if (`${key}` == "GUCT_AI_timeefficacy" && `${data.response[key]}` == 5) {
      GUCT_AI_timeefficacy_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "GUCT_AI_timeefficacy" question*/
    if (`${key}` == "GUCT_AI_timeefficacy") {
      GUCT_AI_timeefficacy_numerical_answer = `${data.response[key]}`
    }



    /**** For "GUCT_AI_trust" question ****/
    /*If the question is "GUCT_AI_trust" and participant answers "Strongly Disagree"*/
    if (`${key}` == "GUCT_AI_trust" && `${data.response[key]}` == 0) {
      GUCT_AI_trust_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "GUCT_AI_trust" and participant answers "Disagree"*/
    if (`${key}` == "GUCT_AI_trust" && `${data.response[key]}` == 1) {
      GUCT_AI_trust_categorical_answer = "Disagree"
    }
    /*If the question is "GUCT_AI_trust" and participant answers "Somewhat Disagree"*/
    if (`${key}` == "GUCT_AI_trust" && `${data.response[key]}` == 2) {
      GUCT_AI_trust_categorical_answer = "Somewhat Disagree"
    }
    /*If the question is "GUCT_AI_trust" and participant answers "Somewhat Agree"*/
    if (`${key}` == "GUCT_AI_trust" && `${data.response[key]}` == 3) {
      GUCT_AI_trust_categorical_answer = "Somewhat Agree"
    }
    /*If the question is "GUCT_AI_trust" and participant answers "Agree"*/
    if (`${key}` == "GUCT_AI_trust" && `${data.response[key]}` == 4) {
      GUCT_AI_trust_categorical_answer = "Agree"
    }
    /*If the question is "GUCT_AI_trust" and participant answers "Strongly Agree"*/
    if (`${key}` == "GUCT_AI_trust" && `${data.response[key]}` == 5) {
      GUCT_AI_trust_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "GUCT_AI_trust" question*/
    if (`${key}` == "GUCT_AI_trust") {
      GUCT_AI_trust_numerical_answer = `${data.response[key]}`
    }

    


    /**** For "GUCT_AI_sourcecheck" question ****/
    /*If the question is "GUCT_AI_sourcecheck" and participant answers "Strongly Disagree"*/
    if (`${key}` == "GUCT_AI_sourcecheck" && `${data.response[key]}` == 0) {
      GUCT_AI_sourcecheck_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "GUCT_AI_sourcecheck" and participant answers "Disagree"*/
    if (`${key}` == "GUCT_AI_sourcecheck" && `${data.response[key]}` == 1) {
      GUCT_AI_sourcecheck_categorical_answer = "Disagree"
    }
    /*If the question is "GUCT_AI_sourcecheck" and participant answers "Somewhat Disagree"*/
    if (`${key}` == "GUCT_AI_sourcecheck" && `${data.response[key]}` == 2) {
      GUCT_AI_sourcecheck_categorical_answer = "Somewhat Disagree"
    }
    /*If the question is "GUCT_AI_sourcecheck" and participant answers "Somewhat Agree"*/
    if (`${key}` == "GUCT_AI_sourcecheck" && `${data.response[key]}` == 3) {
      GUCT_AI_sourcecheck_categorical_answer = "Somewhat Agree"
    }
    /*If the question is "GUCT_AI_sourcecheck" and participant answers "Agree"*/
    if (`${key}` == "GUCT_AI_sourcecheck" && `${data.response[key]}` == 4) {
      GUCT_AI_sourcecheck_categorical_answer = "Agree"
    }
    /*If the question is "GUCT_AI_sourcecheck" and participant answers "Strongly Agree"*/
    if (`${key}` == "GUCT_AI_sourcecheck" && `${data.response[key]}` == 5) {
      GUCT_AI_sourcecheck_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "GUCT_AI_sourcecheck" question*/
    if (`${key}` == "GUCT_AI_sourcecheck") {
      GUCT_AI_sourcecheck_numerical_answer = `${data.response[key]}`
    }




    /**** For "GUCT_AI_motivescheck" question ****/
    /*If the question is "GUCT_AI_motivescheck" and participant answers "Never"*/
    if (`${key}` == "GUCT_AI_motivescheck" && `${data.response[key]}` == 0) {
      GUCT_AI_motivescheck_categorical_answer = "Never"
    }
    /*If the question is "GUCT_AI_motivescheck" and participant answers "Rarely"*/
    if (`${key}` == "GUCT_AI_motivescheck" && `${data.response[key]}` == 1) {
      GUCT_AI_motivescheck_categorical_answer = "Rarely"
    }
    /*If the question is "GUCT_AI_motivescheck" and participant answers "Sometimes"*/
    if (`${key}` == "GUCT_AI_motivescheck" && `${data.response[key]}` == 2) {
      GUCT_AI_motivescheck_categorical_answer = "Sometimes"
    }
    /*If the question is "GUCT_AI_motivescheck" and participant answers "Often"*/
    if (`${key}` == "GUCT_AI_motivescheck" && `${data.response[key]}` == 3) {
      GUCT_AI_motivescheck_categorical_answer = "Often"
    }
    /*If the question is "GUCT_AI_motivescheck" and participant answers "Very Often"*/
    if (`${key}` == "GUCT_AI_motivescheck" && `${data.response[key]}` == 4) {
      GUCT_AI_motivescheck_categorical_answer = "Very Often"
    }
    /*If the question is "GUCT_AI_motivescheck" and participant answers "Always"*/
    if (`${key}` == "GUCT_AI_motivescheck" && `${data.response[key]}` == 5) {
      GUCT_AI_motivescheck_categorical_answer = "Always"
    }

    /*Store numerical answer for "GUCT_AI_motivescheck" question*/
    if (`${key}` == "GUCT_AI_motivescheck") {
      GUCT_AI_motivescheck_numerical_answer = `${data.response[key]}`
    }



    /**** For "GUCT_AI_credibility" question ****/
    /*If the question is "GUCT_AI_credibility" and participant answers "Strongly Disagree"*/
    if (`${key}` == "GUCT_AI_credibility" && `${data.response[key]}` == 0) {
      GUCT_AI_credibility_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "GUCT_AI_credibility" and participant answers "Disagree"*/
    if (`${key}` == "GUCT_AI_credibility" && `${data.response[key]}` == 1) {
      GUCT_AI_credibility_categorical_answer = "Disagree"
    }
    /*If the question is "GUCT_AI_credibility" and participant answers "Somewhat Disagree"*/
    if (`${key}` == "GUCT_AI_credibility" && `${data.response[key]}` == 2) {
      GUCT_AI_credibility_categorical_answer = "Somewhat Disagree"
    }
    /*If the question is "GUCT_AI_credibility" and participant answers "Somewhat Agree"*/
    if (`${key}` == "GUCT_AI_credibility" && `${data.response[key]}` == 3) {
      GUCT_AI_credibility_categorical_answer = "Somewhat Agree"
    }
    /*If the question is "GUCT_AI_credibility" and participant answers "Agree"*/
    if (`${key}` == "GUCT_AI_credibility" && `${data.response[key]}` == 4) {
      GUCT_AI_credibility_categorical_answer = "Agree"
    }
    /*If the question is "GUCT_AI_credibility" and participant answers "Strongly Agree"*/
    if (`${key}` == "GUCT_AI_credibility" && `${data.response[key]}` == 5) {
      GUCT_AI_credibility_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "GUCT_AI_credibility" question*/
    if (`${key}` == "GUCT_AI_credibility") {
      GUCT_AI_credibility_numerical_answer = `${data.response[key]}`
    }


    /**** For "GUCT_AI_formingopinion" question ****/
    /*If the question is "GUCT_AI_formingopinion" and participant answers "Strongly Disagree"*/
    if (`${key}` == "GUCT_AI_formingopinion" && `${data.response[key]}` == 0) {
      GUCT_AI_formingopinion_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "GUCT_AI_formingopinion" and participant answers "Disagree"*/
    if (`${key}` == "GUCT_AI_formingopinion" && `${data.response[key]}` == 1) {
      GUCT_AI_formingopinion_categorical_answer = "Disagree"
    }
    /*If the question is "GUCT_AI_formingopinion" and participant answers "Somewhat Disagree"*/
    if (`${key}` == "GUCT_AI_formingopinion" && `${data.response[key]}` == 2) {
      GUCT_AI_formingopinion_categorical_answer = "Somewhat Disagree"
    }
    /*If the question is "GUCT_AI_formingopinion" and participant answers "Somewhat Agree"*/
    if (`${key}` == "GUCT_AI_formingopinion" && `${data.response[key]}` == 3) {
      GUCT_AI_formingopinion_categorical_answer = "Somewhat Agree"
    }
    /*If the question is "GUCT_AI_formingopinion" and participant answers "Agree"*/
    if (`${key}` == "GUCT_AI_formingopinion" && `${data.response[key]}` == 4) {
      GUCT_AI_formingopinion_categorical_answer = "Agree"
    }
    /*If the question is "GUCT_AI_formingopinion" and participant answers "Strongly Agree"*/
    if (`${key}` == "GUCT_AI_formingopinion" && `${data.response[key]}` == 5) {
      GUCT_AI_formingopinion_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "GUCT_AI_formingopinion" question*/
    if (`${key}` == "GUCT_AI_formingopinion") {
      GUCT_AI_formingopinion_numerical_answer = `${data.response[key]}`
    }



    /**** For "GUCT_AI_assumptionscheck" question ****/
    /*If the question is "GUCT_AI_assumptionscheck" and participant answers "Strongly Disagree"*/
    if (`${key}` == "GUCT_AI_assumptionscheck" && `${data.response[key]}` == 0) {
      GUCT_AI_assumptionscheck_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "GUCT_AI_assumptionscheck" and participant answers "Disagree"*/
    if (`${key}` == "GUCT_AI_assumptionscheck" && `${data.response[key]}` == 1) {
      GUCT_AI_assumptionscheck_categorical_answer = "Disagree"
    }
    /*If the question is "GUCT_AI_assumptionscheck" and participant answers "Somewhat Disagree"*/
    if (`${key}` == "GUCT_AI_assumptionscheck" && `${data.response[key]}` == 2) {
      GUCT_AI_assumptionscheck_categorical_answer = "Somewhat Disagree"
    }
    /*If the question is "GUCT_AI_assumptionscheck" and participant answers "Somewhat Agree"*/
    if (`${key}` == "GUCT_AI_assumptionscheck" && `${data.response[key]}` == 3) {
      GUCT_AI_assumptionscheck_categorical_answer = "Somewhat Agree"
    }
    /*If the question is "GUCT_AI_assumptionscheck" and participant answers "Agree"*/
    if (`${key}` == "GUCT_AI_assumptionscheck" && `${data.response[key]}` == 4) {
      GUCT_AI_assumptionscheck_categorical_answer = "Agree"
    }
    /*If the question is "GUCT_AI_assumptionscheck" and participant answers "Strongly Agree"*/
    if (`${key}` == "GUCT_AI_assumptionscheck" && `${data.response[key]}` == 5) {
      GUCT_AI_assumptionscheck_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "GUCT_AI_assumptionscheck" question*/
    if (`${key}` == "GUCT_AI_assumptionscheck") {
      GUCT_AI_assumptionscheck_numerical_answer = `${data.response[key]}`
    }
  }

    //Add categorical and numerical columns for "GUCT_AI_use" question
    data.GUCT_AI_use_categorical_response = GUCT_AI_use_categorical_answer
    data.GUCT_AI_use_numerical_response = GUCT_AI_use_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_decisionmaking" question
    data.GUCT_AI_decisionmaking_categorical_response = GUCT_AI_decisionmaking_categorical_answer
    data.GUCT_AI_decisionmaking_numerical_response = GUCT_AI_decisionmaking_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_timeefficacy" question
    data.GUCT_AI_timeefficacy_categorical_response = GUCT_AI_timeefficacy_categorical_answer
    data.GUCT_AI_timeefficacy_numerical_response = GUCT_AI_timeefficacy_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_trust" question
    data.GUCT_AI_trust_categorical_response = GUCT_AI_trust_categorical_answer
    data.GUCT_AI_trust_numerical_response = GUCT_AI_trust_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_sourcecheck" question
    data.GUCT_AI_sourcecheck_categorical_response = GUCT_AI_sourcecheck_categorical_answer
    data.GUCT_AI_sourcecheck_numerical_response = GUCT_AI_sourcecheck_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_motivescheck" question
    data.GUCT_AI_motivescheck_categorical_response = GUCT_AI_motivescheck_categorical_answer
    data.GUCT_AI_motivescheck_numerical_response = GUCT_AI_motivescheck_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_credibility" question
    data.GUCT_AI_credibility_categorical_response = GUCT_AI_credibility_categorical_answer
    data.GUCT_AI_credibility_numerical_response = GUCT_AI_credibility_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_formingopinion" question
    data.GUCT_AI_formingopinion_categorical_response = GUCT_AI_formingopinion_categorical_answer
    data.GUCT_AI_formingopinion_numerical_response = GUCT_AI_formingopinion_numerical_answer

    //Add categorical and numerical columns for "GUCT_AI_assumptionscheck" question
    data.GUCT_AI_assumptionscheck_categorical_response = GUCT_AI_assumptionscheck_categorical_answer
    data.GUCT_AI_assumptionscheck_numerical_response = GUCT_AI_assumptionscheck_numerical_answer
    

}
    }