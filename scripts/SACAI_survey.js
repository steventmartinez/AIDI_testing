var SACAI_survey = {
    data: {
        trial_id: "SACAI_survey",
    },
    type: jsPsychSurveyLikert,
    preamble: "<p style='font-size: 2.2vw;'><b> Please answer all of the questions on this page. </b></p>",
    questions:  [
        {prompt: "<b>1. How often do you use AI to improve your communication with other people? </b>", name: 'SACAI_Q1', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>2. How often do you use AI to express yourself emotionally in personal communications (e.g., apologizing to a friend)? </b>", name: 'SACAI_Q2', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>3. How often do you use AI for social support (using AI as a conversational partner or companion)? </b>", name: 'SACAI_Q3', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>4. How often do you use AI for emotional support (e.g. discussing personal concerns or worries)? </b>", name: 'SACAI_Q4', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>5. How often do you use AI to appear more professional or knowledgeable in your communication with others?  </b>", name: 'SACAI_Q5', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>6. How often do you use AI to help with your online presence (e.g., curating social media captions, posts, comments, or dating profile)? </b>", name: 'SACAI_Q6', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true}, 
        {prompt: "<b>7. How often do you use AI for advice before making a decision? </b>", name: 'SACAI_Q7', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>8. How often do you use AI to accomplish a task for you? </b>", name: 'SACAI_Q8', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>9. How often do you use AI to explain concepts in different ways to improve your understanding?  </b>", name: 'SACAI_Q9', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>10. How often do you use AI help to help with writing, creativity, overcoming mental blocks, or brainstorming more generally? </b>", name: 'SACAI_Q10', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>11. How often does use AI to support your ability to learn and retain information (e.g., creating mnemonics, flash cards)? </b>", name: 'SACAI_Q11', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>12. How often do you use AI to practice and refine new skills (e.g., writing, art, coding, language learning)? </b>", name: 'SACAI_Q12', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
],
scale_width: 1300,
on_finish: function(data) {
    for (const key in data.response) {
      // console.log(`${key}: ${data.response[key]}`);

    /**** For "SACAI_Q1" question ****/
    /*If the question is "SACAI_Q1" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q1" && `${data.response[key]}` == 0) {
      SACAI_Q1_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q1" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q1" && `${data.response[key]}` == 1) {
      SACAI_Q1_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q1" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q1" && `${data.response[key]}` == 2) {
      SACAI_Q1_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q1" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q1" && `${data.response[key]}` == 3) {
      SACAI_Q1_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q1" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q1" && `${data.response[key]}` == 4) {
      SACAI_Q1_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q1" question*/
    if (`${key}` == "SACAI_Q1") {
      SACAI_Q1_numerical_answer = `${data.response[key]}`
    }


    /**** For "SACAI_Q2" question ****/
    /*If the question is "SACAI_Q2" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q2" && `${data.response[key]}` == 0) {
      SACAI_Q2_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q2" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q2" && `${data.response[key]}` == 1) {
      SACAI_Q2_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q2" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q2" && `${data.response[key]}` == 2) {
      SACAI_Q2_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q2" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q2" && `${data.response[key]}` == 3) {
      SACAI_Q2_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q2" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q2" && `${data.response[key]}` == 4) {
      SACAI_Q2_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q2" question*/
    if (`${key}` == "SACAI_Q2") {
      SACAI_Q2_numerical_answer = `${data.response[key]}`
    }


    /**** For "SACAI_Q3" question ****/
    /*If the question is "SACAI_Q3" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q3" && `${data.response[key]}` == 0) {
      SACAI_Q3_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q3" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q3" && `${data.response[key]}` == 1) {
      SACAI_Q3_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q3" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q3" && `${data.response[key]}` == 2) {
      SACAI_Q3_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q3" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q3" && `${data.response[key]}` == 3) {
      SACAI_Q3_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q3" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q3" && `${data.response[key]}` == 4) {
      SACAI_Q3_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q3" question*/
    if (`${key}` == "SACAI_Q3") {
      SACAI_Q3_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q4" question ****/
    /*If the question is "SACAI_Q4" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q4" && `${data.response[key]}` == 0) {
      SACAI_Q4_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q4" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q4" && `${data.response[key]}` == 1) {
      SACAI_Q4_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q4" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q4" && `${data.response[key]}` == 2) {
      SACAI_Q4_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q4" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q4" && `${data.response[key]}` == 3) {
      SACAI_Q4_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q4" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q4" && `${data.response[key]}` == 4) {
      SACAI_Q4_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q4" question*/
    if (`${key}` == "SACAI_Q4") {
      SACAI_Q4_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q5" question ****/
    /*If the question is "SACAI_Q5" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q5" && `${data.response[key]}` == 0) {
      SACAI_Q5_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q5" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q5" && `${data.response[key]}` == 1) {
      SACAI_Q5_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q5" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q5" && `${data.response[key]}` == 2) {
      SACAI_Q5_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q5" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q5" && `${data.response[key]}` == 3) {
      SACAI_Q5_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q5" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q5" && `${data.response[key]}` == 4) {
      SACAI_Q5_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q5" question*/
    if (`${key}` == "SACAI_Q5") {
      SACAI_Q5_numerical_answer = `${data.response[key]}`
    }


    /**** For "SACAI_Q6" question ****/
    /*If the question is "SACAI_Q6" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q6" && `${data.response[key]}` == 0) {
      SACAI_Q6_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q6" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q6" && `${data.response[key]}` == 1) {
      SACAI_Q6_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q6" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q6" && `${data.response[key]}` == 2) {
      SACAI_Q6_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q6" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q6" && `${data.response[key]}` == 3) {
      SACAI_Q6_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q6" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q6" && `${data.response[key]}` == 4) {
      SACAI_Q6_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q6" question*/
    if (`${key}` == "SACAI_Q6") {
      SACAI_Q6_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q7" question ****/
    /*If the question is "SACAI_Q7" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q7" && `${data.response[key]}` == 0) {
      SACAI_Q7_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q7" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q7" && `${data.response[key]}` == 1) {
      SACAI_Q7_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q7" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q7" && `${data.response[key]}` == 2) {
      SACAI_Q7_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q7" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q7" && `${data.response[key]}` == 3) {
      SACAI_Q7_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q7" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q7" && `${data.response[key]}` == 4) {
      SACAI_Q7_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q7" question*/
    if (`${key}` == "SACAI_Q7") {
      SACAI_Q7_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q8" question ****/
    /*If the question is "SACAI_Q8" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q8" && `${data.response[key]}` == 0) {
      SACAI_Q8_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q8" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q8" && `${data.response[key]}` == 1) {
      SACAI_Q8_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q8" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q8" && `${data.response[key]}` == 2) {
      SACAI_Q8_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q8" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q8" && `${data.response[key]}` == 3) {
      SACAI_Q8_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q8" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q8" && `${data.response[key]}` == 4) {
      SACAI_Q8_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q8" question*/
    if (`${key}` == "SACAI_Q8") {
      SACAI_Q8_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q9" question ****/
    /*If the question is "SACAI_Q9" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q9" && `${data.response[key]}` == 0) {
      SACAI_Q9_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q9" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q9" && `${data.response[key]}` == 1) {
      SACAI_Q9_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q9" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q9" && `${data.response[key]}` == 2) {
      SACAI_Q9_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q9" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q9" && `${data.response[key]}` == 3) {
      SACAI_Q9_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q9" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q9" && `${data.response[key]}` == 4) {
      SACAI_Q9_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q9" question*/
    if (`${key}` == "SACAI_Q9") {
      SACAI_Q9_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q10" question ****/
    /*If the question is "SACAI_Q10" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q10" && `${data.response[key]}` == 0) {
      SACAI_Q10_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q10" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q10" && `${data.response[key]}` == 1) {
      SACAI_Q10_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q10" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q10" && `${data.response[key]}` == 2) {
      SACAI_Q10_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q10" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q10" && `${data.response[key]}` == 3) {
      SACAI_Q10_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q10" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q10" && `${data.response[key]}` == 4) {
      SACAI_Q10_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q10" question*/
    if (`${key}` == "SACAI_Q10") {
      SACAI_Q10_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q11" question ****/
    /*If the question is "SACAI_Q11" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q11" && `${data.response[key]}` == 0) {
      SACAI_Q11_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q11" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q11" && `${data.response[key]}` == 1) {
      SACAI_Q11_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q11" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q11" && `${data.response[key]}` == 2) {
      SACAI_Q11_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q11" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q11" && `${data.response[key]}` == 3) {
      SACAI_Q11_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q11" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q11" && `${data.response[key]}` == 4) {
      SACAI_Q11_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q11" question*/
    if (`${key}` == "SACAI_Q11") {
      SACAI_Q11_numerical_answer = `${data.response[key]}`
    }



    /**** For "SACAI_Q12" question ****/
    /*If the question is "SACAI_Q12" and participant answers "Never"*/
    if (`${key}` == "SACAI_Q12" && `${data.response[key]}` == 0) {
      SACAI_Q12_categorical_answer = "Never"
    }
    /*If the question is "SACAI_Q12" and participant answers "Rarely"*/
    if (`${key}` == "SACAI_Q12" && `${data.response[key]}` == 1) {
      SACAI_Q12_categorical_answer = "Rarely"
    }
    /*If the question is "SACAI_Q12" and participant answers "Sometimes"*/
    if (`${key}` == "SACAI_Q12" && `${data.response[key]}` == 2) {
      SACAI_Q12_categorical_answer = "Sometimes"
    }
    /*If the question is "SACAI_Q12" and participant answers "Often"*/
    if (`${key}` == "SACAI_Q12" && `${data.response[key]}` == 3) {
      SACAI_Q12_categorical_answer = "Often"
    }
    /*If the question is "SACAI_Q12" and participant answers "Always"*/
    if (`${key}` == "SACAI_Q12" && `${data.response[key]}` == 4) {
      SACAI_Q12_categorical_answer = "Always"
    }

    /*Store numerical answer for "SACAI_Q12" question*/
    if (`${key}` == "SACAI_Q12") {
      SACAI_Q12_numerical_answer = `${data.response[key]}`
    }
    }

    //Add categorical and numerical columns for "SACAI_Q1" question
    data.SACAI_Q1_categorical_response = SACAI_Q1_categorical_answer
    data.SACAI_Q1_numerical_response = SACAI_Q1_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q2" question
    data.SACAI_Q2_categorical_response = SACAI_Q2_categorical_answer
    data.SACAI_Q2_numerical_response = SACAI_Q2_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q3" question
    data.SACAI_Q3_categorical_response = SACAI_Q3_categorical_answer
    data.SACAI_Q3_numerical_response = SACAI_Q3_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q4" question
    data.SACAI_Q4_categorical_response = SACAI_Q4_categorical_answer
    data.SACAI_Q4_numerical_response = SACAI_Q4_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q5" question
    data.SACAI_Q5_categorical_response = SACAI_Q5_categorical_answer
    data.SACAI_Q5_numerical_response = SACAI_Q5_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q6" question
    data.SACAI_Q6_categorical_response = SACAI_Q6_categorical_answer
    data.SACAI_Q6_numerical_response = SACAI_Q6_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q7" question
    data.SACAI_Q7_categorical_response = SACAI_Q7_categorical_answer
    data.SACAI_Q7_numerical_response = SACAI_Q7_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q8" question
    data.SACAI_Q8_categorical_response = SACAI_Q8_categorical_answer
    data.SACAI_Q8_numerical_response = SACAI_Q8_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q9" question
    data.SACAI_Q9_categorical_response = SACAI_Q9_categorical_answer
    data.SACAI_Q9_numerical_response = SACAI_Q9_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q10" question
    data.SACAI_Q10_categorical_response = SACAI_Q10_categorical_answer
    data.SACAI_Q10_numerical_response = SACAI_Q10_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q11" question
    data.SACAI_Q11_categorical_response = SACAI_Q11_categorical_answer
    data.SACAI_Q11_numerical_response = SACAI_Q11_numerical_answer

    //Add categorical and numerical columns for "SACAI_Q12" question
    data.SACAI_Q12_categorical_response = SACAI_Q12_categorical_answer
    data.SACAI_Q12_numerical_response = SACAI_Q12_numerical_answer
}
}