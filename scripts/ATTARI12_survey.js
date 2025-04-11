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
]
}



/*Organize ATTARI12 survey procedure*/
var ATTARI12_survey_procedure = {
    timeline: [AI_surveys_intro, ATTARI12_survey]
};