var GerlichUseandCriticalThinking_survey_AI = {
  data: {
    trial_id: "GerlichUseandCriticalThinking_survey_AI",
},
  type: jsPsychSurveyLikert,
  preamble: "<p style='font-size: 2.2vw; line-height: 1.25em;'><b>Please take a moment to answer the following questions about your habits when searching for and evaluating information provided by AI tools.</b></p>",
  questions:  [
      {prompt: "<b>1. How often do you use AI tools (e.g., virtual assistants, recommendation algorithms) to find information or solve problems? </b>", name: 'GUCT_AI_use', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
      {prompt: "<b>2. To what extent do you rely on AI tools for decision-making?</b>", name: 'GUCT_AI_decisionmaking', labels: ["Not at all", "Slightly", "Somewhat", "Often", "Very Often", "Completely"], required: true},
      {prompt: "<b>3. I find AI tools help me save time when searching for information.</b>", name: 'GUCT_AI_timeefficacy', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>4. I trust the recommendations provided by AI tools.</b>", name: 'GUCT_AI_trust', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>5. I often cross-check information provided by AI tools with other sources.</b>", name: 'GUCT_AI_sourcecheck', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>6. How often do you question the motives behind the information shared by AI tools?</b>", name: 'GUCT_AI_motivescheck', labels: ["Never", "Rarely", "Sometimes", "Often", "Very Often", "Always"], required: true},
      {prompt: "<b>7. I analyse the credibility of the author when reading news or information provided by AI tools.</b>", name: 'GUCT_AI_credibility', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>8. I compare multiple sources of information before forming an opinion based on AI recommendations.</b>", name: 'GUCT_AI_formingopinion', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
      {prompt: "<b>9. I question the assumptions underlying the information provided by AI tools.</b>", name: 'GUCT_AI_assumptionscheck', labels: ["Strongly<br>Disagree", "Disagree", "Somewhat<br>Disagree", "Somewhat<br>Agree", "Agree", "Strongly<br>Agree"], required: true},
    ],
    scale_width: 1300
}