var mtes_intro = {
  data: {
    trial_id: "mtes_intro",
},
    type: jsPsychInstructions,
    pages: function(){
      pageOne =  "<p><div style ='line-height: 1.25; font-size:2.5vw;'>Next, we will ask you questions about your smartphone and social media habits.</div></p>" +
      "<p><div style ='font-size:2.5vw; line-height: 1.25;'>Click <b>Next</b> to begin the survey.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true
}

//------------------------------------//
// PhoneChecking questions
//------------------------------------//

var MTES_phonechecking = {
  data: {
    trial_id: "MTES_phonechecking"
},
    type: jsPsychSurvey,
    survey_json: {
    showQuestionNumbers: false,
    title: "Please answer the following questions.",
    completeText: 'Next',
    elements:
      [
        {
          type: 'radiogroup',
          title: "Overall, how many times a day do you check your smartphone?", 
          name: 'phonecheck_overall', 
          choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'], 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "How often do you find yourself checking your phone when you have a few moments to spare (waiting in line, for an elevator, at a stoplight, etc.)?", 
          name: 'phonecheck_timetospare', 
          choices: ['Never', 'Rarely', 'Sometimes; I wish I did it less', "Sometimes; it's not a big deal", 'Most of the time; I wish I did it less', "Most of the time; it's not a big deal"], 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "How often do you find yourself checking your phone during conversations or when hanging around with friends?", 
          name: 'phonecheck_friends', 
          choices: ['Never', 'Rarely', 'Sometimes; I wish I did it less', "Sometimes; it's not a big deal", 'Most of the time; I wish I did it less', "Most of the time; it's not a big deal"], 
          isRequired: true,
        }, 
      ]
    }
  };




//------------------------------------//
// MTES Social Media Use Platforms
//------------------------------------//


  var MTES_SocialMediaUse_Platform_instructions = {
    data: {
      trial_id: "MTES_SocialMediaUse_Platform_instructions"
    },
    type: jsPsychInstructions,
    pages: function(){
      pageOne = "<p><div style ='font-size:2.3vw;'>We will now ask you about your usage of social media platforms.</div></p>" +
          "<p><div style ='font-size:2.3vw;'>Some of these questions may seem similar to you,</div></p>" + 
          "<p><div style ='font-size:2.3vw;'>but they are different to us in important ways.</div></p>" + 
          "<p><div style ='font-size:2.3vw;'>Please respond to each question as carefully as possible.</div></p>"
      return [pageOne]
      },
    show_clickable_nav: true,
    css_classes: ['instructions_line_height'],

}



  var MTES_SocialMediaUse_Platform = {
    data: {
      trial_id: "MTES_SocialMediaUse_Platform"
  },
    type: jsPsychSurvey,
    survey_json: {
    showQuestionNumbers: false,
    title: "Indicate which of the following social media platforms you use, and where you use them most. If you don't use a social media platform listed below, indicate this using the 'Never use it' option.",
    completeText: 'Next',
    elements:
        [
          {
            type: 'radiogroup',
            title: "Instagram", 
            name: 'MTES_SocialMediaUse_Platform_instagram', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          }, 
          {
            type: 'radiogroup',
            title: "X (formerly Twitter)", 
            name: 'MTES_SocialMediaUse_Platform_x', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Facebook", 
            name: 'MTES_SocialMediaUse_Platform_facebook', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
          {
            type: 'radiogroup',
            title: "Snapchat", 
            name: 'MTES_SocialMediaUse_Platform_snapchat', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          }, 
          {
            type: 'radiogroup',
            title: "TikTok", 
            name: 'MTES_SocialMediaUse_Platform_tiktok', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
          {
            type: 'radiogroup',
            title: "YouTube", 
            name: 'MTES_SocialMediaUse_Platform_youtube', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'],
            colCount: 0, 
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Reddit", 
            name: 'MTES_SocialMediaUse_Platform_reddit', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Tumblr", 
            name: 'MTES_SocialMediaUse_Platform_tumblr', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },   
          {
            type: 'radiogroup',
            title: "Pinterest", 
            name: 'MTES_SocialMediaUse_Platform_pinterest', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
          {
            type: 'radiogroup',
            title: "WhatsApp", 
            name: 'MTES_SocialMediaUse_Platform_whatsapp', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          }, 
          {
            type: 'radiogroup',
            title: "BeReal", 
            name: 'MTES_SocialMediaUse_Platform_bereal', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Other social media apps", 
            name: 'MTES_SocialMediaUse_Platform_other_apps', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },                   
  ],
},
  on_finish: function (data) {
       /*Instagram*/
        if (data.response.MTES_SocialMediaUse_Platform_instagram !== ('Never use it')) {
            instagram = true
        } else {
            instagram = false
        }

       /*X*/
       if (data.response.MTES_SocialMediaUse_Platform_x !== ('Never use it')) {
          x_formerly_twitter = true
        } else {
           x_formerly_twitter = false
        }

       /*Facebook*/
       if (data.response.MTES_SocialMediaUse_Platform_facebook !== ('Never use it')) {
            facebook = true
        } else {
            facebook = false
        }

       /*Snapchat*/
       if (data.response.MTES_SocialMediaUse_Platform_snapchat !== ('Never use it')) {
            snapchat = true
        } else {
            snapchat = false
        }

       /*TikTok*/
       if (data.response.MTES_SocialMediaUse_Platform_tiktok !== ('Never use it')) {
            tiktok = true
        } else {
            tiktok = false
        }

       /*YouTube*/
       if (data.response.MTES_SocialMediaUse_Platform_youtube !== ('Never use it')) {
            youtube = true
        } else {
            youtube = false
        }

       /*Reddit*/
       if (data.response.MTES_SocialMediaUse_Platform_reddit !== ('Never use it')) {
            reddit = true
        } else {
            reddit = false
        }

        /*Tumblr*/
       if (data.response.MTES_SocialMediaUse_Platform_tumblr !== ('Never use it')) {
            tumblr = true
        } else {
            tumblr = false
        }

       /*Pinterest*/
       if (data.response.MTES_SocialMediaUse_Platform_pinterest !== ('Never use it')) {
            pinterest = true
        } else {
            pinterest = false
        }

       /*WhatsApp*/
       if (data.response.MTES_SocialMediaUse_Platform_whatsapp !== ('Never use it')) {
            whatsapp = true
        } else {
            whatsapp = false
        }

        /*Other social media apps*/
       if (data.response.MTES_SocialMediaUse_Platform_other_apps !== ('Never use it')) {
          other_apps = true
        } else {
          other_apps = false
          other_apps_1 = false
          other_apps_2 = false
          other_apps_3 = false
          other_apps_4 = false
        }
}
  };


//-------------------------------------------------------------------------------------------//
// Conditional trial for other social media apps to figure out what the names of the apps are
//-------------------------------------------------------------------------------------------//
var MTES_SocialMediaUse_Platform_other_apps_followup = {
  data: {
    trial_id: "MTES_SocialMediaUse_Platform_other_apps_followup"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  completeText: 'Next',
  elements:
      [
        {
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_1_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          type: 'radiogroup',
          title: "Other social media app #1", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_1_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
        {
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_2_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          type: 'radiogroup',
          title: "Other social media app #2", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_2_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
        {
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_3_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          type: 'radiogroup',
          title: "Other social media app #3", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_3_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
        {
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_4_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          type: 'radiogroup',
          title: "Other social media app #4", 
          name: 'MTES_SocialMediaUse_Platform_other_apps_4_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
      ]
    },
    on_finish: function (data) {
      /*Other App #1*/
      //  if (data.response.MTES_SocialMediaUse_Platform_other_apps_1_usage !== ('N/A'||'Never use it')) {
        if (data.response.MTES_SocialMediaUse_Platform_other_apps_1_usage !== 'N/A' && data.response.MTES_SocialMediaUse_Platform_other_apps_1_usage !== 'Never use it') {
           other_apps_1 = true
           other_apps_1_name = data.response.MTES_SocialMediaUse_Platform_other_apps_1_name
       } else {
           other_apps_1 = false
       }

      /*Other App #2*/
      if (data.response.MTES_SocialMediaUse_Platform_other_apps_2_usage !== 'N/A' && data.response.MTES_SocialMediaUse_Platform_other_apps_2_usage !== 'Never use it') {
           other_apps_2 = true
           other_apps_2_name = data.response.MTES_SocialMediaUse_Platform_other_apps_2_name
       } else {
           other_apps_2 = false
       }

      /*Other App #3*/
      if (data.response.MTES_SocialMediaUse_Platform_other_apps_3_usage !== 'N/A' && data.response.MTES_SocialMediaUse_Platform_other_apps_3_usage !== 'Never use it') {
           other_apps_3 = true
           other_apps_3_name = data.response.MTES_SocialMediaUse_Platform_other_apps_3_name
       } else {
           other_apps_3 = false
       }

      /*Other App #4*/
      if (data.response.MTES_SocialMediaUse_Platform_other_apps_4_usage !== 'N/A' && data.response.MTES_SocialMediaUse_Platform_other_apps_4_usage !== 'Never use it') {
           other_apps_4 = true
           other_apps_4_name = data.response.MTES_SocialMediaUse_Platform_other_apps_4_name
       } else {
           other_apps_4 = false
    }
      }
  }



//------------------------------------------//
// Other Apps Follow Up Conditional Timeline
//------------------------------------------//
var other_apps_followup_conditional = {
  timeline: [MTES_SocialMediaUse_Platform_other_apps_followup],
  conditional_function: function() {
    if (other_apps === true) {
      return true;
    } else {
      return false;
    }
  }
}


//------------------------------------//
// Time On App
//------------------------------------//

   var MTES_SocialMediaUse_Instagram_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Instagram_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
    prompt: function () {
      return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>Instagram</b> each day?</div></p>"
    }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_Instagram_TimeOnApp', 
    required: true,
      }
   ],
   }


   var MTES_SocialMediaUse_X_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_X_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>X (formerly Twitter)</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_X_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Facebook_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Facebook_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>Facebook</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_Facebook_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Snapchat_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Snapchat_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>Snapchat</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_Snapchat_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_TikTok_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_TikTok_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>TikTok</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_TikTok_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_YouTube_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_YouTube_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>YouTube</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_YouTube_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Reddit_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Reddit_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>Reddit</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_Reddit_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Tumblr_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Tumblr_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>Tumblr</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_Tumblr_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Pinterest_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Pinterest_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>Pinterest</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_Pinterest_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_WhatsApp_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_WhatsApp_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>WhatsApp</b> each day?</div></p>"
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_WhatsApp_TimeOnApp', 
    required: true,
      }
    ]
   }


  var MTES_SocialMediaUse_other_apps_1_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_1_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>${other_apps_1_name}</b> each day?</div></p>`
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_other_apps_1_TimeOnApp', 
    required: true,
      }
    ]
   }

  var MTES_SocialMediaUse_other_apps_2_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_2_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>${other_apps_2_name}</b> each day?</div></p>`
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_other_apps_2_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_other_apps_3_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_3_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>${other_apps_3_name}</b> each day?</div></p>`
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_other_apps_3_TimeOnApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_other_apps_4_TimeOnApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_4_TimeOnApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How much time do you think you spend using <b>${other_apps_4_name}</b> each day?</div></p>`
        }, 
    options: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
    name: 'MTES_SocialMediaUse_other_apps_4_TimeOnApp', 
    required: true,
      }
    ]
   }

   

//------------------------------------//
// Conditional Timelines for TimeOnApp questions
//------------------------------------//


/*Instagram TimeOnApp conditional timeline*/
var instagram_timeonapp = {
  timeline: [MTES_SocialMediaUse_Instagram_TimeOnApp],
  conditional_function: function() {
    if (instagram === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*X TimeOnApp conditional timeline*/
var x_timeonapp = {
  timeline: [MTES_SocialMediaUse_X_TimeOnApp],
  conditional_function: function() {
    if (x_formerly_twitter === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Facebook TimeOnApp conditional timeline*/
var facebook_timeonapp = {
  timeline: [MTES_SocialMediaUse_Facebook_TimeOnApp],
  conditional_function: function() {
    if (facebook === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Snapchat TimeOnApp conditional timeline*/
var snapchat_timeonapp = {
  timeline: [MTES_SocialMediaUse_Snapchat_TimeOnApp],
  conditional_function: function() {
    if (snapchat === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*TikTok TimeOnApp conditional timeline*/
var tiktok_timeonapp = {
  timeline: [MTES_SocialMediaUse_TikTok_TimeOnApp],
  conditional_function: function() {
    if (tiktok === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*youtube TimeOnApp conditional timeline*/
var youtube_timeonapp = {
  timeline: [MTES_SocialMediaUse_YouTube_TimeOnApp],
  conditional_function: function() {
    if (youtube === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*reddit TimeOnApp conditional timeline*/
var reddit_timeonapp = {
  timeline: [MTES_SocialMediaUse_Reddit_TimeOnApp],
  conditional_function: function() {
    if (reddit === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Tumblr TimeOnApp conditional timeline*/
var tumblr_timeonapp = {
  timeline: [MTES_SocialMediaUse_Tumblr_TimeOnApp],
  conditional_function: function() {
    if (tumblr === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*pinterest TimeOnApp conditional timeline*/
var pinterest_timeonapp = {
  timeline: [MTES_SocialMediaUse_Pinterest_TimeOnApp],
  conditional_function: function() {
    if (pinterest === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*whatsapp TimeOnApp conditional timeline*/
var whatsapp_timeonapp = {
  timeline: [MTES_SocialMediaUse_WhatsApp_TimeOnApp],
  conditional_function: function() {
    if (whatsapp === true) {
      return true;
    } else {
      return false;
    }
  }
}


/*Other apps #1 TimeOnApp conditional timeline*/
var other_apps_1_timeonapp = {
  timeline: [MTES_SocialMediaUse_other_apps_1_TimeOnApp],
  conditional_function: function() {
    if (other_apps_1 === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Other apps #2 TimeOnApp conditional timeline*/
var other_apps_2_timeonapp = {
  timeline: [MTES_SocialMediaUse_other_apps_2_TimeOnApp],
  conditional_function: function() {
    if (other_apps_2 === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Other apps #3 TimeOnApp conditional timeline*/
var other_apps_3_timeonapp = {
  timeline: [MTES_SocialMediaUse_other_apps_3_TimeOnApp],
  conditional_function: function() {
    if (other_apps_3 === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Other apps #4 TimeOnApp conditional timeline*/
var other_apps_4_timeonapp = {
  timeline: [MTES_SocialMediaUse_other_apps_4_TimeOnApp],
  conditional_function: function() {
    if (other_apps_4 === true) {
      return true;
    } else {
      return false;
    }
  }
}




//------------------------------------//
// Checking App
//------------------------------------//

   var MTES_SocialMediaUse_Instagram_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Instagram_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>Instagram</b> each day?</div></p>"
        }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_Instagram_CheckingApp', 
    required: true,
      }
    ]
   }


   var MTES_SocialMediaUse_X_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_X_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>X (formerly Twitter)</b> each day?</div></p>"
        }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_X_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Facebook_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Facebook_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>Facebook</b> each day?</div></p>"
        }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_Facebook_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Snapchat_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Snapchat_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>Snapchat</b> each day?</div></p>"
        }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_Snapchat_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_TikTok_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_TikTok_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>TikTok</b> each day?</div></p>"
        }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_TikTok_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_YouTube_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_YouTube_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>YouTube</b> each day?</div></p>"
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_YouTube_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Reddit_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Reddit_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>Reddit</b> each day?</div></p>"
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_Reddit_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Tumblr_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Tumblr_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>Tumblr</b> each day?</div></p>"
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_Tumblr_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_Pinterest_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_Pinterest_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>Pinterest</b> each day?</div></p>"
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_Pinterest_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_WhatsApp_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_WhatsApp_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>WhatsApp</b> each day?</div></p>"
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_WhatsApp_CheckingApp', 
    required: true,
      }
    ]
   }


   var MTES_SocialMediaUse_other_apps_1_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_1_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>${other_apps_1_name}</b> each day?</div></p>`
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_other_apps_1_CheckingApp', 
    required: true,
      }
    ]
   }

   var MTES_SocialMediaUse_other_apps_2_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_2_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>${other_apps_2_name}</b> each day?</div></p>`
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_other_apps_2_CheckingApp', 
    required: true,
      }
    ]
   }


   var MTES_SocialMediaUse_other_apps_3_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_3_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>${other_apps_3_name}</b> each day?</div></p>`
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_other_apps_3_CheckingApp', 
    required: true,
      }
    ]
   }


   var MTES_SocialMediaUse_other_apps_4_CheckingApp = {
    data: {
      trial_id: "MTES_SocialMediaUse_other_apps_4_CheckingApp"
  },
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
            prompt: function () {
          return `<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>How often do you check <b>${other_apps_4_name}</b> each day?</div></p>`
            }, 
    options: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
    name: 'MTES_SocialMediaUse_other_apps_4_CheckingApp', 
    required: true,
      }
    ]
   }



//------------------------------------//
// Conditional Timelines for CheckingApp questions
//------------------------------------//


/*Instagram checkingapp conditional timeline*/
var instagram_checkingapp = {
  timeline: [MTES_SocialMediaUse_Instagram_CheckingApp],
  conditional_function: function() {
    if (instagram === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*X checkingapp conditional timeline*/
var x_checkingapp = {
  timeline: [MTES_SocialMediaUse_X_CheckingApp],
  conditional_function: function() {
    if (x_formerly_twitter === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Facebook checkingapp conditional timeline*/
var facebook_checkingapp = {
  timeline: [MTES_SocialMediaUse_Facebook_CheckingApp],
  conditional_function: function() {
    if (facebook === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Snapchat checkingapp conditional timeline*/
var snapchat_checkingapp = {
  timeline: [MTES_SocialMediaUse_Snapchat_CheckingApp],
  conditional_function: function() {
    if (snapchat === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*TikTok checkingapp conditional timeline*/
var tiktok_checkingapp = {
  timeline: [MTES_SocialMediaUse_TikTok_CheckingApp],
  conditional_function: function() {
    if (tiktok === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*youtube checkingapp conditional timeline*/
var youtube_checkingapp = {
  timeline: [MTES_SocialMediaUse_YouTube_CheckingApp],
  conditional_function: function() {
    if (youtube === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*reddit checkingapp conditional timeline*/
var reddit_checkingapp = {
  timeline: [MTES_SocialMediaUse_Reddit_CheckingApp],
  conditional_function: function() {
    if (reddit === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Tumblr checkingapp conditional timeline*/
var tumblr_checkingapp = {
  timeline: [MTES_SocialMediaUse_Tumblr_CheckingApp],
  conditional_function: function() {
    if (tumblr === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*pinterest checkingapp conditional timeline*/
var pinterest_checkingapp = {
  timeline: [MTES_SocialMediaUse_Pinterest_CheckingApp],
  conditional_function: function() {
    if (pinterest === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*whatsapp checkingapp conditional timeline*/
var whatsapp_checkingapp = {
  timeline: [MTES_SocialMediaUse_WhatsApp_CheckingApp],
  conditional_function: function() {
    if (whatsapp === true) {
      return true;
    } else {
      return false;
    }
  }
}


/*Other apps #1 CheckingApp conditional timeline*/
var other_apps_1_checkingapp = {
  timeline: [MTES_SocialMediaUse_other_apps_1_CheckingApp],
  conditional_function: function() {
    if (other_apps_1 === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Other apps #2 CheckingApp conditional timeline*/
var other_apps_2_checkingapp = {
  timeline: [MTES_SocialMediaUse_other_apps_2_CheckingApp],
  conditional_function: function() {
    if (other_apps_2 === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Other apps #3 CheckingApp conditional timeline*/
var other_apps_3_checkingapp = {
  timeline: [MTES_SocialMediaUse_other_apps_3_CheckingApp],
  conditional_function: function() {
    if (other_apps_3 === true) {
      return true;
    } else {
      return false;
    }
  }
}

/*Other apps #4 CheckingApp conditional timeline*/
var other_apps_4_checkingapp = {
  timeline: [MTES_SocialMediaUse_other_apps_4_CheckingApp],
  conditional_function: function() {
    if (other_apps_4 === true) {
      return true;
    } else {
      return false;
    }
  }
}





//------------------------------------//
// MTES Public Updates
//------------------------------------//
var MTES_posting = {
  data: {
    trial_id: "MTES_posting"
},
      type: jsPsychSurvey,
      survey_json: {
      showQuestionNumbers: false,
      completeText: 'Next',
      elements:
      [
        {
          type: 'radiogroup',
          title: "How often do you *post something new about yourself* on a social media platform (Tweet, Instagram post, Facebook status update, etc.)", 
          choices: ['Never', 'I rarely post personal updates', 'A few times a month', 'A few times a week', '1-3 times per day', '3-5 times per day', '5-10 times per day', 'More than 10 times per day'],
          name: 'MTES_PublicUpdates_NewPosts', 
          isRequired: true,
       },
       {
          type: 'radiogroup',
          title: "How often do you *share or repost something* you encountered on a social media platform (e.g., repost, reTweet, reGram, Facebook share, etc.)", 
          choices: ['Never', 'I rarely post personal updates', 'A few times a month', 'A few times a week', '1-3 times per day', '3-5 times per day', '5-10 times per day', 'More than 10 times per day'],
          name: 'MTES_PublicUpdates_Reposts', 
          isRequired: true,
       }
    ]
}
};



//------------------------------------//
// MTES SMU questions
//------------------------------------//
var MTES_SMU = {
  data: {
    trial_id: "MTES_SMU"
},
  type: jsPsychSurveyText,
  preamble: "<p><div style ='font-size:2.3vw; color: black; line-height:2em;'><b>When using social media, how much of your time do you spend...</b></div></p>" +
  "<p><div style ='font-size:1.8vw; color: black;'></i><b>*</b>Indicate your responses as percentage of time (must add up to 100%)</i>.</div></p>",
  questions: [
    {prompt: 'Consuming content (scrolling, lurking, streaming)', 
    name: 'MTES_SMU_consuming_content', 
    placeholder: "Enter % of time",
    required: true,
    },

    {prompt: "Responding to other people's content (share, 'like', comment)", 
    name: 'MTES_SMU_responding', 
    placeholder: "Enter % of time",
    required: true,
    },

    {prompt: "Posting your own content", 
    name: 'MTES_SMU_posting', 
    placeholder: "Enter % of time",
    required: true,
    },
    
    {prompt: "Total (should be 100)", 
    name: 'MTES_SMU_total', 
    placeholder: "Should add up to 100%",
    required: true,
    },
    ],
    on_finish: function(data) {
      counter = +data.response.MTES_SMU_consuming_content + +data.response.MTES_SMU_responding + +data.response.MTES_SMU_posting
      data.MTES_SMU_counter_original = +data.response.MTES_SMU_consuming_content + +data.response.MTES_SMU_responding + +data.response.MTES_SMU_posting
    }
    }



    var MTES_SMU_correction = {
      data: {
        trial_id: "MTES_SMU_correction"
    },
      type: jsPsychSurveyText,
      preamble: "<p><div style ='font-size:1.5vw; line-height:2em;'><b>The percentages did not add up to 100%. Please re-enter the percentages and confirm that the total is equal to 100%.</b></div></p>" +
      "<p><div style ='font-size:1.5vw; line-height:2em;'><b>When using social media, how much of your time do you spend...</b></div></p>" +
      "<p><div style ='font-size:1.3vw; line-height:2em;'></i><b>*</b>Indicate your responses as percentage of time (must add up to 100%)</i>.</div></p>",
      questions: [
        {prompt: 'Consuming content (scrolling, lurking, streaming)', 
        name: 'MTES_SMU_consuming_content_correction', 
        placeholder: "Enter % of time",
        required: true,
        },
  
        {prompt: "Responding to other people's content (share, 'like', comment)", 
        name: 'MTES_SMU_responding_correction', 
        placeholder: "Enter % of time",
        required: true,
        },
  
        {prompt: "Posting your own content", 
        name: 'MTES_SMU_posting_correction', 
        placeholder: "Enter % of time",
        required: true,
        },
        
        {prompt: "Total (should be 100)", 
        name: 'MTES_SMU_total_correction', 
        placeholder: "Should add up to 100%",
        required: true,
        },
        ],
        on_finish: function(data) {
          counter_correction = +data.response.MTES_SMU_consuming_content_correction + +data.response.MTES_SMU_responding_correction + +data.response.MTES_SMU_posting_correction
          data.MTES_SMU_counter_correction = +data.response.MTES_SMU_consuming_content_correction + +data.response.MTES_SMU_responding_correction + +data.response.MTES_SMU_posting_correction
        }
        }



//------------------------------------//
// Conditional Timelines for MTES_SMU
//------------------------------------//


/*MTES_SMU conditional timeline*/
var MTES_SMU_conditional = {
timeline: [MTES_SMU_correction],
conditional_function: function() {
  if (counter !== 100) {
    return true;
  } else {
    return false;
  }
}
}


//------------------------------------//
// MTES Conclusion Slide
//------------------------------------//
var mtes_conclusion = {
  data: {
      trial_id: "mtes_conclusion"
  },
  type: jsPsychInstructions,
  pages: function(){
  pageOne = "<p><div style ='font-size:2.3vw;'>This survey is now complete. Thank you!</div></p>"
  return [pageOne]
  },
  button_label_next: "Next",
  show_clickable_nav: true,
  css_classes: ['instructions_line_height'],
  }



//Define MTES timeline
var MTES_survey = {
      timeline: [mtes_intro, MTES_phonechecking, MTES_SocialMediaUse_Platform_instructions, MTES_SocialMediaUse_Platform, other_apps_followup_conditional, instagram_timeonapp, instagram_checkingapp, x_timeonapp, x_checkingapp, facebook_timeonapp, facebook_checkingapp, snapchat_timeonapp, snapchat_checkingapp, tiktok_timeonapp, tiktok_checkingapp, youtube_timeonapp, youtube_checkingapp, reddit_timeonapp, reddit_checkingapp, tumblr_timeonapp, tumblr_checkingapp, pinterest_timeonapp, pinterest_checkingapp, whatsapp_timeonapp, whatsapp_checkingapp, other_apps_1_timeonapp, other_apps_1_checkingapp, other_apps_2_timeonapp, other_apps_2_checkingapp, other_apps_3_timeonapp, other_apps_3_checkingapp, other_apps_4_timeonapp, other_apps_4_checkingapp, MTES_posting, MTES_SMU, MTES_SMU_conditional]

};