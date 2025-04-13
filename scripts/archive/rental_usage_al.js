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
        description: "Display mode = Radio",
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
}