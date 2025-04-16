//------------------------------------//
// AI Surveys Intro
//------------------------------------//
var AI_surveys_intro = {
    on_start: function() {
      document.body.style.backgroundColor = '#F0F0F0'
  },
    data: {
      trial_id: "AI_surveys_intro",
  },
      type: jsPsychInstructions,
      pages: function(){
      pageOne = "<p><div style='line-height: 1.25; font-size: 2.5vw;'><b>Next, we will ask you questions about artificial intelligence (AI).</b></div></p>" +
      "<br><p><div style ='line-height: 1.25; font-size:2.5vw;'>Click <b>Next</b> to begin.</div></p>"
       return [pageOne]
    },
    show_clickable_nav: true,
    css_classes: ['custom_padding']
  }



//------------------------------------//
// ATTARI12 Survey
//------------------------------------//
var ATTARI12_survey = {
  data: {
    trial_id: "ATTARI12_survey",
},
    type: jsPsychSurveyLikert,
    preamble: "<p style='font-size: 2.2vw;'><b> Please answer all of the questions on this page. </b></p>",
    questions:  [
        {prompt: "<b>1. AI will make this world a better place.</b>", name: 'ATTARI12_Q1', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>2. I have strong negative emotions about AI.</b>", name: 'ATTARI12_Q2', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>3. I want to use technologies that rely on AI.</b>", name: 'ATTARI12_Q3', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>4. AI has more disadvantages than advantages.</b>", name: 'ATTARI12_Q4', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>5. I look forward to future AI developments.</b>", name: 'ATTARI12_Q5', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>6. AI offers solutions to many world problems.</b>", name: 'ATTARI12_Q6', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true}, 
        {prompt: "<b>7. I prefer technologies that do not feature AI.</b>", name: 'ATTARI12_Q7', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>8. I am afraid of AI.</b>", name: 'ATTARI12_Q8', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>9. I would rather choose a technology with AI than one without it.</b>", name: 'ATTARI12_Q9', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>10. AI creates problems rather than solving them.</b>", name: 'ATTARI12_Q10', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>11. When I think about AI, I have mostly positive feelings.</b>", name: 'ATTARI12_Q11', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
        {prompt: "<b>12. I would rather avoid technologies that are based on AI.</b>", name: 'ATTARI12_Q12', labels: ["Strongly<br>Disagree", "Slightly<br>Disagree", "Slightly<br>Agree", "Strongly<br>Agree"], required: true},
],
on_finish: function (data) {
  for (const key in data.response) {
    // console.log(`${key}: ${data.response[key]}`);
    
    /**** For "ATTARI12_Q1" question ****/
    /*If the question is "ATTARI12_Q1" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q1" && `${data.response[key]}` == 0) {
      ATTARI12_Q1_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q1" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q1" && `${data.response[key]}` == 1) {
      ATTARI12_Q1_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q1" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q1" && `${data.response[key]}` == 2) {
      ATTARI12_Q1_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q1" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q1" && `${data.response[key]}` == 3) {
      ATTARI12_Q1_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q1" question*/
    if (`${key}` == "ATTARI12_Q1") {
      ATTARI12_Q1_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q2" question ****/
    /*If the question is "ATTARI12_Q2" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q2" && `${data.response[key]}` == 0) {
      ATTARI12_Q2_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q2" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q2" && `${data.response[key]}` == 1) {
      ATTARI12_Q2_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q2" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q2" && `${data.response[key]}` == 2) {
      ATTARI12_Q2_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q2" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q2" && `${data.response[key]}` == 3) {
      ATTARI12_Q2_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q2" question*/
    if (`${key}` == "ATTARI12_Q2") {
      ATTARI12_Q2_numerical_answer = `${data.response[key]}`
    }


    /**** For "ATTARI12_Q3" question ****/
    /*If the question is "ATTARI12_Q3" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q3" && `${data.response[key]}` == 0) {
      ATTARI12_Q3_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q3" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q3" && `${data.response[key]}` == 1) {
      ATTARI12_Q3_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q3" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q3" && `${data.response[key]}` == 2) {
      ATTARI12_Q3_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q3" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q3" && `${data.response[key]}` == 3) {
      ATTARI12_Q3_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q3" question*/
    if (`${key}` == "ATTARI12_Q3") {
      ATTARI12_Q3_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q4" question ****/
    /*If the question is "ATTARI12_Q4" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q4" && `${data.response[key]}` == 0) {
      ATTARI12_Q4_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q4" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q4" && `${data.response[key]}` == 1) {
      ATTARI12_Q4_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q4" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q4" && `${data.response[key]}` == 2) {
      ATTARI12_Q4_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q4" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q4" && `${data.response[key]}` == 3) {
      ATTARI12_Q4_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q4" question*/
    if (`${key}` == "ATTARI12_Q4") {
      ATTARI12_Q4_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q5" question ****/
    /*If the question is "ATTARI12_Q5" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q5" && `${data.response[key]}` == 0) {
      ATTARI12_Q5_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q5" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q5" && `${data.response[key]}` == 1) {
      ATTARI12_Q5_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q5" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q5" && `${data.response[key]}` == 2) {
      ATTARI12_Q5_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q5" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q5" && `${data.response[key]}` == 3) {
      ATTARI12_Q5_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q5" question*/
    if (`${key}` == "ATTARI12_Q5") {
      ATTARI12_Q5_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q6" question ****/
    /*If the question is "ATTARI12_Q6" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q6" && `${data.response[key]}` == 0) {
      ATTARI12_Q6_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q6" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q6" && `${data.response[key]}` == 1) {
      ATTARI12_Q6_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q6" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q6" && `${data.response[key]}` == 2) {
      ATTARI12_Q6_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q6" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q6" && `${data.response[key]}` == 3) {
      ATTARI12_Q6_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q6" question*/
    if (`${key}` == "ATTARI12_Q6") {
      ATTARI12_Q6_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q7" question ****/
    /*If the question is "ATTARI12_Q7" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q7" && `${data.response[key]}` == 0) {
      ATTARI12_Q7_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q7" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q7" && `${data.response[key]}` == 1) {
      ATTARI12_Q7_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q7" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q7" && `${data.response[key]}` == 2) {
      ATTARI12_Q7_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q7" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q7" && `${data.response[key]}` == 3) {
      ATTARI12_Q7_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q7" question*/
    if (`${key}` == "ATTARI12_Q7") {
      ATTARI12_Q7_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q8" question ****/
    /*If the question is "ATTARI12_Q8" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q8" && `${data.response[key]}` == 0) {
      ATTARI12_Q8_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q8" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q8" && `${data.response[key]}` == 1) {
      ATTARI12_Q8_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q8" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q8" && `${data.response[key]}` == 2) {
      ATTARI12_Q8_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q8" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q8" && `${data.response[key]}` == 3) {
      ATTARI12_Q8_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q8" question*/
    if (`${key}` == "ATTARI12_Q8") {
      ATTARI12_Q8_numerical_answer = `${data.response[key]}`
    }




    /**** For "ATTARI12_Q9" question ****/
    /*If the question is "ATTARI12_Q9" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q9" && `${data.response[key]}` == 0) {
      ATTARI12_Q9_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q9" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q9" && `${data.response[key]}` == 1) {
      ATTARI12_Q9_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q9" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q9" && `${data.response[key]}` == 2) {
      ATTARI12_Q9_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q9" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q9" && `${data.response[key]}` == 3) {
      ATTARI12_Q9_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q9" question*/
    if (`${key}` == "ATTARI12_Q9") {
      ATTARI12_Q9_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q10" question ****/
    /*If the question is "ATTARI12_Q10" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q10" && `${data.response[key]}` == 0) {
      ATTARI12_Q10_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q10" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q10" && `${data.response[key]}` == 1) {
      ATTARI12_Q10_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q10" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q10" && `${data.response[key]}` == 2) {
      ATTARI12_Q10_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q10" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q10" && `${data.response[key]}` == 3) {
      ATTARI12_Q10_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q10" question*/
    if (`${key}` == "ATTARI12_Q10") {
      ATTARI12_Q10_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q11" question ****/
    /*If the question is "ATTARI12_Q11" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q11" && `${data.response[key]}` == 0) {
      ATTARI12_Q11_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q11" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q11" && `${data.response[key]}` == 1) {
      ATTARI12_Q11_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q11" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q11" && `${data.response[key]}` == 2) {
      ATTARI12_Q11_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q11" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q11" && `${data.response[key]}` == 3) {
      ATTARI12_Q11_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q11" question*/
    if (`${key}` == "ATTARI12_Q11") {
      ATTARI12_Q11_numerical_answer = `${data.response[key]}`
    }



    /**** For "ATTARI12_Q12" question ****/
    /*If the question is "ATTARI12_Q12" and participant answers "Strongly Disagree"*/
    if (`${key}` == "ATTARI12_Q12" && `${data.response[key]}` == 0) {
      ATTARI12_Q12_categorical_answer = "Strongly Disagree"
    }
    /*If the question is "ATTARI12_Q12" and participant answers "Slightly Disagree"*/
    if (`${key}` == "ATTARI12_Q12" && `${data.response[key]}` == 1) {
      ATTARI12_Q12_categorical_answer = "Slightly Disagree"
    }
    /*If the question is "ATTARI12_Q12" and participant answers "Slightly Agree"*/
    if (`${key}` == "ATTARI12_Q12" && `${data.response[key]}` == 2) {
      ATTARI12_Q12_categorical_answer = "Slightly Agree"
    }
    /*If the question is "ATTARI12_Q12" and participant answers "Strongly Agree"*/
    if (`${key}` == "ATTARI12_Q12" && `${data.response[key]}` == 3) {
      ATTARI12_Q12_categorical_answer = "Strongly Agree"
    }

    /*Store numerical answer for "ATTARI12_Q12" question*/
    if (`${key}` == "ATTARI12_Q12") {
      ATTARI12_Q12_numerical_answer = `${data.response[key]}`
    }
}

    //Add categorical and numerical columns for "ATTARI12_Q1" question
    data.ATTARI12_Q1_categorical_response = ATTARI12_Q1_categorical_answer
    data.ATTARI12_Q1_numerical_response = ATTARI12_Q1_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q2" question
    data.ATTARI12_Q2_categorical_response = ATTARI12_Q2_categorical_answer
    data.ATTARI12_Q2_numerical_response = ATTARI12_Q2_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q3" question
    data.ATTARI12_Q3_categorical_response = ATTARI12_Q3_categorical_answer
    data.ATTARI12_Q3_numerical_response = ATTARI12_Q3_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q4" question
    data.ATTARI12_Q4_categorical_response = ATTARI12_Q4_categorical_answer
    data.ATTARI12_Q4_numerical_response = ATTARI12_Q4_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q5" question
    data.ATTARI12_Q5_categorical_response = ATTARI12_Q5_categorical_answer
    data.ATTARI12_Q5_numerical_response = ATTARI12_Q5_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q6" question
    data.ATTARI12_Q6_categorical_response = ATTARI12_Q6_categorical_answer
    data.ATTARI12_Q6_numerical_response = ATTARI12_Q6_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q7" question
    data.ATTARI12_Q7_categorical_response = ATTARI12_Q7_categorical_answer
    data.ATTARI12_Q7_numerical_response = ATTARI12_Q7_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q8" question
    data.ATTARI12_Q8_categorical_response = ATTARI12_Q8_categorical_answer
    data.ATTARI12_Q8_numerical_response = ATTARI12_Q8_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q9" question
    data.ATTARI12_Q9_categorical_response = ATTARI12_Q9_categorical_answer
    data.ATTARI12_Q9_numerical_response = ATTARI12_Q9_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q10" question
    data.ATTARI12_Q10_categorical_response = ATTARI12_Q10_categorical_answer
    data.ATTARI12_Q10_numerical_response = ATTARI12_Q10_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q11" question
    data.ATTARI12_Q11_categorical_response = ATTARI12_Q11_categorical_answer
    data.ATTARI12_Q11_numerical_response = ATTARI12_Q11_numerical_answer

    //Add categorical and numerical columns for "ATTARI12_Q12" question
    data.ATTARI12_Q12_categorical_response = ATTARI12_Q12_categorical_answer
    data.ATTARI12_Q12_numerical_response = ATTARI12_Q12_numerical_answer
}
}


/*Organize ATTARI12 survey procedure*/
var ATTARI12_survey_procedure = {
    timeline: [AI_surveys_intro, ATTARI12_survey]
};