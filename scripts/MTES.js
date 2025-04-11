var MTES_intro = {
  data: {
    trial_id: "MTES_intro"
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
        title: "Which of these devices do you use? Check all that apply", 
        name: 'devices', 
        choices: ['Smartphone', 'Computer', 'Tablet or iPad', 'Gaming console (e.g., Xbox, PlayStation, Switch, Oculus)', 'Television'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'radiogroup',
        title: "Which device do you use most for social media and entertainment?", 
        name: 'device_used_most', 
        choices: ['Your own smartphone', 'Your own computer', 'Your own tablet or iPad', 'Your gaming console (e.g., Xbox, PlayStation, Switch, Oculus)', "Someone else's smartphone", "Someone else's computer", "Someone else's tablet or iPad", "Other"], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'text',
        title: "At what age did you own your *first* smartphone?", 
        name: 'Age.FirstPhone',
        placeholder: "Enter numbers only (e.g., 14, 20)", 
        size: 30, 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "What kind of smartphone do you currently own (or use most often)?", 
        name: 'OwnPhone', 
        choices: ['iPhone', 'Android', 'Other'], 
        isRequired: true,
        colCount: 0,
      }, 
      {
        type: 'html',
        html: "<p><b>On average, how much time do you think you spend on your phone in a typical 24-hour period? <u>Example</u>: If your estimated usage is <u>5 hours and 50 minutes</u>, you'd enter the number <u>5</u> next to <u>Hours</u> and the number <u>50</u> next to <u>Minutes</u></b>.</p>",
        name: 'General_Average_PhoneUsage_header',
      },
      {
        type: 'text',
        title: 'Hours', 
        name: 'General_Phone_Usage_Hours', 
        size: 25,
        placeholder: "Enter whole numbers only", 
        isRequired: true,
      }, 
      {
        type: 'text',
        title: 'Minutes', 
        name: 'General_Phone_Usage_Minutes', 
        size: 25,
        placeholder: "Enter whole numbers only", 
        isRequired: true,
      },
  ],
},
};


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
          title: "How many times a day do you check your smartphone in response to an alert or notification?", 
          name: 'phonecheck_notifications', 
          choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'], 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "How many times a day do you check your smartphone even though it did not alert or notify you?", 
          name: 'phonecheck_no_notifications', 
          choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'], 
          isRequired: true,
        }, 
        {
          type: 'text',
          title: "About how many times per day does your phone alert you to a new notification (including emails, messages, status updates, newsfeeds, sports scores, etc.)?", 
          name: 'phonecheck_notifications_count',
          placeholder: "Enter numbers only", 
          size: 25, 
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
// MTES Posting questions
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
       },
       {
          type: 'html',
          html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>How much time do you spend each day streaming videos? Please select an answer for each device (e.g., on platforms such as Netflix, YouTube Twitch, Crunchyroll, etc.)</b></div></p>",
          name: 'Time_Streaming', 
          isRequired: true,
       },
       {
          type: 'radiogroup',
          title: "Phone", 
          choices: ['Rarely ever', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          name: 'Time_Streaming_phone', 
          isRequired: true,
       },
       {
          type: 'radiogroup',
          title: "Tablet", 
          choices: ['Rarely ever', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          name: 'Time_Streaming_tablet', 
          isRequired: true,
       },
       {
          type: 'radiogroup',
          title: "Computer", 
          choices: ['Rarely ever', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          name: 'Time_Streaming_computer', 
          isRequired: true,
        },
       {
          type: 'radiogroup',
          title: "TV", 
          choices: ['Rarely ever', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          name: 'Time_Streaming_tv', 
          isRequired: true,
       },
       {
          type: 'radiogroup',
          title: "Gaming console", 
          choices: ['Rarely ever', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          name: 'Time_Streaming_gamingconsole', 
          isRequired: true,
       },
    ]
}
};



//------------------------------------//
// MTES calm quesitons
//------------------------------------//


var MTES_calm_instructions = {
  data: {
    trial_id: "MTES_calm_instructions"
},
  type: jsPsychInstructions,
  pages: function(){
    pageOne = "<p><div style ='font-size:2.3vw;'>We will now ask you about your usage of smartphones and social media.</div></p>" +
        "<p><div style ='font-size:2.3vw;'>You can respond to these questions by considering your activity across all your devices.</div></p>" 
    return [pageOne]
    },
  show_clickable_nav: true,
  css_classes: ['instructions_line_height'],
}



var MTES_calm = {
        data: {
          trial_id: "MTES_calm"
      },
      type: jsPsychSurvey,
      survey_json: {
      showQuestionNumbers: false,
      completeText: 'Next',
      elements:
        [
        {
          type: 'html',
          html: "<p><div style ='font-size:1.5vw; color: black;'><b>How many messages (text messages, group chat, iMessages, Instagram DM, Facebook messges, etc) do you estimate you send and receive on a daily basis?</b></div></p>",
          name: 'MTES_calm_header',
        },
        {
          type: 'text',
          title: '(a) Messages sent', 
          name: 'MessagesSent', 
          size: 25, 
          placeholder: "Enter numbers only",
          isRequired: true,
        }, 
        {
          type: 'text',
          title: '(b) Messages received', 
          name: 'MessagesReceived', 
          textbox_columns: 25, 
          placeholder: "Enter numbers only",
          isRequired: true,
        },
        {
          type: 'radiogroup',
          title: "How often do you use your smartphone or social media to keep from being bored?", 
          name: 'MTES_bored', 
          choices: ['Never', 'Rarely', 'Once a week', "Multiple times a week", 'Once every day', "Multiple times every day"],
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "How often do you try to calm down by using your smartphone or social media?", 
          name: 'MTES__calm', 
          choices: ['Never', 'Rarely', 'Once a week', "Multiple times a week", 'Once every day', "Multiple times every day"], 
          isRequired: true,
        },
        {
          type: 'radiogroup',
          title: "How often do you try to calm down by NOT using your smartphone or social media?", 
          name: 'MTES_calm_nonphone', 
          choices: ['Never', 'Rarely', 'Once a week', "Multiple times a week", 'Once every day', "Multiple times every day"], 
          isRequired: true,
        }
      ]
  }
};



//------------------------------------//
// Smartphone Addiction Subscale
//------------------------------------//
var MTES_SAS = {
  data: {
    trial_id: "MTES_SAS"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  title: "Thinking about your smartphone use, please indicate the degree to which you agree with each of the following statements.",
  completeText: 'Next',
  elements:
    [
      {
        type: 'radiogroup',
        title: "I have missed planned work due to smartphone use", 
        name: 'MTES_SAS_MissedPlans', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      }, 
      {
        type: 'radiogroup',
        title: "I have a hard time concentrating in class, while doing assignments, or while working due to smartphone use", 
        name: 'MTES_SAS_Concentrating', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I feel pain in my wrists or at the back of my neck while using a smartphone", 
        name: 'MTES_SAS_Pain', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I can't stand not having my smartphone", 
        name: 'MTES_SAS_Separation', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I feel impatient and unsettled when I am not holding my smartphone", 
        name: 'MTES_SAS_Impatient', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I have my smartphone in my mind even when I am not using it", 
        name: 'MTES_SAS_Thoughts', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I will never give up using my smartphone, even when my daily life is already greatly affected by it", 
        name: 'MTES_SAS_Addiction', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I constantly check my smartphone so as not to miss messages or something posted on social media", 
        name: 'MTES_SAS_FOMO', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "I use my smartphone for longer priods than I intend", 
        name: 'MTES_SAS_Time', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
      {
        type: 'radiogroup',
        title: "The people around me tell me that I use my smartphone too much", 
        name: 'MTES_SAS_Social', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
      },
  ],
},
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
                                                  // Objective Measures
                                                  //------------------------------------//


//------------------------------------------------------------//
// Stage 1: Own Phone, Currently Have Phone, Operating System
//------------------------------------------------------------//
 /*Do you have your own smartphone?*/
var OBJ_pre_instructions_own_smartphone = {
  data: {
    trial_id: "OBJ_pre_instructions_own_smartphone"
},
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
  prompt: function () {
    return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>Do you have your own smartphone?</div></p>"
  }, 
  options: ['Yes', 'No'],
  name: 'OBJ_pre_instructions_own_smartphone',
  horizontal: true, 
  required: true,
    }
 ],
 on_finish: function (data) {
  if (jsPsych.pluginAPI.compareKeys(data.response.OBJ_pre_instructions_own_smartphone, 'No')) {
    jsPsych.abortCurrentTimeline();
  }
}
 }



 /*Do you currently have your smartphone with you?*/
var OBJ_pre_instructions_have_smartphone = {
  data: {
    trial_id: "OBJ_pre_instructions_have_smartphone"
},
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
  prompt: function () {
    return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>Do you currently have your phone with you?</div></p>"
  }, 
  options: ['Yes', 'No'],
  name: 'OBJ_pre_instructions_have_smartphone',
  horizontal: true, 
  required: true,
    }
 ],
 on_finish: function (data) {
  if (jsPsych.pluginAPI.compareKeys(data.response.OBJ_pre_instructions_have_smartphone, 'No')) {
    jsPsych.abortCurrentTimeline();
  }
}
};


 /*What kind of OS does your phone use??*/
 var OBJ_operatingsystem = {
  data: {
    trial_id: "OBJ_operatingsystem"
},
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
  prompt: function () {
    return "<p><div style ='font-size:2.3vw; margin-bottom: 1em;'>What kind of operating system does your phone use?</div></p>"
  }, 
  options: ['iOS (iPhone)', 'Android (Samsung, Google, etc.)', 'Other'],
  name: 'OBJ_operatingsystem',
  horizontal: true, 
  required: true,
    }
 ],
 on_finish: function (data) {
  /*If operating system is iOS*/
   if (data.response.OBJ_operatingsystem == ("iOS (iPhone)")) {
      iphone = true
   } else {
      iphone = false
   }
   /*If operating system is Android OS*/
   if (data.response.OBJ_operatingsystem == ("Android (Samsung, Google, etc.)")) {
       android = true
  }  else {
       android = false
  }
  /*If operating system is Other*/
  if (jsPsych.pluginAPI.compareKeys(data.response.OBJ_operatingsystem, 'Other')) {
    jsPsych.abortCurrentTimeline();
  }
}
 }



//--------------------------------------------//
// Stage 2a: Conditional timeline -- iPhone
//--------------------------------------------//
var OBJ_instructions_iphone = {
    data: {
        trial_id: "OBJ_instructions_iphone"
    },
    type: jsPsychInstructions,
    pages: [
      "<p><div style ='font-size:1.6vw; line-height: .9em;'>For the next set of questions, we would like you to take out your smartphone and follow along with the instructions.</div></p>" +
      "<p><div style ='font-size:1.6vw; line-height: .9em'>1) Open the <b>Screentime</b> App on your iPhone</div></p>" +
      "<p><div style ='font-size:1.6vw; line-height: .9em'>2) Click on <b>See All App & Website Activity</b>.</div></p>" +
      "<p><div style ='font-size:1.6vw; line-height: .9em'>3) <u><b>Swipe right</b></u> over the section showing your 'Daily Average' to get to '<b>Last Week's Average</b>'</div></p>" +
      "<img src='mtes_images_2025/OBJ_instructions_2025.png', style='height:45vh; margin-top:1.8em', class='center'></img>",

    ],
    show_clickable_nav: true
}


var OBJ_iphone_last_week_reminder = {
  data: {
      trial_id: "OBJ_iphone_last_week_reminder"
  },
  type: jsPsychInstructions,
  pages: [
    "<p><div style ='font-size:2vw; line-height: 1.7em;'>Please make sure that you are filling out the survey for <b>Last Week's Average Screen Time</b>,</div></p>" +
    "<p><div style ='font-size:2vw; line-height: 1.7em;'>not this week's screen time.</div></p>"
  ],
  show_clickable_nav: true
}


var OBJ_iphone_screen_time = {
  data: {
    trial_id: "OBJ_iphone_screen_time"
},
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
  prompt: function () {
    return "<p><div style ='font-size:2vw; margin-bottom: 1em;'>It might be the case that your screen time hasn't been turned on.</div></p>" +
    "<p><div style ='font-size:2vw; margin-bottom: 1em;'>Can you see your screen time data?</div></p>"
  }, 
  options: ['Yes', 'No'],
  name: 'OBJ_iphone_screen_time',
  horizontal: true, 
  required: true,
    }
 ],
on_finish: function (data) {
  if (jsPsych.pluginAPI.compareKeys(data.response.OBJ_iphone_screen_time, 'No')) {
    jsPsych.abortCurrentTimeline();
  }
}
};


var OBJ_iphone_DailyAverage = {
  data: {
    trial_id: "OBJ_iphone_DailyAverage"
},
    type: jsPsychSurveyText,
    preamble: '<img src="mtes_images_2025/OBJ_lastweekaverage_screentime_2025.png"  style="height: 45vh;"></img></p>' +
    "<p><div style= 'line-height: 0.1em;'>Enter the value shown for daily average use from <b>Last Week's Average</b>.</div></p>",
    questions: [
      {prompt: '<p><div style= "line-height: 0.1em;"><b>Hours</b></div></p>', 
      name: 'OBJ_iphone_Usage_Hours', 
      placeholder: "Enter whole numbers only (e.g., 3, 14)", 
      required: true
    },
      {prompt: '<p><div style= "line-height: 0.1em;"><b>Minutes</b></div></p>', 
      name: 'OBJ_iphone_Usage_Minutes', 
      placeholder: "Enter whole numbers only (e.g., 3, 14)", 
      required: true
    },
    ], 
   }

  var OBJ_iphone_categories_instructions = {
  data: {
      trial_id: "OBJ_iphone_categories_instructions"
  },
  type: jsPsychInstructions,
  pages: [
    "<p><div style ='font-size:1.6vw;'>Next, click on 'Show Categories' (on the right hand side below the total screen time report).</div></p>" +
    "<img src='mtes_images_2025/OBJ_categories_2025.png', style='height: 60vh;' class='center'></img>",

  ],
  show_clickable_nav: true
}



var OBJ_iphone_categories_questions = {
  data: {
    trial_id: "OBJ_iphone_categories_questions"
},
preamble: `<p><div style ="font-size:1.6vw;">For the top <b>FIVE</b> categories listed under your Screen Time report, (e.g., Entertainment, Social, Productivity & Finance, Utilities, Information, Shopping, etc.) please indicate the name of the category:</div></p>`,
    type: jsPsychSurveyText,
    questions: [
      //Category 1 questions
      {prompt: '<p><div style ="font-size:40px; color: black;"><b>Category 1</b></div></p>' +
      '<p><Name of Category 1<</p>', 
      placeholder: "Name of category 1",
      name: 'OBJ_iphone_Cat1_Name',
      required: true
      },
      {prompt: 'Total time for category 1 (Hours)', 
      placeholder: "Hours for category 1",
      name: 'OBJ_iphone_Cat1_Hours',
      required: true
      },
      {prompt: 'Total time for category 1 (Minutes)', 
      placeholder: "Minutes for category 1",
      name: 'OBJ_iphone_Cat1_Minutes',
      required: true
      },

      //Category 2 questions
      {prompt: '<p><div style ="font-size:40px; color: black;"><b>Category 2</b></div></p>' +
      '<p>Name of Category 2</p>', 
      placeholder: "Name of category 2",
      name: 'OBJ_iphone_Cat2_Name',
      required: true
      },
      {prompt: 'Total time for category 2 (Hours)', 
      placeholder: "Hours for category 2",
      name: 'OBJ_iphone_Cat2_Hours',
      required: true
      },
      {prompt: 'Total time for category 2 (Minutes)', 
      placeholder: "Minutes for category 2",
      name: 'OBJ_iphone_Cat2_Minutes',
      required: true
      },

      //Category 3 questions
      {prompt: '<p><div style ="font-size:40px; color: black;"><b>Category 3</b></div></p>' +
      '<p>Name of Category 3</p>', 
      placeholder: "Name of category 3",
      name: 'OBJ_iphone_Cat3_Name',
      required: true
      },
      {prompt: 'Total time for category 3 (Hours)', 
      placeholder: "Hours for category 3",
      name: 'OBJ_iphone_Cat3_Hours',
      required: true
      },
      {prompt: 'Total time for category 3 (Minutes)', 
      placeholder: "Minutes for category 3",
      name: 'OBJ_iphone_Cat3_Minutes',
      required: true
      },

      //Category 4 questions
      {prompt: '<p><div style ="font-size:40px; color: black;"><b>Category 4</b></div></p>' +
      '<p>Name of Category 4</p>', 
      placeholder: "Name of category 4",
      name: 'OBJ_iphone_Cat4_Name',
      required: true
      },
      {prompt: 'Total time for category 4 (Hours)', 
      placeholder: "Hours for category 4",
      name: 'OBJ_iphone_Cat4_Hours',
      required: true
      },
      {prompt: 'Total time for category 4 (Minutes)', 
      placeholder: "Minutes for category 4",
      name: 'OBJ_iphone_Cat4_Minutes',
      required: true
      },

      //Category 5 questions
      {prompt: '<p><div style ="font-size:40px; color: black;"><b>Category 5</b></div></p>' +
      '<p>Name of Category 5</p>', 
      placeholder: "Name of category 5",
      name: 'OBJ_iphone_Cat5_Name',
      required: true
      },
      {prompt: 'Total time for category 5 (Hours)', 
      placeholder: "Hours for category 5",
      name: 'OBJ_iphone_Cat5_Hours',
      required: true
      },
      {prompt: 'Total time for category 5 (Minutes)', 
      placeholder: "Minutes for category 5",
      name: 'OBJ_iphone_Cat5_Minutes',
      required: true
      },
    ]
  }


  var OBJ_iphone_AvgPickups = {
    data: {
      trial_id: "OBJ_iphone_AvgPickups"
  },
    type: jsPsychSurveyText,
    preamble:  `<img src="mtes_images_2025/OBJ_lastweekaverage_pickups_2025.png" style="height: 45vh;"></img>` +
    `<p><div style ="font-size:1.6vw;">Now, scroll down to where the report shows "<b>Pickups</b>" (just below the categories), and make sure it's showing <b>"Last Week's Average"</b> number of pickups. If not, touch the word <b>"Avg"</b> on the right side of the graph.</div></p>`,
    questions: [
      {prompt: "<b>What is the value shown for the 'Last Week's Average' number of pickups<b>?", 
      name: 'OBJ_iphone_AvgPickups', 
      required: true, 
      placeholder: "Number of pickups"},
    ], 
   }


   var OBJ_iphone_AvgNotifs = {
    data: {
      trial_id: "OBJ_iphone_AvgNotifs"
  },
    type: jsPsychSurveyText,
    preamble: `<img src="mtes_images_2025/OBJ_lastweekaverage_notifications_2025.png" style="height: 45vh;"></img>` +
    `<p><div style ="font-size:1.6vw;">Now, scroll down to where the report shows "<b>Notifications</b>" (just below the categories), and make sure it's showing <b>"Last Week's Average"</b> number of notifications. If not, touch the word <b>"Avg"</b> on the right side of the graph.</div></p>`,
    questions: [
      {prompt: "<b>What is the count shown for the 'Last Week's Average' number of notifications</b>?", 
      name: 'OBJ_iphone_AvgNotifs', 
      required: true,
      placeholder: "Number of notifications"},
    ], 
   }




//---------------------------------------------//
// Stage 2b Conditional Timeline -- Android
//---------------------------------------------//
var OBJ_instructions_android = {
  data: {
      trial_id: "OBJ_instructions_android"
  },
  type: jsPsychInstructions,
  pages: [
    "<p><div style ='font-size:1.6vw; line-height: .9em;'>For the next set of questions, we would like you to take out your smartphone and follow along with the instructions.</div></p>" +
    "<p><div style ='font-size:1.6vw; line-height: .9em'>1) Open the <b>Digital Wellbeing</b> App on your Android device</div></p>" +
    "<p><div style ='font-size:1.6vw; line-height: .9em'>2) Click on the four-lined graph (located in the top right-hand corner).</div></p>" +
    "<p><div style ='font-size:1.6vw; line-height: .9em'>3) Please refer to your <b>Weekly Report</b></div></p>"
  ],
  show_clickable_nav: true
}



var OBJ_android_screen_time = {
data: {
  trial_id: "OBJ_android_screen_time"
},
type: jsPsychSurveyMultiChoice,
questions: [
  {
prompt: function () {
  return "<p><div style ='font-size:2vw; margin-bottom: 1em;'>It might be the case that your screen time hasn't been turned on.</div></p>" +
  "<p><div style ='font-size:2vw; margin-bottom: 1em;'>Can you see your screen time data?</div></p>"
}, 
options: ['Yes', 'No'],
name: 'OBJ_android_screen_time',
horizontal: true, 
required: true,
  }
],
on_finish: function (data) {
  if (jsPsych.pluginAPI.compareKeys(data.response.OBJ_android_screen_time, 'No')) {
    jsPsych.abortCurrentTimeline();
  }
}
};


var OBJ_android_DailyAverage = {
  data: {
    trial_id: "OBJ_android_DailyAverage"
},
    type: jsPsychSurveyText,
    preamble: "<p><div style= 'line-height: 0.1em;'>Enter the value shown for <b>Daily Average Screen Time</b> in the <b>Weekly Report</b>.</div></p>",
    questions: [
      {prompt: '<p><div style= "line-height: 0.1em;"><b>Hours</b></div></p>', 
      name: 'OBJ_android_Usage_Hours', 
      placeholder: "Enter whole numbers only (e.g., 3, 14)", 
      required: true
    },
      {prompt: '<p><div style= "line-height: 0.1em;"><b>Minutes</b></div></p>', 
      name: 'OBJ_android_Usage_Minutes', 
      placeholder: "Enter whole numbers only (e.g., 3, 14)", 
      required: true
    },
    ], 
   }

  var OBJ_android_top_three_apps_instructions = {
  data: {
      trial_id: "OBJ_android_top_three_apps_instructions"
  },
  type: jsPsychInstructions,
  pages: [
    "<p><div style ='font-size:1.6vw;'>Next, click on 'Show Categories' (on the right hand side below the total screen time report).</div></p>",
  ],
  show_clickable_nav: true
}



var OBJ_android_top_three_apps_questions = {
  data: {
    trial_id: "OBJ_android_top_three_apps_questions"
},
preamble: `<p><div style ="font-size:1.6vw;">Please name the top three applications listed under the graph, and then indicate the hours and minutes associated with each of them.</div></p>`,
    type: jsPsychSurveyText,
    questions: [
      /*First application*/
      {prompt: '<p><div style ="font-size:2.3vw; color: black;"><b>What is the name of the first application?</b></div></p>',
      placeholder: "Name of first application",
      name: 'OBJ_android_first_app',
      required: true
      },
      {prompt: 'Total time for first application (Hours)', 
      placeholder: "Hours for first application",
      name: 'OBJ_android_first_app_hours',
      required: true
      },
      {prompt: 'Total time for first application  (Minutes)', 
      placeholder: "Minutes for first application",
      name: 'OBJ_android_first_app_minutes',
      required: true
      },

      /*Second application*/
      {prompt: '<p><div style ="font-size:2.3vw; color: black;"><b>What is the name of the second application?</b></div></p>',
      placeholder: "Name of second application",
      name: 'OBJ_android_second_app',
      required: true
      },
      {prompt: 'Total time for second application (Hours)', 
      placeholder: "Hours for second application",
      name: 'OBJ_android_second_app_hours',
      required: true
      },
      {prompt: 'Total time for second application  (Minutes)', 
      placeholder: "Minutes for second application",
      name: 'OBJ_android_second_app_minutes',
      required: true
      },

      /*Third application*/
      {prompt: '<p><div style ="font-size:2.3vw; color: black;"><b>What is the name of the third application?</b></div></p>',
      placeholder: "Name of third application",
      name: 'OBJ_android_third_app',
      required: true
      },
      {prompt: 'Total time for third application (Hours)', 
      placeholder: "Hours for third application",
      name: 'OBJ_android_third_app_hours',
      required: true
      },
      {prompt: 'Total time for third application  (Minutes)', 
      placeholder: "Minutes for third application",
      name: 'OBJ_android_third_app_minutes',
      required: true
      },
    ]
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



//----------------------------------------------//
// Conditional Timelines for Objective Measures
//----------------------------------------------//





//----------------------------------------------------//
// Conditional timeline for iPhone
//---------------------------------------------------//

/*If they have iPhone*/
var OBJ_iphone = {
  timeline: [OBJ_instructions_iphone, OBJ_iphone_last_week_reminder, OBJ_iphone_screen_time, OBJ_iphone_DailyAverage, OBJ_iphone_categories_instructions, OBJ_iphone_categories_questions, OBJ_iphone_AvgPickups, OBJ_iphone_AvgNotifs],
  conditional_function: function() {
    if (iphone === true) {
      return true;
    } else {
      return false;
    }
  }
}



//----------------------------------------------------//
// Conditional timeline for Android
//---------------------------------------------------//

/*If they have Android*/
var OBJ_android = {
  timeline: [OBJ_instructions_android, OBJ_android_screen_time, OBJ_android_DailyAverage, OBJ_android_top_three_apps_instructions, OBJ_android_top_three_apps_questions],
  conditional_function: function() {
    if (android === true) {
      return true;
    } else {
      return false;
    }
  }
}



/*Objective Measures timeline*/
var OBJ_measures = {
  timeline: [OBJ_pre_instructions_own_smartphone, OBJ_pre_instructions_have_smartphone, OBJ_operatingsystem, OBJ_iphone, OBJ_android]
}

//Define MTES timeline
var MTES_survey = {
      timeline: [MTES_intro, MTES_phonechecking, MTES_SocialMediaUse_Platform_instructions, MTES_SocialMediaUse_Platform, other_apps_followup_conditional, instagram_timeonapp, instagram_checkingapp, x_timeonapp, x_checkingapp, facebook_timeonapp, facebook_checkingapp, snapchat_timeonapp, snapchat_checkingapp, tiktok_timeonapp, tiktok_checkingapp, youtube_timeonapp, youtube_checkingapp, reddit_timeonapp, reddit_checkingapp, tumblr_timeonapp, tumblr_checkingapp, pinterest_timeonapp, pinterest_checkingapp, whatsapp_timeonapp, whatsapp_checkingapp, other_apps_1_timeonapp, other_apps_1_checkingapp, other_apps_2_timeonapp, other_apps_2_checkingapp, other_apps_3_timeonapp, other_apps_3_checkingapp, other_apps_4_timeonapp, other_apps_4_checkingapp, MTES_posting, MTES_calm_instructions, MTES_calm, MTES_SAS, MTES_SMU, MTES_SMU_conditional, OBJ_measures, mtes_conclusion]
      // timeline: [MTES_SocialMediaUse_Platform, other_apps_followup_conditional, instagram_timeonapp, instagram_checkingapp, x_timeonapp, x_checkingapp, facebook_timeonapp, facebook_checkingapp, snapchat_timeonapp, snapchat_checkingapp, tiktok_timeonapp, tiktok_checkingapp, youtube_timeonapp, youtube_checkingapp, reddit_timeonapp, reddit_checkingapp, tumblr_timeonapp, tumblr_checkingapp, pinterest_timeonapp, pinterest_checkingapp, whatsapp_timeonapp, whatsapp_checkingapp, other_apps_1_timeonapp, other_apps_1_checkingapp, other_apps_2_timeonapp, other_apps_2_checkingapp, other_apps_3_timeonapp, other_apps_3_checkingapp, other_apps_4_timeonapp, other_apps_4_checkingapp, MTES_posting]

};