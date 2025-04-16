//------------------------------------//
// Rental usage questions
//------------------------------------//
var rental_usage = {
  data: {
    trial_id: "rental_usage"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  title: "Please answer the following questions.",
  completeText: 'Next',
  elements:
    [
    {
        type: 'boolean',
        title: "Have you ever used a rental listing site (e.g. Airbnb, Vrbo, Booking.com, etc.) to book a vacation rental?", 
        name: 'rental_yesno', 
        isRequired: true,
        valueTrue: "Yes",
        valueFalse: "No",
        renderAs: "radio"
      }, 
      {
        type: "radiogroup",
        name: "rental_frequency",
        visibleIf: "{rental_yesno} = Yes",
        title: "How often do you use rental listing sites to book a vacation rental?",
        isRequired: true,
        colCount: 1,
        choices: ["Once every 2 to 3 months or more frequently", "Once every 4-6 months", "About once a year", "Once every 1 to 3 years", "Less than once every 3 years"]
      },
      {
        type: "radiogroup",
        name: "rental_time",
        visibleIf: "{rental_yesno} = Yes",
        title: "How long do you typically spend looking at a particular listing before you book?",
        isRequired: true,
        colCount: 1,
        choices: ["Less than 15 minutes", "15-30 minutes", "30-60 minutes", "1-3 hours", "3+ hours"]
      },
  ],
},
on_finish: function (data) {

  for (const key in data.response) {
    // console.log(`${key}: ${data.response[key]}`);


    /**** For the "rental_yesno" question ****/
    /*If the question is "rental_yesno' and the participant answers "No"*/
    if (`${key}` == "rental_yesno" && `${data.response[key]}` == "No") {
      rental_yesno_categorical_answer = `${data.response[key]}`
      rental_yesno_numerical_answer = 0
    }

    /*If the question is "rental_yesno' and the participant answers "Yes"*/
    if (`${key}` == "rental_yesno" && `${data.response[key]}` == "Yes") {
      rental_yesno_categorical_answer = `${data.response[key]}`
      rental_yesno_numerical_answer = 1
    }



    /**** For the "rental_frequency" question ****/
    /*If the question is "rental_frequency' and the participant answers "Once every 2 to 3 months or more frequently"*/
    if (`${key}` == "rental_frequency" && `${data.response[key]}` == "Once every 2 to 3 months or more frequently") {
      rental_frequency_categorical_answer = `${data.response[key]}`
      rental_frequency_numerical_answer = 0
    }

    /*If the question is "rental_frequency' and the participant answers "Once every 4-6 months"*/
    if (`${key}` == "rental_frequency" && `${data.response[key]}` == "Once every 4-6 months") {
      rental_frequency_categorical_answer = `${data.response[key]}`
      rental_frequency_numerical_answer = 1
    }

    /*If the question is "rental_frequency' and the participant answers "About once a year"*/
    if (`${key}` == "rental_frequency" && `${data.response[key]}` == "About once a year") {
      rental_frequency_categorical_answer = `${data.response[key]}`
      rental_frequency_numerical_answer = 2
    }

    /*If the question is "rental_frequency' and the participant answers "Once every 1 to 3 years"*/
    if (`${key}` == "rental_frequency" && `${data.response[key]}` == "Once every 1 to 3 years") {
      rental_frequency_categorical_answer = `${data.response[key]}`
      rental_frequency_numerical_answer = 3
    }

    /*If the question is "rental_frequency' and the participant answers "Less than once every 3 years"*/
    if (`${key}` == "rental_frequency" && `${data.response[key]}` == "Less than once every 3 years") {
      rental_frequency_categorical_answer = `${data.response[key]}`
      rental_frequency_numerical_answer = 4
    }



    /**** For the "rental_time" question ****/
    /* Tag data with categorical responses*/

    /*If the question is "rental_time' and the participant answers "Less than 15 minutes"*/
    if (`${key}` == "rental_time" && `${data.response[key]}` == "Less than 15 minutes") {
      rental_time_categorical_answer = `${data.response[key]}`
      rental_time_numerical_answer = 0
    }

    /*If the question is "rental_time' and the participant answers "15-30 minutes"*/
    if (`${key}` == "rental_time" && `${data.response[key]}` == "15-30 minutes") {
      rental_time_categorical_answer = `${data.response[key]}`
      rental_time_numerical_answer = 1
    }

    /*If the question is "rental_time' and the participant answers "30-60 minutes"*/
    if (`${key}` == "rental_time" && `${data.response[key]}` == "30-60 minutes") {
      rental_time_categorical_answer = `${data.response[key]}`
      rental_time_numerical_answer = 2
    }

    /*If the question is "rental_time' and the participant answers "1-3 hours"*/
    if (`${key}` == "rental_time" && `${data.response[key]}` == "1-3 hours") {
      rental_time_categorical_answer = `${data.response[key]}`
      rental_time_numerical_answer = 3
    }

    /*If the question is "rental_time' and the participant answers "3+ hours"*/
    if (`${key}` == "rental_time" && `${data.response[key]}` == "3+ hours") {
      rental_time_categorical_answer = `${data.response[key]}`
      rental_time_numerical_answer = 4
    }
  }

    //Add categorical and numerical columns for "rental_yesno" question
    data.rental_yesno_categorical_response = rental_yesno_categorical_answer
    data.rental_yesno_numerical_response = rental_yesno_numerical_answer

    //Add categorical and numerical columns for "rental_frequency" question
    data.rental_frequency_categorical_response = rental_frequency_categorical_answer
    data.rental_frequency_numerical_response = rental_frequency_numerical_answer

    //Add categorical and numerical columns for "rental_time" question
    data.rental_time_categorical_response = rental_time_categorical_answer
    data.rental_time_numerical_response = rental_time_numerical_answer
    

}
}