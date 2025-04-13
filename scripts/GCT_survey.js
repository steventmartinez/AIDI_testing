var GerlichCriticalThinking_survey = {
  data: {
    trial_id: "GerlichCriticalThinking_survey",
},
  type: jsPsychSurveyLikert,
  preamble: "<p style='font-size: 2.2vw; line-height: 1.25em;'><b>Please take a moment to answer the following questions about your habits when searching for and evaluating information.</b></p>",
  questions:  [
      {prompt: "<b>1. How often do you critically evaluate the sources of information you encounter?</b>", name: 'GCT_evaluation', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true}, 
      {prompt: "<b>2. How confident are you in your ability to discern fake news from legitimate news?</b>", name: 'GCT_fakenews', labels: ["Not Confident<br>At All", "Slightly<br>Confident", "Somewhat<br>Confident", "Moderately<br>Confident", "Mostly<br>Confident", "Very<br>Confident"], required: true},
      {prompt: "<b>3. When researching a topic, how often do you compare information from multiple sources?</b>", name: 'GCT_multiplesources', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
      {prompt: "<b>4. How frequently do you reflect on the biases in your own thinking when making decisions?</b>", name: 'GCT_selfbias', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
],
scale_width: 1300
}
