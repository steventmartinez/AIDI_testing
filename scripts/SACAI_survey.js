var SACAI_survey = {
    data: {
        trial_id: "SACAI_survey",
    },
    type: jsPsychSurveyLikert,
    preamble: "<p style='font-size: 2.2vw;'><b> Please answer all of the questions on this page. </b></p>",
    questions:  [
        {prompt: "<b>1. How often do you use AI to improve your communication with other people? </b>", name: 'SACAI_Q1', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>2. How often do you use AI to express yourself emotionally in personal communications (e.g., apologizing to a friend)? </b>", name: 'SACAI_Q2', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>3. How often do you use AI for social support (using AI as a conversational partner or companion)? </b>", name: 'SACAI_Q3', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>4. How often do you use AI for emotional support (e.g. discussing personal concerns or worries)? </b>", name: 'SACAI_Q4', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>5. How often do you use AI to appear more professional or knowledgeable in your communication with others?  </b>", name: 'SACAI_Q5', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>6. How often do you use AI to help with your online presence (e.g., curating social media captions, posts, comments, or dating profile)? </b>", name: 'SACAI_Q6', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true}, 
        {prompt: "<b>7. How often do you use AI for advice before making a decision? </b>", name: 'SACAI_Q7', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>8. How often do you use AI to accomplish a task for you? </b>", name: 'SACAI_Q8', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>9. How often do you use AI to explain concepts in different ways to improve your understanding?  </b>", name: 'SACAI_Q9', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>10. How often do you use AI help to help with writing, creativity, overcoming mental blocks, or brainstorming more generally? </b>", name: 'SACAI_Q10', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>11. How often does use AI to support your ability to learn and retain information (e.g., creating mnemonics, flash cards)? </b>", name: 'SACAI_Q11', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>12. How often do you use AI to practice and refine new skills (e.g., writing, art, coding, language learning)? </b>", name: 'SACAI_Q12', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
],
scale_width: 1300
}