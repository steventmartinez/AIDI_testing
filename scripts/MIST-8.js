//------------------------------------//
// Organize + Randomize stimuli
//------------------------------------//
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


//------------------------------------//
// Randomize MIST stim
//------------------------------------//
const question_variables = [
  {
    'Status': 'Fake',
    'MIST_stim': 'Government Officials Have Manipulated Stock Prices to Hide Scandals', 
  },
  {
    'Status': 'Fake',
    'MIST_stim': 'New Study: Left-Wingers Are More Likely to Lie to Get a Higher Salary', 
  },
  {
    'Status': 'Fake',
    'MIST_stim': 'Certain Vaccines Are Loaded with Dangerous Chemicals and Toxins', 
  },
  {
    'Status': 'Fake',
    'MIST_stim': 'The Government Is Knowingly Spreading Disease Through the Airwaves and Food Supply', 
  },
  {
    'Status': 'Real',
    'MIST_stim': 'Attitudes Toward EU Are Largely Positive, Both Within Europe and Outside It', 
  },
  {
    'Status': 'Real',
    'MIST_stim': 'Hyatt Will Remove Small Bottles from Hotel Bathrooms', 
  },
  {
    'Status': 'Real',
    'MIST_stim': 'Republicans Divided in Views of Trump\'s Conduct, Democrats Are Broadly Critical', 
  },
  {
    'Status': 'Real',
    'MIST_stim': 'Global Warming Age Gap: Younger Americans Most Worried', 
  },
];

/*Randomize stimuli*/
var question_variables_randomized = shuffle(question_variables);



//------------------------------------//
// MIST intro
//------------------------------------//
var MIST_intro = {
  data: {
    trial_id: "MIST_intro",
},
    type: jsPsychInstructions,
    pages: function(){
      pageOne =  "<p><div style ='line-height: 1.25; font-size:2.5vw;'>Next, we will ask you to categorize news headlines as either <b>'Fake News'</b> or <b>'Real News'</b>.</div></p>" +
      "<p><div style ='font-size:2.5vw; line-height: 1.5;'>Click <b>Next</b> to begin.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true
}


//------------------------------------//
// Organize MIST trials
//------------------------------------//
var MIST_8 = {
  data: {
    trial_id: "MIST_8"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  title: "Please categorize the following news headlines as either 'Fake News' or 'Real News'.",
  completeText: 'Next',
  elements:
    [
      {
        type: 'html',
        html: "<p style = 'font-size: 2.1vw; font-style: italic; line-height: 1.25em;'>Some items may look credible or obviously false at first sight, but may actually fall in the opposite category. However, for each news headline, only one category is correct.</p>",
        name: 'MIST-8_note',
      },
      {
        type: 'radiogroup',
        title: question_variables_randomized[0].MIST_stim,
        name: 'MIST_8_trial_one', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: question_variables_randomized[1].MIST_stim,
        name: 'MIST_8_trial_two', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: question_variables_randomized[2].MIST_stim,
        name: 'MIST_8_trial_three', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: question_variables_randomized[3].MIST_stim,
        name: 'MIST_8_trial_four', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: question_variables_randomized[4].MIST_stim,
        name: 'MIST_8_trial_five', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: question_variables_randomized[5].MIST_stim,
        name: 'MIST_8_trial_six', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: question_variables_randomized[6].MIST_stim,
        name: 'MIST_8_trial_seven', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      },
      {
        type: 'radiogroup',
        title: question_variables_randomized[7].MIST_stim,
        name: 'MIST_8_trial_eight', 
        choices: ['Real', 'Fake'], 
        isRequired: true,
        colCount: 0,
      }, 
    ]
  },
  on_finish: function (data) {
     
    /*MIST trial one*/
     if (data.response.MIST_8_trial_one == question_variables_randomized[0].Status) {
         correct = 1
     }
     if (data.response.MIST_8_trial_one != question_variables_randomized[0].Status) {
         correct = 0
     }

     /*MIST trial two*/
     if (data.response.MIST_8_trial_two == question_variables_randomized[1].Status) {
        correct = 1
     }
     if (data.response.MIST_8_trial_two != question_variables_randomized[1].Status) {
        correct = 0
     }
  
     /*MIST trial three*/
     if (data.response.MIST_8_trial_three == question_variables_randomized[2].Status) {
        correct = 1
     }
     if (data.response.MIST_8_trial_three != question_variables_randomized[2].Status) {
        correct = 0
     }

     /*MIST trial four*/
     if (data.response.MIST_8_trial_four == question_variables_randomized[3].Status) {
        correct = 1
     }
     if (data.response.MIST_8_trial_four != question_variables_randomized[3].Status) {
        correct = 0
     }

     /*MIST trial five*/
     if (data.response.MIST_8_trial_five == question_variables_randomized[4].Status) {
        correct = 1
     }
     if (data.response.MIST_8_trial_five != question_variables_randomized[4].Status) {
        correct = 0
     }

    /*MIST trial six*/
    if (data.response.MIST_8_trial_six == question_variables_randomized[5].Status) {
        correct = 1
     }
    if (data.response.MIST_8_trial_six != question_variables_randomized[5].Status) {
        correct = 0
     }

    /*MIST trial seven*/
    if (data.response.MIST_8_trial_seven == question_variables_randomized[6].Status) {
       correct = 1
    }
    if (data.response.MIST_8_trial_seven != question_variables_randomized[6].Status) {
       correct = 0
    }

    /*MIST trial eight*/
    if (data.response.MIST_8_trial_eight == question_variables_randomized[7].Status) {
       correct = 1
    }
    if (data.response.MIST_8_trial_eight != question_variables_randomized[7].Status) {
       correct = 0
    }
}
}

//-----------------------------//
// Organize MIST-8 timeline
//-----------------------------//
var MIST_8_survey = {
  timeline: [MIST_intro, MIST_8]
};
