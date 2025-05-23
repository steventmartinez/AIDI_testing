var AI_use = {
  data: {
    trial_id: "AI_use"
},
  type: jsPsychSurvey,
  survey_json: {
    showQuestionNumbers: false,
    showNavigationButtons: true,
    completeText: 'Next',
    pages: [{
      name: 'AIuse_intro_questions',
      elements: [
              {
        type: 'html',
        html: "<p style='text-align: center; font-size: 1.7vw; line-height: 1.25em;'><b>The next questions will ask about your use of AI platforms.<b></p>",
        name: 'AI_endorsement_preamble',
      },
        {
          type: 'checkbox',
          title: 'Have you used AI for any of the following tasks?',
          choices: ["Generating text", "Searching for information", 'Generating images/videos', 'Writing/Editing code', 'N/A (I have not used AI)'],
          name: "AIuse_endorsement",
          showOtherItem: true,
          isRequired: true
        },
        {
          type: 'checkbox',
          visibleIf: '{AIuse_endorsement} contains "Generating text"',
          // visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Searching for information"]',
          title: 'Which AI platforms have you used to write/revise texts?',
          choices: ["OpenAI ChatGPT", "Anthropic Claude"],
          name: "AIuse_platforms_texts",
          showOtherItem: true,
          isRequired: true
        },
        {
          type: 'checkbox',
          visibleIf: '{AIuse_endorsement} contains "Generating images/videos"',
          // visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Searching for information"]',
          title: 'Which AI platforms have you used to generate images/videos?',
          choices: ["Google Gemini", "Mage"],
          name: "AIuse_platforms_images",
          showOtherItem: true,
          isRequired: true
        }
      ]
    }, {
        name: 'AIuse_estimate',
        elements: [
        {
          type: 'text',
          visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Generating images/videos"]',
          title: "What is your primary AI platform?", 
          name: 'AIuse_primary_platform',
          placeholder: "Enter name of primary AI platform", 
          size: 33, 
          isRequired: true,
        },
        {
          type: 'text',
          visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Generating images/videos"]',
          title: "Please estimate the number of sessions (# of threads/topics started) on your primary AI platform in the previous 30 days.", 
          name: 'AIuse_estimate_sessions',
          placeholder: "Enter whole numbers only (e.g., 3, 14)", 
          size: 33, 
          isRequired: true,
          inputType: "number",
          min: 0,
        },
        {
          type: 'text',
          visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Generating images/videos"]',
          title: "Please estimate the number of searches (# of independent searches) on your primary AI platform in the previous 30 days.", 
          name: 'AIuse_estimate_searches',
          placeholder: "Enter whole numbers only (e.g., 3, 14)", 
          size: 33, 
          isRequired: true,
          inputType: "number",
          min: 0,
        },
      ]
    }, {
      name: 'AIuse_actual',
      elements: [
      {
        type: 'html',
        visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Generating images/videos"]',
        html: "<p style='text-align: center; font-size: 1.7vw; line-height: 1.25em;'><b>Please go to your primary AI platform and follow the instructions on the image below.</b></p>",
        name: 'AI_instructions_preamble',
      },
      {
        type: 'html',
        visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Generating images/videos"]',
        html: '<img src="study_design_images/ai_use_instructions.jpg" style="height: 55vh; display: block; margin: auto;"</img>',
        name: 'AI_instructions',
      },
      {
        type: 'text',
        visibleIf: '{AIuse_endorsement} anyof ["Generating text", "Generating images/videos"]',
        title: "Please report the number of sessions (# of threads/topics started) on your primary AI platform in the previous 30 days.", 
        name: 'AIuse_actual_sessions',
        placeholder: "Enter whole numbers only (e.g., 3, 14)", 
        size: 33, 
        isRequired: true,
        inputType: "number",
        min: 0,
      },
    ]
    }]
  },
  on_finish: function (data) {

      // console.log(data.response.length)
      for (const key in data.response) {

      // console.log(`${key}: ${data.response[key]}`);

      /*Store answer for "AIuse_endorsement" question*/
      if (`${key}` == "AIuse_endorsement") {
        AIuse_endorsement_answer = `${data.response[key]}`
      }

      /*Store answer for "AIuse_platforms_texts" question*/
      if (`${key}` == "AIuse_platforms_texts") {
        AIuse_platforms_texts_answer = `${data.response[key]}`
      }

      /*Store answer for "AIuse_platforms_images" question*/
      if (`${key}` == "AIuse_platforms_images") {
        AIuse_platforms_images_answer = `${data.response[key]}`
      }

      /*Store answer for "AIuse_primary_platform" question*/
      if (`${key}` == "AIuse_primary_platform") {
        AIuse_primary_platform_answer = `${data.response[key]}`
      }

      /*Store answer for "AIuse_estimate_sessions" question*/
      if (`${key}` == "AIuse_estimate_sessions") {
        AIuse_estimate_sessions_answer = `${data.response[key]}`
      }

      /*Store answer for "AIuse_estimate_searches" question*/
      if (`${key}` == "AIuse_estimate_searches") {
        AIuse_estimate_searches_answer = `${data.response[key]}`
      }

      /*Store answer for "AIuse_actual_sessions" question*/
      if (`${key}` == "AIuse_actual_sessions") {
        AIuse_actual_sessions_answer = `${data.response[key]}`
      }

      }

    //Add a column called "AIuse_endorsement_response" that stores the answer
    data.AIuse_endorsement_response = AIuse_endorsement_answer

    //Add a column called "AIuse_platforms_texts_response" that stores the answer
    data.AIuse_platforms_texts_response = AIuse_platforms_texts_answer

    //Add a column called "AIuse_platforms_images_response" that stores the answer
    data.AIuse_platforms_images_response = AIuse_platforms_images_answer

    //Add a column called "AIuse_primary_platform_response" that stores the answer
    data.AIuse_primary_platform_response = AIuse_primary_platform_answer

    //Add a column called "AIuse_estimate_sessions_response" that stores the answer
    data.AIuse_estimate_sessions_response = AIuse_estimate_sessions_answer

    //Add a column called "AIuse_estimate_searches_response" that stores the answer
    data.AIuse_estimate_searches_response = AIuse_estimate_searches_answer

    //Add a column called "AIuse_actual_sessions_response" that stores the answer
    data.AIuse_actual_sessions_response = AIuse_actual_sessions_answer


}
};