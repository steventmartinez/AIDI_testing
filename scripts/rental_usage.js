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
          type: 'checkbox',
          title: "Which vacation rental listing sites do you use? Please check all that apply.", 
          name: 'rental_sites', 
          choices: ["Airbnb", "Vrbo", "Booking.com", "Expedia", "TripAdvisor", "Getaway", "Homestay"],
          isRequired: true,
          colCount: 2,
          showNoneItem: true,
          showOtherItem: true,
          showSelectAllItem: true,
          separateSpecialChoices: true
        }, 
        {
          type: 'matrix',
          name: 'rental_frequency',
          title: 'Please indicate how often you use vacation rental listing sites.',
          columns: [{
         "value": 5,
          "text": "Always"
        }, {
          "value": 4,
          "text": "Often"
        }, {
          "value": 3,
          "text": "Sometimes"
        }, {
          "value": 2,
          "text": "Rarely"
        }, {
          "value": 1,
          "text": "Never"
        }],
        "rows": [
          {
            "value": "Frequency",
            "text": "Choices"
          }
        ],
        "alternateRows": true,
        "eachRowRequired": true
        }, 
    ],
  },
  }