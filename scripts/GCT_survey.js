var GerlichCriticalThinking_survey = {
  data: {
    trial_id: "GerlichCriticalThinking_survey",
},
  type: jsPsychSurveyLikert,
  preamble: "<p style='font-size: 2.2vw; line-height: 1.25em;'><b>Please take a moment to answer the following questions about your habits when searching for and evaluating information.</b></p>",
  questions:  [
      {prompt: "<b>1. How often do you critically evaluate the sources of information you encounter?</b>", name: 'GCT_evaluation', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true}, 
      {prompt: "<b>2. How confident are you in your ability to discern fake news from legitimate news?</b>", name: 'GCT_fakenews', labels: ["Not Confident<br>At All", "Slightly<br>Confident", "Somewhat<br>Confident", "Moderately<br>Confident", "Mostly<br>Confident", "Very<br>Confident"], required: true},
      {prompt: "<b>3. When researching a topic, how often do you compare information from multiple sources?</b>", name: 'GCT_multiplesources', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
      {prompt: "<b>4. How frequently do you reflect on the biases in your own thinking when making decisions?</b>", name: 'GCT_selfbias', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
],
scale_width: 1300,
on_finish: function(data) {
  for (const key in data.response) {
    // console.log(`${key}: ${data.response[key]}`);

    /**** For GCT_evaluation question ****/
    /*If the question is "GCT_evaluation" and participant answers "Never"*/
    if (`${key}` == "GCT_evaluation" && `${data.response[key]}` == 0) {
      GCT_evaluation_categorical_answer = "Never"
    }
    /*If the question is "GCT_evaluation" and participant answers "Rarely"*/
    if (`${key}` == "GCT_evaluation" && `${data.response[key]}` == 1) {
      GCT_evaluation_categorical_answer = "Rarely"
    }
    /*If the question is "GCT_evaluation" and participant answers "Sometimes"*/
    if (`${key}` == "GCT_evaluation" && `${data.response[key]}` == 2) {
      GCT_evaluation_categorical_answer = "Sometimes"
    }
    /*If the question is "GCT_evaluation" and participant answers "Often"*/
    if (`${key}` == "GCT_evaluation" && `${data.response[key]}` == 3) {
      GCT_evaluation_categorical_answer = "Often"
    }
    /*If the question is "GCT_evaluation" and participant answers "Very Often"*/
    if (`${key}` == "GCT_evaluation" && `${data.response[key]}` == 4) {
      GCT_evaluation_categorical_answer = "Very Often"
    }
    /*If the question is "GCT_evaluation" and participant answers "Always"*/
    if (`${key}` == "GCT_evaluation" && `${data.response[key]}` == 5) {
      GCT_evaluation_categorical_answer = "Always"
    }

    /*Store numerical answer for "GCT_evaluation" question*/
    if (`${key}` == "GCT_evaluation") {
      GCT_evaluation_numerical_answer = `${data.response[key]}`
    }


    /**** For GCT_fakenews question ****/
    /*If the question is "GCT_fakenews" and participant answers "Not Confident At All"*/
    if (`${key}` == "GCT_fakenews" && `${data.response[key]}` == 0) {
      GCT_fakenews_categorical_answer = "Not Confident At All"
    }
    /*If the question is "GCT_fakenews" and participant answers "Slightly Confident"*/
    if (`${key}` == "GCT_fakenews" && `${data.response[key]}` == 1) {
      GCT_fakenews_categorical_answer = "Slightly Confident"
    }
    /*If the question is "GCT_fakenews" and participant answers "Somewhat Confident"*/
    if (`${key}` == "GCT_fakenews" && `${data.response[key]}` == 2) {
      GCT_fakenews_categorical_answer = "Somewhat Confident"
    }
    /*If the question is "GCT_fakenews" and participant answers "Moderately Confident"*/
    if (`${key}` == "GCT_fakenews" && `${data.response[key]}` == 3) {
      GCT_fakenews_categorical_answer = "Moderately Confident"
    }
    /*If the question is "GCT_fakenews" and participant answers "Mostly Confident"*/
    if (`${key}` == "GCT_fakenews" && `${data.response[key]}` == 4) {
      GCT_fakenews_categorical_answer = "Mostly Confident"
    }
    /*If the question is "GCT_fakenews" and participant answers "Very Confident"*/
    if (`${key}` == "GCT_fakenews" && `${data.response[key]}` == 5) {
      GCT_fakenews_categorical_answer = "Very Confident"
    }

    /*Store numerical answer for "GCT_fakenews" question*/
    if (`${key}` == "GCT_fakenews") {
      GCT_fakenews_numerical_answer = `${data.response[key]}`
    }



    /**** For GCT_multiplesources question ****/
    /*If the question is "GCT_multiplesources" and participant answers "Never"*/
    if (`${key}` == "GCT_multiplesources" && `${data.response[key]}` == 0) {
      GCT_multiplesources_categorical_answer = "Never"
    }
    /*If the question is "GCT_multiplesources" and participant answers "Rarely"*/
    if (`${key}` == "GCT_multiplesources" && `${data.response[key]}` == 1) {
      GCT_multiplesources_categorical_answer = "Rarely"
    }
    /*If the question is "GCT_multiplesources" and participant answers "Sometimes"*/
    if (`${key}` == "GCT_multiplesources" && `${data.response[key]}` == 2) {
      GCT_multiplesources_categorical_answer = "Sometimes"
    }
    /*If the question is "GCT_multiplesources" and participant answers "Often"*/
    if (`${key}` == "GCT_multiplesources" && `${data.response[key]}` == 3) {
      GCT_multiplesources_categorical_answer = "Often"
    }
    /*If the question is "GCT_multiplesources" and participant answers "Very Often"*/
    if (`${key}` == "GCT_multiplesources" && `${data.response[key]}` == 4) {
      GCT_multiplesources_categorical_answer = "Very Often"
    }
    /*If the question is "GCT_multiplesources" and participant answers "Always"*/
    if (`${key}` == "GCT_multiplesources" && `${data.response[key]}` == 5) {
      GCT_multiplesources_categorical_answer = "Always"
    }

    /*Store numerical answer for "GCT_multiplesources" question*/
    if (`${key}` == "GCT_multiplesources") {
      GCT_multiplesources_numerical_answer = `${data.response[key]}`
    }



    /**** For "GCT_selfbias" question ****/
    /*If the question is "GCT_selfbias" and participant answers "Never"*/
    if (`${key}` == "GCT_selfbias" && `${data.response[key]}` == 0) {
      GCT_selfbias_categorical_answer = "Never"
    }
    /*If the question is "GCT_selfbias" and participant answers "Rarely"*/
    if (`${key}` == "GCT_selfbias" && `${data.response[key]}` == 1) {
      GCT_selfbias_categorical_answer = "Rarely"
    }
    /*If the question is "GCT_selfbias" and participant answers "Sometimes"*/
    if (`${key}` == "GCT_selfbias" && `${data.response[key]}` == 2) {
      GCT_selfbias_categorical_answer = "Sometimes"
    }
    /*If the question is "GCT_selfbias" and participant answers "Often"*/
    if (`${key}` == "GCT_selfbias" && `${data.response[key]}` == 3) {
      GCT_selfbias_categorical_answer = "Often"
    }
    /*If the question is "GCT_selfbias" and participant answers "Very Often"*/
    if (`${key}` == "GCT_selfbias" && `${data.response[key]}` == 4) {
      GCT_selfbias_categorical_answer = "Very Often"
    }
    /*If the question is "GCT_selfbias" and participant answers "Always"*/
    if (`${key}` == "GCT_selfbias" && `${data.response[key]}` == 5) {
      GCT_selfbias_categorical_answer = "Always"
    }

    /*Store numerical answer for "GCT_selfbias" question*/
    if (`${key}` == "GCT_selfbias") {
      GCT_selfbias_numerical_answer = `${data.response[key]}`
    }
  }

    //Add categorical and numerical columns for "GCT_evaluation" question
    data.GCT_evaluation_categorical_response = GCT_evaluation_categorical_answer
    data.GCT_evaluation_numerical_response = GCT_evaluation_numerical_answer

    //Add categorical and numerical columns for "GCT_fakenews" question
    data.GCT_fakenews_categorical_response = GCT_fakenews_categorical_answer
    data.GCT_fakenews_numerical_response = GCT_fakenews_numerical_answer

    //Add categorical and numerical columns for "GCT_multiplesources" question
    data.GCT_multiplesources_categorical_response = GCT_multiplesources_categorical_answer
    data.GCT_multiplesources_numerical_response = GCT_multiplesources_numerical_answer

    //Add categorical and numerical columns for "GCT_selfbias" question
    data.GCT_selfbias_categorical_response = GCT_selfbias_categorical_answer
    data.GCT_selfbias_numerical_response = GCT_selfbias_numerical_answer
}
}
